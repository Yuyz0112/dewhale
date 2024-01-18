<template>
  <div class="flex items-center justify-center h-screen bg-gray-800">
    <div class="flex items-center space-x-8">
      <!-- Left Digital Clock Display -->
      <div class="text-6xl font-mono text-red-600">
        {{ formattedTime }}
      </div>

      <!-- Analog Clock Display -->
      <div class="relative flex h-48 w-48 items-center justify-center rounded-full border-4 border-white">
        <div
          class="absolute left-1/2 top-1/2 h-0.5 w-20 -translate-x-1/2 -translate-y-1/2 bg-white"
          :style="{ transform: `rotate(${minutesAngle}deg)` }"
        ></div>
        <div
          class="absolute left-1/2 top-1/2 h-0.5 w-16 -translate-x-1/2 -translate-y-1/2 bg-white"
          :style="{ transform: `rotate(${secondsAngle}deg)` }"
        ></div>
      </div>

      <!-- Right Digital Clock Display -->
      <div class="text-6xl font-mono text-red-600">
        {{ formattedTime }}
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, computed, onMounted, onUnmounted } from 'vue';

const totalSeconds = ref(720); // 12 minutes for example
const intervalId = ref(null);

const updateTime = () => {
  if (totalSeconds.value > 0) {
    totalSeconds.value--;
  } else {
    clearInterval(intervalId.value);
  }
};

onMounted(() => {
  intervalId.value = setInterval(updateTime, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId.value);
});

const formattedTime = computed(() => {
  const minutes = Math.floor(totalSeconds.value / 60);
  const seconds = totalSeconds.value % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
});

const minutesAngle = computed(() => (360 * (totalSeconds.value % 3600)) / 3600);
const secondsAngle = computed(() => (360 * totalSeconds.value) / 60);
</script>

<style scoped>
/* Additional styles can be placed here if needed */
</style>