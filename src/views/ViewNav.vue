<template>
  <nav
    class="side-nav fixed top-0 left-0 z-50 h-screen w-64 lg:w-64 flex flex-col text-center text-white bg-yellow-400"
  >
    <a
      class="flex mx-auto mb-0 p-2 js-scroll-trigger"
      href="#page-top"
    >
      <span class="block lg:hidden">CO Exemptions</span>
      <span class="hidden lg:block">
        <img
          class="max-w-full h-auto rounded-full mx-auto mb-2 max-h-40 max-w-40 border-4 border-white border-opacity-20"
          src="@/assets/img/colorado500.png"
          alt=""
        >
      </span>
    </a>
    <button
      class="lg:hidden p-2 text-gray-800"
      type="button"
      @click="toggleNav"
      aria-label="Toggle navigation"
    >
      <span class="block w-6 h-0.5 bg-gray-800 mb-1" />
      <span class="block w-6 h-0.5 bg-gray-800 mb-1" />
      <span class="block w-6 h-0.5 bg-gray-800" />
    </button>
    <div
      id="navbarSupportedContent"
      class="flex-grow-0 mb-auto w-full items-start"
      :class="{ 'hidden': !isNavOpen, 'lg:flex': true }"
    >
      <ul class="flex flex-col w-full">
        <li class="block">
          <a
            class="block font-semibold uppercase text-blue-900 hover:text-blue-700 js-scroll-trigger"
            href="#about"
          >About</a>
        </li>
        <li
          v-for="section in sections"
          class="block"
        >
          <a
            class="block font-semibold uppercase text-blue-900 hover:text-blue-700 js-scroll-trigger"
            :href="'#' + section.id"
          >{{ section.name }}</a>
        </li>
        <li class="block">
          <a
            class="block font-semibold uppercase text-blue-900 hover:text-blue-700 js-scroll-trigger"
            href="#sources"
          >Sources
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  sections: Array
})

const isNavOpen = ref(false)

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value
}
</script>

