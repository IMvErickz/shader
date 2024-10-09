'use client'

import { useForm, Controller } from 'react-hook-form'
import { Button } from '../button'
import { InputPassword } from '../inputPassword'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@/lib/axios'
import ReactLoading from 'react-loading'
import { setCookie } from 'nookies'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { input } from '@/theme/components/input'

const authSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type AuthType = z.infer<typeof authSchema>

interface AuthResponseProps {
  access_token: string
  user_id: string
  name: string
}

export function SignInForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useForm<AuthType>({
    resolver: zodResolver(authSchema),
  })

  const router = useRouter()

  async function handleAuth(data: AuthType) {
    const { email, password } = data

    try {
      const response = await api.post<AuthResponseProps>('/auth', {
        email,
        password,
      })

      setCookie(null, '@token', response.data.access_token, {
        maxAge: 7 * 24 * 60 * 60,
      })

      setCookie(null, '@user_id', response.data.user_id, {
        maxAge: 7 * 24 * 60 * 60,
      })

      setCookie(null, '@token', response.data.access_token, {
        maxAge: 7 * 24 * 60 * 60,
      })

      setCookie(null, '@username', response.data.name, {
        maxAge: 7 * 24 * 60 * 60,
      })

      router.push('/')
    } catch (err) {
      toast.error('Algo de errado aconteceu, tente novamente')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleAuth)}
      className="w-[445px] flex flex-col"
    >
      <div className="w-full flex flex-col gap-y-4 mt-12">
        <input
          type="email"
          className={input({ default: 'primary' })}
          placeholder="E-mail"
          {...register('email')}
        />

        <Controller
          control={control}
          name="password"
          render={({ field }) => {
            return <InputPassword placeholder="Senha" {...field} />
          }}
        />
      </div>
      <div className="w-full mt-7">
        <Button type="submit" disabled={isSubmitting || !isValid}>
          {isSubmitting ? (
            <ReactLoading
              type="spin"
              color="#ffff"
              height={'5%'}
              width={'5%'}
              className="flex items-center justify-center"
            />
          ) : (
            'Entrar'
          )}
        </Button>
      </div>
    </form>
  )
}
