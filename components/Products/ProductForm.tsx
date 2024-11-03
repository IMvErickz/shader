import { Controller, useFormContext } from 'react-hook-form'
import { Types } from '../@types/types'
import { Button } from '../button'
import { Input } from '../input'
import { ProductFormData } from './RegisterModal'
import { TypeMeasureSelect } from './type-measure-select'
import { CategorySelect } from './category-select'
import { useParams } from 'next/navigation'
import { createProduct } from '@/api/product/create-product'
import { toast } from 'sonner'
import { useMutation } from '@tanstack/react-query'
import { queryClient } from '@/lib/query-client'
import { ProductResponse } from '@/@types/product/product-response'

export function ProductForm() {
  const { control, handleSubmit, watch } = useFormContext<ProductFormData>()

  const params = useParams()
  const enterpriseId = String(params.id)

  const productMeasureType = watch('measure')

  const productsQueryKey = ['products', enterpriseId]

  const { mutateAsync: createProductMutate } = useMutation({
    mutationFn: createProduct,
    onSuccess: ({
      productCategoryId,
      enterpriseId,
      measure,
      name,
      quantity,
      userId,
      id,
      created_at: createdAt,
    }) => {
      const productsCached =
        queryClient.getQueryData<ProductResponse[]>(productsQueryKey)

      const addProductInCache: ProductResponse = {
        created_at: createdAt,
        enterpriseId,
        measure,
        name,
        quantity,
        id,
        productCategoryId,
        userId,
      }

      if (productsCached) {
        return queryClient.setQueryData<ProductResponse[]>(productsQueryKey, [
          ...productsCached,
          addProductInCache,
        ])
      }
    },
  })

  async function handleCreateProduct(data: ProductFormData) {
    const { categoryId, measure, name, quantity } = data

    try {
      await createProductMutate({
        enterpriseId,
        categoryId,
        name,
        quantity,
        measure,
      })

      toast.success('Produto cadastrado com sucesso')
    } catch (err) {
      toast.error('Algo de errado aconteceu')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleCreateProduct)}
      className="mt-8 flex flex-col"
    >
      <div className="w-full flex items-center justify-center gap-x-4">
        <div className="w-full flex flex-col">
          <fieldset className="mb-[15px] flex flex-col items-center gap-5">
            <label className="text-white text-xl" htmlFor="name">
              Nome
            </label>
            <Controller
              control={control}
              name="name"
              render={({ field }) => {
                return <Input id="name" {...field} />
              }}
            />
          </fieldset>
          <fieldset className="mb-[15px] flex flex-col items-center justify-center gap-5">
            <label className="text-white text-xl" htmlFor="price">
              Preço
            </label>
            <Controller
              control={control}
              name="price"
              render={({ field }) => {
                return (
                  <Input
                    type="number"
                    id="price"
                    {...field}
                    onChange={(event) =>
                      field.onChange(Number(event.target.value))
                    }
                  />
                )
              }}
            />
          </fieldset>
          <fieldset className="mb-[15px] flex flex-col items-center gap-5">
            <label className="text-white text-xl" htmlFor="quantity">
              Tipo
            </label>
            <TypeMeasureSelect />
          </fieldset>
        </div>
        <div className="w-full flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-2 items-center justify-center">
            <label className="text-white text-xl" htmlFor="quantity">
              Quantidade
              {productMeasureType === Types.LITER && '(L)'}
              {productMeasureType === Types.WEIGHT && '(KG)'}
              {productMeasureType === Types.UNITY && '(Unidade)'}
            </label>
            <Controller
              control={control}
              name="quantity"
              render={({ field }) => {
                return (
                  <Input
                    type="number"
                    id="quantity"
                    {...field}
                    onChange={(event) =>
                      field.onChange(Number(event.target.value))
                    }
                  />
                )
              }}
            />
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <label className="text-white text-xl" htmlFor="quantity">
              Categoria
            </label>
            <CategorySelect />
          </div>
        </div>
      </div>
      <div className="mt-[25px] w-full flex flex-col items-center justify-center">
        <Button className="w-28" type="submit">
          Cadastrar
        </Button>
      </div>
    </form>
  )
}
