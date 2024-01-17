<template>
  <div class="flex flex-col items-center justify-center h-screen bg-blue-200">
    <div class="text-center">
      <div class="text-2xl text-gray-700 mb-4">番茄钟计时器</div>
      <div class="text-6xl font-bold text-gray-800 mb-8">
        {{ formattedTime }}
      </div>
      <div class="flex space-x-4">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          @click="startTimer"
          v-if="!timerRunning"
        >
          开始
        </button>
        <button
          class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          @click="pauseTimer"
          v-else
        >
          暂停
        </button>
        <button
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          @click="resetTimer"
        >
          重置
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, computed, onMounted, onUnmounted } from 'vue';

const defaultTime = 25 * 60; // 25 minutes
const timeLeft = ref(defaultTime);
const timerRunning = ref(false);
let intervalId = null;

const startTimer = () => {
  if (!timerRunning.value) {
    timerRunning.value = true;
    intervalId = setInterval(() => {
      if (timeLeft.value > 0) {
        timeLeft.value--;
      } else {
        resetTimer();
        alert('时间到！');
      }
    }, 1000);
  }
};

const pauseTimer = () => {
  if (timerRunning.value) {
    timerRunning.value = false;
    clearInterval(intervalId);
  }
};

const resetTimer = () => {
  timerRunning.value = false;
  timeLeft.value = defaultTime;
  clearInterval(intervalId);
};

const formattedTime = computed(() => {
  const minutes = Math.floor(timeLeft.value / 60);
  const seconds = timeLeft.value % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
});

onMounted(() => {
  document.title = '番茄钟计时器';
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style>
/* Add any additional styles if needed */
</style>