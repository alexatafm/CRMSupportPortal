"use client"

import { motion, AnimatePresence } from "framer-motion"

type TaskDetailsPanelProps = {
  task: {
    id: string
    title: string
    description: string
    duration: string
    supportCategories: string[]
    hubspotRequirements: string[]
    availableToPlans: string[]
  } | null
  onClose: () => void
}

export function TaskDetailsPanel({ task, onClose }: TaskDetailsPanelProps) {
  return (
    <AnimatePresence>
      {task && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-screen w-[600px] bg-white shadow-lg z-50 flex flex-col rounded-l-xl"
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{task.title}</h2>
                <div className="flex items-center gap-1.5 mt-1 text-gray-500">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6v6l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="text-sm">{task.duration} estimated</span>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto p-6">
              <div className="space-y-6">
                {/* Description */}
                <section>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Description</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{task.description}</p>
                </section>

                {/* Support Categories */}
                <section>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Support Categories</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {task.supportCategories.map((category) => (
                      <span 
                        key={category}
                        className="px-2 py-0.5 text-[11px] bg-gray-100 text-gray-700 rounded-sm"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </section>

                {/* HubSpot Requirements */}
                <section>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">HubSpot Requirements</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {task.availableToPlans.map((plan) => (
                      <span 
                        key={plan}
                        className="px-2 py-0.5 text-[11px] bg-orange-50 text-orange-600 rounded-sm"
                      >
                        {plan}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Hours Breakdown */}
                <section>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Hours Breakdown</h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Task Scope</span>
                      <span className="text-sm font-medium text-gray-900">{task.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Your Plan Remaining</span>
                      <span className="text-sm font-medium text-gray-900">24h</span>
                    </div>
                    <div className="h-px bg-gray-200" />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Hours After Task</span>
                      <span className="text-sm font-medium text-gray-900">
                        {`${24 - parseFloat(task.duration)}h`}
                      </span>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t bg-gray-50 rounded-bl-xl">
              <button 
                className="w-full bg-[#FF4F11] text-white rounded-md py-2.5 text-sm font-medium hover:bg-[#FF4F11]/90 transition-colors"
              >
                Create Support Ticket
              </button>
              <p className="text-xs text-gray-500 text-center mt-3">
                This will create a new support ticket with the task details pre-filled.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 