<template>
  <div
    class="bg-gradient-to-r from-chimex-red to-red-700 text-white py-16 md:py-24"
  >
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
            <router-link
              to="/appointment"
              class="inline-block bg-white text-chimex-red font-bold text-base px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-200 text-center border-2 border-white"
            >
              {{ cta }}
            </router-link>
            <router-link
              to="/donate"
              class="inline-block bg-white text-chimex-red font-bold text-base px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-200 text-center border-2 border-white"
            >
              {{ supportCta }}
            </router-link>
          </div>
        </div>

        <!-- Hero Image -->
        <div class="flex justify-center w-full">
          <div class="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/hero-medical.png"
              alt="Chimex Hospital building"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-chimex-red/45 via-red-700/20 to-transparent pointer-events-none"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
  props: {
    title: {
      type: String,
      default: "Expert Sickle Cell Care",
    },
    subtitle: {
      type: String,
      default: "Compassionate healthcare for sickle cell patients",
    },
    cta: {
      type: String,
      default: "Book Appointment",
    },
    supportCta: {
      type: String,
      default: "Support Our Program",
    },
  },
};
</script>
