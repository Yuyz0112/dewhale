<template>
  <div class="flex h-screen">
    <!-- Contact List -->
    <aside class="w-1/4 bg-blue-100 p-4 overflow-y-auto">
      <ul class="space-y-2">
        <li v-for="contact in contacts" :key="contact.id" class="bg-blue-200 p-3 rounded-lg">
          <div class="flex items-center space-x-3">
            <Avatar>
              <AvatarImage :src="contact.avatar" />
              <AvatarFallback>{{ contact.initials }}</AvatarFallback>
            </Avatar>
            <div>
              <h3 class="font-semibold">{{ contact.name }}</h3>
              <p class="text-sm text-blue-800">{{ contact.lastMessage }}</p>
            </div>
          </div>
        </li>
      </ul>
    </aside>

    <!-- Chat Window -->
    <main class="w-3/4 bg-blue-50 p-4 flex flex-col">
      <div class="flex-1 overflow-y-auto">
        <ul class="space-y-4">
          <li v-for="message in messages" :key="message.id" class="flex" :class="{'justify-end': message.isOwn}">
            <div class="max-w-xs bg-blue-200 p-3 rounded-lg">
              <p>{{ message.content }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="mt-4">
        <Input placeholder="Type a message..." class="w-full p-2 rounded-lg border-2 border-blue-300" />
      </div>
    </main>
  </div>
</template>

<script setup>

import { ref } from 'vue';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';

const contacts = [
  { id: 1, name: 'Alice Freeman', avatar: 'https://images.unsplash.com/photo-1613398757483-8ab9e1f7a8f5', lastMessage: 'How is the weather?', initials: 'AF' },
  // ... 9 more contacts
];

const messages = [
  { id: 1, content: 'Hi, how is the weather today?', isOwn: true },
  { id: 2, content: 'Hello! It looks sunny.', isOwn: false },
  // ... 18 more messages
];
</script>

<style>
/* Additional styles can be placed here */
</style>