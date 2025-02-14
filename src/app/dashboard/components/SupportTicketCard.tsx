import { cn } from "@/lib/utils"

type TicketStatus = "New Request" | "Awaiting Approval" | "In Progress"

interface SupportTicketCardProps {
  title: string
  description: string
  ticketId: string
  status: TicketStatus
  date: string
  time: string
  assignee: string
  scopedHours?: string
}

export function SupportTicketCard({
  title,
  description,
  ticketId,
  status,
  date,
  time,
  assignee,
  scopedHours
}: SupportTicketCardProps) {
  const getStatusStyle = (status: TicketStatus) => {
    switch (status) {
      case "New Request":
        return "bg-blue-50 text-blue-600"
      case "Awaiting Approval":
        return "bg-orange-50 text-orange-600"
      case "In Progress":
        return "bg-green-50 text-green-600"
      default:
        return "bg-gray-50 text-gray-600"
    }
  }

  // Format the date and time
  const formattedDateTime = `${date.split(',')[0]}, ${time.split(' ')[0]}`

  const needsScopedHours = status === "New Request" || status === "Awaiting Approval"

  return (
    <div className="group relative bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
      {/* Title Row with Status Badge - Full Width */}
      <div className="flex items-start justify-between gap-3 p-3 pb-0">
        <h3 className="text-[13px] font-medium text-[#1C2B4F] truncate">{title}</h3>
        <div className={cn(
          "shrink-0 inline-flex px-2 py-0.5 rounded-md text-xs font-medium",
          getStatusStyle(status)
        )}>
          {status}
        </div>
      </div>

      {/* Horizontal Divider - Full Width */}
      <div className="px-3 pt-2">
        <div className="h-px bg-gray-100" />
      </div>

      <div className="flex">
        {/* Left Section */}
        <div className="flex-1 min-w-0 p-3 pr-1 flex flex-col">
          <p className="text-xs text-[#42526E] line-clamp-2 mb-auto">{description}</p>
          
          {/* Scoped Hours Badges */}
          <div className="flex items-center gap-1.5 mt-3">
            {needsScopedHours ? (
              <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-blue-50 text-blue-600">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6v6l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-[11px] font-medium">Role Hours TBC</span>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-blue-50 text-blue-600">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span className="text-[11px] font-medium">2h</span>
                </div>
                <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-blue-50 text-blue-600">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="text-[11px] font-medium">3h</span>
                </div>
                <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-blue-50 text-blue-600">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                    <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M7 8L11 12L7 16M13 16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[11px] font-medium">1h</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[140px] p-3 flex flex-col items-end justify-between h-full">
          {/* Metadata */}
          <div className="flex flex-col items-end gap-3 w-full">
            <div className="flex items-center justify-end gap-1.5 text-xs text-[#42526E]">
              <span>{formattedDateTime}</span>
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M3 10h18M16 2v4M8 2v4" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="flex items-center justify-end gap-1.5 text-xs text-[#42526E]">
              <span>{assignee}</span>
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M5 18c0-1.657 3.134-3 7-3s7 1.343 7 3" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="flex items-center justify-end gap-1.5 text-xs text-[#42526E]">
              <span>{ticketId}</span>
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                <path d="M10 3L7 21M17 3L14 21M5 8H21M3 16H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-[#1C2B4F]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
    </div>
  )
} 