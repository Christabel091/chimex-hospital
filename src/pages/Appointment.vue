<template>
  <div>
    <!-- Page Header -->
    <div class="bg-gradient-to-r from-chimex-red to-red-700 text-white py-10 px-4">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-4xl font-bold mb-2">Book an Appointment</h1>
        <p class="text-red-100 text-lg">Fill in the form below and our team will confirm your visit</p>
      </div>
    </div>

    <!-- Main: Form + Contact side by side -->
    <div class="bg-gray-50 py-12 px-4">
      <div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        <!-- Appointment Form -->
        <div class="lg:col-span-2 bg-white rounded-xl shadow-md p-8">
          <h2 class="text-2xl font-bold text-chimex-dark mb-6">Request an Appointment</h2>

          <!-- Success Message -->
          <div v-if="submitted" class="bg-green-50 border border-green-300 text-green-800 rounded-lg p-6 text-center mb-6">
            <div class="w-14 h-14 mx-auto mb-2 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>
            </div>
            <h3 class="text-xl font-bold mb-1">Request Received!</h3>
            <p>Thank you, <strong>{{ submittedName }}</strong>. We will call or WhatsApp you within 24 hours to confirm your appointment.</p>
            <button @click="submitted = false" class="mt-4 text-sm text-green-700 underline">Submit another request</button>
          </div>

          <!-- Form -->
          <form v-else @submit.prevent="submitAppointment" class="space-y-5">
            <!-- Service Type -->
            <div>
              <label class="block font-semibold text-gray-700 mb-1">
                Service Type <span class="text-chimex-red">*</span>
              </label>
              <select v-model="form.serviceType" required class="input-field">
                <option value="">-- Select a service --</option>
                <option v-for="s in config.appointment.services" :key="s" :value="s">{{ s }}</option>
              </select>
            </div>

            <!-- Patient Name -->
            <div>
              <label class="block font-semibold text-gray-700 mb-1">
                Patient Full Name <span class="text-chimex-red">*</span>
              </label>
              <input v-model="form.patientName" type="text" required placeholder="e.g. Chukwuemeka Obi" class="input-field" />
            </div>

            <!-- Phone -->
            <div>
              <label class="block font-semibold text-gray-700 mb-1">
                Phone Number <span class="text-chimex-red">*</span>
              </label>
              <input v-model="form.phone" type="tel" required placeholder="+234 (0) 800 000 0000" class="input-field" />
            </div>

            <!-- Email -->
            <div>
              <label class="block font-semibold text-gray-700 mb-1">
                Email Address <span class="text-red-400 text-sm font-normal">(optional)</span>
              </label>
              <input v-model="form.email" type="email" placeholder="your@email.com" class="input-field" />
            </div>

            <!-- Preferred Date -->
            <div>
              <label class="block font-semibold text-gray-700 mb-1">
                Preferred Appointment Date <span class="text-chimex-red">*</span>
              </label>
              <input v-model="form.appointmentDate" type="date" required :min="today" class="input-field" />
            </div>

            <!-- Notes -->
            <div>
              <label class="block font-semibold text-gray-700 mb-1">Additional Notes</label>
              <textarea v-model="form.notes" rows="3" placeholder="Any special requirements, symptoms, or concerns..." class="input-field"></textarea>
            </div>

            <!-- Error -->
            <p v-if="errorMsg" class="text-chimex-red text-sm">{{ errorMsg }}</p>

            <!-- Submit -->
            <button type="submit" :disabled="submitting" class="btn-primary w-full text-lg disabled:opacity-50">
              {{ submitting ? 'Submitting...' : 'Request Appointment' }}
            </button>
          </form>
        </div>

        <!-- Sidebar: Contact & Hours -->
        <div class="space-y-6">
          <!-- Contact -->
          <div class="bg-white rounded-xl shadow-md p-6">
            <h3 class="text-lg font-bold text-chimex-dark mb-4">Contact Us Directly</h3>
            <div class="space-y-3 text-gray-700">
              <p><strong>Phone:</strong><br />{{ config.contact.phone }}</p>
              <p>
                <strong>WhatsApp:</strong><br />
                <a :href="'https://wa.me/' + config.contact.whatsapp.replace(/\D/g,'')"
                   target="_blank" class="text-green-600 hover:underline">
                  {{ config.contact.whatsapp }}
                </a>
              </p>
              <p><strong>Email:</strong><br />
                <a :href="'mailto:' + config.contact.email" class="text-chimex-red hover:underline">
                  {{ config.contact.email }}
                </a>
                <br />
                <a
                  v-if="config.contact.secondaryEmail"
                  :href="'mailto:' + config.contact.secondaryEmail"
                  class="text-chimex-red hover:underline"
                >
                  {{ config.contact.secondaryEmail }}
                </a>
              </p>
            </div>
          </div>

          <!-- Hours -->
          <div class="bg-white rounded-xl shadow-md p-6">
            <h3 class="text-lg font-bold text-chimex-dark mb-4">Operating Hours</h3>
            <p class="text-gray-600 whitespace-pre-line text-sm">{{ config.contactPage.hours }}</p>
          </div>

          <!-- How It Works -->
          <div class="bg-chimex-red text-white rounded-xl p-6">
            <h3 class="text-lg font-bold mb-4">How It Works</h3>
            <ol class="space-y-3 text-sm">
              <li v-for="(step, i) in steps" :key="i" class="flex items-start gap-3">
                <span class="w-6 h-6 bg-white text-chimex-red rounded-full flex items-center justify-center font-bold flex-shrink-0 text-xs">{{ i + 1 }}</span>
                <div>
                  <strong>{{ step.title }}</strong>
                  <p class="text-red-100">{{ step.description }}</p>
                </div>
              </li>
            </ol>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { hospitalConfig as config } from '../constants/config'
import { db } from '../firebase.js'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export default {
  name: 'Appointment',
  data() {
    const today = new Date().toISOString().split('T')[0]
    return {
      config,
      today,
      submitted: false,
      submitting: false,
      submittedName: '',
      errorMsg: '',
      form: {
        serviceType: '',
        patientName: '',
        phone: '',
        email: '',
        appointmentDate: '',
        notes: '',
      },
      steps: [
        { title: 'Fill the Form', description: 'Submit your details below' },
        { title: 'Confirmation', description: 'We call/WhatsApp to confirm within 24hrs' },
        { title: 'Your Visit', description: 'Come in on your scheduled date' },
        { title: 'Expert Care', description: 'Receive compassionate sickle cell care' },
      ],
    }
  },
  methods: {
    async submitAppointment() {
      this.errorMsg = ''
      this.submitting = true
      try {
        // 🔥 Save to Firebase Firestore → 'appointments' collection
        await addDoc(collection(db, 'appointments'), {
          ...this.form,
          submittedAt: serverTimestamp(),
          status: 'pending',
        })

        this.submittedName = this.form.patientName
        this.submitted = true
        this.form = { serviceType: '', patientName: '', phone: '', email: '', appointmentDate: '', notes: '' }
      } catch (err) {
        this.errorMsg = 'Something went wrong. Please call us directly.'
        console.error(err)
      } finally {
        this.submitting = false
      }
    },
  },
}
</script>
