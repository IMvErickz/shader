import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ProductForm } from './ProductForm'
import { ReactNode } from 'react'

interface RegisterModalProps {
  children: ReactNode
}

const formData = z.object({
  name: z.string(),
  price: z.number(),
  quantity: z.number(),
  measure: z.string(),
  categoryId: z.string(),
  barcode: z.string(),
})

export type ProductFormData = z.infer<typeof formData>

export function RegisterModal({ children }: RegisterModalProps) {
  const form = useForm<ProductFormData>({
    resolver: zodResolver(formData),
  })

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
            Cadastrar Produto
          </Dialog.Title>
          <FormProvider {...form}>
            <section>
              <ProductForm />
            </section>
          </FormProvider>
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
