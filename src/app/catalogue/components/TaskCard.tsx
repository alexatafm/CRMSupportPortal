type TaskCardProps = {
  title: string
  description: string
  categories: string[]
  supportArea: string
  strategicHours?: number
  setupHours?: number
  integrationHours?: number
  availableStrategicHours: number
  availableSetupHours: number
  availableIntegrationHours: number
}

export function TaskCard({ 
  title, 
  description, 
  categories,
  supportArea,
  strategicHours = 0,
  setupHours = 0,
  integrationHours = 0,
  availableStrategicHours,
  availableSetupHours,
  availableIntegrationHours
}: TaskCardProps) {
  return (
    <div className="group h-[180px] bg-white hover:bg-white/95 transition-colors cursor-pointer rounded-lg border border-gray-100/50 hover:border-gray-200 shadow-sm hover:shadow-md">
      <div className="flex flex-col h-full p-4">
        <div className="mb-auto">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-medium text-[#1C2B4F] text-sm line-clamp-2 leading-snug">{title}</h3>
            <div className="flex items-center gap-1.5 shrink-0">
              <div className={`flex items-center gap-1 px-1.5 py-0.5 rounded ${strategicHours > availableStrategicHours ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span className="text-[11px] font-medium">{strategicHours}h</span>
              </div>

              <div className={`flex items-center gap-1 px-1.5 py-0.5 rounded ${setupHours > availableSetupHours ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-[11px] font-medium">{setupHours}h</span>
              </div>

              <div className={`flex items-center gap-1 px-1.5 py-0.5 rounded ${integrationHours > availableIntegrationHours ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                  <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 8L11 12L7 16M13 16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[11px] font-medium">{integrationHours}h</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-[#42526E] line-clamp-3 leading-relaxed mb-3">{description}</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {/* Support Area Badge */}
          <span className="px-2 py-0.5 text-[11px] rounded-md bg-[#FF4F11]/10 text-[#FF4F11] font-medium">
            {supportArea}
          </span>

          {/* Categories Badges */}
          {categories.length > 0 && (
            <span className="px-2 py-0.5 text-[11px] rounded-md bg-gray-100 text-gray-600 font-medium">
              {categories[0]}
            </span>
          )}
          {categories.length > 1 && (
            <span className="px-1.5 py-0.5 text-[11px] rounded-md bg-gray-100 text-gray-600 font-medium">
              +{categories.length - 1}
            </span>
          )}
        </div>
      </div>
    </div>
  )
} 