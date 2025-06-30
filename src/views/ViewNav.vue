<template>
  <!-- Mobile nav toggle button -->
  <button
    class="lg:hidden fixed top-4 left-4 z-[60] p-2 bg-[#fff22d] text-gray-800 rounded"
    type="button"
    @click="handleNavToggle"
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
        ref="navContent"
        class="flex flex-col flex-1 w-full items-start lg:items-start justify-start lg:justify-start overflow-y-auto min-h-0 relative"
        @scroll="checkScroll"
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
      
      <!-- Scroll indicator -->
      <div
        v-show="showScrollIndicator"
        class="absolute bottom-2 right-2 z-10 bg-blue-900 text-white rounded-full p-2 cursor-pointer shadow-lg hover:bg-blue-700 transition-colors"
        @click="scrollToBottom"
        title="More navigation items below"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

defineProps({
  sections: Array
})

const isNavOpen = ref(false)
const showScrollIndicator = ref(false)
const navContent = ref(null)

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value
}

// Close nav when clicking nav links on mobile
const closeNavOnMobile = () => {
  if (window.innerWidth < 1024) {
    isNavOpen.value = false
  }
}

// Check if content is overflowing and needs scroll indicator
const checkScroll = () => {
  if (!navContent.value) return
  
  const element = navContent.value
  const hasOverflow = element.scrollHeight > element.clientHeight
  const isAtBottom = element.scrollTop + element.clientHeight >= element.scrollHeight - 5
  
  showScrollIndicator.value = hasOverflow && !isAtBottom
}

// Scroll to bottom of nav content
const scrollToBottom = () => {
  if (!navContent.value) return
  
  navContent.value.scrollTo({
    top: navContent.value.scrollHeight,
    behavior: 'smooth'
  })
}

// Check scroll state when component mounts and when nav opens
onMounted(() => {
  nextTick(() => {
    checkScroll()
  })
})

// Watch for nav state changes to recheck scroll
const handleNavToggle = () => {
  toggleNav()
  nextTick(() => {
    checkScroll()
  })
}
</script>

