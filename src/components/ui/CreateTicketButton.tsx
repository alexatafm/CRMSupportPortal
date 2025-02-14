"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { CreateTicketModal } from "./CreateTicketModal"

export function CreateTicketButton() {
  const [isHovered, setIsHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const pathname = usePathname()

  // Listen for details panel state changes
  useEffect(() => {
    const handleDetailsChange = (e: CustomEvent) => {
      setIsDetailsOpen(e.detail.isOpen)
    }

    window.addEventListener('taskDetailsStateChange' as any, handleDetailsChange)
    return () => {
      window.removeEventListener('taskDetailsStateChange' as any, handleDetailsChange)
    }
  }, [])

  // Only show on these pages
  const shouldShow = ["/dashboard", "/catalogue", "/team-members"].includes(pathname)

  if (!shouldShow) return null

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed bottom-[15%] z-50 flex items-center gap-3 bg-[#FF4F11] text-white shadow-lg transition-all duration-200 hover:bg-[#FF4F11]/90 group rounded-l-lg ${
          isDetailsOpen ? 'right-[600px]' : 'right-0'
        }`}
        style={{
          padding: isHovered ? "16px 24px 16px 20px" : "16px 16px 16px 20px",
          width: isHovered ? "auto" : "60px",
          transform: "translateY(50%)"
        }}
      >
        <svg 
          className="w-6 h-6 flex-shrink-0" 
          viewBox="0 0 24 24" 
          fill="none"
        >
          <path 
            d="M12 6v12m-6-6h12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
        </svg>
        <span 
          className="text-base font-medium whitespace-nowrap overflow-hidden transition-all duration-200"
          style={{
            width: isHovered ? "auto" : "0",
            opacity: isHovered ? "1" : "0"
          }}
        >
          Create Ticket
        </span>
      </button>

      <CreateTicketModal 
        isOpen={isModalOpen}
        onCloseAction={() => setIsModalOpen(false)}
      />
    </>
  )
} 