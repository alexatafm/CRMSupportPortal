"use client"

import { useState, useEffect } from "react"
import { GuideNavigation } from "./components/GuideNavigation"
import { GuideContent } from "./components/GuideContent"

export default function PortalGuidePage() {
  const [activeSection, setActiveSection] = useState("getting-started")

  return (
    <div className="h-[calc(100vh-3.5rem)] bg-gradient-to-b from-[#374365] to-[#7E879C] flex flex-col overflow-hidden">
      <div className="px-4 xl:px-6 flex-1 min-h-0 py-4">
        <div className="max-w-[1800px] mx-auto h-full">
          <div className="flex gap-4 h-full">
            {/* Left Sidebar - Fixed */}
            <div className="w-[280px] flex-shrink-0 bg-white/[0.03] backdrop-blur-sm rounded-lg">
              <div className="h-full overflow-y-auto p-6">
                <GuideNavigation
                  activeSection={activeSection}
                  onSectionChangeAction={setActiveSection}
                />
              </div>
            </div>

            {/* Main Content - Scrollable */}
            <main className="flex-1 min-w-0">
              <GuideContent activeSection={activeSection} />
            </main>
          </div>
        </div>
      </div>
    </div>
  )
} 