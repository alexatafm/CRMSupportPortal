"use client"

import { cn } from "@/lib/utils"

export type NotificationType = "awaiting_response" | "awaiting_approval" | "status_update" | "other"

interface NotificationCardProps {
  type: NotificationType
  title: string
  ticketId: string
  assignedTo: string
  timestamp: string
  onClick?: () => void
}

const notificationIcons = {
  awaiting_response: (
    <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
    </svg>
  ),
  awaiting_approval: (
    <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  status_update: (
    <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  other: (
    <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
}

export function NotificationCard({ type, title, ticketId, assignedTo, timestamp, onClick }: NotificationCardProps) {
  return (
    <div 
      className={cn(
        "flex items-center gap-2.5 p-2.5 rounded-lg cursor-pointer transition-colors h-[60px]",
        "hover:bg-gray-100 bg-gray-50"
      )}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
    >
      <div className="shrink-0 w-7 h-7 rounded-full bg-[#FF4F11]/10 flex items-center justify-center">
        {notificationIcons[type]}
      </div>
      <div className="flex-1 min-w-0 flex items-center">
        <span className="text-sm font-medium text-[#1C2B4F] leading-tight truncate">{title}</span>
        <div className="ml-auto flex items-center gap-3 pl-3">
          <div className="h-4 w-px bg-gray-200 shrink-0" />
          <span className="text-xs font-medium text-[#FF4F11] shrink-0">#{ticketId}</span>
          <div className="h-4 w-px bg-gray-200 shrink-0" />
          <span className="text-xs font-medium text-[#42526E] shrink-0">{assignedTo}</span>
          <div className="h-4 w-px bg-gray-200 shrink-0" />
          <span className="text-xs font-medium px-1.5 py-0.5 rounded-full bg-[#FF4F11]/10 text-[#FF4F11] shrink-0">{timestamp}</span>
        </div>
      </div>
    </div>
  )
}
