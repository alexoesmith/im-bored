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
    <h1 class="text-2xl font-bold underline absolute top-10">I am bored.</h1>
    <p v-show="!activity && !loading" class="text-6xl md:text-8xl text-center">
      Bored?
      <span class="text-2xl pt-6 block dark:text-white"
        >Click the button below for a random activity!</span
      >
    </p>
    <div v-if="count <= 50">
      <div v-show="!loading">
        <p v-if="activity" class="text-3xl text-center" id="acivity">{{ activity.activity }}.</p>
      </div>
    </div>
    <div v-else>
      <h3 class="text-6xl font-semibold text-center">Ok, I give up.</h3>
    </div>
    <div v-show="loading && count <= 50">
      <p class="text-3xl text-center opacity-30">I am loading...</p>
    </div>
    <div v-if="error">
      <p class="text-sm text-center">An error has occured, please try again later.</p>
    </div>
    <div class="w-full px-10 absolute bottom-10">
      <button
        @click="loadActivity"
        class="bg-action-dark text-white rounded-lg px-6 py-6 w-full shadow-sm text-2xl font-bold"
      >
        <span v-if="!activity">I am bored...</span>
        <span v-else>I'm still bored...</span>
      </button>
    </div>
  </div>
</template>

<script>
import getActivity from "./composables/getActivity";

export default {
  setup() {
    const { activity, loading, error, count, loadActivity } = getActivity();
    return { activity, getActivity, loading, error, count, loadActivity };
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
