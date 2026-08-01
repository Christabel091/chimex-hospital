<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
    <!-- Image -->
    <div v-if="image" class="w-full h-48 bg-gray-200 flex items-center justify-center text-4xl overflow-hidden">
      <img v-if="isImageUrl(image)" :src="image" :alt="title" class="w-full h-full object-cover" />
      <span v-else>{{ image }}</span>
    </div>

    <!-- Content -->
    <div class="p-6">
      <h3 class="text-xl font-bold text-chimex-dark mb-2">{{ title }}</h3>
      <p class="text-gray-600 text-sm mb-4">{{ description }}</p>
      
      <!-- Badge -->
      <div v-if="badge" class="inline-block bg-chimex-red text-white px-3 py-1 rounded-full text-xs font-semibold">
        {{ badge }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: '',
    },
    badge: {
      type: String,
      default: '',
    },
  },
  methods: {
    isImageUrl(str) {
      try {
        new URL(str)
        return true
      } catch (e) {
        return str.includes('/') || str.includes('.')
      }
    },
  },
}
</script>
