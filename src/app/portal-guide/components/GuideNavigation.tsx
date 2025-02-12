"use client"

import { cn } from "@/lib/utils"

type Section = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

const sections: Section[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Introduction to the CRM Support Portal",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 21l9-5-9-5-9 5 9 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: "support-tickets",
    title: "Support Tickets",
    description: "Learn how to create and manage support tickets",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: "service-hours",
    title: "Service Hours",
    description: "Understanding your support hours and usage",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: "plans-pricing",
    title: "Plans & Pricing",
    description: "Compare available plans and features",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: "team-management",
    title: "Team Management",
    description: "Add and manage team members",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: "task-catalog",
    title: "Task Catalog",
    description: "Browse pre-configured support tasks",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: "additional-hours",
    title: "Additional Hours",
    description: "Purchase and allocate more support hours",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  }
]

interface GuideNavigationProps {
  activeSection: string
  onSectionChangeAction: (sectionId: string) => void
}

export function GuideNavigation({ activeSection, onSectionChangeAction }: GuideNavigationProps) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-2">Portal Guide</h2>
        <p className="text-sm text-white/70">Everything you need to know about using the CRM Support Portal.</p>
      </div>

      <nav className="space-y-1">
        {sections.map((section) => {
          const isActive = activeSection === section.id
          
          return (
            <button
              key={section.id}
              onClick={() => onSectionChangeAction(section.id)}
              className={cn(
                "w-full flex items-start gap-3 p-3 rounded-lg transition-all",
                "hover:bg-white/5",
                isActive ? "bg-white/10 text-white" : "text-white/70"
              )}
            >
              <div className={cn(
                "mt-1 p-1 rounded-md",
                isActive ? "bg-white/20 text-white" : "text-white/70"
              )}>
                {section.icon}
              </div>
              <div className="text-left">
                <div className={cn(
                  "font-medium mb-0.5",
                  isActive ? "text-white" : "text-white/90"
                )}>
                  {section.title}
                </div>
                <div className={cn(
                  "text-sm",
                  isActive ? "text-white/90" : "text-white/70"
                )}>
                  {section.description}
                </div>
              </div>
            </button>
          )
        })}
      </nav>
    </div>
  )
} 