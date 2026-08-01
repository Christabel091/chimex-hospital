<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      title="About Chimex Hospital"
      subtitle="Dedicated to exceptional sickle cell care"
    />

    <!-- Mission Section -->
    <Section :bgClass="'bg-gray-50'">
      <template #default>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 class="text-3xl font-bold text-chimex-dark mb-4">Our Mission</h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              {{ config.about.mission }}
            </p>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-chimex-dark mb-4">Our Story</h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              {{ config.about.founded }}
            </p>
          </div>
        </div>
      </template>
    </Section>

    <!-- Core Values Section -->
    <Section title="Core Values">
      <template #default>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="value in config.about.coreValues" :key="value.title" class="card p-6">
            <h3 class="text-2xl font-bold text-chimex-red mb-3">{{ value.title }}</h3>
            <p class="text-gray-600">{{ value.description }}</p>
          </div>
        </div>
      </template>
    </Section>

    <!-- Leadership Team -->
    <Section :bgClass="'bg-gray-50'" title="Leadership Team" subtitle="Meet our dedicated medical professionals">
      <template #default>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="leader in config.about.leadership" :key="leader.name" class="card overflow-hidden">
            <!-- Image Placeholder -->
            <div class="w-full h-64 bg-gray-300 flex items-center justify-center text-6xl">
              👨‍⚕️
            </div>
            <!-- Content -->
            <div class="p-6">
              <h3 class="text-xl font-bold text-chimex-dark mb-2">{{ leader.name }}</h3>
              <p class="text-chimex-red font-semibold mb-2">{{ leader.title }}</p>
              <p class="text-gray-600 text-sm mb-3">
                <strong>Qualifications:</strong> {{ leader.qualifications }}
              </p>
              <p class="text-gray-600 text-sm">
                <strong>Experience:</strong> {{ leader.experience }}
              </p>
            </div>
          </div>
        </div>
      </template>
    </Section>

    <!-- Why Choose Us -->
    <Section title="Why Choose Chimex Hospital">
      <template #default>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="text-5xl mb-4">⭐</div>
            <h3 class="text-2xl font-bold text-chimex-dark mb-3">Expert Care</h3>
            <p class="text-gray-600">
              Our team combines decades of experience with compassionate patient care
            </p>
          </div>
          <div class="text-center">
            <div class="text-5xl mb-4">🏆</div>
            <h3 class="text-2xl font-bold text-chimex-dark mb-3">Proven Results</h3>
            <p class="text-gray-600">
              95% patient satisfaction rate with measurable health improvements
            </p>
          </div>
          <div class="text-center">
            <div class="text-5xl mb-4">💚</div>
            <h3 class="text-2xl font-bold text-chimex-dark mb-3">Community Focus</h3>
            <p class="text-gray-600">
              We invest back into education and prevention in our community
            </p>
          </div>
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
  name: 'About',
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
