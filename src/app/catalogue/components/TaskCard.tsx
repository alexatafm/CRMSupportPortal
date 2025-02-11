type TaskCardProps = {
  title: string
  description: string
  duration: string
  supportCategories: string[]
  hubspotRequirements: string[]
  availableToPlans: string[]
}

export function TaskCard({ 
  title, 
  description, 
  duration, 
  supportCategories, 
  hubspotRequirements, 
  availableToPlans 
}: TaskCardProps) {
  return (
    <div className="h-[160px] bg-white hover:bg-white/95 transition-colors cursor-pointer rounded-lg">
      <div className="flex flex-col h-full p-2">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-medium text-gray-900 text-sm line-clamp-1">{title}</h3>
            <div className="flex items-center gap-1 text-gray-500 shrink-0">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="text-xs">{duration}</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 line-clamp-2 mt-0.5">{description}</p>
        </div>

        <div className="mt-auto space-y-1">
          <div className="flex flex-wrap gap-1">
            {supportCategories.map((category) => (
              <span key={category} className="px-1.5 py-0.5 text-[11px] rounded-full bg-blue-50 text-blue-700">
                {category}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-1">
            {hubspotRequirements.map((req) => (
              <span key={req} className="px-1.5 py-0.5 text-[11px] rounded-full bg-gray-100 text-gray-700">
                {req}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-1">
            {availableToPlans.map((plan) => (
              <span key={plan} className="px-1.5 py-0.5 text-[11px] rounded-full bg-orange-50 text-orange-700">
                {plan}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 