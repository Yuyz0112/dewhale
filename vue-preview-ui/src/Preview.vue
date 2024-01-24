<template>
  <main class="min-h-screen bg-gray-100 p-8">
    <section class="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold text-gray-800">Weather Forecast</h1>
        <Button variant="outline">Refresh</Button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Temperature</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="flex items-center space-x-2">
              <span class="text-5xl font-bold">23°C</span>
              <span class="text-sm text-gray-500">Feels like 25°C</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>UV Index</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="flex items-center space-x-2">
              <span class="text-5xl font-bold">5</span>
              <span class="text-sm text-gray-500">Moderate</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pollution</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="flex items-center space-x-2">
              <span class="text-5xl font-bold">AQI 80</span>
              <span class="text-sm text-gray-500">Moderate</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  </main>
</template>

<script setup>

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
</script>

<style>
/* Since we're not importing tailwind.css, we need to add some basic styles */
body {
  font-family: 'Inter', sans-serif;
}
</style>