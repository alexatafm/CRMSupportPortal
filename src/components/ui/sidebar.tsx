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
  const [isGetInTouchModalOpen, setIsGetInTouchModalOpen] = useState(false)

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
      <div className="h-[80px] flex items-center justify-center">
        {isCollapsed ? (
          <div className="w-12 h-12 flex items-center justify-center">
            <Image 
              src="/logosquare.svg" 
              alt="Logo"
              width={40}
              height={40}
              className="w-10 h-10"
              priority
            />
          </div>
        ) : (
          <div className="h-12 w-full flex items-center justify-center">
            <Image 
              src="/logowide.svg" 
              alt="Logo"
              width={160}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </div>
        )}
      </div>

      {/* Section Divider */}
      <div className="px-3 mb-3">
        <div className="h-px bg-white/10" />
      </div>

      {/* Collapse Control */}
      <div className="px-3">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn(
            "flex rounded-xl text-[13px] transition-all duration-200",
            "text-white/60 hover:text-white",
            isCollapsed ? "w-11 justify-center" : "w-full",
            "h-11"
          )}
        >
          {isCollapsed ? (
            <div className="flex items-center justify-center w-full h-full">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-4 h-4 transition-transform duration-200"
              >
                <path 
                  d="M9 5l7 7-7 7" 
                  stroke="currentColor" 
                  strokeWidth={2.5} 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          ) : (
            <div className="flex items-center gap-3 px-4 w-full h-full">
              <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-4 h-4 transition-transform duration-200"
                >
                  <path 
                    d="M15 5l-7 7 7 7" 
                    stroke="currentColor" 
                    strokeWidth={2.5} 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-medium">Collapse Sidebar</span>
            </div>
          )}
        </button>
      </div>

      <nav className="flex-1 px-3 mt-0.5">
        <ul className="space-y-0.5">
          {routes.map((route) => (
            <li key={route.href}>
              <Link
                href={route.href}
                className={cn(
                  "flex items-center transition-all duration-200",
                  isCollapsed ? "justify-center h-11 w-11" : "h-11 px-4",
                  "rounded-xl",
                  pathname === route.href 
                    ? "nav-item-selected text-white" 
                    : "text-white/60 hover:text-white hover:bg-white/10",
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
                    className={cn(
                      "ml-3 text-[13px] font-medium transition-opacity duration-300",
                      pathname === route.href ? "text-white" : "text-white/70"
                    )}
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
          onClick={() => setIsGetInTouchModalOpen(true)}
          className={cn(
            "flex w-full rounded-xl text-[13px] transition-all duration-200",
            "bg-white/10 hover:bg-white/15 text-white",
            isCollapsed ? "h-11 items-center justify-center" : "p-4",
          )}
        >
          {isCollapsed ? (
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          ) : (
            <div className="flex flex-col w-full">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-5 h-5">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-medium">Get in Touch</span>
              </div>
              <div className="h-px bg-white/10 my-3" />
              <p className="text-[12px] text-white/70 leading-tight text-left">
                For any non-task related questions, we're here to help
              </p>
            </div>
          )}
        </button>
      </div>

      <GetInTouchModal 
        isOpen={isGetInTouchModalOpen}
        onClose={() => setIsGetInTouchModalOpen(false)}
      />
    </div>
  )
} 