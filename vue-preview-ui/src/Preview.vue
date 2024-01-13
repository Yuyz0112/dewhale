<template>
  <div class="flex justify-center items-center h-screen">
    <canvas ref="canvas" class="border" width="600" height="400"></canvas>
  </div>
</template>

<script setup>

import { onMounted, ref } from 'vue';

const canvas = ref(null);
let ctx;
let requestId;
let x = 0;
let y = 0;
let dx = 2;
let dy = 2;

const draw = () => {
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
  if (x + dx > canvas.value.width || x + dx < 0) dx = -dx;
  if (y + dy > canvas.value.height || y + dy < 0) dy = -dy;
  x += dx;
  y += dy;
};

const animate = () => {
  draw();
  requestId = requestAnimationFrame(animate);
};

onMounted(() => {
  ctx = canvas.value.getContext('2d');
  animate();
});

</script>

<style scoped>
canvas {
  background-color: #f3f3f3;
}
</style>