<template>
  <main class="bg-gray-100 p-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-3xl font-bold mb-6">Kubernetes Log Viewer</h1>
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6 flex justify-between items-center">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Pod Logs
          </h3>
          <Button variant="solid">Refresh Logs</Button>
        </div>
        <div class="border-t border-gray-200">
          <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Namespace
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                default
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Pod Name
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                example-pod
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Container
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                example-container
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div class="mt-6">
        <ScrollArea class="h-[500px] bg-white p-4 shadow rounded-lg">
          <pre class="text-sm leading-snug text-gray-800">
            <!-- Log content will be displayed here -->
            [2023-03-15 10:00:00] INFO: Starting application...
            [2023-03-15 10:01:00] WARN: Low memory warning...
            [2023-03-15 10:02:00] ERROR: Connection timed out.
            [2023-03-15 10:03:00] INFO: Reconnecting...
            [2023-03-15 10:04:00] INFO: Application running.
            <!-- ... -->
          </pre>
        </ScrollArea>
      </div>
    </div>
  </main>
</template>

<script setup>

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
</script>

<style>
/* Additional styles if needed */
</style>