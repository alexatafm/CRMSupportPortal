"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { TicketCardModal } from "./TicketCardModal"
import { SupportTicketCard } from "./SupportTicketCard"
import React from "react"

type TicketStatus = 
  | "New Request"
  | "Ticket Scoping"
  | "Awaiting Approval"
  | "In Progress"
  | "Awaiting Feedback"
  | "Completed"

type RoleHours = {
  strategic: number
  setup: number
  integration: number
}

type Ticket = {
  id: string
  title: string
  description?: string
  date: string
  time: string
  scopedHours: RoleHours
  contact?: string
  status: TicketStatus
  createdBy?: string
  ticketNumber?: string
  supportArea?: string[]
  supportCategory?: string[]
  primaryOutcomeObjectives?: string
  supportingFiles?: string[]
}

const submittedTickets: Ticket[] = [
  // Submitted Stage
  {
    id: "salesforce-integration",
    title: "Salesforce Integration Setup",
    description: "Need assistance setting up bi-directional sync between our marketing automation platform and Salesforce CRM",
    date: "Jan 6, 2025",
    time: "07:18 AWST",
    scopedHours: {
      strategic: 0,
      setup: 0,
      integration: 0
    },
    status: "New Request",
    createdBy: "Sarah Chen",
    ticketNumber: "18633083992",
    supportArea: ["sales hub", "service hub"],
    supportCategory: ["integration", "automation"],
    primaryOutcomeObjectives: "Establish seamless data sync between platforms",
    supportingFiles: []
  },
  {
    id: "custom-dashboard",
    title: "Custom Sales Pipeline Dashboard",
    description: "Request for a custom dashboard showing real-time sales pipeline metrics and team performance KPIs",
    date: "Jan 6, 2025",
    time: "07:19 AEST",
    scopedHours: {
      strategic: 0,
      setup: 0,
      integration: 0
    },
    status: "Ticket Scoping",
    createdBy: "Michael Torres",
    ticketNumber: "18633083993",
    supportArea: ["sales hub"],
    supportCategory: ["customisation", "reporting"],
    primaryOutcomeObjectives: "Create custom sales dashboard",
    supportingFiles: []
  },
  {
    id: "email-automation",
    title: "Email Sequence Automation",
    description: "Set up automated email sequences for different customer segments based on their interaction history",
    date: "Jan 6, 2025",
    time: "07:20 AEST",
    scopedHours: {
      strategic: 2,
      setup: 4,
      integration: 1
    },
    status: "Awaiting Approval",
    createdBy: "Jessica Lee",
    ticketNumber: "18633083994",
    supportArea: ["marketing hub"],
    supportCategory: ["automation", "email marketing"],
    primaryOutcomeObjectives: "Implement targeted email automation",
    supportingFiles: []
  },
  {
    id: "crm-training",
    title: "CRM Training Program Setup",
    description: "Develop comprehensive training program for new sales team members",
    date: "Jan 6, 2025",
    time: "07:21 AEST",
    scopedHours: {
      strategic: 3,
      setup: 5,
      integration: 0
    },
    status: "Awaiting Approval",
    createdBy: "Robert Johnson",
    ticketNumber: "18633083995",
    supportArea: ["sales hub", "service hub"],
    supportCategory: ["training", "documentation"],
    primaryOutcomeObjectives: "Create standardized onboarding process",
    supportingFiles: []
  },
  {
    id: "workflow-automation",
    title: "Lead Scoring Automation Setup",
    description: "Configure automated lead scoring system based on website interaction, email engagement, and form submissions",
    date: "Jan 6, 2025",
    time: "07:23 AEST",
    scopedHours: {
      strategic: 2,
      setup: 3,
      integration: 1
    },
    status: "In Progress",
    createdBy: "Emma Watson",
    ticketNumber: "18633083996",
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
    scopedHours: {
      strategic: 1,
      setup: 2,
      integration: 0
    },
    status: "In Progress",
    createdBy: "James Mitchell",
    ticketNumber: "18633083997",
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
    scopedHours: {
      strategic: 2,
      setup: 4,
      integration: 2
    },
    status: "Awaiting Feedback",
    createdBy: "Lisa Parker",
    ticketNumber: "18633083998",
    supportArea: ["service hub", "marketing hub"],
    supportCategory: ["automation", "workflow"],
    primaryOutcomeObjectives: "Automate customer lifecycle communications",
    supportingFiles: []
  },
  {
    id: "integration-setup",
    title: "Third-party Integration Setup",
    description: "Configure integration with payment gateway and inventory management system",
    date: "Jan 6, 2025",
    time: "07:29 AEST",
    scopedHours: {
      strategic: 1,
      setup: 2,
      integration: 4
    },
    status: "Awaiting Feedback",
    createdBy: "David Kim",
    ticketNumber: "18633083999",
    supportArea: ["service hub"],
    supportCategory: ["integration", "setup"],
    primaryOutcomeObjectives: "Establish seamless third-party integrations",
    supportingFiles: []
  },
  {
    id: "custom-reporting",
    title: "Custom Sales Analytics Dashboard",
    description: "Build custom analytics dashboard for sales team performance tracking",
    date: "Jan 6, 2025",
    time: "07:30 AEST",
    scopedHours: {
      strategic: 2,
      setup: 3,
      integration: 1
    },
    status: "Completed",
    createdBy: "Alex Thompson",
    ticketNumber: "18633084000",
    supportArea: ["sales hub"],
    supportCategory: ["reporting", "analytics"],
    primaryOutcomeObjectives: "Implement sales performance tracking",
    supportingFiles: []
  },
  {
    id: "email-templates",
    title: "Custom Email Templates Setup",
    description: "Design and implement branded email templates for various customer communication touchpoints",
    date: "Jan 6, 2025",
    time: "07:31 AEST",
    scopedHours: {
      strategic: 1,
      setup: 2,
      integration: 1
    },
    status: "Completed",
    createdBy: "Rachel Green",
    ticketNumber: "18633084001",
    supportArea: ["marketing hub"],
    supportCategory: ["email templates", "branding"],
    primaryOutcomeObjectives: "Create consistent email branding",
    supportingFiles: []
  },
  {
    id: "data-migration",
    title: "Legacy CRM Data Migration",
    description: "Migrate customer data from legacy system to new CRM platform",
    date: "Jan 6, 2025",
    time: "07:32 AEST",
    scopedHours: {
      strategic: 1,
      setup: 3,
      integration: 4
    },
    status: "Completed",
    createdBy: "Chris Martin",
    ticketNumber: "18633084002",
    supportArea: ["service hub"],
    supportCategory: ["data migration", "setup"],
    primaryOutcomeObjectives: "Complete data migration with zero loss",
    supportingFiles: []
  },
  {
    id: "automation-workflow",
    title: "Marketing Automation Workflow",
    description: "Set up complex marketing automation workflow with conditional branching",
    date: "Jan 6, 2025",
    time: "07:33 AEST",
    scopedHours: {
      strategic: 2,
      setup: 4,
      integration: 2
    },
    status: "Completed",
    createdBy: "Sophie Wilson",
    ticketNumber: "18633084003",
    supportArea: ["marketing hub"],
    supportCategory: ["automation", "workflow"],
    primaryOutcomeObjectives: "Implement advanced marketing automation",
    supportingFiles: []
  }
]

export function KanbanBoard() {
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null)

  // Group tickets by their stage
  const submittedStageTickets = submittedTickets.filter(ticket => 
    ["New Request", "Ticket Scoping", "Awaiting Approval"].includes(ticket.status)
  )

  const inProgressStageTickets = submittedTickets.filter(ticket => 
    ["In Progress", "Awaiting Feedback"].includes(ticket.status)
  )

  const closedStageTickets = submittedTickets.filter(ticket => 
    ["Completed"].includes(ticket.status)
  )

  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        {/* Submitted Column */}
        <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-xs xl:text-sm text-white/70 uppercase tracking-wider">Submitted</h3>
            <span className="bg-blue-500/10 text-blue-200 text-xs font-medium px-2 py-0.5 rounded-full border border-blue-500/20">
              {submittedStageTickets.length}
            </span>
          </div>
          {/* Section Divider */}
          <div className="h-px bg-white/10 my-4" />
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-4">
              {submittedStageTickets.map((ticket) => (
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
              {submittedStageTickets.length === 0 && (
                <div className="flex items-center justify-center h-20 text-sm text-white/50">
                  No tickets
                </div>
              )}
            </div>
          </div>
        </div>

        {/* In Progress Column */}
        <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-xs xl:text-sm text-white/70 uppercase tracking-wider">In Progress</h3>
            <span className="bg-orange-500/10 text-orange-200 text-xs font-medium px-2 py-0.5 rounded-full border border-orange-500/20">
              {inProgressStageTickets.length}
            </span>
          </div>
          {/* Section Divider */}
          <div className="h-px bg-white/10 my-4" />
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-4">
              {inProgressStageTickets.map((ticket) => (
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
              {inProgressStageTickets.length === 0 && (
                <div className="flex items-center justify-center h-20 text-sm text-white/50">
                  No tickets
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Closed Column */}
        <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-xs xl:text-sm text-white/70 uppercase tracking-wider">Closed</h3>
            <span className="bg-blue-500/10 text-blue-200 text-xs font-medium px-2 py-0.5 rounded-full border border-blue-500/20">
              {closedStageTickets.length}
            </span>
          </div>
          {/* Section Divider */}
          <div className="h-px bg-white/10 my-4" />
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-4">
              {closedStageTickets.map((ticket) => (
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
              {closedStageTickets.length === 0 && (
                <div className="flex items-center justify-center h-20 text-sm text-white/50">
                  No tickets
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

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
          onCloseAction={() => setSelectedTicket(null)}
        />
      )}
    </>
  )
} 