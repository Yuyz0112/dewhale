<template>
  <div class="container mx-auto p-6">
    <div class="mb-6">
      <h1 class="text-2xl font-bold mb-2">Deployment Details</h1>
      <div class="bg-white shadow rounded-lg p-4">
        <h2 class="text-lg font-semibold">Metadata Information</h2>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <strong>Name:</strong> <span>example-deployment</span>
          </div>
          <div>
            <strong>Namespace:</strong> <span>default</span>
          </div>
          <div>
            <strong>Labels:</strong>
            <ul>
              <li>app: example</li>
              <li>tier: frontend</li>
            </ul>
          </div>
          <div>
            <strong>Annotations:</strong>
            <ul>
              <li>kubernetes.io/change-cause: "Updated to v2"</li>
              <li>deployment.kubernetes.io/revision: "2"</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <Tabs default-value="pods" class="mb-6">
      <TabsList>
        <TabsTrigger value="pods">Pods</TabsTrigger>
        <TabsTrigger value="events">Events</TabsTrigger>
        <TabsTrigger value="metrics">Metrics</TabsTrigger>
      </TabsList>
      <TabsContent value="pods">
        <div class="bg-white shadow rounded-lg p-4">
          <!-- Pod list would be dynamically generated here -->
          <ul>
            <li>Pod 1</li>
            <li>Pod 2</li>
            <li>Pod 3</li>
          </ul>
        </div>
      </TabsContent>
      <TabsContent value="events">
        <div class="bg-white shadow rounded-lg p-4">
          <!-- Event list would be dynamically generated here -->
          <ul>
            <li>Event 1</li>
            <li>Event 2</li>
            <li>Event 3</li>
          </ul>
        </div>
      </TabsContent>
      <TabsContent value="metrics">
        <div class="bg-white shadow rounded-lg p-4">
          <!-- Metrics chart would be dynamically generated here -->
          <div class="h-64">
            <!-- Placeholder for chart component -->
            <div class="w-full h-full bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  </div>
</template>

<script setup>

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
</script>

<style>
/* Additional styles if needed */
</style>