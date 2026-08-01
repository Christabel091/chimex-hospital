<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      title="Support Our Mission"
      subtitle="Help us continue providing world-class sickle cell care"
    />

    <!-- Intro Section -->
    <Section :bgClass="'bg-gray-50'">
      <template #default>
        <div class="text-center max-w-3xl mx-auto">
          <p class="text-xl text-gray-600 mb-8">
            {{ config.donate.intro }}
          </p>
          <p class="text-lg text-gray-700">
            Every donation directly supports patient care, medical research, and community education programs.
          </p>
        </div>
      </template>
    </Section>

    <!-- Donation Levels -->
    <Section title="Donation Levels">
      <template #default>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="level in config.donate.donationLevels" :key="level.level" class="card p-6 text-center hover:ring-2 hover:ring-chimex-red transition">
            <div class="text-4xl font-bold text-chimex-red mb-3">{{ level.amount }}</div>
            <h3 class="text-xl font-bold text-chimex-dark mb-4">{{ level.level }}</h3>
            <ul class="space-y-2 mb-6 text-gray-600 text-sm text-left">
              <li v-for="benefit in level.benefits" :key="benefit" class="flex items-start">
                <span class="text-chimex-red mr-2">✓</span>
                <span>{{ benefit }}</span>
              </li>
            </ul>
            <button class="btn-primary w-full" @click="openDonationForm(level)">
              Donate {{ level.amount }}
            </button>
          </div>
        </div>
      </template>
    </Section>

    <!-- Donation Form -->
    <Section :bgClass="'bg-gray-50'" title="Make a Custom Donation">
      <template #default>
        <div class="max-w-2xl mx-auto">
          <FormBuilder
            :fields="donationFormFields"
            :onSubmit="submitDonation"
          />
        </div>
      </template>
    </Section>

    <!-- NGO Partnerships -->
    <Section title="NGO Partnerships">
      <template #default>
        <div class="bg-blue-50 rounded-lg p-8 text-center">
          <p class="text-xl text-gray-700 mb-6">
            {{ config.donate.ngoPartnerships }}
          </p>
          <p class="text-gray-600">
            Organizations interested in partnering with us should contact our development team.
          </p>
        </div>
      </template>
    </Section>

    <!-- Volunteering Section -->
    <Section :bgClass="'bg-chimex-red text-white'">
      <template #default>
        <div class="text-center">
          <h2 class="text-4xl font-bold mb-6">Volunteer With Us</h2>
          <p class="text-xl text-red-100 mb-8">
            {{ config.donate.volunteering }}
          </p>
          <router-link to="/contact" class="inline-block bg-white text-chimex-red px-8 py-3 rounded-lg font-bold hover:bg-red-50 transition">
            Learn About Volunteering
          </router-link>
        </div>
      </template>
    </Section>
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue'
import Section from '../components/Section.vue'
import FormBuilder from '../components/FormBuilder.vue'
import { hospitalConfig as config } from '../constants/config'
import { db } from '../firebase.js'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export default {
  name: 'Donate',
  components: {
    HeroSection,
    Section,
    FormBuilder,
  },
  data() {
    return {
      config,
      donationFormFields: [
        {
          name: 'donationAmount',
          label: 'Donation Amount (USD)',
          type: 'text',
          required: true,
          placeholder: 'Enter amount',
        },
        {
          name: 'donorName',
          label: 'Full Name',
          type: 'text',
          required: true,
          placeholder: 'Your full name',
        },
        {
          name: 'email',
          label: 'Email Address',
          type: 'email',
          required: true,
          placeholder: 'your@email.com',
        },
        {
          name: 'phone',
          label: 'Phone Number',
          type: 'tel',
          required: false,
          placeholder: '+234 (0) XXX XXX XXXX',
        },
        {
          name: 'anonymousDonation',
          label: 'Make donation anonymous',
          type: 'text',
          required: false,
          placeholder: 'Yes/No',
        },
        {
          name: 'message',
          label: 'Message (Optional)',
          type: 'textarea',
          required: false,
          placeholder: 'Share your thoughts or dedication...',
        },
      ],
    }
  },
  methods: {
    openDonationForm(level) {
      alert(`To donate ${level.amount} as a ${level.level}, please contact us via WhatsApp or email. Payment integration (Stripe/PayPal) coming soon!`)
    },
    async submitDonation(formData) {
      // 🔥 Save donation interest to Firebase Firestore → 'donations' collection
      await addDoc(collection(db, 'donations'), {
        ...formData,
        submittedAt: serverTimestamp(),
        status: 'pending_payment',
      })
    },
  },
}
</script>
