<template>
  <div class="bg-gradient-to-r from-chimex-red to-red-700 text-white py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Text Content -->
        <div>
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            {{ title }}
          </h1>
          <p class="text-lg md:text-xl text-red-100 mb-8">
            {{ subtitle }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <router-link to="/appointment" class="btn-primary bg-white text-chimex-red hover:bg-red-50">
              {{ cta }}
            </router-link>
            <router-link to="/donate" class="btn-outline border-white text-white hover:bg-white hover:text-chimex-red">
              {{ supportCta }}
            </router-link>
          </div>
        </div>

        <!-- Image Placeholder -->
        <div class="flex justify-center">
          <div class="w-full h-64 md:h-80 bg-red-600 rounded-lg flex items-center justify-center text-6xl">
            🏥
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    title: {
      type: String,
      default: 'Expert Sickle Cell Care',
    },
    subtitle: {
      type: String,
      default: 'Compassionate healthcare for sickle cell patients',
    },
    cta: {
      type: String,
      default: 'Book Appointment',
    },
    supportCta: {
      type: String,
      default: 'Support Our Program',
    },
  },
}
</script>
