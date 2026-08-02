<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      title="Sickle Cell Care Programme"
      subtitle="Comprehensive, compassionate care for sickle cell patients"
    />

    <!-- Overview Section -->
    <Section :bgClass="'bg-gray-50'">
      <template #default>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bold text-chimex-dark mb-6">
              {{ config.program.title }}
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              {{ config.program.overview }}
            </p>
            <div class="space-y-4">
              <div class="flex items-center space-x-4">
                <div class="text-3xl font-bold text-chimex-red">{{ config.program.patientsServed }}</div>
                <div class="text-gray-600">Patients Served</div>
              </div>
              <div class="flex items-center space-x-4">
                <div class="text-3xl font-bold text-chimex-red">{{ config.program.successRate }}</div>
                <div class="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
          <div class="h-80 bg-red-100 rounded-lg flex items-center justify-center text-6xl">
            🏥
          </div>
        </div>
      </template>
    </Section>

    <!-- Services Section -->
    <Section title="Our Services">
      <template #default>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="service in config.program.services" :key="service.name" class="card p-6">
            <h3 class="text-xl font-bold text-chimex-dark mb-3">{{ service.name }}</h3>
            <p class="text-gray-600">{{ service.description }}</p>
          </div>
        </div>
      </template>
    </Section>

    <!-- Impact Statistics -->
    <Section :bgClass="'bg-chimex-red text-white'" title="Our Impact">
      <template #default>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div v-for="stat in config.program.impactStats" :key="stat.label">
            <div class="text-5xl font-bold mb-2">{{ stat.value }}</div>
            <div class="text-red-100">{{ stat.label }}</div>
          </div>
        </div>
      </template>
    </Section>

    <!-- Success Stories -->
    <Section :bgClass="'bg-gray-50'" title="Success Stories" subtitle="Real stories from our patients and families">
      <template #default>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="story in config.program.successStories" :key="story.name" class="card overflow-hidden">
            <!-- Image Placeholder -->
            <div class="w-full h-48 bg-gray-300 flex items-center justify-center text-5xl">
              🙏
            </div>
            <!-- Content -->
            <div class="p-6">
              <h3 class="text-xl font-bold text-chimex-dark mb-3">{{ story.name }}</h3>
              <p class="text-gray-600 italic">{{ story.story }}</p>
            </div>
          </div>
        </div>
      </template>
    </Section>

    <!-- Call to Action -->
    <Section :bgClass="'bg-gradient-to-r from-chimex-red to-red-700 text-white'">
      <template #default>
        <div class="text-center">
          <h2 class="text-4xl font-bold mb-6">Learn More About Our Program</h2>
          <p class="text-xl mb-8">
            Contact us for detailed information about our services
          </p>
          <router-link to="/contact" class="inline-block bg-white text-chimex-red px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
            Get in Touch
          </router-link>
        </div>
      </template>
    </Section>
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue'
import Section from '../components/Section.vue'
import { hospitalConfig as config } from '../constants/config'

export default {
  name: 'Program',
  components: {
    HeroSection,
    Section,
  },
  data() {
    return {
      config,
    }
  },
}
</script>
