"use client"

import { useState, useEffect } from "react"
import { GuideNavigation } from "./components/GuideNavigation"
import { GuideContent } from "./components/GuideContent"

export default function PortalGuidePage() {
  const [activeSection, setActiveSection] = useState("getting-started")

  return (
    <div className="h-[calc(100vh-56px)] bg-gradient-to-b from-[#374365] to-[#7E879C] overflow-hidden">
      <div className="h-full max-w-[1800px] mx-auto p-6">
        <div className="flex gap-6 h-full">
          {/* Left Navigation - Fixed */}
          <div className="w-[280px] flex-shrink-0 bg-white/[0.03] backdrop-blur-sm rounded-lg overflow-hidden">
            <div className="h-full overflow-y-auto p-6">
              <GuideNavigation
                activeSection={activeSection}
                onSectionChangeAction={setActiveSection}
              />
            </div>
          </div>

          {/* Right Content Area - Scrollable */}
          <div className="flex-1 min-w-0 bg-white rounded-lg overflow-hidden">
            <div className="h-full overflow-y-auto">
              <GuideContent activeSection={activeSection} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 