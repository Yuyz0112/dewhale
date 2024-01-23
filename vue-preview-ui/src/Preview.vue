<template>
  <main class="bg-gray-100">
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">
          飞猪酒店开放平台
        </h1>
      </div>
    </header>
    <div class="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
      <!-- Hero section -->
      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <AspectRatio :ratio="16 / 9">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&dpr=2&q=80"
              alt="Hotel"
              class="rounded-md object-cover"
            />
          </AspectRatio>
        </div>
      </div>

      <!-- Features section -->
      <div class="mt-10">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <!-- Feature 1 -->
          <Card>
            <CardHeader>
              <CardTitle>全面接入</CardTitle>
            </CardHeader>
            <CardContent>
              提供完整的酒店预订解决方案，支持多种接入方式，满足不同商家需求。
            </CardContent>
          </Card>

          <!-- Feature 2 -->
          <Card>
            <CardHeader>
              <CardTitle>数据分析</CardTitle>
            </CardHeader>
            <CardContent>
              强大的数据分析工具，帮助商家洞察市场趋势，优化营销策略。
            </CardContent>
          </Card>

          <!-- Feature 3 -->
          <Card>
            <CardHeader>
              <CardTitle>营销推广</CardTitle>
            </CardHeader>
            <CardContent>
              提供多样化的营销工具，助力商家提升品牌知名度和预订量。
            </CardContent>
          </Card>

          <!-- Feature 4 -->
          <Card>
            <CardHeader>
              <CardTitle>技术支持</CardTitle>
            </CardHeader>
            <CardContent>
              专业的技术团队提供7*24小时技术支持，确保平台稳定运行。
            </CardContent>
          </Card>
        </div>
      </div>

      <!-- CTA section -->
      <div class="mt-10">
        <Card>
          <CardHeader>
            <CardTitle>立即加入我们</CardTitle>
          </CardHeader>
          <CardContent>
            开启您的酒店业务新篇章，享受高效、便捷的酒店管理体验。
          </CardContent>
          <CardFooter>
            <Button variant="solid" class="bg-blue-600 text-white">立即注册</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  </main>
</template>

<script setup>

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
</script>

<style>
/* Since we are not importing tailwind.css, we need to add some basic styles */
body {
  font-family: 'Inter', sans-serif;
}
</style>