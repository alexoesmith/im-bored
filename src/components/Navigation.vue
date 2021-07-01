<template>
  <div class="container m-auto">
    <header class="flex items-center justify-between py-6">
      <div class="flex items-end">
        <router-link to="/">
          <h1 class="text-4xl font-semibold underline text-black">alexoesmith<span>.</span></h1>
        </router-link>
      </div>
      <nav>
        <ul class="flex space-x-10 items-center text-md">
          <li
            v-for="item in menuItems"
            :key="item.id"
            class="text-black"
            :class="{
              'bg-black py-1 px-2 !text-white rounded-xl': item.isButton,
            }"
          >
            <router-link :to="item.path">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  name: "Navigation",
  setup() {
    const menuItems = ref([]);
    return {
      menuItems,
    };
  },
};
</script>
