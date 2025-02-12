"use client"

export function SupportHoursKPI() {
  const roles = [
    {
      name: "Strategic Consulting",
      hoursUsed: 5,
      totalHours: 6,
      icon: (
        <svg className="w-4 h-4 text-white/60" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      name: "CRM Setup, Support & Training",
      hoursUsed: 15,
      totalHours: 20,
      icon: (
        <svg className="w-4 h-4 text-white/60" viewBox="0 0 24 24" fill="none">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      name: "CRM Integration Development & Design",
      hoursUsed: 4,
      totalHours: 7,
      icon: (
        <svg className="w-4 h-4 text-white/60" viewBox="0 0 24 24" fill="none">
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
    <div className="flex items-center gap-8 bg-white/5 rounded-lg px-6 py-2.5 border border-white/10">
      {roles.map((role, index) => (
        <div key={role.name} className="flex items-center">
          <div className="flex flex-col w-[160px]">
            <div className="flex items-start gap-2 mb-2.5">
              <div className="shrink-0 mt-0.5">
                {role.icon}
              </div>
              <p className="text-sm text-white/80 leading-tight w-[128px] line-clamp-2" title={role.name}>
                {role.name}
              </p>
            </div>
            
            <div className="h-1.5 w-full bg-white/10 rounded-full mb-1.5">
              <div 
                className="h-full bg-white rounded-full transition-all duration-300"
                style={{ width: `${Math.round((role.hoursUsed / role.totalHours) * 100)}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-white">{role.totalHours - role.hoursUsed}h left</span>
              <span className="text-white/60">of {role.totalHours}h total</span>
            </div>
          </div>
          {index < roles.length - 1 && (
            <div className="h-16 w-px bg-white/10 mx-8" />
          )}
        </div>
      ))}
      <div className="h-16 w-px bg-white/10" />
      <div className="min-w-[100px]">
        <p className="text-xs text-white/60">Next Reset</p>
        <p className="text-sm font-medium text-white">23 Feb 2025</p>
        <p className="text-xs text-white/60 mt-0.5">{daysRemaining} days remaining</p>
      </div>
    </div>
  )
} 