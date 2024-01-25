<template>
  <div class="flex h-screen">
    <!-- Contact List -->
    <aside class="w-1/4 bg-gray-100 p-4 overflow-y-auto">
      <ul>
        <li v-for="contact in contacts" :key="contact.id" class="p-2 hover:bg-gray-200 cursor-pointer">
          <div class="flex items-center space-x-3">
            <Avatar>
              <AvatarImage :src="contact.avatar" />
              <AvatarFallback>{{ contact.initials }}</AvatarFallback>
            </Avatar>
            <div>
              <div class="font-semibold">{{ contact.name }}</div>
              <div class="text-sm text-gray-600">{{ contact.lastMessage }}</div>
            </div>
          </div>
        </li>
      </ul>
    </aside>

    <!-- Chat Window -->
    <main class="w-3/4 p-4">
      <div v-if="selectedContact" class="flex flex-col h-full">
        <div class="mb-4">
          <div class="text-lg font-semibold">{{ selectedContact.name }}</div>
          <div class="text-sm text-gray-500">Last seen {{ selectedContact.lastSeen }}</div>
        </div>
        <div class="flex-1 overflow-y-auto">
          <div v-for="message in selectedContact.messages" :key="message.id" class="p-2 my-1" :class="{'self-end bg-blue-100': message.isOwn, 'bg-gray-100': !message.isOwn}">
            <div>{{ message.content }}</div>
            <div class="text-right text-xs text-gray-500">{{ message.time }}</div>
          </div>
        </div>
        <div class="mt-4">
          <Input placeholder="Type a message..." />
        </div>
      </div>
      <div v-else class="flex items-center justify-center h-full">
        <div class="text-gray-500">Select a contact to start chatting</div>
      </div>
    </main>
  </div>
</template>

<script setup>

import { ref } from 'vue';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';

const contacts = [
  {
    id: 1,
    name: 'Alice Freeman',
    avatar: 'https://images.unsplash.com/photo-1594745561169-eb2e4c7a4a0e',
    initials: 'AF',
    lastMessage: 'See you tomorrow!',
    lastSeen: '10m ago',
    messages: [
      { id: 1, content: 'Hey, how are you?', time: '10:30 AM', isOwn: false },
      { id: 2, content: 'I am fine, thanks!', time: '10:32 AM', isOwn: true },
      { id: 3, content: 'See you tomorrow!', time: '10:35 AM', isOwn: false },
    ],
  },
  // ... more contacts
];

const selectedContact = ref(null);
</script>

<style>
.self-end {
  align-self: flex-end;
}
</style>