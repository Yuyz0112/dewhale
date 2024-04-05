<template>
  <main class="bg-gray-100 p-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-3xl font-bold mb-6">Kubernetes Log Viewer</h1>
      <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
        <div class="px-4 py-5 sm:px-6 flex justify-between items-center">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Select Namespace and Pod
          </h3>
          <Button variant="solid" @click="fetchLogs">Refresh Logs</Button>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select v-model="selectedNamespace" @change="fetchPods">
              <SelectTrigger>
                <SelectValue placeholder="Select Namespace" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup v-for="namespace in namespaces" :key="namespace">
                  <SelectItem :value="namespace">{{ namespace }}</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select v-model="selectedPod" @change="fetchContainers">
              <SelectTrigger>
                <SelectValue placeholder="Select Pod" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup v-for="pod in pods" :key="pod">
                  <SelectItem :value="pod">{{ pod }}</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select v-model="selectedContainer">
              <SelectTrigger>
                <SelectValue placeholder="Select Container" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup v-for="container in containers" :key="container">
                  <SelectItem :value="container">{{ container }}</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div class="mt-6">
        <ScrollArea class="h-[500px] bg-white p-4 shadow rounded-lg">
          <pre v-if="logs.length" class="text-sm leading-snug text-gray-800">
            <!-- Log content will be displayed here -->
            <div v-for="log in logs" :key="log.timestamp">
              [{{ log.timestamp }}] {{ log.level }}: {{ log.message }}
            </div>
          </pre>
          <div v-else class="text-sm leading-snug text-gray-800">
            No logs available.
          </div>
        </ScrollArea>
      </div>
    </div>
  </main>
</template>

<script setup>

import { ref, watch } from 'vue';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const selectedNamespace = ref('');
const selectedPod = ref('');
const selectedContainer = ref('');
const namespaces = ref([]);
const pods = ref([]);
const containers = ref([]);
const logs = ref([]);

const fetchNamespaces = async () => {
  try {
    const response = await fetch(`https://192.168.1.2:6443/api/v1/namespaces`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      mode: 'cors',
      credentials: 'include',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    namespaces.value = data.items.map(item => item.metadata.name);
  } catch (error) {
    console.error('Error fetching namespaces:', error);
  }
};

const fetchPods = async () => {
  if (!selectedNamespace.value) return;
  try {
    const response = await fetch(`https://192.168.1.2:6443/api/v1/namespaces/${selectedNamespace.value}/pods`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      mode: 'cors',
      credentials: 'include',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    pods.value = data.items.map(item => item.metadata.name);
  } catch (error) {
    console.error('Error fetching pods:', error);
  }
};

const fetchContainers = async () => {
  if (!selectedPod.value) return;
  try {
    const response = await fetch(`https://192.168.1.2:6443/api/v1/namespaces/${selectedNamespace.value}/pods/${selectedPod.value}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      mode: 'cors',
      credentials: 'include',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    containers.value = data.spec.containers.map(container => container.name);
  } catch (error) {
    console.error('Error fetching containers:', error);
  }
};

const fetchLogs = async () => {
  if (!selectedNamespace.value || !selectedPod.value || !selectedContainer.value) return;
  try {
    const response = await fetch(`https://192.168.1.2:6443/api/v1/namespaces/${selectedNamespace.value}/pods/${selectedPod.value}/log?container=${selectedContainer.value}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      mode: 'cors',
      credentials: 'include',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const logData = await response.text();
    const logLines = logData.split('\n');
    logs.value = logLines.map(line => {
      const [timestamp, level, ...messageParts] = line.split(' ');
      return {
        timestamp,
        level: level.replace(/:/g, ''),
        message: messageParts.join(' '),
      };
    });
  } catch (error) {
    console.error('Error fetching logs:', error);
  }
};

watch(selectedNamespace, () => {
  selectedPod.value = '';
  selectedContainer.value = '';
  pods.value = [];
  containers.value = [];
  logs.value = [];
  fetchPods();
});

watch(selectedPod, () => {
  selectedContainer.value = '';
  containers.value = [];
  logs.value = [];
  fetchContainers();
});

fetchNamespaces();
</script>

<style>
/* Additional styles if needed */
</style>