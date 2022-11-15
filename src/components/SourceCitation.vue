<template>
  <li>
    <font-awesome-icon icon="fa-solid fa-scale-balanced" />
    &nbsp;&nbsp;<span v-html="source"></span>
  </li>
</template>

<script setup>
defineProps({
  source: String
})
</script>
