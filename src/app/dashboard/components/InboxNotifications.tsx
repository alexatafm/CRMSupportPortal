"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { NotificationCard, NotificationType } from "./NotificationCard"
import { cn } from "@/lib/utils"

type Notification = {
  id: string
  type: NotificationType
  title: string
  ticketId: string
  assignedTo: string
  timestamp: string
}

const notifications: Notification[] = [
  {
    id: "1",
    type: "awaiting_response",
    title: "Awaiting response on CRM integration",
    ticketId: "T-1234",
    assignedTo: "Sarah Chen",
    timestamp: "2 mins ago"
  },
  {
    id: "2",
    type: "awaiting_approval",
    title: "Sales Dashboard setup scope ready",
    ticketId: "T-1235",
    assignedTo: "Michael Scott",
    timestamp: "1 hour ago"
  },
  {
    id: "3",
    type: "status_update",
    title: "Email automation moved to testing",
    ticketId: "T-1236",
    assignedTo: "Jim Halpert",
    timestamp: "2 hours ago"
  },
  {
    id: "4",
    type: "other",
    title: "Monthly usage report available",
    ticketId: "T-1237",
    assignedTo: "Dwight Schrute",
    timestamp: "3 hours ago"
  },
  {
    id: "5",
    type: "awaiting_response",
    title: "Feedback needed on workflow automation",
    ticketId: "T-1238",
    assignedTo: "Pam Beesly",
    timestamp: "4 hours ago"
  },
  {
    id: "6",
    type: "awaiting_approval",
    title: "Custom report template ready for review",
    ticketId: "T-1239",
    assignedTo: "Angela Martin",
    timestamp: "5 hours ago"
  },
  {
    id: "7",
    type: "status_update",
    title: "Contact sync configuration completed",
    ticketId: "T-1240",
    assignedTo: "Oscar Martinez",
    timestamp: "6 hours ago"
  },
  {
    id: "8",
    type: "other",
    title: "Support hours update notification",
    ticketId: "T-1241",
    assignedTo: "Kelly Kapoor",
    timestamp: "7 hours ago"
  }
]

const filterOptions: { label: string; value: NotificationType | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Awaiting Response", value: "awaiting_response" },
  { label: "Awaiting Approval", value: "awaiting_approval" },
  { label: "Status Updates", value: "status_update" },
  { label: "Other", value: "other" }
]

export function InboxNotifications() {
  const [selectedFilter, setSelectedFilter] = useState<NotificationType | "all">("all")

  const handleNotificationClick = (ticketId: string) => {
    // TODO: Implement navigation to ticket
    console.log(`Navigate to ticket: ${ticketId}`)
  }

  const filteredNotifications = selectedFilter === "all" 
    ? notifications
    : notifications.filter(notification => notification.type === selectedFilter)

  const notificationCounts = {
    all: notifications.length,
    awaiting_response: notifications.filter(n => n.type === "awaiting_response").length,
    awaiting_approval: notifications.filter(n => n.type === "awaiting_approval").length,
    status_update: notifications.filter(n => n.type === "status_update").length,
    other: notifications.filter(n => n.type === "other").length,
  }

  return (
    <Card className="h-full">
      <CardContent className="p-4 h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-[#1C2B4F]">Inbox & Notifications</h2>
          <div className="flex items-center gap-1.5">
            {filterOptions.map(option => (
              <button
                key={option.value}
                onClick={() => setSelectedFilter(option.value)}
                className={cn(
                  "text-[11px] font-medium whitespace-nowrap transition-colors px-2 py-0.5 rounded-full",
                  selectedFilter === option.value
                    ? "text-[#FF4F11] bg-[#FF4F11]/10"
                    : "text-[#42526E]/70 bg-gray-50/70 hover:bg-gray-50"
                )}
              >
                {option.label} {notificationCounts[option.value]}
              </button>
            ))}
          </div>
        </div>

        <div className="relative flex-1">
          <div className="absolute inset-0 -mx-4 px-4 overflow-y-auto">
            <div className="space-y-1.5 py-0.5">
              {filteredNotifications.map((notification) => (
                <NotificationCard
                  key={notification.id}
                  type={notification.type}
                  title={notification.title}
                  ticketId={notification.ticketId}
                  assignedTo={notification.assignedTo}
                  timestamp={notification.timestamp}
                  onClick={() => handleNotificationClick(notification.ticketId)}
                />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
