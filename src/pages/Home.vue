<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      :title="config.home.hero.title"
      :subtitle="config.home.hero.subtitle"
      :cta="config.home.hero.cta"
      :supportCta="config.home.hero.supportCta"
    />

    <!-- About Section -->
    <Section :bgClass="'bg-gray-50'">
      <template #default>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bold text-chimex-dark mb-6">
              {{ config.home.about.title }}
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              {{ config.home.about.description }}
            </p>
            <router-link to="/about" class="btn-primary inline-block">
              Learn More About Us
            </router-link>
          </div>
          <img
            src="/images/home-about-care.jpg"
            alt="Compassionate patient care at Chimex Hospital"
            class="h-80 w-full rounded-lg object-cover shadow-md"
          />
        </div>
      </template>
    </Section>

    <!-- Services Section -->
    <Section
      title="Our Services"
      subtitle="Comprehensive care for sickle cell patients"
    >
      <template #default>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            v-for="(service, index) in config.home.services.items"
            :key="index"
            :title="service"
            :description="`Professional ${service.toLowerCase()} provided by our expert team`"
            :image="getServiceImage(index)"
          />
        </div>
      </template>
    </Section>

    <!-- Statistics Section -->
    <Section :bgClass="'bg-chimex-red text-white'" title="Our Impact">
      <template #default>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          <div
            v-for="stat in [
              { label: 'Patients Served', value: '5000+' },
              { label: 'Medical Staff', value: '50+' },
              { label: 'Success Stories', value: '1200+' },
              { label: 'Years of Service', value: '15+' },
            ]"
            :key="stat.label"
          >
            <div class="text-5xl font-bold mb-2">{{ stat.value }}</div>
            <div class="text-red-100">{{ stat.label }}</div>
          </div>
        </div>
      </template>
    </Section>

    <!-- Call to Action Section -->
    <Section
      :bgClass="'bg-gradient-to-r from-chimex-red to-red-800 text-white'"
    >
      <template #default>
        <div class="text-center">
          <h2 class="text-4xl font-bold mb-6">Ready to Take the Next Step?</h2>
          <p class="text-xl mb-8 text-red-100">
            Book an appointment or support our mission today
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <router-link
              to="/appointment"
              class="bg-white text-chimex-red px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              Book Appointment
            </router-link>
            <router-link
              to="/donate"
              class="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-chimex-red transition"
            >
              Support Us Now
            </router-link>
          </div>
        </div>
      </template>
    </Section>
  </div>
</template>

<script>
import HeroSection from "../components/HeroSection.vue";
import Section from "../components/Section.vue";
import Card from "../components/Card.vue";
import { hospitalConfig as config } from "../constants/config";

export default {
  name: "Home",
  components: {
    HeroSection,
    Section,
    Card,
  },
  data() {
    return {
      config,
    };
  },
  methods: {
    getServiceImage(index) {
      const images = [
        "/images/service-diagnosis.jpg",
        "/images/service-pain-care.jpg",
        "/images/service-chronic-care.jpg",
        "/images/service-genetic.jpg",
        "/images/service-education.jpg",
      ];
      return images[index % images.length];
    },
  },
};
</script>
