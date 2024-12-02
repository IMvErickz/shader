'use client'

import { getEnterpriseById } from '@/api-services/enterprise/get-enterprise-by-id'
import { updateEnterprise } from '@/api-services/enterprise/update-enterprise'
import { Button } from '@/components/button'
import { input } from '@/theme/components/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const updateEnterpriseSchema = z.object({
  name: z.string().min(3),
})

type UpdateEnterpriseData = z.infer<typeof updateEnterpriseSchema>

export function ChangeEnterpriseNameForm() {
  const params = useParams()
  const enterpriseId = String(params.id)

  const { data } = useQuery({
    queryKey: ['enteprise', enterpriseId],
    queryFn: () => getEnterpriseById({ id: enterpriseId }),
  })

  const { register, handleSubmit } = useForm<UpdateEnterpriseData>({
    resolver: zodResolver(updateEnterpriseSchema),
    defaultValues: {
      name: data?.name,
    },
  })

  async function handleUpdateEnterpriseName(data: UpdateEnterpriseData) {
    const { name } = data

    try {
      await updateEnterprise({ id: enterpriseId, name })
      toast.success('Nome alterado com sucesso')
    } catch (err) {
      toast.error('Algo de errado aconteceu')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleUpdateEnterpriseName)}
      className="w-full flex flex-col items-start justify-center gap-y-4 px-4 rounded border border-solid border-zinc-400 p-4"
    >
      <h2 className="text-white text-xl text-semibold">Nome da empresa</h2>
      <input
        type="text"
        className={input({ default: 'primary', className: 'w-[600px]' })}
        {...register('name')}
      />
      <Button className="w-20 h-10" type="submit">
        Salvar
      </Button>
    </form>
  )
}
