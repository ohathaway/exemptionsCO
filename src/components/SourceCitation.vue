<template>
  <li>
    <font-awesome-icon icon="fa-solid fa-scale-balanced" class="primary"/>
    &nbsp;&nbsp;<span v-html="source" />
  </li>
</template>

<script setup>
defineProps({
  source: String
})
</script>
