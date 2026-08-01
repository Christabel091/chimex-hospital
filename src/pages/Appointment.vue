<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      title="Book an Appointment"
      subtitle="Schedule your visit with our medical team"
    />

    <!-- Appointment Form -->
    <Section :bgClass="'bg-gray-50'">
      <template #default>
        <div class="max-w-2xl mx-auto">
          <p class="text-center text-lg text-gray-600 mb-8">
            {{ config.appointment.description }}
          </p>
          <FormBuilder
            :fields="appointmentFormFields"
            :onSubmit="submitAppointment"
          />
        </div>
      </template>
    </Section>

    <!-- How It Works -->
    <Section title="How It Works">
      <template #default>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div v-for="(step, index) in steps" :key="index" class="text-center">
            <div class="w-16 h-16 bg-chimex-red text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              {{ index + 1 }}
            </div>
            <h3 class="text-lg font-bold text-chimex-dark mb-2">{{ step.title }}</h3>
            <p class="text-gray-600">{{ step.description }}</p>
          </div>
        </div>
      </template>
    </Section>

    <!-- Contact Info -->
    <Section :bgClass="'bg-blue-50'" title="Need Help?">
      <template #default>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-bold text-chimex-dark mb-4">Contact Us Directly</h3>
            <div class="space-y-4">
              <p>
                <strong>📞 Phone:</strong> {{ config.contact.phone }}
              </p>
              <p>
                <strong>💬 WhatsApp:</strong> {{ config.contact.whatsapp }}
              </p>
              <p>
                <strong>📧 Email:</strong> {{ config.contact.email }}
              </p>
            </div>
          </div>
          <div>
            <h3 class="text-xl font-bold text-chimex-dark mb-4">Operating Hours</h3>
            <p class="text-gray-600 whitespace-pre-line">
              {{ config.contactPage.hours }}
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
import FormBuilder from '../components/FormBuilder.vue'
import { hospitalConfig as config } from '../constants/config'

export default {
  name: 'Appointment',
  components: {
    HeroSection,
    Section,
    FormBuilder,
  },
  data() {
    return {
      config,
      appointmentFormFields: [
        {
          name: 'serviceType',
          label: 'Service Type',
          type: 'select',
          required: true,
          options: config.appointment.services,
        },
        {
          name: 'patientName',
          label: 'Patient Name',
          type: 'text',
          required: true,
          placeholder: 'Full name',
        },
        {
          name: 'phone',
          label: 'Phone Number',
          type: 'tel',
          required: true,
          placeholder: '+234 (0) XXX XXX XXXX',
        },
        {
          name: 'email',
          label: 'Email Address',
          type: 'email',
          required: true,
          placeholder: 'your@email.com',
        },
        {
          name: 'appointmentDate',
          label: 'Preferred Appointment Date',
          type: 'date',
          required: true,
        },
        {
          name: 'notes',
          label: 'Additional Notes',
          type: 'textarea',
          required: false,
          placeholder: 'Any special requirements or concerns...',
        },
      ],
      steps: [
        {
          title: 'Fill the Form',
          description: 'Complete your appointment request with your preferred details',
        },
        {
          title: 'Confirmation',
          description: 'We review your request and confirm via phone or email',
        },
        {
          title: 'Appointment',
          description: 'Visit us on your scheduled date',
        },
        {
          title: 'Care',
          description: 'Receive expert medical care from our team',
        },
      ],
    }
  },
  methods: {
    async submitAppointment(formData) {
      // Handle appointment submission
      console.log('Appointment submitted:', formData)
      // In production, send to backend/calendar system
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    },
  },
}
</script>
