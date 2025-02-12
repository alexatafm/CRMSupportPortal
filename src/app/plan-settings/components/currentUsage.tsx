import { Card, CardContent } from "@/components/ui/card"
import React from "react"

type Role = {
  name: string
  hoursUsed: number
  totalHours: number
}

const roles: Role[] = [
  {
    name: "Strategic Consulting",
    hoursUsed: 5,
    totalHours: 6
  },
  {
    name: "CRM Setup, Support & Training",
    hoursUsed: 15,
    totalHours: 20
  },
  {
    name: "CRM Integration Development & Design",
    hoursUsed: 4,
    totalHours: 7
  }
]

function DonutChart({ hoursUsed, totalHours }: { hoursUsed: number; totalHours: number }) {
  const percentage = Math.round((hoursUsed / totalHours) * 100)
  const radius = 24
  const circumference = 2 * Math.PI * radius
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      <svg className="w-full h-full -rotate-90">
        <circle
          className="text-gray-100"
          strokeWidth="4"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="32"
          cy="32"
        />
        <circle
          className="text-[#192A53]"
          strokeWidth="4"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="32"
          cy="32"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-sm font-medium">{percentage}%</span>
      </div>
    </div>
  )
}

export function CurrentUsage() {
  const currentDate = new Date()
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  const daysRemaining = daysInMonth - currentDate.getDate()
  const percentageRemaining = Math.round((daysRemaining / daysInMonth) * 100)

  // Format date consistently for both server and client
  const formattedDate = currentDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })

  const roleIcons: Record<Role['name'], React.ReactElement> = {
    "Strategic Consulting": (
      <svg className="w-5 h-5 text-[#42526E]" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    "CRM Setup, Support & Training": (
      <svg className="w-5 h-5 text-[#42526E]" viewBox="0 0 24 24" fill="none">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    "CRM Integration Development & Design": (
      <svg className="w-5 h-5 text-[#42526E]" viewBox="0 0 24 24" fill="none">
        <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M7 8L11 12L7 16M13 16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-[1fr_1.8fr] gap-6 h-[calc(100%-1px)]">
          {/* Plan Details - Left Column */}
          <div className="bg-gray-50 rounded-lg p-6 flex flex-col">
            <h3 className="text-[#1E2B4D] text-lg font-medium">Current Plan Usage</h3>
            <div className="flex-1 flex flex-col justify-between mt-6">
              <div className="grid grid-cols-[1fr_auto] gap-3">
                <span className="text-xs text-[#6B778C]">Plan Tier</span>
                <span className="text-sm font-medium text-[#42526E] text-right">Premium</span>
              </div>
              <div className="grid grid-cols-[1fr_auto] gap-3">
                <span className="text-xs text-[#6B778C]">Term Length</span>
                <span className="text-sm font-medium text-[#42526E] text-right">12 Months</span>
              </div>
              <div className="grid grid-cols-[1fr_auto] gap-3">
                <span className="text-xs text-[#6B778C]">Current Period</span>
                <span className="text-sm font-medium text-[#42526E] text-right">{formattedDate}</span>
              </div>
              <div className="grid grid-cols-[1fr_auto] gap-3">
                <span className="text-xs text-[#6B778C]">Time Remaining</span>
                <span className="text-sm font-medium text-[#42526E] text-right">{daysRemaining} days ({percentageRemaining}%)</span>
              </div>
            </div>
          </div>

          {/* Role Usage - Right Column */}
          <div className="space-y-3 h-full">
            {roles.map((role) => (
              <div key={role.name} className="flex items-center gap-4 bg-gray-50 px-4 py-3 rounded-lg">
                <div className="flex-shrink-0">
                  {roleIcons[role.name]}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#42526E] leading-snug">
                    {role.name}
                  </p>
                  <div className="text-xs text-[#6B778C] mt-1">
                    {role.hoursUsed} of {role.totalHours} hours used
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <DonutChart hoursUsed={role.hoursUsed} totalHours={role.totalHours} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
