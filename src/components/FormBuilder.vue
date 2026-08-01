<template>
  <div class="space-y-6">
    <!-- Form Group -->
    <div v-for="field in fields" :key="field.name" class="flex flex-col">
      <label :for="field.name" class="font-semibold text-gray-700 mb-2">
        {{ field.label }}
        <span v-if="field.required" class="text-chimex-red">*</span>
      </label>
      
      <!-- Text/Email/Tel Input -->
      <input
        v-if="field.type === 'text' || field.type === 'email' || field.type === 'tel'"
        :id="field.name"
        v-model="formData[field.name]"
        :type="field.type"
        :name="field.name"
        :required="field.required"
        :placeholder="field.placeholder"
        class="input-field"
      />

      <!-- Select Input -->
      <select
        v-else-if="field.type === 'select'"
        :id="field.name"
        v-model="formData[field.name]"
        :name="field.name"
        :required="field.required"
        class="input-field"
      >
        <option value="">{{ field.placeholder || 'Select an option' }}</option>
        <option v-for="option in field.options" :key="option" :value="option">
          {{ option }}
        </option>
      </select>

      <!-- Textarea -->
      <textarea
        v-else-if="field.type === 'textarea'"
        :id="field.name"
        v-model="formData[field.name]"
        :name="field.name"
        :required="field.required"
        :placeholder="field.placeholder"
        rows="4"
        class="input-field"
      ></textarea>

      <!-- Date Input -->
      <input
        v-else-if="field.type === 'date'"
        :id="field.name"
        v-model="formData[field.name]"
        :type="field.type"
        :name="field.name"
        :required="field.required"
        class="input-field"
      />

      <!-- Error Message -->
      <span v-if="errors[field.name]" class="text-chimex-red text-sm mt-1">
        {{ errors[field.name] }}
      </span>
    </div>

    <!-- Submit Button -->
    <button
      @click="submitForm"
      :disabled="submitting"
      class="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {{ submitting ? 'Submitting...' : 'Submit' }}
    </button>

    <!-- Success Message -->
    <div v-if="successMessage" class="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
      {{ successMessage }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormBuilder',
  props: {
    fields: {
      type: Array,
      required: true,
    },
    onSubmit: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      formData: {},
      errors: {},
      submitting: false,
      successMessage: '',
    }
  },
  created() {
    this.fields.forEach(field => {
      this.formData[field.name] = ''
    })
  },
  methods: {
    validateForm() {
      this.errors = {}
      let isValid = true

      this.fields.forEach(field => {
        if (field.required && !this.formData[field.name]?.trim()) {
          this.errors[field.name] = `${field.label} is required`
          isValid = false
        }

        if (field.type === 'email' && this.formData[field.name]) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!emailRegex.test(this.formData[field.name])) {
            this.errors[field.name] = 'Please enter a valid email'
            isValid = false
          }
        }

        if (field.type === 'tel' && this.formData[field.name]) {
          const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/
          if (!phoneRegex.test(this.formData[field.name])) {
            this.errors[field.name] = 'Please enter a valid phone number'
            isValid = false
          }
        }
      })

      return isValid
    },
    async submitForm() {
      if (!this.validateForm()) {
        return
      }

      this.submitting = true
      try {
        await this.onSubmit(this.formData)
        this.successMessage = 'Thank you! We will contact you soon.'
        this.resetForm()
      } catch (error) {
        console.error('Form submission error:', error)
      } finally {
        this.submitting = false
      }
    },
    resetForm() {
      this.fields.forEach(field => {
        this.formData[field.name] = ''
      })
      setTimeout(() => {
        this.successMessage = ''
      }, 3000)
    },
  },
}
</script>
