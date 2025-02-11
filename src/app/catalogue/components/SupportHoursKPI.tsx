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

  return (
    <div className="flex items-center gap-10 bg-white/5 rounded-lg px-8 py-2 border border-white/10">
      {roles.map((role) => {
        const percentage = Math.round((role.hoursUsed / role.totalHours) * 100)
        const hoursRemaining = role.totalHours - role.hoursUsed
        return (
          <div key={role.name} className="flex items-center gap-3">
            {role.icon}
            <div className="flex flex-col min-w-[300px]">
              <div className="flex items-start justify-between">
                <div className="flex-1 mr-4">
                  <p className="text-sm text-white/80 truncate" title={role.name}>{role.name}</p>
                  <div className="h-1.5 w-full bg-white/10 rounded-full mt-1.5">
                    <div 
                      className="h-full bg-white rounded-full transition-all duration-300"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-sm font-medium text-white whitespace-nowrap">{hoursRemaining}h left</span>
                  <span className="text-xs text-white/60 whitespace-nowrap">of {role.totalHours}h total</span>
                </div>
              </div>
            </div>
          </div>
        )
      })}
      <div className="h-8 w-px bg-white/10" />
      <div>
        <p className="text-xs text-white/60">Next Reset</p>
        <p className="text-sm font-medium text-white">23 Feb 2024</p>
      </div>
    </div>
  )
} 