<template>
  <div class="space-y-8">
    <div v-for="(stat, index) in stats" :key="index" class="text-center">
      <div class="text-4xl md:text-5xl font-bold text-chimex-red mb-2">
        {{ stat.value }}
      </div>
      <div class="text-lg text-gray-600">{{ stat.label }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatBlock',
  props: {
    stats: {
      type: Array,
      required: true,
      validator: (arr) => arr.every(s => s.value && s.label),
    },
  },
}
</script>
