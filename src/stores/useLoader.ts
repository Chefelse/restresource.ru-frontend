import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoader = defineStore('loader', () => {
  const loader = ref(true)

  const setLoader = (value: boolean) => {
    loader.value = value
  }

  return { loader, setLoader }
})
