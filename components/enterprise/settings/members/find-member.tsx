'use client'

import { User } from '@/@types/members/user'
import { addUserInEnterprise } from '@/api/enterprise/add-user-in-enterprise'
import { Team } from '@/api/enterprise/find-members'
import { findUserByEmail } from '@/api/user/find-user-by-email'
import { Button } from '@/components/button'
import { queryClient } from '@/lib/query-client'
import { input } from '@/theme/components/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const findUserByEmailSchema = z.object({
  email: z.string().email(),
})

type FindUserByEmailData = z.infer<typeof findUserByEmailSchema>

export function FindMember() {
  const [user, setUser] = useState<User | null>(null)
  const [submitting, setSubmitting] = useState<boolean>(false)

  const params = useParams()
  const enterpriseId = String(params.id)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FindUserByEmailData>({
    resolver: zodResolver(findUserByEmailSchema),
  })

  async function handleFindUser(data: FindUserByEmailData) {
    const { email } = data
    try {
      const response = await findUserByEmail({ email })
      toast.success('Usuário encontrado com sucesso')
      setUser(response.user)
    } catch (err) {
      toast.error('Algo de errado aconteceu')
    }
  }

  const { mutateAsync: addUserInEnterpriseFn } = useMutation({
    mutationFn: addUserInEnterprise,
    onMutate() {
      const queryKey = ['enterprise-members', enterpriseId]

      const cachedMembers = queryClient.getQueryData<Team>(queryKey)

      if (cachedMembers && user) {
        const members = cachedMembers.members

        return queryClient.setQueryData<Team>(queryKey, {
          members: [...members, { user, role: 'admin' }],
        })
      }
    },
  })

  async function handleAddUserInEnterprise() {
    setSubmitting(true)
    try {
      if (user) {
        await addUserInEnterpriseFn({ enterpriseId, userId: user?.id })
        toast.success('Usuário adicionado com sucesso')
        setSubmitting(false)
      }
    } catch (err) {
      setSubmitting(false)
      toast.error('Algo de errado aconteceru')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleFindUser)}
      className="flex flex-col items-center justify-center gap-x-2"
    >
      <div className="w-full flex items-center justify-center gap-x-2">
        <input
          type="email"
          className={input({ default: 'primary' })}
          placeholder="Digite o email do usuário"
          {...register('email')}
        />
        <Button type="submit" className="w-40" disabled={isSubmitting}>
          {isSubmitting ? 'Procurando' : 'Procurar'}
        </Button>
      </div>
      {user && (
        <div className="pt-2">
          <ul className="flex flex-col items-start justify-center gap-y-4">
            <li className="text-white text-xl text-start">
              Usuário encontrado:{' '}
            </li>
            <li className="text-white text-xl text-start">Nome: {user.name}</li>
            <li className="text-white text-xl text-start">
              Email: {user.email}
            </li>
            <li className="w-full flex items-center justify-center pt-2">
              <Button
                type="button"
                className="w-36 text-base"
                disabled={submitting}
                onClick={handleAddUserInEnterprise}
              >
                {submitting ? 'Adicionando' : 'Adicionar usuário'}
              </Button>
            </li>
          </ul>
        </div>
      )}
    </form>
  )
}
