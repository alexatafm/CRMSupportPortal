import { Card, CardContent } from "@/components/ui/card"

const usageData = [
  {
    service: "Strategic Consulting",
    hoursUsed: 5,
    totalHours: 6,
    icon: (
      <svg className="w-4 h-4 text-[#1C2B4F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    service: "CRM Setup, Support & Training",
    hoursUsed: 15,
    totalHours: 20,
    icon: (
      <svg className="w-4 h-4 text-[#1C2B4F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    )
  },
  {
    service: "CRM Integration Development & Design",
    hoursUsed: 4,
    totalHours: 7,
    icon: (
      <svg className="w-4 h-4 text-[#1C2B4F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
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