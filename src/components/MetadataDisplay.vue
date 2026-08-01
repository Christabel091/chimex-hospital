<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
    <div v-for="(value, label) in metadata" :key="label" class="card p-6 text-center">
      <div class="text-3xl font-bold text-chimex-red mb-2">{{ value }}</div>
      <div class="text-gray-600 text-sm uppercase tracking-wide">{{ label }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MetadataDisplay',
  props: {
    metadata: {
      type: Object,
      required: true,
    },
  },
}
</script>
