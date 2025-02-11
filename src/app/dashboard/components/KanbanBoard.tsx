"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { TicketCardModal } from "./TicketCardModal"

type Ticket = {
  id: string
  title: string
  description?: string
  date: string
  time: string
  scopedHours: string
  contact?: string
  status: "New Request" | "Awaiting Approval"
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
    scopedHours: "TBD",
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
    scopedHours: "TBD",
    status: "New Request",
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
    scopedHours: "TBD",
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
    scopedHours: "TBD",
    status: "Awaiting Approval",
    createdBy: "Lisa Parker",
    ticketNumber: "18633083996",
    supportArea: ["service hub", "marketing hub"],
    supportCategory: ["automation", "workflow"],
    primaryOutcomeObjectives: "Automate customer lifecycle communications",
    supportingFiles: []
  }
]

function TicketCard({ ticket }: { ticket: Ticket }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Card 
        className="mb-3 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white cursor-pointer" 
        onClick={() => setIsModalOpen(true)}
      >
        <CardContent className="p-4">
          <div className="flex flex-col h-[100px]">
            <div className="flex justify-between">
              <div className="flex-1 mr-4">
                <h4 className="text-[15px] font-semibold text-[#42526E] mb-1">{ticket.title}</h4>
                <p className="text-[13px] text-[#6B778C] line-clamp-2 mb-2">{ticket.description || ticket.title}</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs text-[#0052CC] bg-[#DEEBFF] px-2.5 py-0.5 rounded-full font-medium mb-3">
                  {ticket.status}
                </span>
                <div className="flex flex-col items-end space-y-2 text-[12px] text-[#6B778C]">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M3 10h18M16 2v4M8 2v4" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>{ticket.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 6v6l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span>{ticket.time}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-auto flex justify-between items-end text-[12px] text-[#6B778C]">
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                  <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>Scoped Hours: {ticket.scopedHours}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M5 18c0-1.657 3.134-3 7-3s7 1.343 7 3" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>{ticket.createdBy}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {isModalOpen && (
        <TicketCardModal
          ticket={{
            ...ticket,
            ticketNumber: ticket.ticketNumber || "N/A",
            created: `${ticket.date}, ${ticket.time}`,
            supportArea: ticket.supportArea || [],
            supportCategory: ticket.supportCategory || [],
            primaryOutcomeObjectives: ticket.primaryOutcomeObjectives || "",
            supportingFiles: ticket.supportingFiles || [],
            createdBy: ticket.createdBy || "No Contact",
            description: ticket.description || ticket.title
          }}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  )
}

export function KanbanBoard() {
  return (
    <>
      {submittedTickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </>
  )
} 