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
      <div className="px-6 pt-4 pb-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-white">Plan & Add On's</h1>
            <p className="text-sm text-white/60 mt-1">Manage your support plan and additional hours.</p>
          </div>
        </div>
      </div>

      <div className="px-6 flex-1 min-h-0 space-y-4">
        <PlanComparison />
        
        <div className="grid grid-cols-[3fr_2fr] gap-4">
          <AddonCalculator selectedTerm={selectedTerm} />
          <div className="flex flex-col h-full space-y-4">
            <CurrentUsage />
            <RequestQuote />
          </div>
        </div>

        <Invoices />
      </div>
    </div>
  )
} 