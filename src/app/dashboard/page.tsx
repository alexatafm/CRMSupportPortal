import { CompanyInfo } from './components/CompanyInfo'
import { UsageSummary } from './components/UsageSummary'
import { KanbanBoard } from './components/KanbanBoard'
import { TicketSummary } from './components/TicketSummary'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="h-[calc(100vh-3.5rem)] bg-gradient-to-b from-[#374365] to-[#7E879C] flex flex-col overflow-hidden">
      <div className="px-6 pt-4 pb-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
            <p className="text-sm text-white/60 mt-1">Overview of your support activity and usage.</p>
          </div>
        </div>
      </div>

      <div className="px-6 flex-1 min-h-0 space-y-4 overflow-y-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-2">
            <CompanyInfo />
          </div>
          <div className="col-span-6">
            <UsageSummary />
          </div>
          <div className="col-span-4">
            <TicketSummary />
          </div>
        </div>

        <Card>
          <CardHeader className="pb-4">
            <CardTitle>Your Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-h-[300px]">
              <div className="bg-gray-50/80 rounded-lg p-4 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">Submitted</h3>
                  <span className="bg-blue-50 text-blue-500 text-xs font-medium px-2 py-1 rounded-full">5</span>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <div className="space-y-3">
                    <KanbanBoard />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50/80 rounded-lg p-4 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">In Progress</h3>
                  <span className="bg-blue-50 text-blue-500 text-xs font-medium px-2 py-1 rounded-full">0</span>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    No tickets
                  </div>
                </div>
              </div>
              <div className="bg-gray-50/80 rounded-lg p-4 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">Closed</h3>
                  <span className="bg-blue-50 text-blue-500 text-xs font-medium px-2 py-1 rounded-full">0</span>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    No tickets
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 