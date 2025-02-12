"use client"

import { PlanComparison } from "./components/plancomparison"
import { AddonCalculator } from "./components/addon"
import { RequestQuote } from "./components/requestQuote"
import { CurrentUsage } from "./components/currentUsage"
import { Invoices } from "./components/invoices"
import { useState } from "react"

type Term = "3" | "6" | "12"

export default function PlanSettings() {
  const [selectedTerm, setSelectedTerm] = useState<Term>("3")

  return (
    <div className="h-[calc(100vh-3.5rem)] bg-gradient-to-b from-[#374365] to-[#7E879C] flex flex-col overflow-hidden">
      <div className="px-4 xl:px-6 flex-1 min-h-0 space-y-3 xl:space-y-4 overflow-y-auto py-4">
        <PlanComparison />
        
        <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_2fr] gap-3 xl:gap-4">
          <AddonCalculator selectedTerm={selectedTerm} />
          <div className="flex flex-col h-full space-y-3 xl:space-y-4">
            <CurrentUsage />
            <RequestQuote />
          </div>
        </div>

        <Invoices />
      </div>
    </div>
  )
} 