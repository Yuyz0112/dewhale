<template>
  <div class="bg-gray-900 min-h-screen p-4">
    <div class="bg-gray-800 text-white rounded-lg max-w-4xl mx-auto">
      <div class="flex items-center justify-between p-4 border-b border-gray-700">
        <div class="flex space-x-2">
          <div class="w-3 h-3 bg-red-500 rounded-full"></div>
          <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div class="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div class="text-sm">user@localhost: ~</div>
      </div>
      <div class="p-4">
        <div class="flex items-center space-x-2">
          <span class="text-green-500">➜</span>
          <span class="text-blue-500">~</span>
          <input
            type="text"
            class="bg-transparent focus:outline-none w-full"
            placeholder="Type your command..."
          />
        </div>
        <div class="mt-4 space-y-2">
          <!-- Command output simulation -->
          <div class="text-gray-400">Last login: Tue Mar 23 21:22:09 on ttys000</div>
          <div class="text-gray-400">user@localhost:~$ ls</div>
          <div class="text-gray-200">Applications Documents Desktop Downloads</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const commandHistory = ref([
  { command: 'ls', output: ['Applications', 'Documents', 'Desktop', 'Downloads'] },
  // Add more command history as needed
]);

const currentCommand = ref('');

const runCommand = () => {
  // Here you would handle the command execution logic
  // For now, we just add it to the history
  commandHistory.value.push({
    command: currentCommand.value,
    output: ['Command executed!'] // Replace with actual command output
  });
  currentCommand.value = ''; // Clear the input after running the command
};
</script>

<style scoped>
input::placeholder {
  color: #6b7280; /* Tailwind's gray-500 */
}
</style>