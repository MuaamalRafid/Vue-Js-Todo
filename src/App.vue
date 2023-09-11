<template>
  <Header />

  <router-view />
</template>

<script setup>
import Header from "./components/HeaderComp.vue";
</script>

<style lang="scss">
body {
  background: rgb(64, 125, 185);
  background: linear-gradient(
    0deg,
    rgba(64, 125, 185, 1) 0%,
    rgba(48, 193, 200, 1) 0%,
    rgba(51, 15, 107, 1) 100%
  );
  background-repeat: repeat;
}
ul {
  a {
    text-decoration: none;
    color: #0380fa;

    &:hover {
      color: #cb3d8b;
    }
    &.router-link-active {
      color: #cb3d8b;
    }
    font-family: "Cairo", sans-serif;
    font-weight: 500;
  }
}

@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap");
</style>
