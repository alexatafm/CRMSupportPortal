"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import React, { useEffect, useState } from "react"

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

type TaskDetailsPanelProps = {
  task: Task | null
  onCloseAction: () => void
  availableHours: {
    strategic: number
    setup: number
    integration: number
  }
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.2 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2, delay: 0.1 }
  }
}

const panelVariants = {
  hidden: { x: "100%" },
  visible: { 
    x: 0,
    transition: {
      type: "tween",
      duration: 0.2,
      ease: "easeOut"
    }
  },
  exit: { 
    x: "100%",
    transition: {
      type: "tween",
      duration: 0.2,
      ease: "easeIn"
    }
  }
}

const contentVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.2,
      delay: 0.2
    }
  },
  exit: { 
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.2
    }
  }
}

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.2,
      delay: 0.3
    }
  },
  exit: { 
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.15
    }
  }
}

// Add hourly rates from addon.tsx
const hourlyRates = {
  "Strategic Consulting": 275,
  "CRM Support & Training": 220,
  "CRM Development": 180
}

// Helper functions
const getRequiredAdditionalHours = (current: number, required?: number) => {
  if (!required) return 0
  return Math.max(0, required - current)
}

const formatHourText = (hours: number) => `${hours} ${hours === 1 ? 'hour' : 'hours'}`

const calculateCost = (strategicHours: number, setupHours: number, integrationHours: number) => {
  return (strategicHours * hourlyRates["Strategic Consulting"]) +
         (setupHours * hourlyRates["CRM Support & Training"]) +
         (integrationHours * hourlyRates["CRM Development"])
}

export function TaskDetailsPanel({ task, onCloseAction, availableHours }: TaskDetailsPanelProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(!!task)
    // Emit state change event
    const event = new CustomEvent('taskDetailsStateChange', { detail: { isOpen: !!task } })
    window.dispatchEvent(event)
  }, [task])

  if (!task) return null

  const strategicNeeded = getRequiredAdditionalHours(availableHours.strategic, task.strategicHours)
  const setupNeeded = getRequiredAdditionalHours(availableHours.setup, task.setupHours)
  const integrationNeeded = getRequiredAdditionalHours(availableHours.integration, task.integrationHours)

  const totalAdditionalHours = strategicNeeded + setupNeeded + integrationNeeded
  const hasInsufficientHours = totalAdditionalHours > 0

  const totalCost = calculateCost(strategicNeeded, setupNeeded, integrationNeeded)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onCloseAction}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "tween", duration: 0.2 }}
            className="fixed top-0 right-0 w-[600px] h-full bg-white shadow-xl z-50 flex flex-col rounded-tl-xl rounded-bl-xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onCloseAction}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#1C2B4F] mb-2">{task.title}</h2>
                <p className="text-[#42526E] mb-6">{task.description}</p>

                {/* Hours Required */}
                <h3 className="text-[#1C2B4F] font-medium mb-4">Hours Required</h3>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {/* Strategic */}
                  <div className={`rounded-lg p-4 ${
                    task.strategicHours && task.strategicHours > availableHours.strategic
                      ? 'bg-red-50'
                      : 'bg-blue-50'
                  }`}>
                    <div className="flex flex-col items-start gap-1 mb-3">
                      <svg className={`w-5 h-5 ${
                        task.strategicHours && task.strategicHours > availableHours.strategic
                          ? 'text-red-600'
                          : 'text-blue-600'
                      }`} viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span className={`font-medium text-[10px] ${
                        task.strategicHours && task.strategicHours > availableHours.strategic
                          ? 'text-red-600'
                          : 'text-blue-600'
                      }`}>Strategic Consulting</span>
                    </div>
                    <div className="space-y-2">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-[#42526E]">Required</span>
                          <span className="text-xs font-medium text-[#42526E]">
                            {formatHourText(task.strategicHours || 0)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-[#42526E]">Available</span>
                          <span className="text-xs font-medium text-[#42526E]">
                            {formatHourText(availableHours.strategic)}
                          </span>
                        </div>
                      </div>
                      <div className="h-px bg-gray-200" />
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#42526E]">Remaining</span>
                        <span className="text-xs font-medium text-[#42526E]">
                          {formatHourText(availableHours.strategic - (task.strategicHours || 0))}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Setup */}
                  <div className={`rounded-lg p-4 ${
                    task.setupHours && task.setupHours > availableHours.setup
                      ? 'bg-red-50'
                      : 'bg-blue-50'
                  }`}>
                    <div className="flex flex-col items-start gap-1 mb-3">
                      <svg className={`w-5 h-5 ${
                        task.setupHours && task.setupHours > availableHours.setup
                          ? 'text-red-600'
                          : 'text-blue-600'
                      }`} viewBox="0 0 24 24" fill="none">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <span className={`font-medium text-[10px] ${
                        task.setupHours && task.setupHours > availableHours.setup
                          ? 'text-red-600'
                          : 'text-blue-600'
                      }`}>CRM Support & Training</span>
                    </div>
                    <div className="space-y-2">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-[#42526E]">Required</span>
                          <span className="text-xs font-medium text-[#42526E]">
                            {formatHourText(task.setupHours || 0)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-[#42526E]">Available</span>
                          <span className="text-xs font-medium text-[#42526E]">
                            {formatHourText(availableHours.setup)}
                          </span>
                        </div>
                      </div>
                      <div className="h-px bg-gray-200" />
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#42526E]">Remaining</span>
                        <span className="text-xs font-medium text-[#42526E]">
                          {formatHourText(availableHours.setup - (task.setupHours || 0))}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Integration */}
                  <div className={`rounded-lg p-4 ${
                    task.integrationHours && task.integrationHours > availableHours.integration
                      ? 'bg-red-50'
                      : 'bg-blue-50'
                  }`}>
                    <div className="flex flex-col items-start gap-1 mb-3">
                      <svg className={`w-5 h-5 ${
                        task.integrationHours && task.integrationHours > availableHours.integration
                          ? 'text-red-600'
                          : 'text-blue-600'
                      }`} viewBox="0 0 24 24" fill="none">
                        <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z" stroke="currentColor" strokeWidth="2"/>
                        <path d="M7 8L11 12L7 16M13 16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className={`font-medium text-[10px] ${
                        task.integrationHours && task.integrationHours > availableHours.integration
                          ? 'text-red-600'
                          : 'text-blue-600'
                      }`}>CRM Development</span>
                    </div>
                    <div className="space-y-2">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-[#42526E]">Required</span>
                          <span className="text-xs font-medium text-[#42526E]">
                            {formatHourText(task.integrationHours || 0)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-[#42526E]">Available</span>
                          <span className="text-xs font-medium text-[#42526E]">
                            {formatHourText(availableHours.integration)}
                          </span>
                        </div>
                      </div>
                      <div className="h-px bg-gray-200" />
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#42526E]">Remaining</span>
                        <span className="text-xs font-medium text-[#42526E]">
                          {formatHourText(availableHours.integration - (task.integrationHours || 0))}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cost Breakdown Card - Only shown when hours are insufficient */}
                {hasInsufficientHours && (
                  <div className="bg-red-50 rounded-lg p-4 mb-6">
                    <h3 className="text-[#1C2B4F] text-sm font-medium mb-3">Additional Hours Cost</h3>
                    <div className="space-y-2">
                      {strategicNeeded > 0 && (
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <svg className="w-3.5 h-3.5 text-[#1C2B4F]" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                              <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                              <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                            <span className="text-[#42526E]">Strategic Consulting ({strategicNeeded}h @ {hourlyRates["Strategic Consulting"]}/h)</span>
                          </div>
                          <span className="font-medium text-[#1C2B4F]">{strategicNeeded * hourlyRates["Strategic Consulting"]}</span>
                        </div>
                      )}
                      {setupNeeded > 0 && (
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <svg className="w-3.5 h-3.5 text-[#1C2B4F]" viewBox="0 0 24 24" fill="none">
                              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            <span className="text-[#42526E]">CRM Support & Training ({setupNeeded}h @ {hourlyRates["CRM Support & Training"]}/h)</span>
                          </div>
                          <span className="font-medium text-[#1C2B4F]">{setupNeeded * hourlyRates["CRM Support & Training"]}</span>
                        </div>
                      )}
                      {integrationNeeded > 0 && (
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <svg className="w-3.5 h-3.5 text-[#1C2B4F]" viewBox="0 0 24 24" fill="none">
                              <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z" stroke="currentColor" strokeWidth="2"/>
                              <path d="M7 8L11 12L7 16M13 16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="text-[#42526E]">CRM Development ({integrationNeeded}h @ {hourlyRates["CRM Development"]}/h)</span>
                          </div>
                          <span className="font-medium text-[#1C2B4F]">{integrationNeeded * hourlyRates["CRM Development"]}</span>
                        </div>
                      )}
                      <div className="pt-2 mt-2 border-t border-red-100">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-[#1C2B4F]">Total Additional Cost</span>
                          <span className="text-sm font-semibold text-[#1C2B4F]">{totalCost}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Task Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-[#1C2B4F] font-medium mb-2">Support Area</h3>
                    <div className="inline-flex px-2.5 py-1 rounded-md bg-[#FF4F11]/10 text-[#FF4F11]">
                      {task.supportArea}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[#1C2B4F] font-medium mb-2">Categories</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {task.categories.map((category) => (
                        <span key={category} className="px-2.5 py-1 text-sm rounded-md bg-gray-100 text-gray-600">
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[#1C2B4F] font-medium mb-2">Specification Notes</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <pre className="text-sm text-[#42526E] whitespace-pre-wrap font-sans">
                        {task.specificationNotes}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="shrink-0 p-6 bg-gray-50 border-t border-gray-100">
              {hasInsufficientHours ? (
                <button
                  className="w-full px-6 py-2.5 rounded-lg text-white text-sm font-medium transition-colors bg-[#8B0000] hover:bg-[#8B0000]/90"
                >
                  Add More Hours
                </button>
              ) : (
                <button
                  className="w-full px-6 py-2.5 rounded-lg text-white text-sm font-medium transition-colors bg-[#FF4F11] hover:bg-[#FF4F11]/90"
                >
                  Submit Support Request From Catalogue Task
                </button>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 