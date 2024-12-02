'use client'

import { Category } from '@/@types/category/category'
import { createCategory } from '@/api-services/category/create-category'
import { Button } from '@/components/button'
import { queryClient } from '@/lib/query-client'
import { input } from '@/theme/components/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const createCategorySchema = z.object({
  name: z.string(),
})

type CreateCategoryData = z.infer<typeof createCategorySchema>

export function CreateCategoryForm() {
  const params = useParams()
  const enterpriseId = String(params.id)

  const { register, handleSubmit } = useForm<CreateCategoryData>({
    resolver: zodResolver(createCategorySchema),
  })

  const queryKey = ['product-category', enterpriseId]

  const { mutateAsync: createCategoryFn } = useMutation({
    mutationFn: createCategory,
    onMutate({ name }) {
      const cachedQuery = queryClient.getQueryData<Category[]>(queryKey)

      if (cachedQuery) {
        return queryClient.setQueryData<Category[]>(queryKey, [
          ...cachedQuery,
          { id: 'random', name, description: null, _count: { Product: 0 } },
        ])
      }
    },
  })

  async function handleCreateCategory(data: CreateCategoryData) {
    const { name } = data
    await createCategoryFn({ name, enterpriseId })
  }

  return (
    <form
      onSubmit={handleSubmit(handleCreateCategory)}
      className="flex items-center justify-center gap-x-2"
    >
      <input
        type="text"
        className={input({ default: 'primary' })}
        placeholder="Nome da categoria"
        {...register('name')}
      />
      <Button type="submit" className="w-40">
        Salvar
      </Button>
    </form>
  )
}
