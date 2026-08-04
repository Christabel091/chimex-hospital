<template>
  <div>
    <!-- Page Header -->
    <div class="bg-gradient-to-r from-chimex-red to-red-700 text-white py-10 px-4">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-4xl font-bold mb-2">Support Our Programme</h1>
        <p class="text-red-100 text-lg">Your generosity helps us provide free sickle cell care across South-Eastern Nigeria</p>
      </div>
    </div>

    <!-- Main: Form + Info side by side -->
    <div class="bg-gray-50 py-12 px-4">
      <div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        <!-- Support Form -->
        <div class="lg:col-span-2 bg-white rounded-xl shadow-md p-8">
          <h2 class="text-2xl font-bold text-chimex-dark mb-2">Make a Support Pledge</h2>
          <p class="text-gray-500 mb-6">Fill the form below and we will contact you directly via phone or WhatsApp to arrange your contribution.</p>

          <!-- Success Message -->
          <div v-if="submitted" class="bg-green-50 border border-green-300 text-green-800 rounded-lg p-6 text-center">
            <div class="w-14 h-14 mx-auto mb-3 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Thank You, {{ submittedName }}!</h3>
            <p class="mb-4">Your support pledge has been received. Here is what happens next:</p>
            <ol class="text-left space-y-2 mb-6 text-sm max-w-sm mx-auto">
              <li class="flex gap-2"><span class="font-bold text-chimex-red">1.</span> Our team will call or WhatsApp you within 24 hours</li>
              <li class="flex gap-2"><span class="font-bold text-chimex-red">2.</span> We will discuss your preferred support type and amount</li>
              <li class="flex gap-2"><span class="font-bold text-chimex-red">3.</span> We will guide you through the payment/transfer process</li>
              <li class="flex gap-2"><span class="font-bold text-chimex-red">4.</span> You will receive a confirmation and impact report</li>
            </ol>
            <p class="text-sm text-gray-600">Questions? WhatsApp us directly: <strong>{{ config.contact.whatsapp }}</strong></p>
            <button @click="submitted = false" class="mt-4 text-sm text-green-700 underline">Submit another pledge</button>
          </div>

          <!-- Form -->
          <form v-else @submit.prevent="submitSupport" class="space-y-5">

            <!-- Full Name -->
            <div>
              <label class="block font-semibold text-gray-700 mb-1">Full Name <span class="text-chimex-red">*</span></label>
              <input v-model="form.fullName" type="text" required placeholder="e.g. Ngozi Okonkwo" class="input-field" />
            </div>

            <!-- Phone -->
            <div>
              <label class="block font-semibold text-gray-700 mb-1">Phone Number <span class="text-chimex-red">*</span></label>
              <input v-model="form.phone" type="tel" required placeholder="+234 (0) 800 000 0000" class="input-field" />
            </div>

            <!-- Email -->
            <div>
              <label class="block font-semibold text-gray-700 mb-1">Email Address <span class="text-red-400 text-sm font-normal">(optional)</span></label>
              <input v-model="form.email" type="email" placeholder="your@email.com" class="input-field" />
            </div>

            <!-- Support Type -->
            <div>
              <label class="block font-semibold text-gray-700 mb-1">Type of Support <span class="text-chimex-red">*</span></label>
              <select v-model="form.supportType" required class="input-field">
                <option value="">-- Select support type --</option>
                <option>Individual Donation</option>
                <option>Corporate Sponsorship</option>
                <option>NGO Partnership</option>
                <option>Volunteer</option>
                <option>In-Kind Donation (supplies, equipment)</option>
                <option>Other</option>
              </select>
            </div>

            <!-- Amount -->
            <div>
              <label class="block font-semibold text-gray-700 mb-1">Intended Amount (Naira / USD) <span class="text-red-400 text-sm font-normal">(optional)</span></label>
              <input v-model="form.amount" type="text" placeholder="e.g. ₦50,000 or $100" class="input-field" />
            </div>

            <!-- Anonymous -->
            <div class="flex items-center gap-3">
              <input v-model="form.anonymous" type="checkbox" id="anon" class="w-4 h-4 accent-chimex-red" />
              <label for="anon" class="text-gray-700 font-medium">I would like my contribution to remain anonymous</label>
            </div>

            <!-- Message -->
            <div>
              <label class="block font-semibold text-gray-700 mb-1">Message / Dedication <span class="text-red-400 text-sm font-normal">(optional)</span></label>
              <textarea v-model="form.message" rows="3" placeholder="Share why you are supporting or who you are dedicating this to..." class="input-field"></textarea>
            </div>

            <!-- Error -->
            <p v-if="errorMsg" class="text-chimex-red text-sm">{{ errorMsg }}</p>

            <!-- Submit -->
            <button type="submit" :disabled="submitting" class="btn-primary w-full text-lg disabled:opacity-50">
              {{ submitting ? 'Submitting...' : 'Submit Support Pledge' }}
            </button>
          </form>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">

          <!-- Why Support -->
          <div class="bg-white rounded-xl shadow-md p-6">
            <h3 class="text-lg font-bold text-chimex-dark mb-3">Why Support Us?</h3>
            <ul class="space-y-3 text-sm text-gray-600">
              <li class="flex gap-2"><span class="text-chimex-red font-bold">•</span> Free care for sickle cell patients across South-East Nigeria</li>
              <li class="flex gap-2"><span class="text-chimex-red font-bold">•</span> 5,000+ patients already served</li>
              <li class="flex gap-2"><span class="text-chimex-red font-bold">•</span> 100% of donations go directly to patient care</li>
              <li class="flex gap-2"><span class="text-chimex-red font-bold">•</span> Transparent impact reports shared with donors</li>
            </ul>
          </div>

          <!-- Donation Levels -->
          <div class="bg-white rounded-xl shadow-md p-6">
            <h3 class="text-lg font-bold text-chimex-dark mb-3">Support Levels</h3>
            <div class="space-y-3">
              <div v-for="level in config.donate.donationLevels" :key="level.level" class="border-l-4 border-chimex-red pl-3">
                <div class="font-bold text-chimex-dark">{{ level.level }} — {{ level.amount }}</div>
                <div class="text-xs text-gray-500">{{ level.benefits[0] }}</div>
              </div>
            </div>
          </div>

          <!-- Direct Contact -->
          <div class="bg-chimex-red text-white rounded-xl p-6">
            <h3 class="text-lg font-bold mb-3">Prefer to Talk First?</h3>
            <p class="text-sm text-red-100 mb-3">Reach out directly and we will be happy to discuss how you can help.</p>
            <div class="space-y-2 text-sm">
              <p>Phone: {{ config.contact.phone }}</p>
              <p>
                <a :href="'https://wa.me/' + config.contact.whatsapp.replace(/\D/g,'')"
                   target="_blank" class="underline text-white">
                  WhatsApp Us
                </a>
              </p>
              <p>
                <a :href="'mailto:' + config.contact.email" class="underline text-white">
                  {{ config.contact.email }}
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- NGO & Volunteer section -->
    <div class="bg-white py-12 px-4">
      <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-red-50 rounded-xl p-6">
          <h3 class="text-xl font-bold text-chimex-dark mb-3">NGO Partnerships</h3>
          <p class="text-gray-600 mb-4">{{ config.donate.ngoPartnerships }}</p>
          <p class="text-sm text-gray-500">Fill the form above and select <strong>"NGO Partnership"</strong> as your support type.</p>
        </div>
        <div class="bg-red-50 rounded-xl p-6">
          <h3 class="text-xl font-bold text-chimex-dark mb-3">Volunteer With Us</h3>
          <p class="text-gray-600 mb-4">{{ config.donate.volunteering }}</p>
          <p class="text-sm text-gray-500">Fill the form above and select <strong>"Volunteer"</strong> as your support type.</p>
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
  name: 'Donate',
  data() {
    return {
      config,
      submitted: false,
      submitting: false,
      submittedName: '',
      errorMsg: '',
      form: {
        fullName: '',
        phone: '',
        email: '',
        supportType: '',
        amount: '',
        anonymous: false,
        message: '',
      },
    }
  },
  methods: {
    async submitSupport() {
      this.errorMsg = ''
      this.submitting = true
      try {
        // 🔥 Save to Firebase Firestore → 'donations' collection
        await addDoc(collection(db, 'donations'), {
          ...this.form,
          submittedAt: serverTimestamp(),
          status: 'pending_contact',
        })

        this.submittedName = this.form.fullName
        this.submitted = true
        this.form = { fullName: '', phone: '', email: '', supportType: '', amount: '', anonymous: false, message: '' }
      } catch (err) {
        this.errorMsg = 'Something went wrong. Please contact us directly via WhatsApp.'
        console.error(err)
      } finally {
        this.submitting = false
      }
    },
  },
}
</script>
