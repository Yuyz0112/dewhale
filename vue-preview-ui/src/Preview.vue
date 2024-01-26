<template>
  <main class="p-8">
    <!-- Search Bar -->
    <div class="flex items-center space-x-4 mb-6">
      <Input placeholder="Search messages..." class="flex-1" />
      <Button variant="solid">Search</Button>
    </div>

    <!-- Messages List -->
    <div class="space-y-4">
      <div v-for="message in messages" :key="message.id" class="border rounded-lg p-4 flex justify-between items-center">
        <div>
          <h5 class="font-bold">{{ message.title }}</h5>
          <p class="text-sm text-gray-600">{{ message.time }}</p>
        </div>
        <div class="flex items-center space-x-2">
          <Button variant="outline" @click="viewMessage(message)">View</Button>
          <Button variant="outline" @click="deleteMessage(message.id)">Delete</Button>
        </div>
      </div>
    </div>

    <!-- Message Detail Dialog -->
    <Dialog v-model:open="isDialogOpen">
      <DialogTrigger as="template" />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{{ selectedMessage.title }}</DialogTitle>
          <DialogDescription>
            Sent on: {{ selectedMessage.time }} by {{ selectedMessage.sender }}
          </DialogDescription>
        </DialogHeader>
        <p class="py-4">{{ selectedMessage.content }}</p>
        <DialogFooter>
          <Button variant="solid" @click="closeMessageDetail">Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </main>
</template>

<script setup>

import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

// Sample data for messages
const messages = ref([
  { id: 1, title: 'Welcome to Vue', time: '2023-03-15 10:00', sender: 'System', content: 'Hello, welcome to Vue. We are glad you are here!' },
  { id: 2, title: 'Scheduled Maintenance', time: '2023-03-16 14:00', sender: 'Admin', content: 'We will be performing scheduled maintenance on our servers.' },
  // ... more messages
]);

const selectedMessage = ref({});
const isDialogOpen = ref(false);

const viewMessage = (message) => {
  selectedMessage.value = message;
  isDialogOpen.value = true; // Open the dialog
};

const deleteMessage = (id) => {
  messages.value = messages.value.filter((message) => message.id !== id);
};

const closeMessageDetail = () => {
  selectedMessage.value = {};
  isDialogOpen.value = false; // Close the dialog
};
</script>

<style>
/* Add any additional styles if needed */
</style>