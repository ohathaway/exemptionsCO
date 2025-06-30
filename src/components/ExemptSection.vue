<template>
  <section
    :id="section.id"
    class="exemptions-section p-3 lg:p-20 flex flex-col mb-auto border-b border-gray-300 pb-20 pt-20"
  >
    <h2 class="mb-5 text-5xl font-bold text-gray-800 font-sans uppercase">
      {{ section.name }}
    </h2>
    <div
      v-if="section.description"
      v-html="section.description"
    />
    <ExemptLaw
      v-for="law in section.laws"
      :law="law"
    />
  </section>
</template>

<script setup>
import ExemptLaw from './ExemptLaw.vue'

defineProps({
  section: Object
})
</script>

