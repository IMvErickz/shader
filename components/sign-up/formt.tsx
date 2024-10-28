'use client'

import { Controller, useForm } from 'react-hook-form'
import { Button } from '../button'
import { Input } from '../input'
import { InputPassword } from '../inputPassword'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@/lib/axios'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const signUpSchema = z.object({
  email: z
    .string({ message: 'Digite um email válido' })
    .email({ message: 'Digite um email válido' }),
  name: z
    .string({ message: 'O nome precisa ter no mínimo três caracteres' })
    .min(3, { message: 'O nome precisa ter no mínimo três caracteres' }),
  password: z
    .string({ message: 'Senha de no mínimo oito caracteres' })
    .min(8, { message: 'Senha de no mínimo oito caracteres' }),
})

type SignUpData = z.infer<typeof signUpSchema>

export function SingUpForm() {
  const [password, setPassword] = useState<string | undefined>(undefined)
  const [passwordError, setPasswordError] = useState('')

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm<SignUpData>({
    resolver: zodResolver(signUpSchema),
  })

  const router = useRouter()

  const passwordTosendInForm = watch('password')

  useEffect(() => {
    if (passwordTosendInForm !== password) {
      setPasswordError('Senhas não correspondem')
    } else {
      setPasswordError('')
    }
  }, [passwordTosendInForm, password, setPasswordError])

  async function handleCreateUser(data: SignUpData) {
    const { email, name, password } = data

    try {
      await api.post('/user', {
        email,
        name,
        password,
      })

      router.push('/sign-in')
    } catch (err) {
      toast.error('Algo de errado aconteceu', { closeButton: true })
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleCreateUser)}
      className="w-[445px] h-max flex flex-col gap-y-4 pt-4"
    >
      <Controller
        control={control}
        name="name"
        render={({ field }) => {
          return <Input placeholder="Nome" {...field} />
        }}
      />
      <Controller
        control={control}
        name="email"
        render={({ field }) => {
          return <Input placeholder="Email" type="email" {...field} />
        }}
      />
      <Controller
        control={control}
        name="password"
        render={({ field }) => {
          return <InputPassword placeholder="Senha" {...field} />
        }}
      />
      <InputPassword
        placeholder="Confirme sua senha"
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button type="submit" disabled={isSubmitting || !isValid}>
        {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
      </Button>

      <div className="w-full h-10 flex flex-col items-center justify-center pt-4">
        <span className="text-red-500">{passwordError && passwordError}</span>
        <span className="text-red-500">{errors.email?.message}</span>
        <span className="text-red-500">{errors.name?.message}</span>
        <span className="text-red-500">{errors.password?.message}</span>
      </div>
    </form>
  )
}
