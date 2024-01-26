<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-100 p-6">
      <nav>
        <ul>
          <li class="mb-4">
            <Button variant="solid">我的课程</Button>
          </li>
          <li class="mb-4">
            <Button variant="outline">我的学习</Button>
          </li>
          <!-- Add more sidebar items here -->
        </ul>
      </nav>
    </aside>

    <!-- Main content -->
    <main class="flex-1 overflow-auto">
      <!-- Top bar -->
      <div class="flex items-center justify-between bg-white p-4 shadow">
        <Input placeholder="搜索课程" class="flex-1 mr-4" />
        <Avatar>
          <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>

      <!-- Cards grid -->
      <div class="p-6 grid grid-cols-3 gap-6">
        <!-- Generate cards dynamically -->
        <Card v-for="course in courses" :key="course.id" class="bg-gradient-to-br from-purple-400 to-purple-600 p-4 rounded-lg shadow-md">
          <CardHeader>
            <CardTitle class="text-white">{{ course.title }}</CardTitle>
            <CardDescription class="text-white">{{ course.year }}</CardDescription>
          </CardHeader>
          <CardContent class="flex items-center justify-between mt-4">
            <div class="text-white">{{ course.likes }} likes</div>
            <Button variant="light">查看</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

import { ref } from 'vue';

// Example data for courses
const courses = ref([
  { id: 1, title: '远程控制', year: '2022-2023学年', likes: 5 },
  { id: 2, title: 'Java 基础', year: '2022-2023学年', likes: 1 },
  // Add more course data here
]);
</script>

<style>
/* Add custom styles if needed */
</style>