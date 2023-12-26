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
            v-model="currentCommand"
            @keyup.enter="runCommand"
            type="text"
            class="bg-transparent focus:outline-none w-full"
            placeholder="Type your command..."
          />
        </div>
        <div class="mt-4 space-y-2">
          <!-- Command output simulation -->
          <div v-for="(entry, index) in commandHistory" :key="index" class="space-y-2">
            <div class="text-gray-400">{{ entry.command }}</div>
            <div v-if="Array.isArray(entry.output)" class="text-gray-200">
              <div v-for="(line, lineIndex) in entry.output" :key="lineIndex">{{ line }}</div>
            </div>
            <div v-else class="text-gray-200">{{ entry.output }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const commandHistory = ref([
  { command: 'Last login: Tue Mar 23 21:22:09 on ttys000', output: '' },
  // The initial command history now includes the 'vite build' command
  { command: 'user@localhost:~$ vite build', output: 'Building for production...' },
  // Add more command history as needed
]);

const currentCommand = ref('');

const runCommand = () => {
  // Here you would handle the command execution logic
  // For now, we just simulate the output for 'vite build'
  let output = '';
  if (currentCommand.value === 'vite build') {
    output = 'Building for production...';
  } else {
    output = `Command '${currentCommand.value}' not found`;
  }

  commandHistory.value.push({
    command: `user@localhost:~$ ${currentCommand.value}`,
    output: output
  });
  currentCommand.value = ''; // Clear the input after running the command
};
</script>

<style scoped>
input::placeholder {
  color: #6b7280; /* Tailwind's gray-500 */
}
</style>