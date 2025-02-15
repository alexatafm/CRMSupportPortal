import { SupportTicketCard } from "./SupportTicketCard"

type RoleHours = {
  strategic: number
  setup: number
  integration: number
}

type KanbanSection = {
  title: string
  count: number
  tickets: {
    title: string
    description: string
    ticketId: string
    status: "New Request" | "Awaiting Approval" | "In Progress"
    date: string
    time: string
    assignee: string
    scopedHours?: RoleHours
  }[]
}

interface TicketKanbanProps {
  sections: KanbanSection[]
}

export function TicketKanban({ sections }: TicketKanbanProps) {
  return (
    <div className="bg-white rounded-xl p-6">
      <h2 className="text-lg font-semibold text-[#1C2B4F] mb-6">Your Tickets</h2>
      
      <div className="grid grid-cols-3 gap-6">
        {sections.map((section) => (
          <div key={section.title} className="space-y-4">
            {/* Section Header */}
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-[#1C2B4F]">{section.title}</h3>
              <span className="flex items-center justify-center w-6 h-6 rounded bg-[#1C2B4F]/5 text-xs font-medium text-[#1C2B4F]">
                {section.count}
              </span>
            </div>

            {/* Ticket Cards */}
            <div className="space-y-3">
              {section.tickets.length > 0 ? (
                section.tickets.map((ticket) => (
                  <SupportTicketCard
                    key={ticket.ticketId}
                    {...ticket}
                  />
                ))
              ) : (
                <div className="flex items-center justify-center h-20 rounded-lg border border-dashed border-gray-200 text-sm text-gray-500">
                  No tickets
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 