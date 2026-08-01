<template>
  <nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="flex items-center space-x-2">
        <div class="w-10 h-10 bg-chimex-red rounded-full flex items-center justify-center">
          <span class="text-white font-bold text-lg">⚕️</span>
        </div>
        <div>
          <div class="font-bold text-chimex-dark">Chimex Hospital</div>
          <div class="text-xs text-gray-600">Sickle Cell Care</div>
        </div>
      </router-link>

      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-8 items-center">
        <router-link to="/" class="text-gray-700 hover:text-chimex-red transition">Home</router-link>
        <router-link to="/about" class="text-gray-700 hover:text-chimex-red transition">About Us</router-link>
        <router-link to="/program" class="text-gray-700 hover:text-chimex-red transition">Program</router-link>
        <router-link to="/donate" class="text-gray-700 hover:text-chimex-red transition">Support Us</router-link>
        <router-link to="/contact" class="text-gray-700 hover:text-chimex-red transition">Contact</router-link>
        <router-link to="/appointment" class="btn-primary text-sm">Book Appointment</router-link>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="md:hidden text-gray-700 text-2xl"
      >
        ☰
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-gray-50 px-4 py-4 space-y-4">
      <router-link to="/" @click="mobileMenuOpen = false" class="block text-gray-700 hover:text-chimex-red">Home</router-link>
      <router-link to="/about" @click="mobileMenuOpen = false" class="block text-gray-700 hover:text-chimex-red">About Us</router-link>
      <router-link to="/program" @click="mobileMenuOpen = false" class="block text-gray-700 hover:text-chimex-red">Program</router-link>
      <router-link to="/donate" @click="mobileMenuOpen = false" class="block text-gray-700 hover:text-chimex-red">Support Us</router-link>
      <router-link to="/contact" @click="mobileMenuOpen = false" class="block text-gray-700 hover:text-chimex-red">Contact</router-link>
      <router-link to="/appointment" @click="mobileMenuOpen = false" class="btn-primary block text-center">Book Appointment</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      mobileMenuOpen: false,
    }
  },
}
</script>
