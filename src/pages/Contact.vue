<template>
  <div>
    <!-- Hero Section -->
    <HeroSection title="Contact Us" subtitle="Get in touch with our team" />

    <!-- Contact Info -->
    <Section :bgClass="'bg-gray-50'">
      <template #default>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Phone -->
          <div class="text-center">
            <div class="w-14 h-14 mx-auto mb-4 rounded-full bg-red-50 text-chimex-red flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72 13 13 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.1 10.91a16 16 0 0 0 4 4l1.27-1.21a2 2 0 0 1 2.11-.45 13 13 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-chimex-dark mb-2">Call Us</h3>
            <a
              :href="`tel:${config.contact.phone}`"
              class="text-chimex-red hover:text-red-700"
            >
              {{ config.contact.phone }}
            </a>
          </div>

          <!-- WhatsApp -->
          <div class="text-center">
            <div class="w-14 h-14 mx-auto mb-4 rounded-full bg-red-50 text-chimex-red flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12a9 9 0 1 1-15.5-6.32"></path><path d="M8.5 8.5A5 5 0 0 0 16 15"></path><path d="M17.5 6.5l-6 6"></path><path d="M17.5 10.5v-4h-4"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-chimex-dark mb-2">WhatsApp</h3>
            <a
              :href="`https://wa.me/${config.contact.whatsapp.replace(/\D/g, '')}`"
              target="_blank"
              rel="noopener noreferrer"
              class="text-chimex-red hover:text-red-700"
            >
              {{ config.contact.whatsapp }}
            </a>
          </div>

          <!-- Email -->
          <div class="text-center">
            <div class="w-14 h-14 mx-auto mb-4 rounded-full bg-red-50 text-chimex-red flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-chimex-dark mb-2">Email</h3>
            <a
              :href="`mailto:${config.contact.email}`"
              class="text-chimex-red hover:text-red-700"
            >
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
          <FormBuilder :fields="contactFormFields" :onSubmit="submitContact" />
        </div>
      </template>
    </Section>

    <!-- Social Media -->
    <Section title="Connect With Us">
      <template #default>
        <div
          class="flex flex-col md:flex-row justify-center items-center gap-8"
        >
          <a
            :href="config.contact.facebook"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center space-x-2 text-chimex-red hover:text-red-700 text-lg font-semibold transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V4.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.3V11H8v3h2.2v8h3.3z"/></svg>
            <span>Facebook</span>
          </a>
          <a
            :href="config.contact.instagram"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center space-x-2 text-chimex-red hover:text-red-700 text-lg font-semibold transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1"></circle></svg>
            <span>Instagram</span>
          </a>
          <a
            :href="config.contact.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center space-x-2 text-chimex-red hover:text-red-700 text-lg font-semibold transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.94 8.5a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44zM5.5 9.75h2.9V19h-2.9V9.75zM10.2 9.75h2.8v1.26h.04c.39-.74 1.35-1.52 2.78-1.52 2.98 0 3.53 1.96 3.53 4.5V19h-2.9v-4.42c0-1.05-.02-2.41-1.47-2.41-1.47 0-1.7 1.15-1.7 2.34V19h-2.9V9.75z"/></svg>
            <span>LinkedIn</span>
          </a>
          <a
            :href="config.contact.youtube"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center space-x-2 text-chimex-red hover:text-red-700 text-lg font-semibold transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 12s0-3.8-.5-5.6a2.9 2.9 0 0 0-2-2C18.7 4 12 4 12 4s-6.7 0-8.5.4a2.9 2.9 0 0 0-2 2C1 8.2 1 12 1 12s0 3.8.5 5.6a2.9 2.9 0 0 0 2 2C5.3 20 12 20 12 20s6.7 0 8.5-.4a2.9 2.9 0 0 0 2-2C23 15.8 23 12 23 12zM10 15.5v-7l6 3.5-6 3.5z"/></svg>
            <span>YouTube</span>
          </a>
        </div>
      </template>
    </Section>

    <!-- Location Map -->
    <Section :bgClass="'bg-gray-50'" title="Find Us">
      <template #default>
        <div class="max-w-2xl mx-auto">
          <img
            src="/images/map-placeholder.jpg"
            alt="Map and location context for Chimex Hospital in Nnewi"
            class="w-full h-80 rounded-lg object-cover border-4 border-gray-200"
          />
          <p class="text-center mt-6 text-lg text-gray-600">
            {{ config.name }}<br />
            {{ config.address }}
          </p>
          <p class="text-center mt-4 text-gray-600">
            Map integration coming soon - for now, please contact us for
            directions
          </p>
        </div>
      </template>
    </Section>
  </div>
</template>

<script>
import HeroSection from "../components/HeroSection.vue";
import Section from "../components/Section.vue";
import FormBuilder from "../components/FormBuilder.vue";
import { hospitalConfig as config } from "../constants/config";
import { db } from "../firebase.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default {
  name: "Contact",
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
          name: "name",
          label: "Full Name",
          type: "text",
          required: true,
          placeholder: "Your full name",
        },
        {
          name: "email",
          label: "Email Address",
          type: "email",
          required: true,
          placeholder: "your@email.com",
        },
        {
          name: "phone",
          label: "Phone Number",
          type: "tel",
          required: false,
          placeholder: "+234 (0) XXX XXX XXXX",
        },
        {
          name: "subject",
          label: "Subject",
          type: "text",
          required: true,
          placeholder: "How can we help?",
        },
        {
          name: "message",
          label: "Message",
          type: "textarea",
          required: true,
          placeholder: "Please describe your inquiry...",
        },
      ],
    };
  },
  methods: {
    async submitContact(formData) {
      // 🔥 Save to Firebase Firestore → 'messages' collection
      await addDoc(collection(db, "messages"), {
        ...formData,
        submittedAt: serverTimestamp(),
        read: false,
      });
    },
  },
};
</script>
