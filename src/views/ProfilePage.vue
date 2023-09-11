<template>
  <div class="flex flex-col justify-center items-center">
    <h1 class="text-[40px] my-5 ml-7 text-white">ProfilePage</h1>
    <img class="my-[109px]" :src="ProfilePageImage" alt="" />
  </div>
</template>

<script setup>
const ProfilePageImage = require("/src/assets/profile.png");
</script>
