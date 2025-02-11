"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

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
        title: 'Dashboard',
        action: {
          label: 'New Ticket',
          href: '/dashboard/new'
        }
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
  const config = getPageConfig(pathname)

  return (
    <header className={cn("flex h-14 items-center justify-between px-14 bg-header text-white", className)} {...props}>
      <h1 className="text-lg font-semibold">
        <span className="opacity-70">CRM Support Portal</span>
        <span className="mx-2 opacity-50">/</span>
        <span>{config.title}</span>
      </h1>
      {config.action && (
        config.action.href ? (
          <Link
            href={config.action.href}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2"
          >
            {config.action.label}
          </Link>
        ) : (
          <button
            onClick={config.action.onClick}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2"
          >
            {config.action.label}
          </button>
        )
      )}
    </header>
  )
} 