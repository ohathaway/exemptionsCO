<template>
  <ViewNav :sections="coData.Sections" />
  <div class="container-fluid p-0">
    <ViewHeader :updated="coData.Updated" />
    <!-- eslint-disable vue/valid-v-for -->
    <ExemptSection
      v-for="section in coData.Sections"
      :section="section"
    />
    <ViewSources :sources="coData.Sources" />
  </div>
</template>

<script setup>
import coData from './data.yaml'
import ExemptSection from '@/components/ExemptSection'
import ViewNav from '@/views/ViewNav'
import ViewHeader from '@/views/ViewHeader'
import ViewSources from '@/views/ViewSources'
</script>
