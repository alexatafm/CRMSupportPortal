"use client"

export function SupportHoursKPI() {
  const roles = [
    {
      name: "Strategic Consulting",
      hoursUsed: 5,
      totalHours: 6,
      icon: (
        <svg className="w-7 h-7 text-white/90" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      name: "CRM Support & Training",
      hoursUsed: 15,
      totalHours: 20,
      icon: (
        <svg className="w-7 h-7 text-white/90" viewBox="0 0 24 24" fill="none">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      name: "CRM Development",
      hoursUsed: 4,
      totalHours: 7,
      icon: (
        <svg className="w-7 h-7 text-white/90" viewBox="0 0 24 24" fill="none">
          <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M7 8L11 12L7 16M13 16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ]

  // Calculate days remaining until reset
  const resetDate = new Date('2025-02-23')
  const today = new Date()
  const daysRemaining = Math.ceil((resetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_auto] gap-0 bg-white/5 rounded-lg px-5 py-4 border border-white/10">
      {roles.map((role, index) => (
        <div key={role.name} className="flex gap-4 relative px-4">
          <div className="flex items-center">
            <div className="shrink-0 bg-white/10 rounded-full p-2">
              {role.icon}
            </div>
          </div>
          <div className="flex flex-col gap-3 flex-1">
            <p className="text-sm font-medium text-white/90 leading-tight">
              {role.name}
            </p>
            
            <div className="flex items-center">
              <div className="h-2 w-[85%] bg-white/10 rounded-full">
                <div 
                  className="h-full bg-white rounded-full transition-all duration-300"
                  style={{ width: `${Math.round((role.hoursUsed / role.totalHours) * 100)}%` }}
                />
              </div>
            </div>

            <div className="w-[85%] flex items-center justify-between text-xs">
              <span className="text-white/70">{role.hoursUsed}h used</span>
              <span className="font-medium text-white">{role.totalHours - role.hoursUsed}h left</span>
              <span className="text-white/70">of {role.totalHours}h total</span>
            </div>
          </div>
          {index < roles.length - 1 && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[85%] w-px bg-white/10" />
          )}
        </div>
      ))}

      <div className="pl-5 border-l border-white/10 flex flex-col justify-center min-h-[80px]">
        <div className="space-y-2">
          <p className="text-xs text-white/70">Next Reset</p>
          <p className="text-sm font-medium text-white">23 Feb 2024</p>
          <p className="text-xs text-white/70">{Math.abs(daysRemaining)} days remaining</p>
        </div>
      </div>
    </div>
  )
} 