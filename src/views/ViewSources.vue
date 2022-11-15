<template>
  <section
    id="sources"
    class="exemptions-section p3 p-lg-5 d-flex flex-column"
  >
    <h2 class="mb-5">
      Sources
    </h2>
    <ul class="fa-ul mb-0">
      <SourceCitation v-for="source in sources" :source="source" />
    </ul>
  </section>
</template>

<script setup>
import SourceCitation from '@/components/SourceCitation'

defineProps({
  sources: Array
})
</script>
