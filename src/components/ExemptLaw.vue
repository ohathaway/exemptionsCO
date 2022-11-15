<template>
  <div class="exemptions-item row">
    <div class="exemptions-content col-md-8 mr-auto">
      <h3 class="text-uppercase mb-0">
        {{ law.name }}
      </h3>
      <div
        class="subheading mb-3"
        v-html="law.limit "
      />
      <div v-html="law.description" />
    </div>
    <div class="exemptions-date col-md-4 text-md-right">
      <div
        v-for="citation in law.citations"
        class="text-primary"
        v-html="decode(citation)"
      />
    </div>
  </div>
</template>

<script setup>
import { decode } from 'he'

defineProps({
  law: Object
})
</script>
