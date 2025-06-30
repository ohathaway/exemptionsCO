<template>
  <section
    id="sources"
    class="exemptions-section p-3 lg:p-20 flex flex-col border-b border-gray-300 pb-20 pt-20"
  >
    <h2 class="mb-5 text-5xl font-bold text-gray-800 font-sans uppercase">
      Sources
    </h2>
    <ul class="mb-0">
      <SourceCitation
        v-for="source in sources"
        :source="source"
      />
    </ul>
  </section>
</template>

<script setup>
import SourceCitation from '@/components/SourceCitation.vue'

defineProps({
  sources: Array
})
</script>
