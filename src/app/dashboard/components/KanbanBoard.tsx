"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { TicketCardModal } from "./TicketCardModal"
import { SupportTicketCard } from "./SupportTicketCard"

type Ticket = {
  id: string
  title: string
  description?: string
  date: string
  time: string
  scopedHours: string
  contact?: string
  status: "New Request" | "Awaiting Approval" | "In Progress"
  createdBy?: string
  ticketNumber?: string
  supportArea?: string[]
  supportCategory?: string[]
  primaryOutcomeObjectives?: string
  supportingFiles?: string[]
}

const submittedTickets: Ticket[] = [
  {
    id: "salesforce-integration",
    title: "Salesforce Integration Setup",
    description: "Need assistance setting up bi-directional sync between our marketing automation platform and Salesforce CRM",
    date: "Jan 6, 2025",
    time: "07:18 AWST",
    scopedHours: "TBC",
    status: "New Request",
    createdBy: "Sarah Chen",
    ticketNumber: "18633083992",
    supportArea: ["sales hub", "service hub"],
    supportCategory: ["customisation", "custom email template", "data migration"],
    primaryOutcomeObjectives: "Testing o",
    supportingFiles: []
  },
  {
    id: "custom-dashboard",
    title: "Custom Sales Pipeline Dashboard",
    description: "Request for a custom dashboard showing real-time sales pipeline metrics and team performance KPIs",
    date: "Jan 6, 2025",
    time: "07:19 AEST",
    scopedHours: "TBC",
    status: "New Request",
    createdBy: "Michael Torres",
    ticketNumber: "18633083993",
    supportArea: ["sales hub"],
    supportCategory: ["customisation", "reporting"],
    primaryOutcomeObjectives: "Create custom sales dashboard",
    supportingFiles: []
  },
  {
    id: "workflow-automation",
    title: "Lead Scoring Automation Setup",
    description: "Configure automated lead scoring system based on website interaction, email engagement, and form submissions",
    date: "Jan 6, 2025",
    time: "07:23 AEST",
    scopedHours: "6",
    status: "In Progress",
    createdBy: "Emma Watson",
    ticketNumber: "18633083994",
    supportArea: ["marketing hub", "sales hub"],
    supportCategory: ["automation", "lead scoring"],
    primaryOutcomeObjectives: "Implement automated lead scoring system",
    supportingFiles: []
  },
  {
    id: "reporting-template",
    title: "Monthly ROI Report Template",
    description: "Create a comprehensive reporting template for monthly marketing ROI analysis and campaign performance",
    date: "Jan 6, 2025",
    time: "07:26 AEST",
    scopedHours: "TBC",
    status: "Awaiting Approval",
    createdBy: "James Mitchell",
    ticketNumber: "18633083995",
    supportArea: ["marketing hub"],
    supportCategory: ["reporting", "custom template"],
    primaryOutcomeObjectives: "Create standardized ROI reporting template",
    supportingFiles: []
  },
  {
    id: "lifecycle-automation",
    title: "Customer Lifecycle Automation",
    description: "Setup automated workflows for customer onboarding, renewal reminders, and satisfaction surveys",
    date: "Jan 6, 2025",
    time: "07:28 AEST",
    scopedHours: "TBC",
    status: "Awaiting Approval",
    createdBy: "Lisa Parker",
    ticketNumber: "18633083996",
    supportArea: ["service hub", "marketing hub"],
    supportCategory: ["automation", "workflow"],
    primaryOutcomeObjectives: "Automate customer lifecycle communications",
    supportingFiles: []
  },
  {
    id: "email-templates",
    title: "Custom Email Templates Setup",
    description: "Design and implement branded email templates for various customer communication touchpoints",
    date: "Jan 6, 2025",
    time: "07:30 AEST",
    scopedHours: "4",
    status: "In Progress",
    createdBy: "David Kim",
    ticketNumber: "18633083997",
    supportArea: ["marketing hub"],
    supportCategory: ["email templates", "branding"],
    primaryOutcomeObjectives: "Create consistent email branding",
    supportingFiles: []
  }
]

export function KanbanBoard() {
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null)

  return (
    <>
      {submittedTickets.map((ticket) => (
        <div key={ticket.id} onClick={() => setSelectedTicket(ticket)}>
          <SupportTicketCard
            title={ticket.title}
            description={ticket.description || ticket.title}
            ticketId={ticket.ticketNumber || ticket.id}
            status={ticket.status}
            date={ticket.date}
            time={ticket.time}
            assignee={ticket.createdBy || "No Contact"}
            scopedHours={ticket.scopedHours}
          />
        </div>
      ))}

      {selectedTicket && (
        <TicketCardModal
          ticket={{
            ...selectedTicket,
            ticketNumber: selectedTicket.ticketNumber || "N/A",
            created: `${selectedTicket.date}, ${selectedTicket.time}`,
            supportArea: selectedTicket.supportArea || [],
            supportCategory: selectedTicket.supportCategory || [],
            primaryOutcomeObjectives: selectedTicket.primaryOutcomeObjectives || "",
            supportingFiles: selectedTicket.supportingFiles || [],
            createdBy: selectedTicket.createdBy || "No Contact",
            description: selectedTicket.description || selectedTicket.title
          }}
          onClose={() => setSelectedTicket(null)}
        />
      )}
    </>
  )
} 