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
  supportArea: string
  specificationNotes: string
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
    categories: ["HubSpot Custom Quote Design"],
    supportArea: "Sales Hub",
    specificationNotes: "Hours calculated for:\n- 1 custom quote template\n- Up to 5 custom fields\n- Basic conditional logic\n- Basic styling and branding\n\nAdditional hours may be required for:\n- Multiple template variations\n- Complex conditional logic\n- Advanced styling or custom calculations",
    strategicHours: 1,
    setupHours: 3,
    integrationHours: 1
  },
  {
    id: "crm-data-import",
    title: "CRM Data Import",
    description: "Import data into HubSpot from CSV or other sources, with formatting and custom logic for automation, reporting, and clean data handling.",
    categories: ["Data Migration", "Import/Export", "Data Formatting"],
    supportArea: "Operations Hub",
    specificationNotes: "Hours calculated for:\n- Up to 5,000 records\n- Basic data cleaning and formatting\n- Standard field mapping\n\nAdditional hours may be required for:\n- Larger data sets\n- Complex data transformation\n- Custom property creation\n- Multiple data sources",
    setupHours: 1.5
  },
  {
    id: "sales-dashboard",
    title: "Sales Dashboard",
    description: "Build a custom sales dashboard offering tailored reports, deal insights, and accurate sales forecasting for enhanced decision making.",
    categories: ["Dashboards & Reporting"],
    supportArea: "Sales Hub",
    specificationNotes: "Hours calculated for:\n- 1 custom dashboard\n- Up to 5 report types\n- Basic filtering options\n\nAdditional hours may be required for:\n- Complex calculations\n- Advanced filtering\n- Multiple dashboard views\n- Custom metrics",
    strategicHours: 0.5,
    setupHours: 1
  },
  {
    id: "calendar-meeting-links",
    title: "Set Up Calendar Meeting Links",
    description: "Configure calendar meeting links with custom availability, making scheduling seamless for teams and clients.",
    categories: ["HubSpot Customisation"],
    supportArea: "Sales Hub",
    specificationNotes: "Hours calculated for:\n- Up to 3 meeting types\n- Basic availability rules\n- Standard email notifications\n\nAdditional hours may be required for:\n- Complex availability rules\n- Custom reminder sequences\n- Team scheduling setup\n- Multiple calendar integrations",
    setupHours: 1.5
  },
  {
    id: "basic-training",
    title: "Basic Training Documentation",
    description: "Develop concise training guides to help new CRM users understand and utilize essential system functionalities effectively.",
    categories: ["Training Material", "HubSpot Training Session(s)"],
    supportArea: "Service Hub",
    specificationNotes: "Hours calculated for:\n- Basic user guide\n- Up to 5 core processes\n- Standard screenshots and instructions\n\nAdditional hours may be required for:\n- Video tutorials\n- Advanced process documentation\n- Custom training materials\n- Multiple user role guides",
    strategicHours: 1,
    setupHours: 3
  },
  {
    id: "user-onboarding",
    title: "User Onboarding Session",
    description: "Provide a virtual onboarding session covering CRM basics, including post-session training notes and guidance for team success.",
    categories: ["HubSpot Training Session(s)"],
    supportArea: "Service Hub",
    specificationNotes: "Hours calculated for:\n- 2-hour virtual session\n- Up to 5 participants\n- Basic training materials\n- Session recording\n\nAdditional hours may be required for:\n- Multiple sessions\n- Advanced topics\n- Custom workflows training\n- Larger groups",
    strategicHours: 2,
    setupHours: 3
  },
  {
    id: "help-desk",
    title: "Set Up Help Desk",
    description: "Set up a help desk pipeline in HubSpot for effective ticket management, ensuring smooth support operations and tracking.",
    categories: ["HubSpot Automation", "HubSpot Customisation"],
    supportArea: "Service Hub",
    specificationNotes: "Hours calculated for:\n- Basic ticket pipeline\n- Standard automation rules\n- Basic email templates\n- Standard reporting\n\nAdditional hours may be required for:\n- Complex routing rules\n- Custom automation\n- SLA setup\n- Advanced reporting",
    setupHours: 2,
    integrationHours: 1
  },
  {
    id: "breeze-ai",
    title: "Install and Configure Breeze AI",
    description: "Install Breeze AI in your CRM, configuring basic features to enhance system intelligence and workflow efficiency.",
    categories: ["AI/Breeze Intelligence"],
    supportArea: "Operations Hub",
    specificationNotes: "Hours calculated for:\n- Basic installation\n- Standard configuration\n- Initial setup\n\nAdditional hours may be required for:\n- Custom AI rules\n- Advanced automation\n- Integration with existing workflows\n- Team training",
    setupHours: 0.5
  },
  {
    id: "email-signature",
    title: "Email Signature Setup",
    description: "Design and apply standardized email signatures, ensuring professional branding and uniformity across your team.",
    categories: ["HubSpot Custom Email Template"],
    supportArea: "Marketing Hub",
    specificationNotes: "Hours calculated for:\n- 1 signature template\n- Basic branding elements\n- Standard social links\n\nAdditional hours may be required for:\n- Multiple variations\n- Dynamic content\n- Complex layouts\n- Department-specific templates",
    setupHours: 1.5
  },
  {
    id: "deal-stages",
    title: "Customised Deal Stages Setup",
    description: "Update deal stages in HubSpot to align with your sales process, enhancing clarity and pipeline management for your team.",
    categories: ["HubSpot Customisation", "HubSpot Automation"],
    supportArea: "Sales Hub",
    specificationNotes: "Hours calculated for:\n- Up to 8 deal stages\n- Basic automation rules\n- Standard properties\n\nAdditional hours may be required for:\n- Complex stage dependencies\n- Advanced automation\n- Custom reporting\n- Multiple pipelines",
    strategicHours: 2,
    setupHours: 3
  },
  {
    id: "team-permissions",
    title: "Team Permissions Configuration",
    description: "Configure user roles and permissions in HubSpot, ensuring appropriate access levels for team members to manage data securely.",
    categories: ["HubSpot Customisation"],
    supportArea: "Operations Hub",
    specificationNotes: "Hours calculated for:\n- Up to 5 user roles\n- Basic permission sets\n- Standard access rules\n\nAdditional hours may be required for:\n- Complex permission hierarchies\n- Custom team structures\n- Advanced security rules\n- Large team setups",
    setupHours: 3
  },
  {
    id: "blog-setup",
    title: "Blog Page Configuration",
    description: "Design a blog page with HubSpot, integrating tracking tools and ensuring compatibility with CRM workflows for content visibility.",
    categories: ["HubSpot Website/s"],
    supportArea: "Marketing Hub",
    specificationNotes: "Hours calculated for:\n- Basic blog template\n- Standard layouts\n- Basic tracking setup\n\nAdditional hours may be required for:\n- Custom designs\n- Advanced features\n- Multiple templates\n- Complex integrations",
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