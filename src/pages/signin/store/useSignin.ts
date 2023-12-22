import { post } from '@/composables/useFetch'
import { useLoader } from '@/stores/useLoader'
import { defineStore } from 'pinia'
import type { Guest, User } from '../types'

const { setLoader } = useLoader()

const setStorage = async (response: User) => {
  sessionStorage.setItem('ssoid', JSON.stringify(response.token))
}

export const useSignin = defineStore('signin', () => {
  const write = async (data: Guest) => {
    setLoader(true)
    try {
      const response = await post<User>('http://localhost:9000/v1/users/verify', data)

      await setStorage(response)
    } catch (error) {
      throw new Error('Неверный логин или пароль')
    }
  }

  return { write }
})
