<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <nav class="flex justify-between">
          <div class="flex space-x-4">
            <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">Loan Process</a>
            <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">Advantage</a>
          </div>
          <a href="#" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">Download</a>
        </nav>
      </div>
    </header>

    <main class="flex-grow">
      <section class="relative">
        <AspectRatio class="w-full" :ratio="16 / 9">
          <div class="absolute inset-0 bg-gray-300 flex justify-center items-center">
            <span class="text-6xl text-gray-500">placeholder</span>
          </div>
        </AspectRatio>
      </section>

      <section class="py-12 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-extrabold text-gray-900 mb-8">Loan Process</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Installation and registration</CardTitle>
              </CardHeader>
              <CardContent>
                Download App from Google Play Sign up with your mobile number
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Fill in the information</CardTitle>
              </CardHeader>
              <CardContent>
                Enter basic information, job information, contact information, identity information
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Apply for a loan</CardTitle>
              </CardHeader>
              <CardContent>
                Select loan amount, number of days
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Funds received</CardTitle>
              </CardHeader>
              <CardContent>
                We will release funds within 1 day
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section class="py-12 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-extrabold text-gray-900 mb-8">Advantage</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-gray-300 h-64 flex justify-center items-center">
              <span class="text-6xl text-gray-500">placeholder</span>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Product Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul class="list-disc pl-5 space-y-2">
                    <li>Access up to UGX 1,000,000</li>
                    <li>Flexible Loan Terms: 91-121 Days</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Loan Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul class="list-disc pl-5 space-y-2">
                    <li>Age Requirement: 18 and Above</li>
                    <li>Valid Identification Document</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Simple Loan Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul class="list-disc pl-5 space-y-2">
                    <li>Download Our User-Friendly App</li>
                    <li>Complete Your Profile in 3 Minutes</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-green-600">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center text-white">
          <span>© 2024 All Rights Reserved by</span>
          <div>
            <span>Customer Service Hotline: 0707748043</span>
            <span class="ml-4">Email address: xxxxx@20gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>

import { AspectRatio } from "@/components/ui/aspect-ratio";
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
  margin: 0;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}
</style>