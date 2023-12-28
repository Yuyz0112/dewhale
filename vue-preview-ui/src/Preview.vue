<template>
  <div class="container mx-auto p-6">
    <Card>
      <CardHeader>
        <CardTitle>Deployment Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <Label>Name:</Label>
            <p class="mt-1">my-deployment</p>
          </div>
          <div>
            <Label>Namespace:</Label>
            <p class="mt-1">default</p>
          </div>
          <div class="col-span-2">
            <Label>Labels:</Label>
            <div class="flex flex-wrap gap-2 mt-1">
              <Badge>app: my-app</Badge>
              <Badge>release: stable</Badge>
            </div>
          </div>
          <div class="col-span-2">
            <Label>Annotations:</Label>
            <div class="flex flex-wrap gap-2 mt-1">
              <Badge>description: My Kubernetes deployment</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    <Tabs default-value="pods" class="mt-6">
      <TabsList>
        <TabsTrigger value="pods">Pods</TabsTrigger>
        <TabsTrigger value="events">Events</TabsTrigger>
        <TabsTrigger value="metrics">Metrics</TabsTrigger>
      </TabsList>
      <TabsContent value="pods">
        <Table>
          <TableCaption>Pods List</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Restarts</TableHead>
              <TableHead>Age</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>my-deployment-pod-1</TableCell>
              <TableCell>Running</TableCell>
              <TableCell>0</TableCell>
              <TableCell>20m</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>my-deployment-pod-2</TableCell>
              <TableCell>Running</TableCell>
              <TableCell>1</TableCell>
              <TableCell>25m</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TabsContent>
      <TabsContent value="events">
        <Table>
          <TableCaption>Events List</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Last Seen</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Reason</TableHead>
              <TableHead>Object</TableHead>
              <TableHead>Message</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>2m</TableCell>
              <TableCell>Normal</TableCell>
              <TableCell>Scheduled</TableCell>
              <TableCell>Pod/my-deployment-pod-1</TableCell>
              <TableCell>Successfully assigned default/my-deployment-pod-1 to node1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1m</TableCell>
              <TableCell>Warning</TableCell>
              <TableCell>BackOff</TableCell>
              <TableCell>Pod/my-deployment-pod-2</TableCell>
              <TableCell>Back-off restarting failed container</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TabsContent>
      <TabsContent value="metrics">
        <!-- Metrics monitoring chart -->
        <div class="aspect-w-16 aspect-h-9">
          <!-- Replace this div with actual chart component when available -->
          <div class="bg-gray-200 rounded-lg flex items-center justify-center">
            <span class="text-gray-500">Metrics Chart Placeholder</span>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  </div>
</template>

<script setup>
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
</script>

<style scoped>
/* Ensure the aspect ratio utility works */
.aspect-w-16 {
  width: 100%;
}
.aspect-h-9 {
  padding-bottom: 56.25%;
}
</style>