import { parseCookies } from 'nookies'

export function getToken() {
  const cookies = parseCookies()
  const token = cookies['@token']

  return token
}
