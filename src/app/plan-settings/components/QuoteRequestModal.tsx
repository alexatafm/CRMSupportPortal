"use client"

import { useState } from "react"

interface QuoteRequestModalProps {
  isOpen: boolean
  onClose: () => void
}

export function QuoteRequestModal({ isOpen, onClose }: QuoteRequestModalProps) {
  const [quoteDetails, setQuoteDetails] = useState("")

  const handleSubmit = () => {
    // TODO: Handle quote submission
    onClose()
  }

  if (!isOpen) return null

  return (
    <div 
      className="absolute inset-0 bg-[#111827]/90 flex items-center justify-center z-[9999] h-screen overflow-hidden"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, margin: 0, padding: 0 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <div className="bg-white rounded-lg w-[600px] overflow-hidden m-4">
        <div className="flex items-start justify-between p-6 border-b border-[#DFE1E6]">
          <div>
            <h2 className="text-lg font-semibold text-[#42526E]">Request a Quote</h2>
            <p className="text-sm text-[#6B778C] mt-1">Get a personalized quote for your project requirements</p>
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

        <div className="p-6">
          <p className="text-sm text-[#6B778C] mb-6">
            Tell us about your project requirements and we'll help you determine the optimal number of support hours needed. 
            Our team will review your request and get back to you with a personalized quote within 1 business day.
          </p>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="requirements" className="block text-sm font-medium text-[#42526E] mb-2">
                Project Requirements
              </label>
              <textarea
                id="requirements"
                rows={6}
                className="w-full px-3 py-2 text-sm border border-[#DFE1E6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4F11] focus:border-transparent resize-none text-[#42526E]"
                placeholder="Please describe your project goals, timeline, and any specific requirements or challenges you'd like us to address..."
                value={quoteDetails}
                onChange={(e) => setQuoteDetails(e.target.value)}
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-[#42526E] bg-white border border-[#DFE1E6] rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF4F11]"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 text-sm font-medium text-white bg-[#FF4F11] rounded-lg hover:bg-[#FF4F11]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF4F11]"
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 