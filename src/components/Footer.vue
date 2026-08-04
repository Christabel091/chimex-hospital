<template>
  <footer class="bg-chimex-dark text-white py-12">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- About Section -->
        <div>
          <h3 class="font-bold mb-4 flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-chimex-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M12 2v20"></path>
              <path d="M8 6h8"></path>
              <path d="M9 12h6"></path>
              <path d="M10 18h4"></path>
            </svg>
            <span>Chimex Hospital</span>
          </h3>
          <p class="text-gray-300 text-sm">
            Providing expert sickle cell care in Nnewi, Nigeria
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-bold mb-4">Quick Links</h4>
          <ul class="space-y-2 text-gray-300 text-sm">
            <li><router-link to="/" class="hover:text-chimex-red transition">Home</router-link></li>
            <li><router-link to="/about" class="hover:text-chimex-red transition">About Us</router-link></li>
            <li><router-link to="/program" class="hover:text-chimex-red transition">Program</router-link></li>
            <li><router-link to="/donate" class="hover:text-chimex-red transition">Support</router-link></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="font-bold mb-4">Contact</h4>
          <ul class="space-y-2 text-gray-300 text-sm">
            <li class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-chimex-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72 13 13 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.1 10.91a16 16 0 0 0 4 4l1.27-1.21a2 2 0 0 1 2.11-.45 13 13 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>{{ config.contact.phone }}</span>
            </li>
            <li class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-chimex-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12a9 9 0 1 1-15.5-6.32"></path><path d="M8.5 8.5A5 5 0 0 0 16 15"></path><path d="M17.5 6.5l-6 6"></path><path d="M17.5 10.5v-4h-4"></path></svg>
              <span>WhatsApp: {{ config.contact.whatsapp }}</span>
            </li>
            <li class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-chimex-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16v16H4z"></path><path d="m22 6-10 7L2 6"></path></svg>
              <span>{{ config.contact.email }}</span>
            </li>
            <li v-if="config.contact.secondaryEmail" class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-chimex-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16v16H4z"></path><path d="m22 6-10 7L2 6"></path></svg>
              <span>{{ config.contact.secondaryEmail }}</span>
            </li>
            <li class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-chimex-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 22s8-4.5 8-12a8 8 0 1 0-16 0c0 7.5 8 12 8 12z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>{{ config.name }}, {{ config.address }}</span>
            </li>
          </ul>
        </div>

        <!-- Social Media -->
        <div>
          <h4 class="font-bold mb-4">Follow Us</h4>
          <div class="flex space-x-4 text-xl">
            <a :href="config.contact.facebook" target="_blank" rel="noopener noreferrer" class="hover:text-chimex-red transition">
              <span class="sr-only">Facebook</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V4.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.3V11H8v3h2.2v8h3.3z"/></svg>
            </a>
            <a :href="config.contact.instagram" target="_blank" rel="noopener noreferrer" class="hover:text-chimex-red transition">
              <span class="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1"></circle></svg>
            </a>
            <a :href="config.contact.linkedin" target="_blank" rel="noopener noreferrer" class="hover:text-chimex-red transition">
              <span class="sr-only">LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.94 8.5a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44zM5.5 9.75h2.9V19h-2.9V9.75zM10.2 9.75h2.8v1.26h.04c.39-.74 1.35-1.52 2.78-1.52 2.98 0 3.53 1.96 3.53 4.5V19h-2.9v-4.42c0-1.05-.02-2.41-1.47-2.41-1.47 0-1.7 1.15-1.7 2.34V19h-2.9V9.75z"/></svg>
            </a>
            <a :href="config.contact.youtube" target="_blank" rel="noopener noreferrer" class="hover:text-chimex-red transition">
              <span class="sr-only">YouTube</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 12s0-3.8-.5-5.6a2.9 2.9 0 0 0-2-2C18.7 4 12 4 12 4s-6.7 0-8.5.4a2.9 2.9 0 0 0-2 2C1 8.2 1 12 1 12s0 3.8.5 5.6a2.9 2.9 0 0 0 2 2C5.3 20 12 20 12 20s6.7 0 8.5-.4a2.9 2.9 0 0 0 2-2C23 15.8 23 12 23 12zM10 15.5v-7l6 3.5-6 3.5z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <hr class="border-gray-700 mb-8">

      <!-- Bottom Footer -->
      <div class="text-center text-gray-300 text-sm">
        <p>&copy; 2024 {{ config.name }}. All rights reserved. | Privacy Policy | Terms of Service</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { hospitalConfig as config } from '../constants/config'

export default {
  name: 'Footer',
  data() {
    return {
      config,
    }
  },
}
</script>
