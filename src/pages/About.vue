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
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div v-for="leader in config.about.leadership" :key="leader.name" class="card overflow-hidden">
            <!-- Leader Image -->
            <div class="w-full h-64 bg-gray-300 flex items-center justify-center text-6xl overflow-hidden">
              <img
                v-if="isImageVisible(leader)"
                :src="leader.image"
                :alt="leader.name"
                class="w-full h-full object-cover"
                @error="handleImageError(leader.name)"
              />
              <span v-else class="text-chimex-red">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="7" r="4"></circle><path d="M5.5 21a6.5 6.5 0 0 1 13 0"></path></svg>
              </span>
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
            <div class="w-14 h-14 mx-auto mb-4 rounded-full bg-red-50 text-chimex-red flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m12 2 3.1 6.3 7 .9-5 4.8 1.2 6.8L12 17.8l-6.3 3.2 1.2-6.8-5-4.8 7-.9L12 2z"></path></svg>
            </div>
            <h3 class="text-2xl font-bold text-chimex-dark mb-3">Expert Care</h3>
            <p class="text-gray-600">
              Our team combines decades of experience with compassionate patient care
            </p>
          </div>
          <div class="text-center">
            <div class="w-14 h-14 mx-auto mb-4 rounded-full bg-red-50 text-chimex-red flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M8 21h8"></path><path d="M12 17v4"></path><path d="M7 4h10v4a5 5 0 0 1-10 0V4z"></path><path d="M5 6H3a3 3 0 0 0 3 3"></path><path d="M19 6h2a3 3 0 0 1-3 3"></path></svg>
            </div>
            <h3 class="text-2xl font-bold text-chimex-dark mb-3">Proven Results</h3>
            <p class="text-gray-600">
              95% patient satisfaction rate with measurable health improvements
            </p>
          </div>
          <div class="text-center">
            <div class="w-14 h-14 mx-auto mb-4 rounded-full bg-red-50 text-chimex-red flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 21s-7-4.4-9.5-8.1C.7 10.1 1.6 6.6 4.6 5c2.4-1.2 4.8-.3 6.4 1.5C12.6 4.7 15 3.8 17.4 5c3 1.6 3.9 5.1 2.1 7.9C19 16.6 12 21 12 21z"></path></svg>
            </div>
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
      imageLoadFailed: {},
    }
  },
  methods: {
    isImageVisible(leader) {
      return !!leader.image && !this.imageLoadFailed[leader.name]
    },
    handleImageError(name) {
      this.imageLoadFailed = {
        ...this.imageLoadFailed,
        [name]: true,
      }
    },
  },
}
</script>
