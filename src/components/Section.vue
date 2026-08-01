<template>
  <section :class="[bgClass, 'py-16 md:py-24']">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Section Title -->
      <div v-if="title" class="mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-chimex-dark mb-4">
          {{ title }}
        </h2>
        <p v-if="subtitle" class="text-lg text-gray-600 max-w-2xl">
          {{ subtitle }}
        </p>
      </div>

      <!-- Content Slot -->
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    bgClass: {
      type: String,
      default: 'bg-white',
    },
  },
}
</script>
