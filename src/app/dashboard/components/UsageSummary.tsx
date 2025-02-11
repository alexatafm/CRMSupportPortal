import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const usageData = [
  {
    service: "Strategic Consulting",
    hoursUsed: 13,
    hoursRemaining: 7,
    totalHours: 20
  },
  {
    service: "CRM Setup, Support & Training",
    hoursUsed: 27,
    hoursRemaining: 8,
    totalHours: 35
  },
  {
    service: "CRM Integration Development & Design",
    hoursUsed: 16,
    hoursRemaining: 9,
    totalHours: 25
  }
]

export function UsageSummary() {
  const totalUsed = usageData.reduce((acc, curr) => acc + curr.hoursUsed, 0)
  const totalAvailable = usageData.reduce((acc, curr) => acc + curr.totalHours, 0)
  const percentageUsed = Math.round((totalUsed / totalAvailable) * 100)

  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <CardTitle>Monthly Usage Summary</CardTitle>
      </CardHeader>
      <CardContent className="h-[calc(100%-65px)]">
        <div className="flex gap-8 h-full">
          <div className="flex-shrink-0 w-[260px]">
            <div className="bg-gray-50/80 rounded-lg p-6 h-full flex flex-col justify-center">
              <div className="relative w-36 h-36 mx-auto">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    className="text-[#FEE7E7]"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                  />
                  <circle
                    className="text-[#192A53]"
                    strokeWidth="10"
                    strokeDasharray={251.2}
                    strokeDashoffset={251.2 - (251.2 * percentageUsed) / 100}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold">{percentageUsed}%</span>
                </div>
              </div>
              <div className="text-center mt-6 space-y-2">
                <p className="text-sm text-muted-foreground">
                  {totalUsed} Hours Used • {totalAvailable - totalUsed} Hours Remaining
                </p>
                <p className="text-sm text-muted-foreground">Usage Reset in 4 Days</p>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-gray-50/80 rounded-lg p-8 flex flex-col justify-center">
            <div className="space-y-8">
              {usageData.map((item) => (
                <div key={item.service} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{item.service}</span>
                    <span className="text-muted-foreground">
                      {item.hoursUsed} Hours Used • {item.hoursRemaining} Hours Remaining
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-[#FEE7E7]">
                    <div
                      className="h-full rounded-full bg-[#192A53]"
                      style={{ width: `${(item.hoursUsed / item.totalHours) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 