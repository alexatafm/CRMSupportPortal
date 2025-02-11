"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

// Mock data - in a real app, this would come from an API
const ticketMetrics = {
  avgTimeToClose: "2.5 days",
  avgResponseTime: "4.2 hours",
  totalTickets: 42,
  ticketsByStatus: {
    submitted: 5,
    inProgress: 0,
    closed: 37
  },
  historicalData: [
    { 
      month: 'Sep',
      created: 35,
      scoped: 32,
      approved: 30,
      closed: 28
    },
    { 
      month: 'Oct',
      created: 28,
      scoped: 25,
      approved: 24,
      closed: 22
    },
    { 
      month: 'Nov',
      created: 37,
      scoped: 35,
      approved: 33,
      closed: 30
    },
    { 
      month: 'Dec',
      created: 42,
      scoped: 38,
      approved: 35,
      closed: 32
    },
    { 
      month: 'Jan',
      created: 42,
      scoped: 40,
      approved: 38,
      closed: 37
    }
  ]
}

type TicketMetric = 'created' | 'scoped' | 'approved' | 'closed'

const chartConfig: Record<TicketMetric, { label: string; color: string }> = {
  created: {
    label: "Created",
    color: "hsl(220, 85%, 45%)", // Deep blue
  },
  scoped: {
    label: "Scoped",
    color: "hsl(220, 70%, 55%)", // Medium blue
  },
  approved: {
    label: "Approved",
    color: "hsl(220, 60%, 65%)", // Light blue
  },
  closed: {
    label: "Closed",
    color: "hsl(220, 50%, 75%)", // Pale blue
  },
}

export function TicketSummary() {
  return (
    <Card className="h-[380px] flex flex-col">
      <CardHeader className="pb-2 shrink-0">
        <CardTitle>Ticket Summary</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="grid grid-cols-3 gap-3 h-full">
          <div className="bg-gray-50/80 rounded-lg p-4 flex flex-col">
            <div className="text-sm text-muted-foreground mb-auto">Average Time to Close</div>
            <div className="mt-4">
              <div className="text-2xl font-semibold">{ticketMetrics.avgTimeToClose}</div>
              <div className="text-xs text-muted-foreground mt-0.5">After approval</div>
            </div>
          </div>
          
          <div className="bg-gray-50/80 rounded-lg p-4 flex flex-col">
            <div className="text-sm text-muted-foreground mb-auto">Average Response Time</div>
            <div className="mt-4">
              <div className="text-2xl font-semibold">{ticketMetrics.avgResponseTime}</div>
              <div className="text-xs text-muted-foreground mt-0.5">First response</div>
            </div>
          </div>

          <div className="bg-gray-50/80 rounded-lg p-4 flex flex-col">
            <div className="text-sm text-muted-foreground mb-auto">Total Tickets</div>
            <div className="mt-4">
              <div className="text-2xl font-semibold">{ticketMetrics.totalTickets}</div>
              <div className="text-xs text-muted-foreground mt-0.5">Last 30 days</div>
            </div>
          </div>

          <div className="bg-gray-50/80 rounded-lg p-4 flex flex-col">
            <div className="text-sm text-muted-foreground mb-auto">Awaiting Approval</div>
            <div className="mt-4">
              <div className="text-2xl font-semibold">3</div>
              <div className="text-xs text-muted-foreground mt-0.5">From your team</div>
            </div>
          </div>

          <div className="bg-gray-50/80 rounded-lg p-4 flex flex-col">
            <div className="text-sm text-muted-foreground mb-auto">Awaiting Scoping</div>
            <div className="mt-4">
              <div className="text-2xl font-semibold">2</div>
              <div className="text-xs text-muted-foreground mt-0.5">From Fileroom</div>
            </div>
          </div>

          <div className="bg-gray-50/80 rounded-lg p-4 flex flex-col">
            <div className="text-sm text-muted-foreground mb-auto">Current Status</div>
            <div className="mt-4 grid gap-2">
              <div className="flex items-center justify-between">
                <div className="text-sm text-blue-600 font-medium">New</div>
                <div className="text-sm font-semibold">{ticketMetrics.ticketsByStatus.submitted}</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-yellow-600 font-medium">Active</div>
                <div className="text-sm font-semibold">{ticketMetrics.ticketsByStatus.inProgress}</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-green-600 font-medium">Closed</div>
                <div className="text-sm font-semibold">{ticketMetrics.ticketsByStatus.closed}</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 