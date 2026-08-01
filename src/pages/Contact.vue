<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      title="Contact Us"
      subtitle="Get in touch with our team"
    />

    <!-- Contact Info -->
    <Section :bgClass="'bg-gray-50'">
      <template #default>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Phone -->
          <div class="text-center">
            <div class="text-5xl mb-4">📞</div>
            <h3 class="text-xl font-bold text-chimex-dark mb-2">Call Us</h3>
            <a :href="`tel:${config.contact.phone}`" class="text-chimex-blue hover:text-blue-700">
              {{ config.contact.phone }}
            </a>
          </div>

          <!-- WhatsApp -->
          <div class="text-center">
            <div class="text-5xl mb-4">💬</div>
            <h3 class="text-xl font-bold text-chimex-dark mb-2">WhatsApp</h3>
            <a :href="`https://wa.me/${config.contact.whatsapp.replace(/\D/g, '')}`" target="_blank" rel="noopener noreferrer" class="text-chimex-blue hover:text-blue-700">
              {{ config.contact.whatsapp }}
            </a>
          </div>

          <!-- Email -->
          <div class="text-center">
            <div class="text-5xl mb-4">📧</div>
            <h3 class="text-xl font-bold text-chimex-dark mb-2">Email</h3>
            <a :href="`mailto:${config.contact.email}`" class="text-chimex-blue hover:text-blue-700">
              {{ config.contact.email }}
            </a>
          </div>
        </div>
      </template>
    </Section>

    <!-- Operating Hours -->
    <Section title="Operating Hours">
      <template #default>
        <div class="max-w-2xl mx-auto text-center">
          <p class="text-lg text-gray-600 whitespace-pre-line font-mono">
            {{ config.contactPage.hours }}
          </p>
        </div>
      </template>
    </Section>

    <!-- Contact Form -->
    <Section :bgClass="'bg-gray-50'" title="Send Us a Message">
      <template #default>
        <div class="max-w-2xl mx-auto">
          <FormBuilder
            :fields="contactFormFields"
            :onSubmit="submitContact"
          />
        </div>
      </template>
    </Section>

    <!-- Social Media -->
    <Section title="Connect With Us">
      <template #default>
        <div class="flex flex-col md:flex-row justify-center items-center gap-8">
          <a :href="config.contact.facebook" target="_blank" rel="noopener noreferrer" 
             class="flex items-center space-x-2 text-chimex-blue hover:text-blue-700 text-lg font-semibold transition">
            <span>👍</span>
            <span>Facebook</span>
          </a>
          <a :href="config.contact.instagram" target="_blank" rel="noopener noreferrer" 
             class="flex items-center space-x-2 text-chimex-blue hover:text-blue-700 text-lg font-semibold transition">
            <span>📷</span>
            <span>Instagram</span>
          </a>
          <a :href="config.contact.linkedin" target="_blank" rel="noopener noreferrer" 
             class="flex items-center space-x-2 text-chimex-blue hover:text-blue-700 text-lg font-semibold transition">
            <span>💼</span>
            <span>LinkedIn</span>
          </a>
          <a :href="config.contact.youtube" target="_blank" rel="noopener noreferrer" 
             class="flex items-center space-x-2 text-chimex-blue hover:text-blue-700 text-lg font-semibold transition">
            <span>▶️</span>
            <span>YouTube</span>
          </a>
        </div>
      </template>
    </Section>

    <!-- Location Map -->
    <Section :bgClass="'bg-gray-50'" title="Find Us">
      <template #default>
        <div class="max-w-2xl mx-auto">
          <div class="w-full h-80 bg-gray-300 rounded-lg flex items-center justify-center text-6xl border-4 border-gray-400">
            🗺️
          </div>
          <p class="text-center mt-6 text-lg text-gray-600">
            {{ config.name }}<br>
            {{ config.address }}
          </p>
          <p class="text-center mt-4 text-gray-600">
            Map integration coming soon - for now, please contact us for directions
          </p>
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
  name: 'Contact',
  components: {
    HeroSection,
    Section,
    FormBuilder,
  },
  data() {
    return {
      config,
      contactFormFields: [
        {
          name: 'name',
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
          name: 'subject',
          label: 'Subject',
          type: 'text',
          required: true,
          placeholder: 'How can we help?',
        },
        {
          name: 'message',
          label: 'Message',
          type: 'textarea',
          required: true,
          placeholder: 'Please describe your inquiry...',
        },
      ],
    }
  },
  methods: {
    async submitContact(formData) {
      // 🔥 Save to Firebase Firestore → 'messages' collection
      await addDoc(collection(db, 'messages'), {
        ...formData,
        submittedAt: serverTimestamp(),
        read: false,
      })
    },
  },
}
</script>
