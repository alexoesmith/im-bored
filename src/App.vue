<template>
  <div
    class="
      app
      relative
      p-10
      bg-body
      dark:bg-body-dark dark:text-white
      flex flex-col
      items-center
      justify-center
      h-screen
    "
  >
    <h1 class="text-2xl font-bold underline absolute top-10">I am Bored.</h1>
    <p v-if="!activity && !loading" class="text-7xl sm:text-8xl text-center">
      Bored?
      <span class="text-2xl pt-6 block dark:text-white"
        >Click the button below for a random activity!</span
      >
    </p>
    <div v-if="!loading">
      <p v-if="activity" class="text-3xl text-center" id="acivity">{{ activity.data.activity }}.</p>
    </div>
    <div v-if="loading">
      <p class="text-3xl text-center opacity-30">Loading...</p>
    </div>
    <div v-if="error">
      <p class="text-sm text-center">An error has occured, please try again later.</p>
    </div>
    <div class="w-full px-10 absolute bottom-10">
      <button
        @click="getActivity"
        class="
          bg-body-dark
          dark:bg-action-dark
          text-white
          rounded-lg
          px-6
          py-6
          w-full
          shadow-sm
          text-2xl
          font-bold
        "
      >
        <span v-if="activity">I'm still bored...</span>
        <span v-else>I am bored...</span>
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import axios from "axios";

export default {
  setup() {
    const activity = ref(null);
    const loading = ref(null);
    const error = ref("");

    const getActivity = async () => {
      loading.value = true;
      try {
        const result = await axios.request("https://www.boredapi.com/api/activity");
        activity.value = result;
      } catch (error) {
        error.value = error;
      } finally {
        loading.value = false;
      }
    };
    return { activity, getActivity, loading, error };
  },
  // Set viewport height for mobile device UI
  methods: {
    setViewHeight: function () {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    },
  },
  created() {
    this.setViewHeight();
    window.addEventListener("resize", () => {
      this.setViewHeight();
    });
  },
};
</script>
