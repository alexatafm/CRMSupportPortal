import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog"
import { Button } from "./button"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"

type InquiryType = "billing" | "plan-change" | "bug-report" | "general"

interface GetInTouchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function GetInTouchModal({ isOpen, onClose }: GetInTouchModalProps) {
  const [selectedType, setSelectedType] = useState<InquiryType>("general")
  const [message, setMessage] = useState("")

  const inquiryTypes = [
    { id: "billing", label: "Billing", icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <path d="M9 17v1a3 3 0 106 0v-1m-6 0a3 3 0 003-3V7m0 10a3 3 0 003-3V7m-6 10h6m-6-3v-7a3 3 0 016 0v7m-6 0h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )},
    { id: "plan-change", label: "Plan Change", icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <path d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )},
    { id: "bug-report", label: "Report Bug", icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )},
    { id: "general", label: "General Enquiry", icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )}
  ]

  const handleSubmit = () => {
    // Handle form submission here
    console.log({ type: selectedType, message })
    onClose()
    setMessage("")
    setSelectedType("general")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Get in Touch</DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-2 gap-2">
            {inquiryTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id as InquiryType)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg border text-sm transition-colors ${
                  selectedType === type.id
                    ? 'bg-[#FF4F11] text-white border-[#FF4F11]'
                    : 'bg-white text-[#42526E] border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span className={selectedType === type.id ? 'text-white' : 'text-[#42526E]'}>
                  {type.icon}
                </span>
                {type.label}
              </button>
            ))}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[#1C2B4F]">Message</label>
            <Textarea
              value={message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
              placeholder="Please describe your inquiry..."
              className="h-32 resize-none"
            />
          </div>

          <div className="flex justify-end">
            <Button
              onClick={handleSubmit}
              className="bg-[#FF4F11] text-white hover:bg-[#FF4F11]/90"
            >
              Submit Inquiry
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 