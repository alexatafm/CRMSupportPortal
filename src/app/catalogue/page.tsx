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
  duration: string
  supportCategories: string[]
  hubspotRequirements: string[]
  availableToPlans: string[]
}

const tasks: Task[] = [
  {
    id: "custom-hubspot-quote",
    title: "Custom HubSpot Quote Template",
    description: "Create a branded HubSpot quote template with structured logic, ensuring consistency and professionalism during the sales process.",
    duration: "5h",
    supportCategories: ["Content Design", "Data Migration"],
    hubspotRequirements: ["HubSpot Requirements"],
    availableToPlans: ["Available to All Plans"]
  },
  {
    id: "crm-data-import",
    title: "CRM Data Import",
    description: "Import data into HubSpot from CSV or other sources, with formatting and custom logic for automation, reporting, and clean data handling.",
    duration: "1.5h",
    supportCategories: ["Data Migration"],
    hubspotRequirements: ["HubSpot Requirements"],
    availableToPlans: ["Available to All Plans"]
  },
  {
    id: "sales-dashboard",
    title: "Sales Dashboard",
    description: "Build a custom sales dashboard offering tailored reports, deal insights, and accurate sales forecasting for enhanced decision making.",
    duration: "1.5h",
    supportCategories: ["Dashboards & Reporting"],
    hubspotRequirements: ["HubSpot Requirements"],
    availableToPlans: ["Sales Hub Professional", "Operations Hub Professional"]
  },
  {
    id: "calendar-meeting-links",
    title: "Set Up Calendar Meeting Links",
    description: "Configure calendar meeting links with custom availability, making scheduling seamless for teams and clients.",
    duration: "1.5h",
    supportCategories: ["HubSpot Automation", "CRM Customisation"],
    hubspotRequirements: ["HubSpot Requirements"],
    availableToPlans: ["Available to All Plans"]
  },
  {
    id: "basic-training",
    title: "Basic Training Documentation",
    description: "Develop concise training guides to help new CRM users understand and utilize essential system functionalities effectively.",
    duration: "4h",
    supportCategories: ["Training & Resources"],
    hubspotRequirements: ["HubSpot Requirements"],
    availableToPlans: ["Available to All Plans"]
  },
  {
    id: "user-onboarding",
    title: "User Onboarding Session",
    description: "Provide a virtual onboarding session covering CRM basics, including post-session training notes and guidance for team success.",
    duration: "5h",
    supportCategories: ["Training & Resources"],
    hubspotRequirements: ["HubSpot Requirements"],
    availableToPlans: ["Available to All Plans"]
  },
  {
    id: "help-desk",
    title: "Set Up Help Desk",
    description: "Set up a help desk pipeline in HubSpot for effective ticket management, ensuring smooth support operations and tracking.",
    duration: "3h",
    supportCategories: ["HubSpot Automation", "CRM Customisation"],
    hubspotRequirements: ["HubSpot Requirements"],
    availableToPlans: ["Service Hub Professional"]
  },
  {
    id: "breeze-ai",
    title: "Install and Configure Breeze AI",
    description: "Install Breeze AI in your CRM, configuring basic features to enhance system intelligence and workflow efficiency.",
    duration: "0.5h",
    supportCategories: ["Data Clean Up", "AI/Breeze Intelligence"],
    hubspotRequirements: ["HubSpot Requirements"],
    availableToPlans: ["Available to All Plans"]
  },
  {
    id: "email-signature",
    title: "Email Signature Setup",
    description: "Design and apply standardized email signatures, ensuring professional branding and uniformity across your team.",
    duration: "1.5h",
    supportCategories: ["CRM Customisation", "Miscellaneous"],
    hubspotRequirements: ["HubSpot Requirements"],
    availableToPlans: ["Available to All Plans"]
  },
  {
    id: "deal-stages",
    title: "Customised Deal Stages Setup",
    description: "Update deal stages in HubSpot to align with your sales process, enhancing clarity and pipeline management for your team.",
    duration: "5h",
    supportCategories: ["Sales Setup", "Software Consulting"],
    hubspotRequirements: ["HubSpot Requirements"],
    availableToPlans: ["Sales Hub Starter", "Operations Hub Starter"]
  },
  {
    id: "team-permissions",
    title: "Team Permissions Configuration",
    description: "Configure user roles and permissions in HubSpot, ensuring appropriate access levels for team members to manage data securely.",
    duration: "3h",
    supportCategories: ["CRM Customisation"],
    hubspotRequirements: ["HubSpot Requirements"],
    availableToPlans: ["Operations Hub Professional", "Service Hub Professional"]
  },
  {
    id: "blog-setup",
    title: "Blog Page Configuration",
    description: "Design a blog page with HubSpot, integrating tracking tools and ensuring compatibility with CRM workflows for content visibility.",
    duration: "1h",
    supportCategories: ["Website Content"],
    hubspotRequirements: ["HubSpot Requirements"],
    availableToPlans: ["Starter Hub Professional"]
  }
]

export default function TaskCataloguePage() {
  return (
    <div className="h-[calc(100vh-56px)] bg-gradient-to-b from-[#374365] to-[#7E879C] flex flex-col">
      {/* Header */}
      <div className="shrink-0 px-6 pt-3 pb-2">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-white">Task Catalogue</h1>
            <p className="text-sm text-white/60 mt-0.5">Browse and request pre-configured support tasks.</p>
          </div>
          <SupportHoursKPI />
        </div>
      </div>
      
      {/* Main Content */}
      <div className="h-[600px] px-6">
        <TaskGrid tasks={tasks.slice(0, 12)} />
      </div>

      {/* Footer */}
      <div className="shrink-0 px-6 py-2 mt-auto border-t border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 text-sm text-white bg-white/10 rounded hover:bg-white/20 transition-colors">
              Previous
            </button>
            <button className="px-3 py-1 text-sm text-white bg-white/10 rounded hover:bg-white/20 transition-colors">
              Next
            </button>
          </div>
          <p className="text-sm text-white/60">
            Showing <span className="font-medium text-white">1-12</span> of <span className="font-medium text-white">{tasks.length}</span> tasks
          </p>
        </div>
      </div>
    </div>
  )
} 