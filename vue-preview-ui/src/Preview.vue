<template>
  <main class="bg-gray-900 text-white">
    <section class="relative">
      <img
        src="https://images.unsplash.com/photo-1542223616-740d5dff7f56?w=2048&q=80"
        alt="Aerial view of a city"
        class="w-full h-96 object-cover"
      />
      <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center space-y-4">
        <h1 class="text-4xl font-bold">Empower Your Blockchain Journey</h1>
        <p class="max-w-2xl mx-auto">
          Revolutionary connectivity with LA's premier web3 infrastructure provider.
        </p>
        <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Discover More
        </button>
      </div>
    </section>

    <section class="py-12 px-4">
      <div class="max-w-6xl mx-auto">
        <p class="text-lg">
          Introducing OneBlock, a leading web3 infrastructure provider based in Los Angeles, California. Our team is dedicated to revolutionizing the digital landscape by offering cutting-edge solutions for businesses looking to thrive in the decentralized web environment. With our expertise and innovative approach, we empower organizations to harness the full potential of blockchain technology and build a strong foundation for the future. Partner with OneBlock and stay ahead in the ever-evolving web3 space.
        </p>
      </div>
    </section>

    <section class="py-12 px-4 bg-gray-800">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="space-y-2">
          <img
            src="https://images.unsplash.com/photo-1612831660293-4ee35e6b7c9e?w=500&q=80"
            alt="Decentralized Data Storage"
            class="w-full h-48 object-cover rounded-md"
          />
          <h3 class="text-xl font-semibold">Decentralized Data Storage</h3>
          <p>
            Secure and scalable solutions to store large volumes of data in a decentralized, privacy-preserving way.
          </p>
        </div>
        <div class="space-y-2">
          <img
            src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=500&q=80"
            alt="Blockchain Integration"
            class="w-full h-48 object-cover rounded-md"
          />
          <h3 class="text-xl font-semibold">Blockchain Integration</h3>
          <p>
            Tailored blockchain solutions to seamlessly integrate with your existing systems and processes.
          </p>
        </div>
        <div class="space-y-2">
          <img
            src="https://images.unsplash.com/photo-1612832025000-5f6b59e539e3?w=500&q=80"
            alt="Smart Contract Development"
            class="w-full h-48 object-cover rounded-md"
          />
          <h3 class="text-xl font-semibold">Smart Contract Development</h3>
          <p>
            Custom smart contract development to automate and enforce agreements without the need for intermediaries.
          </p>
        </div>
      </div>
    </section>

    <section class="py-12 px-4">
      <h2 class="text-3xl font-bold mb-6">Projects</h2>
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Repeat this block for each project -->
        <div class="space-y-2">
          <img
            src="https://images.unsplash.com/photo-1506702315536-dbdf8fdbb308?w=500&q=80"
            alt="Project Image"
            class="w-full h-48 object-cover rounded-md"
          />
          <h3 class="text-xl font-semibold">Blockchain-Based Web3 Platform</h3>
          <p>
            Developed a blockchain-based web3 infrastructure platform for cross-border transactions, enabling secure and transparent operations.
          </p>
        </div>
        <!-- ... -->
      </div>
    </section>

    <section class="py-12 px-4 bg-gray-800">
      <h2 class="text-3xl font-bold mb-6 text-center">Our Clients</h2>
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Repeat this block for each client -->
        <img
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&q=80"
          alt="Client Image"
          class="w-full h-48 object-cover rounded-md"
        />
        <!-- ... -->
      </div>
    </section>

    <section class="py-12 px-4">
      <h2 class="text-3xl font-bold mb-6">About us</h2>
      <div class="max-w-6xl mx-auto">
        <p class="text-lg mb-6">
          OneBlock is a leading web3 infrastructure company based in China. We specialize in providing cutting-edge solutions for the evolving digital landscape. Our team is dedicated to delivering top-notch services and empowering businesses to thrive in a web3 environment. With a focus on innovation and excellence, we are committed to driving the future of web3 infrastructure forward.
        </p>
        <h3 class="text-2xl font-bold mb-4">Contact Us Now</h3>
        <form class="space-y-4">
          <input
            type="text"
            placeholder="Name"
            class="w-full p-2 rounded-md bg-gray-700 text-white"
          />
          <input
            type="email"
            placeholder="Email"
            class="w-full p-2 rounded-md bg-gray-700 text-white"
          />
          <textarea
            placeholder="Message"
            class="w-full p-2 rounded-md bg-gray-700 text-white h-32"
          ></textarea>
          <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Send
          </button>
        </form>
      </div>
    </section>

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
/* Scoped styles if necessary */
</style>