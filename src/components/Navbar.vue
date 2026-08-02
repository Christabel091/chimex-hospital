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
        <router-link to="/" exact class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About Us</router-link>
        <router-link to="/program" class="nav-link">Program</router-link>
        <router-link to="/donate" class="nav-link">Support Us</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
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
    <div v-if="mobileMenuOpen" class="md:hidden bg-gray-50 px-4 py-4 space-y-1">
      <router-link to="/" exact @click="mobileMenuOpen = false" class="nav-link-mobile">Home</router-link>
      <router-link to="/about" @click="mobileMenuOpen = false" class="nav-link-mobile">About Us</router-link>
      <router-link to="/program" @click="mobileMenuOpen = false" class="nav-link-mobile">Program</router-link>
      <router-link to="/donate" @click="mobileMenuOpen = false" class="nav-link-mobile">Support Us</router-link>
      <router-link to="/contact" @click="mobileMenuOpen = false" class="nav-link-mobile">Contact</router-link>
      <router-link to="/appointment" @click="mobileMenuOpen = false" class="btn-primary block text-center mt-2">Book Appointment</router-link>
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

<style scoped>
/* Base nav link */
.nav-link {
  position: relative;
  color: #4b5563;
  font-weight: 500;
  padding-bottom: 4px;
  transition: color 0.2s;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: #DC143C;
  transition: width 0.25s ease;
  border-radius: 2px;
}

.nav-link:hover {
  color: #DC143C;
}

.nav-link:hover::after {
  width: 100%;
}

/* Active page — red text + full underline bar */
.nav-link.router-link-active,
.nav-link.router-link-exact-active {
  color: #DC143C;
  font-weight: 700;
}

.nav-link.router-link-active::after,
.nav-link.router-link-exact-active::after {
  width: 100%;
}

/* Mobile nav link */
.nav-link-mobile {
  display: block;
  padding: 10px 12px;
  border-radius: 8px;
  color: #4b5563;
  font-weight: 500;
  transition: all 0.2s;
}

.nav-link-mobile:hover {
  color: #DC143C;
  background-color: #fff1f2;
}

/* Active mobile link — red text + red left border */
.nav-link-mobile.router-link-active,
.nav-link-mobile.router-link-exact-active {
  color: #DC143C;
  font-weight: 700;
  background-color: #fff1f2;
  border-left: 3px solid #DC143C;
  padding-left: 14px;
}
</style>

