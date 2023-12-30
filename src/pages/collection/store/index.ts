import { get } from "@/composables/useFetch";
import type { Collections } from "@/pages/recipes/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCollections = defineStore("collections", () => {
  const array = ref<Collections | null>(null);
  const object = ref<Collections | null>(null);
  const message = ref<string | null>(null);

  const read = async () => {
    try {
      const response = await get<Collections>("/v1/collections");

      array.value = response;
    } catch (error: any) {
      console.log(error.message);

      message.value = "Что-то пошло не так";
    }
  };

  const readOne = async (data: string) => {
    try {
      object.value = await get<Collections>(`/v1/collections/${data}`);
    } catch (error: any) {
      message.value = "Что-то пошло не так";
    }
  };

  return { read, readOne, array, object };
});
