<template>
  <div class="exemptions-item flex flex-col md:flex-row mb-6">
    <div class="exemptions-content md:w-2/3 md:mr-auto mb-4 md:mb-0">
      <h3 class="uppercase mb-0 text-gray-800 font-sans font-bold">
        {{ law.name }}
      </h3>
      <div
        class="text-gray-600 font-sans text-lg lg:text-xl font-medium uppercase mb-3"
        v-html="law.limit "
      />
      <div v-html="law.description" />
    </div>
    <div class="exemptions-date md:w-1/3 md:text-right md:min-w-72">
      <div
        v-for="citation in law.citations"
        class="text-blue-900"
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
