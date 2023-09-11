<template>
  <div>
    <header
      class="flex justify-around gap-40 h-16 items-center bg-[#ffffff] border-r-[#cb3d8b] border-b-[#cb3d8b] border-4 border-t-[#0380fa] border-l-[#0380fa] my-4 w-[80%] mx-auto rounded-md"
    >
      <div class="mx-10">
        <img class="w-10" :src="logo" alt="" />
      </div>
      <div>
        <ul class="flex gap-16 ml-32">
          <li
            class="text-xl transition-colors ease-in-out hover:text-[#cb3d8b]"
            v-for="link in router.options.routes"
            :key="link.name"
          >
            <router-link :to="{ name: link.name }">{{
              link.meta.title
            }}</router-link>
          </li>
        </ul>
      </div>

      <div class="flex mx-10 gap-5">
        <button
          class="bg-[#0380fa] py-1 px-3 border border-hidden rounded-md text-white"
        >
          login
        </button>
        <button
          class="bg-[#31659a] py-1 px-3 border border-hidden rounded-md text-white"
        >
          SignUp
        </button>
      </div>
    </header>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const logo = require("../assets/logo_318-195518.png");
const router = useRouter();
</script>
