import { get, post } from "@/composables/useFetch";
import { defineStore } from "pinia";
import { ref } from "vue";
import type { Recipe } from "../types";

const http = import.meta.env.VITE_HTTP;

const message = ref<string | null>(null);

export const useRecipes = defineStore("recipes", () => {
  const array = ref<Recipe>();
  const object = ref<Recipe>();

  const write = async (data: Recipe) => {
    try {
      object.value = await post<Recipe>("http://localhost:9000/v1/recipes", data);
    } catch (error: any) {
      message.value = "Что-то пошло не так";
    }
  };

  const read = async () => {
    try {
      array.value = await get<Recipe>(`${http}/v1/recipes`);
    } catch (error: any) {
      message.value = "Что-то пошло не так";
    }
  };

  const readOne = async (data: string) => {
    try {
      object.value = await get<Recipe>(`${http}/v1/recipes/${data}`);
    } catch (error: any) {
      message.value = "Что-то пошло не так";
    }
  };

  const readBy = async (data: string) => {
    try {
      array.value = await get<Recipe>(`${http}/v1/recipes/collections/${data}`);
    } catch (error: any) {
      message.value = "Что-то пошло не так";
    }
  };

  return { array, object, message, write, read, readOne, readBy };
});
