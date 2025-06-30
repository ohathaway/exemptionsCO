<template>
  <!-- Mobile nav toggle button -->
  <button
    class="lg:hidden fixed top-4 left-4 z-[60] p-2 bg-[#fff22d] text-gray-800 rounded"
    type="button"
    @click="toggleNav"
    aria-label="Toggle navigation"
  >
    <span class="block w-6 h-0.5 bg-gray-800 mb-1" />
    <span class="block w-6 h-0.5 bg-gray-800 mb-1" />
    <span class="block w-6 h-0.5 bg-gray-800" />
  </button>

  <nav
    class="fixed top-0 left-0 z-50 h-screen w-full lg:w-64 flex flex-col text-center bg-[#fff22d] transition-transform duration-300 overflow-hidden"
    :class="{ '-translate-x-full lg:translate-x-0': !isNavOpen, 'translate-x-0': isNavOpen }"
  >
    <div class="flex flex-col h-full min-h-0">
      <a
        class="flex justify-center items-center mx-auto lg:mx-auto p-2 flex-shrink-0 js-scroll-trigger"
        href="#page-top"
      >
      <span class="block lg:hidden">CO Exemptions</span>
      <span class="hidden lg:block">
        <img
          class="w-40 h-40 rounded-full mx-auto mb-2 border-4 border-white border-opacity-20 object-cover"
          src="@/assets/img/colorado500.png"
          alt=""
        >
      </span>
      </a>
      <div
        id="navbarSupportedContent"
        class="flex flex-col flex-1 w-full items-start lg:items-start justify-start lg:justify-start overflow-y-auto min-h-0"
      >
      <ul class="flex flex-col w-full space-y-2">
        <li class="block">
          <a
            class="block p-2 font-semibold uppercase text-blue-900 hover:text-blue-700 js-scroll-trigger"
            href="#about"
            @click="closeNavOnMobile"
          >About</a>
        </li>
        <li
          v-for="section in sections"
          class="block"
        >
          <a
            class="block p-2 font-semibold uppercase text-blue-900 hover:text-blue-700 js-scroll-trigger"
            :href="'#' + section.id"
            @click="closeNavOnMobile"
          >{{ section.name }}</a>
        </li>
        <li class="block">
          <a
            class="block p-2 font-semibold uppercase text-blue-900 hover:text-blue-700 js-scroll-trigger"
            href="#sources"
            @click="closeNavOnMobile"
          >Sources
          </a>
        </li>
      </ul>
      </div>
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

// Close nav when clicking nav links on mobile
const closeNavOnMobile = () => {
  if (window.innerWidth < 1024) {
    isNavOpen.value = false
  }
}
</script>

