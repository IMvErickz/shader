import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getProductById } from '@/api/product/get-product-by-id'
import { input } from '@/theme/components/input'
import { Button } from '../button'
import { updateProduct } from '@/api/product/update-product'
import { toast } from 'sonner'
import { useParams } from 'next/navigation'
import { queryClient } from '@/lib/query-client'
import { ProductResponse } from '@/@types/product/product-response'

interface RegisterModalProps {
  children: ReactNode
  id: string
}

const formData = z.object({
  name: z.string().optional(),
  price: z.union([z.number(), z.nan()]).optional(),
  quantity: z.number().optional(),
})

export type EditProductFormData = z.infer<typeof formData>

export function EditProductModal({ children, id }: RegisterModalProps) {
  const params = useParams()
  const enterpriseId = String(params.id)

  const { data } = useQuery({
    queryKey: ['product-by-id', id],
    queryFn: () => getProductById({ id }),
  })

  const { register, handleSubmit } = useForm<EditProductFormData>({
    resolver: zodResolver(formData),
    defaultValues: {
      name: data?.name,
      price: data?.price,
      quantity: data?.quantity,
    },
  })

  const queryKeyListProducts = ['products', enterpriseId]
  const queryKeyProductEdited = ['product-by-id', id]

  const { mutateAsync: updateProductFn } = useMutation({
    mutationFn: updateProduct,
    onMutate({ id, name, price, quantity }) {
      const cachedProducts =
        queryClient.getQueryData<ProductResponse[]>(queryKeyListProducts)

      const cachedProductEdited =
        queryClient.getQueryData<ProductResponse>(queryKeyListProducts)

      if (cachedProducts && name && price && quantity) {
        const listWithoutProductEdited = cachedProducts.filter(
          (product) => product.id !== id,
        )

        const productEdited = cachedProducts.find(
          (product) => product.id === id,
        )

        if (productEdited && cachedProductEdited) {
          const updateListProduct = queryClient.setQueryData<ProductResponse[]>(
            queryKeyListProducts,
            [
              { ...productEdited, id, name, price, quantity },
              ...listWithoutProductEdited,
            ],
          )

          const updateProductEdited = queryClient.setQueryData<ProductResponse>(
            queryKeyProductEdited,
            { ...cachedProductEdited, id, name, price },
          )

          return { updateListProduct, updateProductEdited }
        }
      }
    },
  })

  async function handleEditProduct(data: EditProductFormData) {
    const { name, price, quantity } = data

    try {
      await updateProductFn({ id, name, price, quantity })
      toast.success('Produto alterado com sucesso')
    } catch (err) {
      toast.error('Algo de errado aconteceu')
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content
          className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] w-[750px] translate-x-[-50%] 
                translate-y-[-50%] rounded-[6px] bg-zinc-700 border-2 border-zinc-500 
                border-solid p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] 
                focus:outline-none"
        >
          <Dialog.Title className="text-white m-0 text-2xl font-medium">
            Editar Produto: {data?.name}
          </Dialog.Title>
          <form
            onSubmit={handleSubmit(handleEditProduct)}
            className="flex flex-col items-center justify-center gap-y-4"
          >
            <input
              type="text"
              {...register('name')}
              className={input({ default: 'primary' })}
            />
            <input
              type="number"
              {...register('price', { valueAsNumber: true })}
              step="0.01"
              className={input({ default: 'primary' })}
            />
            <input
              type="number"
              {...register('quantity', { valueAsNumber: true })}
              step="0.01"
              className={input({ default: 'primary' })}
            />
            <Button type="submit">Enviar</Button>
          </form>
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <X className="text-white" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
