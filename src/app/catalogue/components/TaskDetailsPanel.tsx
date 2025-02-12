"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

type Task = {
  id: string
  title: string
  description: string
  categories: string[]
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
      type: "spring",
      damping: 25,
      stiffness: 200,
    }
  },
  exit: { 
    x: "100%",
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
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

export function TaskDetailsPanel({ task, onCloseAction, availableHours }: TaskDetailsPanelProps) {
  if (!task) return null

  const totalHours = (task.strategicHours || 0) + (task.setupHours || 0) + (task.integrationHours || 0)

  const hasInsufficientStrategicHours = task.strategicHours && task.strategicHours > availableHours.strategic
  const hasInsufficientSetupHours = task.setupHours && task.setupHours > availableHours.setup
  const hasInsufficientIntegrationHours = task.integrationHours && task.integrationHours > availableHours.integration

  const getRequiredAdditionalHours = (current: number, required?: number) => {
    if (!required) return 0
    return Math.max(0, required - current)
  }

  const additionalStrategicHours = getRequiredAdditionalHours(availableHours.strategic, task.strategicHours)
  const additionalSetupHours = getRequiredAdditionalHours(availableHours.setup, task.setupHours)
  const additionalIntegrationHours = getRequiredAdditionalHours(availableHours.integration, task.integrationHours)

  const hasInsufficientHours = hasInsufficientStrategicHours || hasInsufficientSetupHours || hasInsufficientIntegrationHours

  // Helper function to format hour text
  const formatHourText = (hours: number) => `${hours} ${hours === 1 ? 'hour' : 'hours'}`

  // Format the next reset date (assuming it's Feb 23, 2024 from the screenshot)
  const resetDate = new Date('2024-02-23')
  const formattedResetDate = resetDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })

  return (
    <AnimatePresence>
      {task && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onCloseAction}
          />

          {/* Panel */}
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed right-0 top-0 h-full w-[500px] bg-white shadow-xl z-50 rounded-l-xl overflow-hidden"
          >
            <motion.div 
              className="flex flex-col h-full"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 p-6 border-b border-gray-200">
                <div>
                  <h2 className="text-lg font-semibold text-[#1C2B4F] mb-1">{task.title}</h2>
                  <div className="flex flex-wrap gap-1.5">
                    {task.categories.map((category) => (
                      <span key={category} className="px-2 py-0.5 text-[11px] rounded-md bg-gray-100 text-gray-600 font-medium">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
                <motion.button 
                  onClick={onCloseAction}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-6 space-y-6">
                  {/* Description */}
                  <div>
                    <h3 className="font-medium text-[#1C2B4F] mb-2">Description</h3>
                    <p className="text-sm text-[#42526E] leading-relaxed">{task.description}</p>
                  </div>

                  {/* Hours */}
                  <div>
                    <h3 className="font-medium text-[#1C2B4F] mb-3">Hours Required</h3>
                    <div className="space-y-3">
                      {task.strategicHours && task.strategicHours > 0 && (
                        <div className="flex items-center gap-3">
                          <div className={`w-7 h-7 rounded-full ${hasInsufficientStrategicHours ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'} flex items-center justify-center`}>
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                              <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                              <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                          </div>
                          <div className="flex-1 flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-[#1C2B4F]">Strategic Consulting</p>
                              <p className="text-sm text-[#42526E]">{formatHourText(task.strategicHours)} required</p>
                            </div>
                            {hasInsufficientStrategicHours && (
                              <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full whitespace-nowrap flex items-center gap-1">
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Insufficient Hours
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {task.setupHours && task.setupHours > 0 && (
                        <div className="flex items-center gap-3">
                          <div className={`w-7 h-7 rounded-full ${hasInsufficientSetupHours ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'} flex items-center justify-center`}>
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          </div>
                          <div className="flex-1 flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-[#1C2B4F]">CRM Support & Training</p>
                              <p className="text-sm text-[#42526E]">{formatHourText(task.setupHours)} required</p>
                            </div>
                            {hasInsufficientSetupHours && (
                              <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full whitespace-nowrap flex items-center gap-1">
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Insufficient Hours
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {task.integrationHours && task.integrationHours > 0 && (
                        <div className="flex items-center gap-3">
                          <div className={`w-7 h-7 rounded-full ${hasInsufficientIntegrationHours ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'} flex items-center justify-center`}>
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                              <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z" stroke="currentColor" strokeWidth="2"/>
                              <path d="M7 8L11 12L7 16M13 16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div className="flex-1 flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-[#1C2B4F]">CRM Development</p>
                              <p className="text-sm text-[#42526E]">{formatHourText(task.integrationHours)} required</p>
                            </div>
                            {hasInsufficientIntegrationHours && (
                              <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full whitespace-nowrap flex items-center gap-1">
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Insufficient Hours
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      <div className="pt-3 mt-3 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-[#1C2B4F]">Total Hours</p>
                          <p className="text-sm font-medium text-[#1C2B4F]">{totalHours} hours</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <motion.div 
                variants={footerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="p-6 border-t border-gray-200"
              >
                {hasInsufficientHours ? (
                  <div className="space-y-3">
                    <p className="text-sm text-red-600 text-center">
                      You need additional hours to request this task
                    </p>
                    <Link href="/plan-settings" className="block">
                      <motion.button 
                        className="w-full h-10 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Purchase Additional Hours
                      </motion.button>
                    </Link>
                  </div>
                ) : (
                  <motion.button 
                    className="w-full h-10 bg-[#1C2B4F] text-white rounded-lg text-sm font-medium hover:bg-[#2A3B66] transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Request Task
                  </motion.button>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 