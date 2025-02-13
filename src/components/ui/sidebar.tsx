"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState, useEffect } from "react"
import { GetInTouchModal } from "./GetInTouchModal"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('sidebar-collapsed', isCollapsed)
  }, [isCollapsed])

  const routes = [
    {
      label: "Dashboard",
      icon: (
        <svg className={cn("flex-shrink-0", isCollapsed ? "w-5 h-5" : "w-5 h-5")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4H10V10H4V4Z M14 4H20V10H14V4Z M4 14H10V20H4V14Z M14 14H20V20H14V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      href: "/dashboard",
    },
    {
      label: "Catalogue",
      icon: (
        <svg className={cn("flex-shrink-0", isCollapsed ? "w-5 h-5" : "w-5 h-5")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M7 7H17 M7 12H17 M7 17H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      href: "/catalogue",
    },
    {
      label: "Team Members",
      icon: (
        <svg className={cn("flex-shrink-0", isCollapsed ? "w-5 h-5" : "w-5 h-5")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M5 18C5 16.3431 8.13401 15 12 15C15.866 15 19 16.3431 19 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      href: "/team-members",
    },
    {
      label: "Plan & Add On's",
      icon: (
        <svg className={cn("flex-shrink-0", isCollapsed ? "w-5 h-5" : "w-5 h-5")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      href: "/plan-settings",
    },
    {
      label: "Portal Guide",
      icon: (
        <svg className={cn("flex-shrink-0", isCollapsed ? "w-5 h-5" : "w-5 h-5")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      href: "/portal-guide",
    },
  ]

  return (
    <div
      className={cn(
        "flex flex-col h-full bg-navbar text-navbar-foreground relative transition-all duration-300 rounded-tr-2xl rounded-br-2xl",
        isCollapsed ? "w-16" : "w-[240px]",
        className
      )}
    >
      <div className="h-[60px] flex items-center justify-center">
        {isCollapsed ? (
          <div className="w-8 h-8 flex items-center justify-center">
            <Image 
              src="/logosquare.svg" 
              alt="Logo"
              width={32}
              height={32}
              className="w-8 h-8"
              priority
            />
          </div>
        ) : (
          <div className="h-8 flex items-center justify-center">
            <Image 
              src="/logowide.svg" 
              alt="Logo"
              width={140}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </div>
        )}
      </div>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-[22px] bg-navbar rounded-full p-1.5 hover:bg-white/10 transition-colors border border-white/10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={cn("w-3 h-3 transition-transform", isCollapsed ? "rotate-180" : "")}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <nav className="flex-1 py-4">
        <ul className="space-y-1 px-3">
          {routes.map((route) => (
            <li key={route.href}>
              <Link
                href={route.href}
                className={cn(
                  "flex items-center h-9 space-x-3 px-3 rounded text-sm transition-colors",
                  pathname === route.href 
                    ? "bg-white/20" 
                    : "hover:bg-white/10",
                  pathname === route.href
                    ? "text-white"
                    : "text-white/70 hover:text-white",
                  isCollapsed ? "justify-center" : ""
                )}
              >
                <div className={cn(
                  "flex items-center justify-center",
                  isCollapsed ? "w-5 h-5" : "w-5 h-5"
                )}>
                  {route.icon}
                </div>
                {!isCollapsed && (
                  <span 
                    className="transition-opacity duration-300"
                    style={{ opacity: isCollapsed ? 0 : 1, transitionDelay: '150ms' }}
                  >
                    {route.label}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-3 mt-auto">
        <button
          onClick={() => setIsModalOpen(true)}
          className={cn(
            "flex flex-col w-full rounded text-sm transition-colors bg-white/10 hover:bg-white/20 text-white text-left overflow-hidden",
            isCollapsed ? "justify-center py-2.5 px-3" : "p-4"
          )}
        >
          {isCollapsed ? (
            <div className="flex items-center justify-center w-5 h-5">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          ) : (
            <div className="flex flex-col w-full space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-5 h-5">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span 
                  className="text-base transition-opacity duration-300"
                  style={{ opacity: isCollapsed ? 0 : 1, transitionDelay: '150ms' }}
                >
                  Get in Touch
                </span>
              </div>
              <div className="h-px bg-white/10" />
              <p 
                className="text-[11px] text-white/70 leading-tight transition-opacity duration-300"
                style={{ opacity: isCollapsed ? 0 : 1, transitionDelay: '200ms' }}
              >
                For any non-task related questions, we're here to help
              </p>
            </div>
          )}
        </button>
      </div>

      <GetInTouchModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
} 