import { MeasureType } from '@/@types/measure/measure-enun'
import { ProductResponse } from '@/@types/product/product-response'
import { getProductById } from '@/api/product/get-product-by-id'
import { updateProduct } from '@/api/product/update-product'
import { queryClient } from '@/lib/query-client'
import { input } from '@/theme/components/input'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Plus, Minus, X } from 'lucide-react'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

interface RegisterWriteOffModalProps {
  id: string
}

const registerWriteOffSchema = z.object({
  quantity: z.number(),
})

type RegisterWriteOffData = z.infer<typeof registerWriteOffSchema>

export function RegisterWriteOffModal({ id }: RegisterWriteOffModalProps) {
  const [quantity, setQuantity] = useState(0)
  const params = useParams()
  const enterpriseId = String(params.id)
  const { data } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById({ id }),
  })

  const { setValue, handleSubmit } = useForm<RegisterWriteOffData>({
    resolver: zodResolver(registerWriteOffSchema),
  })

  useEffect(() => {
    if (data?.quantity) {
      setQuantity(data?.quantity)
    }
  }, [data])

  useEffect(() => {
    if (quantity < 0) {
      setQuantity(0)
    }
  }, [quantity])

  useEffect(() => {
    setValue('quantity', quantity)
  }, [quantity, setValue])

  const { mutateAsync: updateProductMutation } = useMutation({
    mutationFn: updateProduct,
    onMutate: ({ id, quantity }) => {
      const cached = queryClient.getQueryData<ProductResponse[]>([
        'products',
        enterpriseId,
      ])

      const filterProduct = cached?.find((product) => product.id === id)
      const filterProductWithoutUpdated = cached?.filter(
        (product) => product.id !== id,
      )

      if (filterProduct && filterProductWithoutUpdated && quantity) {
        const UpdateProductCached: ProductResponse = {
          id,
          name: filterProduct.name,
          quantity,
          price: filterProduct.price,
          created_at: filterProduct.created_at,
          enterpriseId: filterProduct.enterpriseId,
          measure: filterProduct.measure,
          productCategoryId: filterProduct.productCategoryId,
          userId: filterProduct.userId,
          category: filterProduct.category,
        }

        return queryClient.setQueryData<ProductResponse[]>(
          ['products', enterpriseId],
          [...filterProductWithoutUpdated, UpdateProductCached],
        )
      }

      return cached
    },
  })

  if (!data) {
    return null
  }

  const productMeasure = data.measure

  function handlePlusQuantity() {
    if (productMeasure !== MeasureType.UNITY) {
      setQuantity((state) => {
        const sumReplacedValue = state + 0.1

        return Number(sumReplacedValue.toFixed(1))
      })
    } else {
      setQuantity((state) => state + 1)
    }
  }

  function handleLessQuantity() {
    if (productMeasure !== MeasureType.UNITY) {
      setQuantity((state) => {
        const sumReplacedValue = state - 0.1

        return Number(sumReplacedValue.toFixed(1))
      })
    } else {
      setQuantity((state) => state - 1)
    }
  }

  async function handleWriteOff(data: RegisterWriteOffData) {
    const { quantity } = data

    try {
      await updateProductMutation({ id, quantity })
      toast.success('Quantidade atualizada com sucesso!')
    } catch (err) {
      toast.error('Algo de errado aconteceu')
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="size-full items-center flex justify-center gap-x-2 text-white">
          <Plus className="w-4" />
          <Minus className="w-4" />
          Registrar saída
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content
          className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] w-96 translate-x-[-50%] 
                translate-y-[-50%] rounded-[6px] bg-zinc-700 border-2 border-zinc-500 
                border-solid p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] 
                focus:outline-none"
        >
          <Dialog.Title className="text-white m-0 text-2xl font-medium">
            Registrar saida: {data.name}
            <span>
              {productMeasure === MeasureType.LITER && '(L)'}
              {productMeasure === MeasureType.WEIGHT && '(KG)'}
              {productMeasure === MeasureType.UNITY && '(U)'}
            </span>
          </Dialog.Title>
          <form
            onSubmit={handleSubmit(handleWriteOff)}
            className="flex flex-col items-center gap-y-4 pt-4"
          >
            <div className="w-full flex items-center justify-center gap-x-4 px-8">
              <button
                type="button"
                className="bg-orange-600 flex items-center justify-center rounded text-white font-semibold w-40 py-2 hover:bg-orange-800 transition-colors disabled:bg-zinc-400 disabled:cursor-not-allowed"
                onClick={handleLessQuantity}
                disabled={quantity < 1}
              >
                <Minus className="w-4" />
              </button>
              <input
                type="number"
                value={quantity}
                className={input({
                  default: 'primary',
                  className: 'w-full, text-center',
                })}
                onChange={(event) => setQuantity(event.target.valueAsNumber)}
              />
              <button
                type="button"
                className="bg-orange-600 flex items-center justify-center rounded text-white font-semibold w-40 py-2 hover:bg-orange-800 transition-colors"
                onClick={handlePlusQuantity}
              >
                <Plus className="w-4" />
              </button>
            </div>
            <button
              className="bg-orange-600 rounded text-white font-semibold w-full py-2 hover:bg-orange-800 transition-colors"
              type="submit"
            >
              Salvar
            </button>
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
