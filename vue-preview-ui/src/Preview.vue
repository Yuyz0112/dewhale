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
          <Table>
            <TableCaption>Pods associated with the deployment</TableCaption>
            <TableHead>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Restarts</TableHead>
                <TableHead>Age</TableHead>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>example-pod-1</TableCell>
                <TableCell>Running</TableCell>
                <TableCell>0</TableCell>
                <TableCell>20m</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>example-pod-2</TableCell>
                <TableCell>Running</TableCell>
                <TableCell>1</TableCell>
                <TableCell>1h</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>example-pod-3</TableCell>
                <TableCell>Error</TableCell>
                <TableCell>3</TableCell>
                <TableCell>2h</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </TabsContent>
      <TabsContent value="events">
        <div class="bg-white shadow rounded-lg p-4">
          <Table>
            <TableCaption>Events related to the deployment</TableCaption>
            <TableHead>
              <TableRow>
                <TableHead>Time</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Message</TableHead>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>10m</TableCell>
                <TableCell>Normal</TableCell>
                <TableCell>Scheduled</TableCell>
                <TableCell>Successfully assigned default/example-pod-1 to node1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1h</TableCell>
                <TableCell>Warning</TableCell>
                <TableCell>BackOff</TableCell>
                <TableCell>Back-off restarting failed container</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2h</TableCell>
                <TableCell>Normal</TableCell>
                <TableCell>Started</TableCell>
                <TableCell>Started container with id abc123</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </TabsContent>
      <TabsContent value="metrics">
        <div class="bg-white shadow rounded-lg p-4">
          <!-- Placeholder for Nivo chart component -->
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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
</script>

<style>
/* Additional styles if needed */
</style>