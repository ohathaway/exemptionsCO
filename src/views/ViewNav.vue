<template>
  <nav
    class="side-nav navbar navbar-expand-lg navbar-dark fixed-top"
  >
    <a
      class="navbar-brand js-scroll-trigger"
      href="#page-top"
    >
      <span class="d-block d-lg-none">CO Exemptions</span>
      <span class="d-none d-lg-block">
        <img
          class="img-fluid img-profile rounded-circle mx-auto mb-2"
          src="@/assets/img/colorado500.png"
          alt=""
        >
      </span>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div
      id="navbarSupportedContent"
      class="collapse navbar-collapse"
    >
      <ul class="navbar-nav">
        <li class="nav-item">
          <a
            class="nav-link js-scroll-trigger"
            href="#about"
          >About</a>
        </li>
        <li
          v-for="section in sections"
          class="nav-item"
        >
          <a
            class="nav-link js-scroll-trigger"
            :href="'#' + section.id"
          >{{ section.name }}</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link js-scroll-trigger"
            href="#sources"
          >Sources
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  sections: Array
})
</script>

<style lang="scss">
nav {
  background: $yellow-co
}
</style>
