interface EnterpriseCardProps {
  name: string
  ownerName: string
  isLoading: boolean
}

export function EnterpriseCard({
  name,
  ownerName,
  isLoading,
}: EnterpriseCardProps) {
  return (
    <div className="h-40 w-60 border border-solid border-zinc-400 rounded-lg flex flex-col items-center justify-center gap-y-4">
      <span className="text-white text-2xl font-semibold">
        {isLoading ? (
          <div className="w-20 h-10 flex animate-pulse">
            <div className="size-full bg-red-600 rounded-full w-48 mb-4" />
          </div>
        ) : (
          name
        )}
      </span>
      <span className="text-white text-base font-normal">
        Owner: {ownerName}
      </span>
    </div>
  )
}
