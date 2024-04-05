<template>
  <main class="bg-gray-100 p-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-3xl font-bold mb-6">Kubernetes Log Viewer</h1>
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6 flex justify-between items-center">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Pod Logs
          </h3>
          <Button variant="solid" @click="fetchLogs">Refresh Logs</Button>
        </div>
        <div class="border-t border-gray-200">
          <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Namespace
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ namespace }}
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Pod Name
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ podName }}
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Container
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ containerName }}
              </dd>
            </div>
          </dl>
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

import { ref, onMounted } from 'vue';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const namespace = ref('default');
const podName = ref('example-pod');
const containerName = ref('example-container');
const logs = ref([]);

const fetchLogs = async () => {
  try {
    const response = await fetch(`https://192.168.1.2:6443/api/v1/namespaces/${namespace.value}/pods/${podName.value}/log?container=${containerName.value}`, {
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

onMounted(fetchLogs);
</script>

<style>
/* Additional styles if needed */
</style>