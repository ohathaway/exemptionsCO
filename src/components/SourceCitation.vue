<template>
  <li>
    <font-awesome-icon
      icon="fa-solid fa-scale-balanced"
      class="text-blue-900"
    />
    &nbsp;&nbsp;<span v-html="source" />
  </li>
</template>

<script setup>
defineProps({
  source: String
})
</script>
