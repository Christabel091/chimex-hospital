<template>
  <footer class="bg-chimex-dark text-white py-12">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- About Section -->
        <div>
          <h3 class="font-bold mb-4 flex items-center space-x-2">
            <span class="text-2xl">⚕️</span>
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
            <li>📞 {{ config.contact.phone }}</li>
            <li>💬 WhatsApp: {{ config.contact.whatsapp }}</li>
            <li>📧 {{ config.contact.email }}</li>
            <li>📍 {{ config.name }}, {{ config.address }}</li>
          </ul>
        </div>

        <!-- Social Media -->
        <div>
          <h4 class="font-bold mb-4">Follow Us</h4>
          <div class="flex space-x-4 text-xl">
            <a :href="config.contact.facebook" target="_blank" rel="noopener noreferrer" class="hover:text-chimex-blue transition">
              f
            </a>
            <a :href="config.contact.instagram" target="_blank" rel="noopener noreferrer" class="hover:text-chimex-blue transition">
              📷
            </a>
            <a :href="config.contact.linkedin" target="_blank" rel="noopener noreferrer" class="hover:text-chimex-blue transition">
              in
            </a>
            <a :href="config.contact.youtube" target="_blank" rel="noopener noreferrer" class="hover:text-chimex-blue transition">
              ▶️
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
