<template>
  <div class="bg-red-50 border-l-4 border-chimex-red p-6 rounded-r-lg">
    <div class="flex items-start">
      <span class="text-2xl mr-4">ℹ️</span>
      <div>
        <h3 class="font-bold text-chimex-red mb-2">{{ title }}</h3>
        <p class="text-gray-700 text-sm">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoBox',
  props: {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
}
</script>
