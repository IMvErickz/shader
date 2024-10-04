import { api } from '@/lib/axios'

interface CreateEnterpriseProps {
  name: string
}

export async function createEnterprise({ name }: CreateEnterpriseProps) {
  await api.post('/enterprise', {
    name,
  })
}
