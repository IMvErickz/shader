import { AddedMembersList } from '@/components/enterprise/settings/members/added-memebers-list'
import { FindMember } from '@/components/enterprise/settings/members/find-member'

export default function Members() {
  return (
    <main className="size-full flex flex-col p-4 gap-y-4">
      <section>
        <FindMember />
      </section>
      <section>
        <AddedMembersList />
      </section>
    </main>
  )
}
