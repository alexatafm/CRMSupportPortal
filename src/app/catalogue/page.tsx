"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { SupportHoursKPI } from "./components/SupportHoursKPI"
import { TaskGrid } from "./components/TaskGrid"
import { TaskCard } from "./components/TaskCard"

type SupportCategory = {
  label: string
  value: string
}

type SupportArea = {
  label: string
  value: string
}

type Task = {
  id: string
  title: string
  description: string
  categories: string[]
  strategicHours?: number
  setupHours?: number
  integrationHours?: number
}

const availableHours = {
  strategic: 1, // 6 total - 5 used
  setup: 5, // 20 total - 15 used
  integration: 3 // 7 total - 4 used
}

const tasks: Task[] = [
  {
    id: "custom-hubspot-quote",
    title: "Custom HubSpot Quote Template",
    description: "Create a branded HubSpot quote template with structured logic, ensuring consistency and professionalism during the sales process.",
    categories: ["Sales", "Templates", "Automation"],
    strategicHours: 1,
    setupHours: 3,
    integrationHours: 1
  },
  {
    id: "crm-data-import",
    title: "CRM Data Import",
    description: "Import data into HubSpot from CSV or other sources, with formatting and custom logic for automation, reporting, and clean data handling.",
    categories: ["Data Cleaning", "Migration", "Automation"],
    setupHours: 1.5
  },
  {
    id: "sales-dashboard",
    title: "Sales Dashboard",
    description: "Build a custom sales dashboard offering tailored reports, deal insights, and accurate sales forecasting for enhanced decision making.",
    categories: ["Sales", "Reporting", "Analytics"],
    strategicHours: 0.5,
    setupHours: 1
  },
  {
    id: "calendar-meeting-links",
    title: "Set Up Calendar Meeting Links",
    description: "Configure calendar meeting links with custom availability, making scheduling seamless for teams and clients.",
    categories: ["Sales", "Productivity"],
    setupHours: 1.5
  },
  {
    id: "basic-training",
    title: "Basic Training Documentation",
    description: "Develop concise training guides to help new CRM users understand and utilize essential system functionalities effectively.",
    categories: ["Training", "Documentation"],
    strategicHours: 1,
    setupHours: 3
  },
  {
    id: "user-onboarding",
    title: "User Onboarding Session",
    description: "Provide a virtual onboarding session covering CRM basics, including post-session training notes and guidance for team success.",
    categories: ["Training", "Onboarding"],
    strategicHours: 2,
    setupHours: 3
  },
  {
    id: "help-desk",
    title: "Set Up Help Desk",
    description: "Set up a help desk pipeline in HubSpot for effective ticket management, ensuring smooth support operations and tracking.",
    categories: ["Service", "Automation", "Workflow"],
    setupHours: 2,
    integrationHours: 1
  },
  {
    id: "breeze-ai",
    title: "Install and Configure Breeze AI",
    description: "Install Breeze AI in your CRM, configuring basic features to enhance system intelligence and workflow efficiency.",
    categories: ["AI", "Automation", "Integration"],
    setupHours: 0.5
  },
  {
    id: "email-signature",
    title: "Email Signature Setup",
    description: "Design and apply standardized email signatures, ensuring professional branding and uniformity across your team.",
    categories: ["Marketing", "Branding"],
    setupHours: 1.5
  },
  {
    id: "deal-stages",
    title: "Customised Deal Stages Setup",
    description: "Update deal stages in HubSpot to align with your sales process, enhancing clarity and pipeline management for your team.",
    categories: ["Sales", "Pipeline", "Customization"],
    strategicHours: 2,
    setupHours: 3
  },
  {
    id: "team-permissions",
    title: "Team Permissions Configuration",
    description: "Configure user roles and permissions in HubSpot, ensuring appropriate access levels for team members to manage data securely.",
    categories: ["Security", "Administration"],
    setupHours: 3
  },
  {
    id: "blog-setup",
    title: "Blog Page Configuration",
    description: "Design a blog page with HubSpot, integrating tracking tools and ensuring compatibility with CRM workflows for content visibility.",
    categories: ["Marketing", "Content", "SEO"],
    setupHours: 1
  }
]

export default function TaskCataloguePage() {
  return (
    <div className="h-[calc(100vh-3.5rem)] bg-gradient-to-b from-[#374365] to-[#7E879C] flex flex-col overflow-hidden">
      {/* Header Section */}
      <div className="px-6 xl:px-8 pt-4 xl:pt-5 pb-4 xl:pb-6">
        <div className="max-w-[1800px] mx-auto">
          <SupportHoursKPI />
        </div>
      </div>
      
      {/* Main Content */}
      <div className="px-6 xl:px-8 flex-1">
        <div className="max-w-[1800px] mx-auto h-full">
          <TaskGrid 
            tasks={tasks} 
            availableHours={availableHours}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="shrink-0 px-6 xl:px-8 py-4 border-t border-white/10 bg-white/5">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-sm text-white bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 text-sm text-white bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                Next
              </button>
            </div>
            <p className="text-sm text-white/70">
              Showing <span className="font-medium text-white">1-12</span> of <span className="font-medium text-white">{tasks.length}</span> tasks
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 