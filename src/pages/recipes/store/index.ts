import { get, post } from "@/composables/useFetch";
import { defineStore } from "pinia";
import { ref } from "vue";
import type { Ingredients, Recipe } from "../types";

const message = ref<string | null>(null);

export const useRecipes = defineStore("recipes", () => {
  const array = ref<Recipe | any>([]);
  const object = ref<Recipe>();
  const ingredients = ref<Ingredients | any>([]);

  const write = async (data: Recipe) => {
    try {
      object.value = await post<Recipe>("/v1/recipes", data);
    } catch (error: any) {
      message.value = "Что-то пошло не так";
    }
  };

  const read = async () => {
    try {
      array.value = await get<Recipe>("/v1/recipes");
    } catch (error: any) {
      message.value = "Что-то пошло не так";
    }
  };

  const readIngredientsMatched = async () => {
    try {
      ingredients.value = await get<Recipe>("/v1/ingredients/matched");
    } catch (error: any) {
      message.value = "Что-то пошло не так";
    }
  };

  const readOne = async (data: string) => {
    try {
      object.value = await get<Recipe>(`/v1/recipes/${data}`);
    } catch (error: any) {
      message.value = "Что-то пошло не так";
    }
  };

  const readBy = async (data: string) => {
    try {
      array.value = await get<Recipe>(`/v1/recipes/collections/${data}`);
    } catch (error: any) {
      message.value = "Что-то пошло не так";
    }
  };

  return { array, object, message, ingredients, write, read, readOne, readBy, readIngredientsMatched };
});
