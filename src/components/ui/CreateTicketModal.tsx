"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog"
import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface CreateTicketModalProps {
  isOpen: boolean
  onCloseAction: () => void
}

export function CreateTicketModal({ isOpen, onCloseAction }: CreateTicketModalProps) {
  const [formData, setFormData] = useState({
    ticketName: "",
    description: "",
    objectives: "",
    supportAreas: [] as string[],
    categories: [] as string[]
  })

  const supportAreas = [
    "Other Software System",
    "Operations Hub",
    "Marketing Hub",
    "Service Hub",
    "Content Hub",
    "Sales Hub"
  ]

  const categories = [
    "AI/Breeze Intelligence",
    "Custom Integration Issue",
    "Dashboards & Reporting",
    "Data Formatting",
    "Data Migration",
    "HubSpot Automation",
    "HubSpot Custom Email Template",
    "HubSpot Custom Quote Design",
    "HubSpot Customisation",
    "HubSpot Integration Request",
    "HubSpot Training Session(s)",
    "HubSpot Website/s",
    "Import/Export",
    "Native Integration Issue",
    "Software Compatibility",
    "Software Process Consulting",
    "Training Material",
    "Other"
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    onCloseAction()
  }

  const toggleSupportArea = (area: string) => {
    setFormData(prev => ({
      ...prev,
      supportAreas: prev.supportAreas.includes(area)
        ? prev.supportAreas.filter(a => a !== area)
        : [...prev.supportAreas, area]
    }))
  }

  const toggleCategory = (category: string) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onCloseAction}>
      <DialogContent className="sm:max-w-[1200px] p-0 overflow-hidden">
        <DialogHeader className="px-8 py-4 border-b border-gray-100">
          <DialogTitle className="text-xl font-semibold text-[#1C2B4F]">Create New Support Ticket</DialogTitle>
        </DialogHeader>
        <div className="px-8 py-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-[380px_1fr] gap-6">
              {/* Left Column - Form Fields */}
              <div className="flex flex-col space-y-4">
                {/* Ticket Name */}
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <label className="block text-[#1C2B4F] text-[13px] font-medium mb-0.5">
                    Ticket Name <span className="text-[#FF4F11]">*</span>
                  </label>
                  <p className="text-xs text-[#42526E] mb-1.5">Provide a brief, descriptive title for your support request</p>
                  <input
                    type="text"
                    value={formData.ticketName}
                    onChange={(e) => setFormData(prev => ({ ...prev, ticketName: e.target.value }))}
                    className="w-full h-9 px-3 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4F11]/10 focus:border-[#FF4F11] text-[13px] bg-gray-50/50"
                    placeholder="Enter ticket name"
                    required
                  />
                </div>

                {/* Ticket Description */}
                <div className="bg-white rounded-lg border border-gray-200 p-4 flex-1 flex flex-col">
                  <label className="block text-[#1C2B4F] text-[13px] font-medium mb-0.5">
                    Ticket Description <span className="text-[#FF4F11]">*</span>
                  </label>
                  <p className="text-xs text-[#42526E] mb-1.5">Describe your request in detail, including any relevant background information</p>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-100 rounded-lg flex-1 min-h-[100px] resize-none focus:outline-none focus:ring-2 focus:ring-[#FF4F11]/10 focus:border-[#FF4F11] text-[13px] bg-gray-50/50 overflow-y-auto"
                    placeholder="Enter description"
                    required
                  />
                </div>

                {/* Additional Documentation */}
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <label className="block text-[#1C2B4F] text-[13px] font-medium mb-0.5">
                    Additional Documentation / Files
                  </label>
                  <p className="text-xs text-[#42526E] mb-1.5">Upload any relevant files or documentation to support your request</p>
                  <div className="h-[52px] bg-gray-50/50 p-2 rounded-lg border border-gray-100 flex items-center">
                    <button
                      type="button"
                      className="px-4 py-2 border border-gray-100 rounded-lg text-xs text-[#42526E] hover:bg-gray-100 bg-white flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <path d="M12 4v16m-8-8h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Choose files
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col space-y-4">
                {/* Support Ticket Category */}
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <label className="block text-[#1C2B4F] text-[13px] font-medium mb-0.5">
                    Support Ticket Category <span className="text-[#FF4F11]">*</span>
                  </label>
                  <p className="text-xs text-[#42526E] mb-1.5">Select all categories that apply to your request</p>
                  <div className="flex flex-wrap gap-1.5 bg-gray-50/50 p-2 rounded-lg border border-gray-100">
                    {categories.map((category) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => toggleCategory(category)}
                        className={`px-2.5 py-1 rounded-lg text-xs transition-colors ${
                          formData.categories.includes(category)
                            ? 'bg-[#1C2B4F] text-white'
                            : 'bg-[#1C2B4F]/10 text-[#1C2B4F] hover:bg-[#1C2B4F]/20'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Support Area */}
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <label className="block text-[#1C2B4F] text-[13px] font-medium mb-0.5">
                    Support Area <span className="text-[#FF4F11]">*</span>
                  </label>
                  <p className="text-xs text-[#42526E] mb-1.5">Select all HubSpot areas related to your request</p>
                  <div className="flex flex-wrap gap-1.5 bg-gray-50/50 p-2 rounded-lg border border-gray-100">
                    {supportAreas.map((area) => (
                      <button
                        key={area}
                        type="button"
                        onClick={() => toggleSupportArea(area)}
                        className={`px-2.5 py-1 rounded-lg text-xs transition-colors ${
                          formData.supportAreas.includes(area)
                            ? 'bg-[#1C2B4F] text-white'
                            : 'bg-[#1C2B4F]/10 text-[#1C2B4F] hover:bg-[#1C2B4F]/20'
                        }`}
                      >
                        {area}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Primary Outcome Objectives */}
                <div className="bg-white rounded-lg border border-gray-200 p-4 flex-1">
                  <label className="block text-[#1C2B4F] text-[13px] font-medium mb-0.5">
                    Primary Outcome Objectives <span className="text-[#FF4F11]">*</span>
                  </label>
                  <p className="text-xs text-[#42526E] mb-1.5">What are the main goals or outcomes you want to achieve with this request?</p>
                  <textarea
                    value={formData.objectives}
                    onChange={(e) => setFormData(prev => ({ ...prev, objectives: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-100 rounded-lg flex-1 min-h-[100px] resize-none focus:outline-none focus:ring-2 focus:ring-[#FF4F11]/10 focus:border-[#FF4F11] text-[13px] bg-gray-50/50 overflow-y-auto"
                    placeholder="Enter objectives"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#FF4F11] text-white rounded-lg text-sm font-medium hover:bg-[#FF4F11]/90 transition-colors"
              >
                Submit Ticket
              </button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
} 