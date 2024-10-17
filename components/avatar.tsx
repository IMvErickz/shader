import * as AvatarRadix from '@radix-ui/react-avatar'
import { parseCookies } from 'nookies'

export function Avatar() {
  const cookies = parseCookies()
  const userName = String(cookies['@username'])

  const separateUsername = userName.split(' ')
  const firstNameSeparate = String(separateUsername[0])
  const lastNameSeparate = String(separateUsername[1])
  const firstName = firstNameSeparate.substring(0, 1)
  const lastName = lastNameSeparate.substring(0, 1)
  const concatName = firstName.concat(lastName)

  return (
    <AvatarRadix.Root className="inline-flex size-8 select-none items-center justify-center overflow-hidden rounded-full bg-blackA1 align-middle">
      <AvatarRadix.Image
        className="size-full rounded-[inherit] object-cover"
        src=""
        alt="Erick Santos"
      />
      <AvatarRadix.Fallback
        className="leading-1 flex size-full items-center justify-center bg-orange-400 font-medium text-black"
        delayMs={600}
      >
        {concatName}
      </AvatarRadix.Fallback>
    </AvatarRadix.Root>
  )
}
