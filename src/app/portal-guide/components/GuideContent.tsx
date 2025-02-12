"use client"

import { GettingStarted, SupportTickets, ServiceHours, PlansAndPricing } from './guidepages'

interface GuideContentProps {
  activeSection: string
}

export function GuideContent({ activeSection }: GuideContentProps) {
  const renderContent = () => {
    switch (activeSection) {
      case "getting-started":
        return <GettingStarted />
      case "support-tickets":
        return <SupportTickets />
      case "service-hours":
        return <ServiceHours />
      case "plans-pricing":
        return <PlansAndPricing />
      default:
        return <GettingStarted />
    }
  }

  return (
    <div className="bg-white rounded-lg h-full overflow-y-auto">
      <div className="p-6">
        {renderContent()}
      </div>
    </div>
  )
} 