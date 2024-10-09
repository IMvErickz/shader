import { MemebersEnterprise } from '../members/members-enterprise'

export interface EnterpriseResponse {
  id: string
  name: string
  created_at: string
  members: MemebersEnterprise[]
}
