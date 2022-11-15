<template>
  <section
    :id="section.id"
    class="exemptions-section p-3 p-lg-5 d-flex flex-column mb-auto"
  >
    <h2 class="mb-5">
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
import ExemptLaw from './ExemptLaw'

defineProps({
  section: Object
})
</script>

<style lang="scss">
h2 {
  font-size: 3.5rem;
  font-weight: 700;
}
</style>
