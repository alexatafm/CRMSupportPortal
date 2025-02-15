"use client"

import { UsageSummary } from './components/UsageSummary'
import { KanbanBoard } from './components/KanbanBoard'
import { CompanyInfo } from './components/CompanyInfo'
import { InboxNotifications } from './components/InboxNotifications'

export default function DashboardPage() {
  return (
    <div className="h-full bg-gradient-to-b from-[#374365] to-[#7E879C]">
      <div className="content-container">
        <div className="h-full mx-auto max-w-[1800px] p-6">
          <div className="flex flex-col space-y-6">
            {/* Top Row - Three Components */}
            <div className="flex gap-6">
              <div style={{ width: '280px', flexShrink: 0 }}>
                <CompanyInfo />
              </div>
              <div style={{ width: '400px', flexShrink: 0 }}>
                <UsageSummary />
              </div>
              <div className="flex-1">
                <InboxNotifications />
              </div>
            </div>

            {/* Kanban Board */}
            <div className="overflow-hidden">
              <KanbanBoard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 