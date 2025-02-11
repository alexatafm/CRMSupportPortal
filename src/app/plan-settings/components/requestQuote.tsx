"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteRequestModal } from "./QuoteRequestModal"

export function RequestQuote() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  return (
    <Card className="h-full">
      <CardContent className="p-6 h-full flex items-center">
        <div className="flex items-center justify-between w-full">
          <div className="flex-1 mr-6">
            <h3 className="text-sm font-medium text-[#42526E]">Request a Quote</h3>
            <p className="text-xs text-[#6B778C] mt-0.5">
              Not sure how many hours you need? We'll help determine the optimal hours for your requirements.
            </p>
          </div>
          <button 
            onClick={() => setIsQuoteModalOpen(true)}
            className="px-4 py-1.5 bg-white border border-[#FF4F11] text-[#FF4F11] rounded text-sm font-medium hover:bg-[#FF4F11]/5 transition-colors whitespace-nowrap"
          >
            Request Quote
          </button>
        </div>
      </CardContent>
      <QuoteRequestModal 
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </Card>
  )
}
