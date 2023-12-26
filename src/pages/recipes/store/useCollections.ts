import { get } from "@/composables/useFetch";
import { defineStore } from "pinia";
import { ref } from "vue";
import type { Collections } from "../types";

const http = import.meta.env.VITE_HTTP;

export const useCollections = defineStore("collections", () => {
  const array = ref<Collections | null>(null);
  const message = ref<string | null>(null);

  const read = async () => {
    try {
      const response = await get<Collections>(`${http}/v1/collections`);

      array.value = response;
    } catch (error: any) {
      console.log(error.message);

      message.value = "Что-то пошло не так";
    }
  };

  return { read, array };
});
