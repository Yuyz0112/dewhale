<template>
  <main class="p-6">
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
    <Dialog>
      <DialogTrigger as="div" v-if="selectedMessage" />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{{ selectedMessage.title }}</DialogTitle>
          <DialogDescription>
            Sent by: {{ selectedMessage.sender }}
          </DialogDescription>
        </DialogHeader>
        <p>{{ selectedMessage.content }}</p>
        <DialogFooter>
          <Button variant="solid" @click="closeDetail">Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </main>
</template>

<script setup>

import { ref } from 'vue';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Sample data for messages
const messages = ref([
  { id: 1, title: 'System Update', time: '2023-03-15 10:00', content: 'Your system has been updated successfully.', sender: 'System Admin' },
  { id: 2, title: 'Welcome', time: '2023-03-14 09:30', content: 'Welcome to our service!', sender: 'Customer Support' },
  // ... more messages
]);

const selectedMessage = ref(null);

const viewMessage = (message) => {
  selectedMessage.value = message;
};

const deleteMessage = (id) => {
  messages.value = messages.value.filter((message) => message.id !== id);
};

const closeDetail = () => {
  selectedMessage.value = null;
};
</script>

<style>
/* Add any additional styles if needed */
</style>