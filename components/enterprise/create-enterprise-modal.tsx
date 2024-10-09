import * as Dialog from '@radix-ui/react-dialog'
import { Plus, X } from 'lucide-react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { input } from '@/theme/components/input'
import { createEnterprise } from '@/api/enterprise/create-enterprise'
import { toast } from 'sonner'
import { useMutation } from '@tanstack/react-query'
import { parseCookies } from 'nookies'
import { queryClient } from '@/lib/query-client'
import { EnterpriseResponse } from '@/@types/enterprise/enterprise-response'

const enterpriseSchema = z.object({
  name: z.string(),
})

type EnterpriseData = z.infer<typeof enterpriseSchema>

export function CreateEnterpriseModal() {
  const { register, handleSubmit } = useForm<EnterpriseData>({
    resolver: zodResolver(enterpriseSchema),
  })

  const cookies = parseCookies()
  const userId = cookies['@user_id']
  const username = cookies['@username']

  const { mutateAsync: createEnterpriseMutate } = useMutation({
    mutationFn: createEnterprise,
    onMutate: ({ name }) => {
      const key = ['enteprise-list', userId]
      const cache = queryClient.getQueryData<EnterpriseResponse[]>(key)

      if (cache) {
        queryClient.setQueryData<EnterpriseResponse[]>(key, [
          ...cache,
          {
            id: '',
            name,
            created_at: '',
            members: [{ user: { name: username } }],
          },
        ])
        return { cache }
      }
    },
  })

  async function handleCreateEnterprise(data: EnterpriseData) {
    const { name } = data
    try {
      await createEnterpriseMutate({ name })
      toast.success('Empresa criada com sucesso')
    } catch (err) {
      toast.error('Algo de errado aconteceu')
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="size-full flex items-center justify-center gap-x-2 text-white">
          <Plus className="size-4" />
          Cadastrar empresa
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
            Cadastrar Empresa
          </Dialog.Title>
          <form
            onSubmit={handleSubmit(handleCreateEnterprise)}
            className="flex flex-col items-center gap-y-4 pt-4"
          >
            <input
              className={input({ default: 'primary' })}
              {...register('name')}
            />
            <button
              className="bg-orange-600 rounded text-white font-semibold w-full py-2 hover:bg-orange-800 transition-colors"
              type="submit"
            >
              Cadastrar
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
