import { Card, CardContent } from "@/components/ui/card"

const usageData = [
  {
    service: "Strategic Consulting",
    hoursUsed: 5,
    totalHours: 6,
    icon: (
      <svg className="w-4 h-4 text-[#1C2B4F]" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
      </svg>
    )
  },
  {
    service: "CRM Support & Training",
    hoursUsed: 15,
    totalHours: 20,
    icon: (
      <svg className="w-4 h-4 text-[#1C2B4F]" viewBox="0 0 24 24" fill="none">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    service: "CRM Development",
    hoursUsed: 4,
    totalHours: 7,
    icon: (
      <svg className="w-4 h-4 text-[#1C2B4F]" viewBox="0 0 24 24" fill="none">
        <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M7 8L11 12L7 16M13 16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
]

function ServiceUsage({ data }: { data: typeof usageData[0] }) {
  const percentage = Math.round((data.hoursUsed / data.totalHours) * 100)
  const size = 44
  const strokeWidth = size * 0.08
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div className="flex items-center justify-between py-1.5">
      <div className="flex items-center gap-2.5 flex-1 min-w-0 pr-6">
        <div className="shrink-0">
          {data.icon}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1C2B4F] mb-0.5">{data.service}</h3>
          <p className="text-xs text-[#42526E]">{data.hoursUsed} of {data.totalHours} hours used</p>
        </div>
      </div>
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <svg className="-rotate-90" style={{ width: size, height: size }}>
          <circle
            className="text-[#F0F1F3]"
            strokeWidth={strokeWidth}
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          <circle
            className="text-[#1C2B4F] transition-all duration-500 ease-in-out"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-semibold text-[#1C2B4F]">{percentage}%</span>
        </div>
      </div>
    </div>
  )
}

export function UsageSummary() {
  return (
    <Card className="h-full">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-[#1C2B4F]">Service Usage</h2>
          <span className="text-xs font-semibold text-[#42526E]">24 / 33 Hours</span>
        </div>
        <div className="space-y-3">
          {usageData.map((item, index) => (
            <div key={item.service}>
              <ServiceUsage data={item} />
              {index < usageData.length - 1 && (
                <div className="h-px bg-gray-100 my-1.5" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 