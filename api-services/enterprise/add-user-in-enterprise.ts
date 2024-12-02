import { api } from '@/lib/axios'

interface AddUserInEnterpriseParams {
  userId: string
  enterpriseId: string
}

export async function addUserInEnterprise({
  userId,
  enterpriseId,
}: AddUserInEnterpriseParams) {
  await api.put(`/user/${userId}/enterprise/${enterpriseId}`)
}
