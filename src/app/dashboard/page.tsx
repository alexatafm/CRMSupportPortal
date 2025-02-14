"use client"

import { UsageSummary } from './components/UsageSummary'
import { KanbanBoard } from './components/KanbanBoard'
import { CompanyInfo } from './components/CompanyInfo'
import { Card, CardContent } from "@/components/ui/card"
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
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <h2 className="text-base xl:text-lg font-semibold text-[#1C2B4F] mb-6">Your Tickets</h2>
                <div className="grid grid-cols-3 gap-6">
                  {/* Submitted Column */}
                  <div className="bg-gray-50/80 rounded-lg p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium text-xs xl:text-sm text-muted-foreground uppercase tracking-wider">Submitted</h3>
                      <span className="bg-blue-50 text-blue-500 text-xs font-medium px-2 py-0.5 rounded-full">5</span>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                      <div className="space-y-4">
                        <KanbanBoard />
                      </div>
                    </div>
                  </div>

                  {/* In Progress Column */}
                  <div className="bg-gray-50/80 rounded-lg p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium text-xs xl:text-sm text-muted-foreground uppercase tracking-wider">In Progress</h3>
                      <span className="bg-orange-50 text-orange-500 text-xs font-medium px-2 py-0.5 rounded-full">0</span>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center text-sm text-muted-foreground">
                        No tickets
                      </div>
                    </div>
                  </div>

                  {/* Closed Column */}
                  <div className="bg-gray-50/80 rounded-lg p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium text-xs xl:text-sm text-muted-foreground uppercase tracking-wider">Closed</h3>
                      <span className="bg-blue-50 text-blue-500 text-xs font-medium px-2 py-0.5 rounded-full">0</span>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center text-sm text-muted-foreground">
                        No tickets
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 