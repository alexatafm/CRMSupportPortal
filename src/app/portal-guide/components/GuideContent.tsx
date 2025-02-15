"use client"

import { GettingStarted, SupportTickets, ServiceHours, PlansAndPricing, TeamManagement, TaskCatalogue, AdditionalHours } from './guidepages'

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
      case "team-management":
        return <TeamManagement />
      case "task-catalog":
        return <TaskCatalogue />
      case "additional-hours":
        return <AdditionalHours />
      default:
        return <GettingStarted />
    }
  }

  return (
    <div className="p-6">
      {renderContent()}
    </div>
  )
} 