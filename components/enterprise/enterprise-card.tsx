import Link from 'next/link'

interface EnterpriseCardProps {
  name: string
  ownerName: string
  isLoading: boolean
  id: string
}

export function EnterpriseCard({
  name,
  ownerName,
  isLoading,
  id,
}: EnterpriseCardProps) {
  return (
    <Link href={`/enterprise/dashboard/${id}`}>
      <div className="h-40 w-60 border border-solid border-zinc-400 rounded-lg flex flex-col items-center justify-center gap-y-4 hover:bg-zinc-700 transition-colors">
        <span className="text-white text-2xl font-semibold">
          {isLoading ? (
            <div className="w-52 h-2.5 flex animate-pulse">
              <div className="size-full bg-zinc-500 rounded-full  mb-4" />
            </div>
          ) : (
            name
          )}
        </span>
        <span className="text-white text-base font-normal">
          {isLoading ? (
            <div className="w-52 h-2.5 flex animate-pulse">
              <div className="size-full bg-zinc-500 rounded-full  mb-4" />
            </div>
          ) : (
            `Owner: ${ownerName}`
          )}
        </span>
      </div>
    </Link>
  )
}
