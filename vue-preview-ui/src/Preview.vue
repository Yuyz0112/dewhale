<template>
  <main class="bg-gray-900 text-white overflow-hidden">
    <section class="relative">
      <img
        src="https://images.unsplash.com/photo-1542223616-740d5dff7f56?w=2048&q=80"
        alt="Aerial view of a city"
        class="w-full h-96 object-cover parallax"
      />
      <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center space-y-4">
        <h1 class="text-4xl font-bold animate-fadeIn">Empower Your Blockchain Journey</h1>
        <p class="max-w-2xl mx-auto animate-fadeIn delay-150">
          Revolutionary connectivity with LA's premier web3 infrastructure provider.
        </p>
        <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded animate-fadeIn delay-300">
          Discover More
        </button>
      </div>
    </section>

    <!-- ... other sections remain unchanged ... -->

    <footer class="py-4 bg-gray-800 text-center">
      <p>&copy; OneBlock</p>
      <p>Made with <span class="text-red-500">&hearts;</span> by Durable</p>
    </footer>
  </main>
</template>

<script setup>

// No additional script is needed for this static page
</script>

<style scoped>
/* Parallax effect */
.parallax {
  transition: transform 0.3s ease-out;
}

/* Fade-in animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeIn {
  animation: fadeIn 1s ease forwards;
}
.animate-fadeIn.delay-150 {
  animation-delay: 0.15s;
}
.animate-fadeIn.delay-300 {
  animation-delay: 0.3s;
}

/* Add the parallax scrolling effect */
@keyframes parallaxScroll {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-20%);
  }
}
.parallax {
  animation: parallaxScroll 1s ease forwards;
}

/* Scoped styles if necessary */
</style>