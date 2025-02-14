"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { CreateTicketModal } from "./CreateTicketModal"

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

type PageConfig = {
  title: string
  action?: {
    label: string
    href?: string
    onClick?: () => void
  }
}

function getPageConfig(pathname: string): PageConfig {
  const router = useRouter()

  switch (pathname) {
    case '/dashboard':
      return {
        title: 'Dashboard'
      }
    case '/catalogue':
      return {
        title: 'Service Catalogue',
        action: {
          label: 'Get More Support Hours',
          href: '/plan-settings'
        }
      }
    case '/team-members':
      return {
        title: 'Team Members',
        action: {
          label: 'Add Team Member',
          onClick: () => {
            // @ts-ignore - headerAction is added dynamically
            if (window.headerAction) window.headerAction()
          }
        }
      }
    case '/plan-settings':
      return {
        title: 'Plan & Add On\'s'
      }
    default:
      return {
        title: 'Dashboard'
      }
  }
}

export function Header({ className, ...props }: HeaderProps) {
  const pathname = usePathname()
  const [isCreateTicketModalOpen, setIsCreateTicketModalOpen] = useState(false)
  const config = getPageConfig(pathname)

  return (
    <header className={cn("header", className)} {...props}>
      <div className="h-full flex items-center justify-between px-6 text-white">
        <h1 className="text-lg font-semibold">
          <span className="opacity-70">CRM Support Portal</span>
          <span className="mx-2 opacity-50">/</span>
          <span>{config.title}</span>
        </h1>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsCreateTicketModalOpen(true)}
            className="flex items-center gap-2 px-4 h-9 bg-[#FF4F11] hover:bg-[#FF4F11]/90 text-white rounded-lg transition-colors"
          >
            <svg 
              className="w-4 h-4"
              viewBox="0 0 24 24" 
              fill="none"
            >
              <path d="M12 6v12m-6-6h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="text-sm font-medium">Create New Support Ticket</span>
          </button>
        </div>

        <CreateTicketModal 
          isOpen={isCreateTicketModalOpen}
          onCloseAction={() => setIsCreateTicketModalOpen(false)}
        />
      </div>
    </header>
  )
} 