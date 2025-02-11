"use client"

import { Card } from "@/components/ui/card"

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
  }
  onClose: () => void
}

export function TicketCardModal({ ticket, onClose }: TicketCardModalProps) {
  return (
    <div 
      className="absolute inset-0 bg-[#111827]/90 flex items-center justify-center z-[9999] h-screen overflow-hidden"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, margin: 0, padding: 0 }}
      onClick={(e) => {
        // Only close if clicking the backdrop itself
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <div className="bg-white rounded-lg w-[70vw] h-[70vh] overflow-auto m-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-400">
        <div className="flex items-start justify-between p-8 border-b">
          <div>
            <h2 className="text-xl font-semibold text-[#42526E]">Ticket Name: {ticket.title}</h2>
            <p className="text-sm text-[#6B778C] mt-1">Ticket #{ticket.ticketNumber}</p>
          </div>
          <button
            onClick={onClose}
            className="text-[#6B778C] hover:text-[#42526E] transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-12 gap-8 p-8">
          {/* Left Column */}
          <div className="col-span-4">
            <div className="space-y-6">
              <section>
                <h3 className="font-medium text-[#42526E] mb-4">Ticket Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-[#6B778C]">Created By</label>
                    <p className="text-sm text-[#42526E]">{ticket.createdBy}</p>
                  </div>
                  <div>
                    <label className="text-sm text-[#6B778C]">Created</label>
                    <p className="text-sm text-[#42526E]">{ticket.created}</p>
                  </div>
                  <div>
                    <label className="text-sm text-[#6B778C]">Description</label>
                    <p className="text-sm text-[#42526E]">{ticket.description}</p>
                  </div>
                  <div>
                    <label className="text-sm text-[#6B778C]">Supporting Files</label>
                    <p className="text-sm text-[#42526E]">
                      {ticket.supportingFiles?.length ? 
                        ticket.supportingFiles.join(", ") : 
                        "No files attached"}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm text-[#6B778C]">Support Area</label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {ticket.supportArea.map((area) => (
                        <span
                          key={area}
                          className="px-2 py-1 text-xs bg-gray-100 text-[#42526E] rounded"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-[#6B778C]">Support Ticket Category</label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {ticket.supportCategory.map((category) => (
                        <span
                          key={category}
                          className="px-2 py-1 text-xs bg-gray-100 text-[#42526E] rounded"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-[#6B778C]">Primary Outcome Objectives</label>
                    <p className="text-sm text-[#42526E]">{ticket.primaryOutcomeObjectives}</p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Middle Column */}
          <div className="col-span-4">
            <section>
              <h3 className="font-medium text-[#42526E] mb-4">Timeline</h3>
              <div className="relative pl-4 border-l-2 border-[#DFE1E6] space-y-6">
                <div className="relative">
                  <div className="absolute -left-[21px] top-0 w-4 h-4 rounded-full bg-[#0052CC] border-2 border-white" />
                  <div>
                    <div className="flex items-center gap-2 text-sm text-[#42526E]">
                      <span className="font-medium">Ticket Created</span>
                      <span className="text-[#6B778C]">{ticket.created}</span>
                    </div>
                    <p className="text-sm text-[#6B778C] mt-1">by {ticket.createdBy}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="col-span-4">
            <section>
              <h3 className="font-medium text-[#42526E] mb-4">Ticket Scope</h3>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-blue-500">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                      <path d="M12 8v8m0-8v0m0 8v0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-blue-700">Ticket Being Scoped</h4>
                    <p className="text-sm text-blue-600 mt-1">
                      Your ticket request is currently being scoped and you will receive an alert shortly when it is ready to be approved.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm text-[#6B778C]">Role Type</h4>
                  <h4 className="text-sm text-[#6B778C]">Hours</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded text-center">
                  <p className="text-sm text-[#6B778C]">No scoped hours available</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 