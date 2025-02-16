"use client"

import { Card } from "@/components/ui/card"
import { createPortal } from "react-dom"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type TicketStatus = 
  | "New Request"
  | "Ticket Scoping"
  | "Awaiting Approval"
  | "In Progress"
  | "Awaiting Feedback"
  | "Completed"
  | "Abandoned"

type TimelineEvent = {
  type: "created" | "reply" | "status_change" | "file_added"
  timestamp: string
  user: string
  content?: string
  files?: string[]
  status?: TicketStatus
}

type RoleHours = {
  strategic: number
  setup: number
  integration: number
}

type TicketCardModalProps = {
  ticket: {
    id: string
    title: string
    ticketNumber: string
    createdBy: string | undefined
    created: string
    description: string
    supportingFiles?: string[]
    supportArea: string[]
    supportCategory: string[]
    primaryOutcomeObjectives: string
    status: TicketStatus
    scopedHours?: RoleHours
    availableHours?: RoleHours
  }
  onCloseAction: () => void
  onApproveAction?: () => void
  onRequestRevisionAction?: (message: string) => void
  onDeclineAction?: (message: string) => void
  onReplyAction?: (message: string, files?: File[]) => void
}

const statusSteps = [
  { label: "New Request", value: "New Request" },
  { label: "Ticket Scoping", value: "Ticket Scoping" },
  { label: "Awaiting Approval", value: "Awaiting Approval" },
  { label: "In Progress", value: "In Progress" },
  { label: "Awaiting Feedback", value: "Awaiting Feedback" },
  { label: "Closed", value: "Completed" }
]

export function TicketCardModal({ 
  ticket, 
  onCloseAction,
  onApproveAction,
  onRequestRevisionAction,
  onDeclineAction,
  onReplyAction 
}: TicketCardModalProps) {
  const [mounted, setMounted] = useState(false)
  const [replyText, setReplyText] = useState("")
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [revisionMessage, setRevisionMessage] = useState("")
  const [declineMessage, setDeclineMessage] = useState("")
  const [showRevisionForm, setShowRevisionForm] = useState(false)
  const [showDeclineForm, setShowDeclineForm] = useState(false)
  const [revisionNotes, setRevisionNotes] = useState("")
  const [isReplyExpanded, setIsReplyExpanded] = useState(false)

  const hasInsufficientHours = ticket.scopedHours && ticket.availableHours && (
    ticket.scopedHours.strategic > ticket.availableHours.strategic ||
    ticket.scopedHours.setup > ticket.availableHours.setup ||
    ticket.scopedHours.integration > ticket.availableHours.integration
  )

  // Mock timeline events - in real app, this would come from props or API
  const [timelineEvents, setTimelineEvents] = useState<TimelineEvent[]>([
    {
      type: "status_change",
      timestamp: "Jan 6, 2025, 09:30 AEST",
      user: "Sarah Thompson (Fileroom)",
      status: "Awaiting Approval"
    },
    {
      type: "reply",
      timestamp: "Jan 6, 2025, 09:32 AEST",
      user: "Sarah Thompson (Fileroom)",
      content: "I've completed the scoping for your request. Please review the allocated hours and approve if you're happy to proceed. The scope includes strategic consulting for planning, CRM support for implementation, and development hours for custom automation rules.",
      files: ["scope_document.pdf", "implementation_plan.pdf"]
    },
    {
      type: "status_change",
      timestamp: "Jan 6, 2025, 07:45 AEST",
      user: "Sarah Thompson (Fileroom)",
      status: "Ticket Scoping"
    },
    {
      type: "reply",
      timestamp: "Jan 6, 2025, 08:15 AEST",
      user: "Sarah Thompson (Fileroom)",
      content: "I've reviewed your request and will begin scoping the required hours. I'll have this ready for your approval shortly."
    },
    {
      type: "created",
      timestamp: ticket.created,
      user: ticket.createdBy || "Unknown",
      content: ticket.description,
      files: ticket.supportingFiles
    }
  ])

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files))
    }
  }

  const handleReplySubmit = () => {
    if (replyText.trim() || selectedFiles.length > 0) {
      onReplyAction?.(replyText, selectedFiles)
      // Add to timeline (in real app, this would happen after API confirmation)
      setTimelineEvents(prev => [...prev, {
        type: "reply",
        timestamp: new Date().toLocaleString(),
        user: "Current User", // In real app, get from auth context
        content: replyText,
        files: selectedFiles.map(f => f.name)
      }])
      setReplyText("")
      setSelectedFiles([])
    }
  }

  const handleApproveAndClose = () => {
    onApproveAction?.()
    setShowRevisionForm(false)
    setRevisionMessage("")
    setRevisionNotes("")
  }

  const handleRevisionSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onRequestRevisionAction?.(revisionNotes)
    setShowRevisionForm(false)
    setRevisionNotes("")
  }

  const handleTextareaFocus = () => {
    setIsReplyExpanded(true)
  }

  const handleTextareaBlur = () => {
    if (!replyText.trim()) {
      setIsReplyExpanded(false)
    }
  }

  const renderApprovedHours = () => (
    <div className="space-y-2">
      {ticket.scopedHours?.strategic !== undefined && (
        <div className="p-4 rounded-lg bg-blue-50/80 border border-blue-200">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#1C2B4F]" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span className="text-sm font-medium text-[#1C2B4F]">Strategic Consulting</span>
            </div>
            <span className="text-sm font-bold text-[#1C2B4F]">{ticket.scopedHours.strategic}h</span>
          </div>
        </div>
      )}

      {ticket.scopedHours?.setup !== undefined && (
        <div className="p-4 rounded-lg bg-blue-50/80 border border-blue-200">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#1C2B4F]" viewBox="0 0 24 24" fill="none">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="text-sm font-medium text-[#1C2B4F]">CRM Support & Training</span>
            </div>
            <span className="text-sm font-bold text-[#1C2B4F]">{ticket.scopedHours.setup}h</span>
          </div>
        </div>
      )}

      {ticket.scopedHours?.integration !== undefined && (
        <div className="p-4 rounded-lg bg-blue-50/80 border border-blue-200">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#1C2B4F]" viewBox="0 0 24 24" fill="none">
                <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M7 8L11 12L7 16M13 16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm font-medium text-[#1C2B4F]">CRM Development</span>
            </div>
            <span className="text-sm font-bold text-[#1C2B4F]">{ticket.scopedHours.integration}h</span>
          </div>
        </div>
      )}
    </div>
  )

  const renderDetailedScopedHours = () => {
    const hasEnoughHours = (scoped: number, available: number) => available >= scoped;

    return (
      <div className="grid grid-cols-3 gap-3">
        {/* Strategic Consulting */}
        <div className={`rounded-lg p-2.5 ${
          hasEnoughHours(ticket.scopedHours?.strategic || 0, ticket.availableHours?.strategic || 0)
            ? 'bg-blue-50'
            : 'bg-red-50'
        }`}>
          <div className="flex flex-col items-start gap-1 mb-3">
            <svg className={`w-5 h-5 ${
              hasEnoughHours(ticket.scopedHours?.strategic || 0, ticket.availableHours?.strategic || 0)
                ? 'text-blue-600'
                : 'text-red-600'
            }`} viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span className={`font-medium text-[10px] ${
              hasEnoughHours(ticket.scopedHours?.strategic || 0, ticket.availableHours?.strategic || 0)
                ? 'text-blue-600'
                : 'text-red-600'
            }`}>Strategic Consulting</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-[#42526E]">Scoped</span>
              <span className="text-sm font-semibold text-[#42526E]">{ticket.scopedHours?.strategic || 0} hr/s</span>
            </div>
            <div className="h-px bg-gray-200" />
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#42526E]">Available</span>
                <span className="text-xs font-medium text-[#42526E]">{ticket.availableHours?.strategic || 0} hr/s</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#42526E]">Left Over</span>
                <span className="text-xs font-medium text-[#42526E]">
                  {(ticket.availableHours?.strategic || 0) - (ticket.scopedHours?.strategic || 0)} hr/s
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CRM Support & Training */}
        <div className={`rounded-lg p-2.5 ${
          hasEnoughHours(ticket.scopedHours?.setup || 0, ticket.availableHours?.setup || 0)
            ? 'bg-blue-50'
            : 'bg-red-50'
        }`}>
          <div className="flex flex-col items-start gap-1 mb-3">
            <svg className={`w-5 h-5 ${
              hasEnoughHours(ticket.scopedHours?.setup || 0, ticket.availableHours?.setup || 0)
                ? 'text-blue-600'
                : 'text-red-600'
            }`} viewBox="0 0 24 24" fill="none">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className={`font-medium text-[10px] ${
              hasEnoughHours(ticket.scopedHours?.setup || 0, ticket.availableHours?.setup || 0)
                ? 'text-blue-600'
                : 'text-red-600'
            }`}>CRM Support & Training</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-[#42526E]">Scoped</span>
              <span className="text-sm font-semibold text-[#42526E]">{ticket.scopedHours?.setup || 0} hr/s</span>
            </div>
            <div className="h-px bg-gray-200" />
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#42526E]">Available</span>
                <span className="text-xs font-medium text-[#42526E]">{ticket.availableHours?.setup || 0} hr/s</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#42526E]">Left Over</span>
                <span className="text-xs font-medium text-[#42526E]">
                  {(ticket.availableHours?.setup || 0) - (ticket.scopedHours?.setup || 0)} hr/s
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CRM Development */}
        <div className={`rounded-lg p-2.5 ${
          hasEnoughHours(ticket.scopedHours?.integration || 0, ticket.availableHours?.integration || 0)
            ? 'bg-blue-50'
            : 'bg-red-50'
        }`}>
          <div className="flex flex-col items-start gap-1 mb-3">
            <svg className={`w-5 h-5 ${
              hasEnoughHours(ticket.scopedHours?.integration || 0, ticket.availableHours?.integration || 0)
                ? 'text-blue-600'
                : 'text-red-600'
            }`} viewBox="0 0 24 24" fill="none">
              <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M7 8L11 12L7 16M13 16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className={`font-medium text-[10px] ${
              hasEnoughHours(ticket.scopedHours?.integration || 0, ticket.availableHours?.integration || 0)
                ? 'text-blue-600'
                : 'text-red-600'
            }`}>CRM Development</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-[#42526E]">Scoped</span>
              <span className="text-sm font-semibold text-[#42526E]">{ticket.scopedHours?.integration || 0} hr/s</span>
            </div>
            <div className="h-px bg-gray-200" />
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#42526E]">Available</span>
                <span className="text-xs font-medium text-[#42526E]">{ticket.availableHours?.integration || 0} hr/s</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#42526E]">Left Over</span>
                <span className="text-xs font-medium text-[#42526E]">
                  {(ticket.availableHours?.integration || 0) - (ticket.scopedHours?.integration || 0)} hr/s
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderTicketScopeContent = () => {
    switch (ticket.status) {
      case "New Request":
        return (
          <div className="h-full flex flex-col">
            <div className="flex-1 overflow-y-auto">
              <div className="grid grid-cols-3 gap-3">
                {/* Strategic Consulting */}
                <div className="rounded-lg p-2.5 bg-gray-50">
                  <div className="flex flex-col items-start gap-1 mb-3">
                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span className="font-medium text-[10px] text-gray-600">Strategic Consulting</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#42526E]">Scoped</span>
                      <span className="text-sm font-semibold text-[#42526E]">?</span>
                    </div>
                  </div>
                </div>

                {/* CRM Support & Training */}
                <div className="rounded-lg p-2.5 bg-gray-50">
                  <div className="flex flex-col items-start gap-1 mb-3">
                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span className="font-medium text-[10px] text-gray-600">CRM Support & Training</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#42526E]">Scoped</span>
                      <span className="text-sm font-semibold text-[#42526E]">?</span>
                    </div>
                  </div>
                </div>

                {/* CRM Development */}
                <div className="rounded-lg p-2.5 bg-gray-50">
                  <div className="flex flex-col items-start gap-1 mb-3">
                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                      <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M7 8L11 12L7 16M13 16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-medium text-[10px] text-gray-600">CRM Development</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#42526E]">Scoped</span>
                      <span className="text-sm font-semibold text-[#42526E]">?</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alert Message */}
              <div className="mt-6">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-blue-500">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                        <path d="M12 8v8m0-8v0m0 8v0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-blue-700">New Request</h4>
                      <p className="text-sm text-blue-600 mt-0.5">Your ticket has been submitted.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "Ticket Scoping":
        return (
          <div className="h-full flex flex-col">
            <div className="flex-1 overflow-y-auto">
              <div className="grid grid-cols-3 gap-3">
                {/* Strategic Consulting */}
                <div className="rounded-lg p-2.5 bg-gray-50">
                  <div className="flex flex-col items-start gap-1 mb-3">
                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span className="font-medium text-[10px] text-gray-600">Strategic Consulting</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#42526E]">Scoped</span>
                      <span className="text-sm font-semibold text-[#42526E]">?</span>
                    </div>
                  </div>
                </div>

                {/* CRM Support & Training */}
                <div className="rounded-lg p-2.5 bg-gray-50">
                  <div className="flex flex-col items-start gap-1 mb-3">
                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span className="font-medium text-[10px] text-gray-600">CRM Support & Training</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#42526E]">Scoped</span>
                      <span className="text-sm font-semibold text-[#42526E]">?</span>
                    </div>
                  </div>
                </div>

                {/* CRM Development */}
                <div className="rounded-lg p-2.5 bg-gray-50">
                  <div className="flex flex-col items-start gap-1 mb-3">
                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                      <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M7 8L11 12L7 16M13 16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-medium text-[10px] text-gray-600">CRM Development</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#42526E]">Scoped</span>
                      <span className="text-sm font-semibold text-[#42526E]">?</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alert Message */}
              <div className="mt-6">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-blue-500">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                        <path d="M12 8v8m0-8v0m0 8v0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-blue-700">Ticket Scoping</h4>
                      <p className="text-sm text-blue-600 mt-0.5">Your ticket request is currently being scoped.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "Awaiting Approval":
        return (
          <div className="h-full flex flex-col">
            <div className="flex-1 overflow-y-auto">
              <div className="grid grid-cols-3 gap-3">
                {/* Strategic Consulting */}
                <div className="rounded-lg p-2.5 bg-gray-50">
                  <div className="flex flex-col items-start gap-1 mb-3">
                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span className="font-medium text-[10px] text-gray-600">Strategic Consulting</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#42526E]">Scoped</span>
                      <span className="text-sm font-semibold text-[#42526E]">{ticket.scopedHours?.strategic || 0} hr/s</span>
                    </div>
                  </div>
                </div>

                {/* CRM Support & Training */}
                <div className="rounded-lg p-2.5 bg-gray-50">
                  <div className="flex flex-col items-start gap-1 mb-3">
                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span className="font-medium text-[10px] text-gray-600">CRM Support & Training</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#42526E]">Scoped</span>
                      <span className="text-sm font-semibold text-[#42526E]">{ticket.scopedHours?.setup || 0} hr/s</span>
                    </div>
                  </div>
                </div>

                {/* CRM Development */}
                <div className="rounded-lg p-2.5 bg-gray-50">
                  <div className="flex flex-col items-start gap-1 mb-3">
                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                      <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M7 8L11 12L7 16M13 16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-medium text-[10px] text-gray-600">CRM Development</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#42526E]">Scoped</span>
                      <span className="text-sm font-semibold text-[#42526E]">{ticket.scopedHours?.integration || 0} hr/s</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Estimated Completion Date Section */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-medium text-[#1C2B4F] mb-2">Estimated Completion Date - Updated</h4>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 text-sm font-medium text-blue-700 mb-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M3 10h18M16 2v4M8 2v4" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>January 15, 2025</span>
                  </div>
                  <p className="text-xs text-blue-600">
                    Based on current progress and resource allocation, we expect to complete this task by the date shown above. This estimate accounts for the approved scope and complexity of the work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      case "In Progress":
        return (
          <div className="h-full flex flex-col">
            <div className="flex-1 overflow-y-auto">
              <div className="grid grid-cols-3 gap-3">
                {/* Strategic Consulting */}
                <div className="rounded-lg p-2.5 bg-gray-50">
                  <div className="flex flex-col items-start gap-1 mb-3">
                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span className="font-medium text-[10px] text-gray-600">Strategic Consulting</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#42526E]">Scoped</span>
                      <span className="text-sm font-semibold text-[#42526E]">{ticket.scopedHours?.strategic || 0} hr/s</span>
                    </div>
                  </div>
                </div>

                {/* CRM Support & Training */}
                <div className="rounded-lg p-2.5 bg-gray-50">
                  <div className="flex flex-col items-start gap-1 mb-3">
                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span className="font-medium text-[10px] text-gray-600">CRM Support & Training</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#42526E]">Scoped</span>
                      <span className="text-sm font-semibold text-[#42526E]">{ticket.scopedHours?.setup || 0} hr/s</span>
                    </div>
                  </div>
                </div>

                {/* CRM Development */}
                <div className="rounded-lg p-2.5 bg-gray-50">
                  <div className="flex flex-col items-start gap-1 mb-3">
                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                      <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M7 8L11 12L7 16M13 16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-medium text-[10px] text-gray-600">CRM Development</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#42526E]">Scoped</span>
                      <span className="text-sm font-semibold text-[#42526E]">{ticket.scopedHours?.integration || 0} hr/s</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Estimated Completion Date Section */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-medium text-[#1C2B4F] mb-2">Estimated Completion Date - Updated</h4>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 text-sm font-medium text-blue-700 mb-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M3 10h18M16 2v4M8 2v4" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>January 15, 2025</span>
                  </div>
                  <p className="text-xs text-blue-600">
                    Based on current progress and resource allocation, we expect to complete this task by the date shown above. This estimate accounts for the approved scope and complexity of the work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      case "Awaiting Feedback":
        return (
          <div className="h-full flex flex-col">
            <div className="flex-1 overflow-y-auto">
              <div className="grid grid-cols-3 gap-3">
                {/* Strategic Consulting */}
                <div className="rounded-lg p-2.5 bg-gray-50">
                  <div className="flex flex-col items-start gap-1 mb-3">
                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span className="font-medium text-[10px] text-gray-600">Strategic Consulting</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#42526E]">Scoped</span>
                      <span className="text-sm font-semibold text-[#42526E]">{ticket.scopedHours?.strategic || 0} hr/s</span>
                    </div>
                  </div>
                </div>

                {/* CRM Support & Training */}
                <div className="rounded-lg p-2.5 bg-gray-50">
                  <div className="flex flex-col items-start gap-1 mb-3">
                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span className="font-medium text-[10px] text-gray-600">CRM Support & Training</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#42526E]">Scoped</span>
                      <span className="text-sm font-semibold text-[#42526E]">{ticket.scopedHours?.setup || 0} hr/s</span>
                    </div>
                  </div>
                </div>

                {/* CRM Development */}
                <div className="rounded-lg p-2.5 bg-gray-50">
                  <div className="flex flex-col items-start gap-1 mb-3">
                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                      <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M7 8L11 12L7 16M13 16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-medium text-[10px] text-gray-600">CRM Development</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#42526E]">Scoped</span>
                      <span className="text-sm font-semibold text-[#42526E]">{ticket.scopedHours?.integration || 0} hr/s</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Estimated Completion Date Section */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-medium text-[#1C2B4F] mb-2">Estimated Completion Date - Updated</h4>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 text-sm font-medium text-blue-700 mb-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M3 10h18M16 2v4M8 2v4" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>January 15, 2025</span>
                  </div>
                  <p className="text-xs text-blue-600">
                    Based on current progress and resource allocation, we expect to complete this task by the date shown above. This estimate accounts for the approved scope and complexity of the work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      case "Completed":
        return (
          <div className="h-full flex flex-col">
            <div className="flex-1 overflow-y-auto">
              <div className="grid grid-cols-3 gap-3">
                {/* Strategic Consulting */}
                <div className="rounded-lg p-2.5 bg-gray-50">
                  <div className="flex flex-col items-start gap-1 mb-3">
                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span className="font-medium text-[10px] text-gray-600">Strategic Consulting</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#42526E]">Scoped</span>
                      <span className="text-sm font-semibold text-[#42526E]">{ticket.scopedHours?.strategic || 0} hr/s</span>
                    </div>
                  </div>
                </div>

                {/* CRM Support & Training */}
                <div className="rounded-lg p-2.5 bg-gray-50">
                  <div className="flex flex-col items-start gap-1 mb-3">
                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span className="font-medium text-[10px] text-gray-600">CRM Support & Training</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#42526E]">Scoped</span>
                      <span className="text-sm font-semibold text-[#42526E]">{ticket.scopedHours?.setup || 0} hr/s</span>
                    </div>
                  </div>
                </div>

                {/* CRM Development */}
                <div className="rounded-lg p-2.5 bg-gray-50">
                  <div className="flex flex-col items-start gap-1 mb-3">
                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                      <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M7 8L11 12L7 16M13 16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-medium text-[10px] text-gray-600">CRM Development</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#42526E]">Scoped</span>
                      <span className="text-sm font-semibold text-[#42526E]">{ticket.scopedHours?.integration || 0} hr/s</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Estimated Completion Date Section */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-medium text-[#1C2B4F] mb-2">Estimated Completion Date - Updated</h4>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 text-sm font-medium text-blue-700 mb-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M3 10h18M16 2v4M8 2v4" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>January 15, 2025</span>
                  </div>
                  <p className="text-xs text-blue-600">
                    This task has been completed and approved. All work was delivered according to the agreed scope and timeline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      case "Abandoned":
        return (
          <div className="h-full flex flex-col">
            <div className="flex-1 overflow-y-auto">
              <div className="grid grid-cols-3 gap-3">
                {/* Strategic Consulting */}
                <div className="rounded-lg p-2.5 bg-gray-50">
                  <div className="flex flex-col items-start gap-1 mb-3">
                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span className="font-medium text-[10px] text-gray-600">Strategic Consulting</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#42526E]">Scoped</span>
                      <span className="text-sm font-semibold text-[#42526E]">{ticket.scopedHours?.strategic || 0} hr/s</span>
                    </div>
                  </div>
                </div>

                {/* CRM Support & Training */}
                <div className="rounded-lg p-2.5 bg-gray-50">
                  <div className="flex flex-col items-start gap-1 mb-3">
                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span className="font-medium text-[10px] text-gray-600">CRM Support & Training</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#42526E]">Scoped</span>
                      <span className="text-sm font-semibold text-[#42526E]">{ticket.scopedHours?.setup || 0} hr/s</span>
                    </div>
                  </div>
                </div>

                {/* CRM Development */}
                <div className="rounded-lg p-2.5 bg-gray-50">
                  <div className="flex flex-col items-start gap-1 mb-3">
                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                      <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M7 8L11 12L7 16M13 16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-medium text-[10px] text-gray-600">CRM Development</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#42526E]">Scoped</span>
                      <span className="text-sm font-semibold text-[#42526E]">{ticket.scopedHours?.integration || 0} hr/s</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Estimated Completion Date Section */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-medium text-[#1C2B4F] mb-2">Estimated Completion Date - Updated</h4>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 text-sm font-medium text-blue-700 mb-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M3 10h18M16 2v4M8 2v4" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>January 15, 2025</span>
                  </div>
                  <p className="text-xs text-blue-600">
                    This task has been abandoned and will not be completed. No further updates to the completion date will be provided.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const sortedTimelineEvents = [...timelineEvents].sort((a, b) => {
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  })

  const modalContent = (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999]"
        onClick={onCloseAction}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
        <div 
          className="bg-white rounded-xl w-[1400px] h-[800px] pointer-events-auto shadow-xl flex flex-col"
        >
          {/* Header */}
          <div className="flex-none border-b border-gray-100">
            <div className="px-6 py-4">
              {/* Title, Status and Close Button Row */}
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-[#1C2B4F]">{ticket.title}</h2>
                  <div className="text-sm text-[#42526E] mt-1">Ticket #{ticket.ticketNumber}</div>
                </div>

                {/* Dynamic Status Card - Now on the right */}
                <div className="flex-none">
                  {(() => {
                    switch (ticket.status) {
                      case "New Request":
                        return (
                          <div className="group relative">
                            <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-md bg-amber-50 text-amber-600 text-sm font-medium border border-amber-600">
                              <span>New Request</span>
                              <svg className="w-4 h-4 text-amber-400 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                                <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                            </div>
                            <div className="hidden group-hover:block absolute left-0 bottom-full mb-2 w-[300px] p-2 bg-gray-900 text-white text-xs rounded shadow-lg">
                              Your ticket has been submitted and will be reviewed by our support team.
                            </div>
                          </div>
                        )
                      case "Ticket Scoping":
                        return (
                          <div className="group relative">
                            <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-md bg-blue-50 text-blue-600 text-sm font-medium border border-blue-600">
                              <span>Ticket Scoping</span>
                              <svg className="w-4 h-4 text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                                <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                            </div>
                            <div className="hidden group-hover:block absolute left-0 bottom-full mb-2 w-[300px] p-2 bg-gray-900 text-white text-xs rounded shadow-lg">
                              Our team is determining the required hours and resources for your request.
                            </div>
                          </div>
                        )
                      case "Awaiting Approval":
                        return (
                          <div className="group relative">
                            <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-md bg-purple-50 text-purple-600 text-sm font-medium border border-purple-600">
                              <span>Awaiting Approval</span>
                              <svg className="w-4 h-4 text-purple-400 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                                <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                            </div>
                            <div className="hidden group-hover:block absolute left-0 bottom-full mb-2 w-[300px] p-2 bg-gray-900 text-white text-xs rounded shadow-lg">
                              The scope has been prepared and requires your review and approval before work can begin.
                            </div>
                          </div>
                        )
                      case "In Progress":
                        return (
                          <div className="group relative">
                            <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-md bg-orange-50 text-orange-600 text-sm font-medium border border-orange-600">
                              <span>In Progress</span>
                              <svg className="w-4 h-4 text-orange-400 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                                <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                            </div>
                            <div className="hidden group-hover:block absolute left-0 bottom-full mb-2 w-[300px] p-2 bg-gray-900 text-white text-xs rounded shadow-lg">
                              Active work is being performed on your ticket. You'll receive regular progress updates.
                            </div>
                          </div>
                        )
                      case "Awaiting Feedback":
                        return (
                          <div className="group relative">
                            <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-md bg-blue-50 text-blue-600 text-sm font-medium border border-blue-600">
                              <span>Awaiting Feedback</span>
                              <svg className="w-4 h-4 text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                                <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                            </div>
                            <div className="hidden group-hover:block absolute left-0 bottom-full mb-2 w-[300px] p-2 bg-gray-900 text-white text-xs rounded shadow-lg">
                              Please review the completed work and provide feedback or approve for completion.
                            </div>
                          </div>
                        )
                      case "Completed":
                        return (
                          <div className="group relative">
                            <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-md bg-green-50 text-green-600 text-sm font-medium border border-green-600">
                              <span>Completed</span>
                              <svg className="w-4 h-4 text-green-400 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                                <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                            </div>
                            <div className="hidden group-hover:block absolute left-0 bottom-full mb-2 w-[300px] p-2 bg-gray-900 text-white text-xs rounded shadow-lg">
                              The work has been completed and meets all requirements. The ticket is now closed.
                            </div>
                          </div>
                        )
                      case "Abandoned":
                        return (
                          <div className="group relative">
                            <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-md bg-gray-50 text-gray-600 text-sm font-medium border border-gray-600">
                              <span>Abandoned</span>
                              <svg className="w-4 h-4 text-gray-400 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                                <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                            </div>
                            <div className="hidden group-hover:block absolute left-0 bottom-full mb-2 w-[300px] p-2 bg-gray-900 text-white text-xs rounded shadow-lg">
                              The ticket has been closed without completion at your request or due to other circumstances.
                            </div>
                          </div>
                        )
                      default:
                        return null
                    }
                  })()}

                  <button
                    onClick={onCloseAction}
                    className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Status Stepper */}
              <div className="relative mt-6 mb-0">
                {/* Container for the entire stepper */}
                <div className="relative px-6">
                  {/* Lines Container */}
                  <div className="absolute inset-x-0 top-[14px] h-0.5">
                    {/* Background Line */}
                    <div className="absolute inset-0 bg-gray-200" />
                    
                    {/* Progress Line */}
                    <div 
                      className="absolute inset-y-0 left-0 bg-[#FF4F11] transition-all duration-500"
                      style={{
                        width: `${(statusSteps.findIndex(s => s.value === ticket.status) / (statusSteps.length - 1)) * 100}%`
                      }}
                    />
                  </div>

                  {/* Steps Container */}
                  <div className="relative flex justify-between items-center">
                    {statusSteps.map((step, index) => {
                      const currentStepIndex = statusSteps.findIndex(s => s.value === ticket.status);
                      const isCompleted = currentStepIndex > index;
                      const isCurrent = currentStepIndex === index;
                      const shouldShowTimestamp = isCompleted || isCurrent;
                      
                      let timestamp = 'N/A';
                      if (step.value === "New Request") {
                        // Remove only timezone from the timestamp
                        timestamp = ticket.created.split(' ').slice(0, -1).join(' ');
                      } else {
                        const statusEvent = timelineEvents.find(
                          event => event.type === "status_change" && event.status === step.value
                        );
                        // Remove only timezone from the timestamp
                        timestamp = statusEvent ? statusEvent.timestamp.split(' ').slice(0, -1).join(' ') : 'N/A';
                      }
                      
                      return (
                        <div key={step.value} className="flex flex-col items-center">
                          {/* Pill */}
                          <div 
                            className={cn(
                              "min-w-[120px] px-3 py-1 rounded-full border-2 text-xs font-medium text-center",
                              isCompleted || isCurrent
                                ? "border-[#FF4F11] bg-[#FF4F11] text-white"
                                : "border-gray-300 bg-white text-gray-500"
                            )}
                          >
                            {step.label}
                          </div>
                          
                          {/* Timestamp */}
                          <span className="mt-2 text-[10px] text-gray-400">
                            {shouldShowTimestamp ? timestamp : 'N/A'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 grid grid-cols-12 gap-0 p-6 min-h-0">
            {/* Left Column - Ticket Information - Made slightly narrower */}
            <div className="col-span-2 pr-6 border-r border-gray-100">
              <h3 className="font-medium text-[#1C2B4F] mb-4">Ticket Information</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-[#42526E] font-medium">Created By</label>
                  <p className="text-sm text-[#1C2B4F] mt-0.5">{ticket.createdBy}</p>
                </div>
                <div>
                  <label className="text-xs text-[#42526E] font-medium">Created</label>
                  <p className="text-sm text-[#1C2B4F] mt-0.5">{ticket.created}</p>
                </div>
                <div>
                  <label className="text-xs text-[#42526E] font-medium">Description</label>
                  <p className="text-sm text-[#1C2B4F] mt-0.5">{ticket.description}</p>
                </div>
                <div>
                  <label className="text-xs text-[#42526E] font-medium">Supporting Files</label>
                  <p className="text-sm text-[#1C2B4F] mt-0.5">
                    {ticket.supportingFiles?.length ? 
                      ticket.supportingFiles.join(", ") : 
                      "No files attached"}
                  </p>
                </div>
                <div>
                  <label className="text-xs text-[#42526E] font-medium">Support Area</label>
                  <div className="flex flex-wrap gap-1.5 mt-0.5">
                    {ticket.supportArea.map((area) => (
                      <span
                        key={area}
                        className="inline-flex px-2 py-0.5 rounded bg-[#FF4F11]/10 text-[#FF4F11] text-xs"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-xs text-[#42526E] font-medium">Support Ticket Category</label>
                  <div className="flex flex-wrap gap-1.5 mt-0.5">
                    {ticket.supportCategory.map((category) => (
                      <span
                        key={category}
                        className="px-2 py-0.5 text-xs rounded bg-gray-100 text-gray-600"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-xs text-[#42526E] font-medium">Primary Outcome Objectives</label>
                  <p className="text-sm text-[#1C2B4F] mt-0.5">{ticket.primaryOutcomeObjectives}</p>
                </div>
              </div>
            </div>

            {/* Middle Column - Timeline */}
            <div className="col-span-5 px-6 border-r border-gray-100 min-h-0 flex flex-col">
              <h3 className="font-medium text-[#1C2B4F] mb-4">Timeline</h3>
              
              {/* Timeline Content - Scrollable */}
              <div className="flex-1 overflow-y-auto">
                <div className="space-y-4">
                  {sortedTimelineEvents.map((event, index) => {
                    const isStatusChange = event.type === "status_change"
                    const isFileroom = !isStatusChange && event.user.includes("(Fileroom)")
                    const isClientMessage = !isStatusChange && !isFileroom
                    
                    return (
                      <div 
                        key={index} 
                        className={cn(
                          "relative rounded-lg p-3",
                          isStatusChange
                            ? "bg-orange-50/80 border border-orange-200"
                            : isFileroom 
                              ? "bg-blue-50/80 border border-blue-200" 
                              : "bg-white border border-blue-200"
                        )}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className={cn(
                            "w-2 h-2 rounded-full",
                            isStatusChange
                              ? "bg-orange-500"
                              : isFileroom 
                                ? "bg-blue-500" 
                                : "bg-blue-400"
                          )} />
                          <span className="text-xs font-medium text-[#1C2B4F]">
                            {event.type === "created" ? "Ticket Created" : 
                             event.type === "reply" ? "Reply Added" :
                             event.type === "status_change" ? `Status Changed to ${event.status}` :
                             "File Added"}
                          </span>
                          <span className="text-xs text-[#42526E]">•</span>
                          <span className="text-xs text-[#42526E]">{event.timestamp}</span>
                          {!isStatusChange && (
                            <>
                              <span className="text-xs text-[#42526E]">•</span>
                              <span className={cn(
                                "text-xs",
                                isFileroom ? "text-blue-700 font-medium" : "text-[#42526E]"
                              )}>by {event.user}</span>
                            </>
                          )}
                        </div>
                        {event.content && (
                          <div className={cn(
                            "text-sm p-3 rounded-md border",
                            isStatusChange
                              ? "bg-white border-orange-100 text-[#1C2B4F]"
                              : isFileroom 
                                ? "bg-white border-blue-100 text-[#1C2B4F]" 
                                : "bg-white border-blue-100 text-[#42526E]"
                          )}>
                            {event.content}
                          </div>
                        )}
                        {event.files && event.files.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-2">
                            {event.files.map((file, fileIndex) => (
                              <div 
                                key={fileIndex} 
                                className={cn(
                                  "flex items-center gap-1.5 px-2 py-1 rounded-md border text-xs",
                                  isFileroom 
                                    ? "bg-white border-blue-100 text-blue-700" 
                                    : "bg-white border-blue-100 text-blue-600"
                                )}
                              >
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                                  <path d="M12 2L4 6v12l8 4 8-4V6l-8-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>{file}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Reply Form - Fixed at Bottom */}
              <div className="flex-none pt-4 mt-4 border-t border-gray-100">
                <div className="flex flex-col gap-3">
                  <textarea
                    value={replyText}
                    onChange={(e) => {
                      setReplyText(e.target.value)
                      if (e.target.value.trim() && !isReplyExpanded) {
                        setIsReplyExpanded(true)
                      }
                    }}
                    onFocus={handleTextareaFocus}
                    onBlur={handleTextareaBlur}
                    placeholder="Type your reply here..."
                    className={cn(
                      "w-full px-4 py-2 rounded-lg border text-sm resize-none",
                      "focus:outline-none focus:ring-2 focus:ring-[#FF4F11]/20 focus:border-[#FF4F11]",
                      "border-[#FF4F11] transition-all duration-200",
                      isReplyExpanded ? "h-[120px]" : "h-[40px]"
                    )}
                  />
                  <div className={cn(
                    "grid grid-cols-2 gap-3",
                    !isReplyExpanded && "hidden"
                  )}>
                    <div className="relative">
                      <input
                        type="file"
                        id="file-upload"
                        multiple
                        className="hidden"
                        onChange={handleFileChange}
                      />
                      <label
                        htmlFor="file-upload"
                        className="flex items-center justify-center gap-2 h-[40px] w-full px-3 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer text-sm text-[#1C2B4F]"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        Attach Files
                        {selectedFiles.length > 0 && (
                          <span className="text-[#42526E]">
                            ({selectedFiles.length})
                          </span>
                        )}
                      </label>
                    </div>
                    <button
                      onClick={handleReplySubmit}
                      disabled={!replyText.trim() && selectedFiles.length === 0}
                      className="h-[40px] w-full px-4 bg-[#FF4F11] text-white rounded-lg text-sm font-medium hover:bg-[#FF4F11]/90 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Send Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Ticket Scope - Made wider */}
            <div className="col-span-5 pl-6 flex flex-col min-h-0">
              <h3 className="flex-none font-medium text-[#1C2B4F] mb-4">Ticket Scope</h3>
              <div className="flex-1 min-h-0">
                {renderTicketScopeContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  if (!mounted) return null

  return createPortal(
    modalContent,
    document.body
  )
} 