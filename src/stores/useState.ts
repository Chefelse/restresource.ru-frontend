import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoader = defineStore("loader", () => {
  const state = ref(true);

  return { state };
});
