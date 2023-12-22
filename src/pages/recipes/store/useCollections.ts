import { defineStore } from "pinia";
import { ref } from "vue";

export const useCollections = defineStore("collections", () => {
  const collections = ref();

  const read = () => {
    setTimeout(() => {
      collections.value = [
        {
          id: 1,
          name: "Мясо и птица",
          description: "",
          image: "",
          categories: [
            {
              id: 1,
              name: "Говядина",
              description: "",
              image: "",
            },
            {
              id: 2,
              name: "Курица",
              description: "",
              image: "",
            },
            {
              id: 3,
              name: "Утка",
              description: "",
              image: "",
            },
            {
              id: 4,
              name: "Ягненок",
              description: "",
              image: "",
            },
            {
              id: 5,
              name: "Свинина",
              description: "",
              image: "",
            },
            {
              id: 6,
              name: "Оленина",
              description: "",
              image: "",
            },
            {
              id: 7,
              name: "Баранина",
              description: "",
              image: "",
            },
            {
              id: 8,
              name: "Лосятина",
              description: "",
              image: "",
            },
          ],
        },
        {
          id: 2,
          name: "Рыба и морепродукты",
          description: "",
          image: "",
          categories: [
            {
              id: 9,
              name: "Креветки",
              description: "",
              image: "",
            },
            {
              id: 10,
              name: "Кальмары",
              description: "",
              image: "",
            },
            {
              id: 11,
              name: "Лосось",
              description: "",
              image: "",
            },
            {
              id: 12,
              name: "Сибас",
              description: "",
              image: "",
            },
            {
              id: 13,
              name: "Треска",
              description: "",
              image: "",
            },
            {
              id: 14,
              name: "Акула",
              description: "",
              image: "",
            },
          ],
        },
        {
          id: 3,
          name: "Десерты и выпечка",
          description: "",
          image: "",
          categories: [
            {
              id: 9,
              name: "Креветки",
              description: "",
              image: "",
            },
            {
              id: 10,
              name: "Кальмары",
              description: "",
              image: "",
            },
            {
              id: 11,
              name: "Лосось",
              description: "",
              image: "",
            },
            {
              id: 12,
              name: "Сибас",
              description: "",
              image: "",
            },
            {
              id: 13,
              name: "Треска",
              description: "",
              image: "",
            },
            {
              id: 14,
              name: "Акула",
              description: "",
              image: "",
            },
          ],
        },
        {
          id: 4,
          name: "Кухни мира",
          description: "",
          image: "",
          categories: [
            {
              id: 9,
              name: "Креветки",
              description: "",
              image: "",
            },
            {
              id: 10,
              name: "Кальмары",
              description: "",
              image: "",
            },
            {
              id: 11,
              name: "Лосось",
              description: "",
              image: "",
            },
            {
              id: 12,
              name: "Сибас",
              description: "",
              image: "",
            },
            {
              id: 13,
              name: "Треска",
              description: "",
              image: "",
            },
            {
              id: 14,
              name: "Акула",
              description: "",
              image: "",
            },
          ],
        },
        {
          id: 5,
          name: "Типы блюд",
          description: "",
          image: "",
          categories: [
            {
              id: 9,
              name: "Креветки",
              description: "",
              image: "",
            },
            {
              id: 10,
              name: "Кальмары",
              description: "",
              image: "",
            },
            {
              id: 11,
              name: "Лосось",
              description: "",
              image: "",
            },
            {
              id: 12,
              name: "Сибас",
              description: "",
              image: "",
            },
            {
              id: 13,
              name: "Треска",
              description: "",
              image: "",
            },
            {
              id: 14,
              name: "Акула",
              description: "",
              image: "",
            },
          ],
        },
      ];
    }, 2000);
  };
  return { read, collections };
});
