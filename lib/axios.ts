import axios from 'axios'
import { parseCookies } from 'nookies'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

const cookies = parseCookies()

const token = cookies['@token']

if (token) {
  api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`

    return config
  })
}
