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
          <img
            src="/images/program-overview.jpg"
            alt="Sickle cell programme care team and facilities"
            class="h-80 w-full rounded-lg object-cover shadow-md"
          />
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
    <Section :bgClass="'bg-gray-50'" title="Success Stories" subtitle="Anonymized impact highlights from our programme">
      <template #default>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="story in config.program.successStories" :key="story.name" class="card overflow-hidden">
            <div class="w-full h-48 bg-red-50 flex flex-col items-center justify-center text-chimex-red">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              <span class="font-semibold text-sm">Recovered & Thriving</span>
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
