"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"

type Term = "3" | "6" | "12"

const basePrices = {
  Basic: 3180,
  Advanced: 5245,
  Premium: 7310
}

function calculatePrice(basePrice: number, term: Term) {
  switch (term) {
    case "6":
      return basePrice * 0.95 // 5% discount
    case "12":
      return basePrice * 0.90 // 10% discount
    default:
      return basePrice
  }
}

export function PlanComparison() {
  const [selectedTerm, setSelectedTerm] = useState<Term>("3")
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="w-full overflow-hidden">
      <div 
        className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors rounded-t-lg"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          <motion.svg 
            className="w-5 h-5 text-[#42526E]"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            viewBox="0 0 24 24" 
            fill="none"
          >
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </motion.svg>
          <h2 className="text-lg font-medium text-[#42526E]">Plan Comparison</h2>
        </div>
        <span className="text-sm text-[#6B778C]">Compare available support plans and features</span>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-t border-[#DFE1E6]"
            style={{ margin: 0 }}
          >
            <motion.div 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="p-6"
              style={{ margin: 0, padding: '24px' }}
            >
              <div className="grid grid-cols-[minmax(400px,_1fr)_minmax(250px,_1fr)_minmax(250px,_1fr)_minmax(250px,_1fr)] gap-6">
                {/* Term Length Column */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-[#1E2B4D] text-lg font-medium mb-2">Term Length</h3>
                  <p className="text-sm text-gray-500 mb-6">Discounts are available for longer engagement plans</p>
                  
                  <div className="space-y-3">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedTerm("3")
                      }}
                      className={`w-full px-4 py-3 text-sm rounded-lg text-left transition-colors ${
                        selectedTerm === "3" 
                          ? 'bg-[#FF4F11] text-white' 
                          : 'bg-white text-gray-600 hover:bg-white/80'
                      }`}
                    >
                      3 Month Term
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedTerm("6")
                      }}
                      className={`w-full px-4 py-3 text-sm rounded-lg text-left transition-colors ${
                        selectedTerm === "6" 
                          ? 'bg-[#FF4F11] text-white' 
                          : 'bg-white text-gray-600 hover:bg-white/80'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>6 Month Term</span>
                        <span className={`${selectedTerm === "6" ? 'text-white' : 'text-[#FF4F11]'}`}>5% off</span>
                      </div>
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedTerm("12")
                      }}
                      className={`w-full px-4 py-3 text-sm rounded-lg text-left transition-colors ${
                        selectedTerm === "12" 
                          ? 'bg-[#FF4F11] text-white' 
                          : 'bg-white text-gray-600 hover:bg-white/80'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>12 Month Term</span>
                        <span className={`${selectedTerm === "12" ? 'text-white' : 'text-[#FF4F11]'}`}>10% off</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Basic Plan Column */}
                <div className="bg-gray-100 rounded-lg p-6 flex flex-col h-full">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Basic</h3>
                    <p className="text-sm text-gray-600">Essential CRM support for data clean-up, basic configurations, and task-based assistance. Perfect for businesses needing occasional expert help.</p>
                  </div>
                  <div className="mt-auto pt-8">
                    <div className="flex items-baseline mb-4">
                      {selectedTerm !== "3" && (
                        <span className="text-lg line-through text-gray-400 mr-2">
                          ${basePrices.Basic.toLocaleString()}
                        </span>
                      )}
                      <span className="text-2xl font-bold">${Math.round(calculatePrice(basePrices.Basic, selectedTerm)).toLocaleString()}</span>
                      <span className="text-sm text-gray-500 ml-1">/month AUD</span>
                    </div>
                    <button 
                      onClick={(e) => e.stopPropagation()}
                      className="w-full px-4 py-2 bg-[#FF4F11] text-white rounded text-sm"
                    >
                      Upgrade Now
                    </button>
                  </div>
                </div>

                {/* Advanced Plan Column */}
                <div className="bg-gray-100 rounded-lg p-6 flex flex-col h-full">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Advanced</h3>
                    <p className="text-sm text-gray-600">Enhanced support with extra hours for CRM optimisation, reporting, and integrations. Ideal for growing teams needing consistent guidance.</p>
                  </div>
                  <div className="mt-auto pt-8">
                    <div className="flex items-baseline mb-4">
                      {selectedTerm !== "3" && (
                        <span className="text-lg line-through text-gray-400 mr-2">
                          ${basePrices.Advanced.toLocaleString()}
                        </span>
                      )}
                      <span className="text-2xl font-bold">${Math.round(calculatePrice(basePrices.Advanced, selectedTerm)).toLocaleString()}</span>
                      <span className="text-sm text-gray-500 ml-1">/month AUD</span>
                    </div>
                    <button 
                      onClick={(e) => e.stopPropagation()}
                      className="w-full px-4 py-2 bg-[#FF4F11] text-white rounded text-sm"
                    >
                      Upgrade Now
                    </button>
                  </div>
                </div>

                {/* Premium Plan Column */}
                <div className="bg-gray-100 rounded-lg p-6 flex flex-col h-full">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Premium</h3>
                    <p className="text-sm text-gray-600">Comprehensive support for advanced CRM needs, including technical consulting and custom solutions. Perfect for maximising system efficiency.</p>
                  </div>
                  <div className="mt-auto pt-8">
                    <div className="flex items-baseline mb-4">
                      {selectedTerm !== "3" && (
                        <span className="text-lg line-through text-gray-400 mr-2">
                          ${basePrices.Premium.toLocaleString()}
                        </span>
                      )}
                      <span className="text-2xl font-bold">${Math.round(calculatePrice(basePrices.Premium, selectedTerm)).toLocaleString()}</span>
                      <span className="text-sm text-gray-500 ml-1">/month AUD</span>
                    </div>
                    <button 
                      onClick={(e) => e.stopPropagation()}
                      className="w-full px-4 py-2 bg-[#FF4F11] text-white rounded text-sm"
                    >
                      Upgrade Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Features Table */}
              <div className="mt-8">
                <div className="grid grid-cols-[minmax(400px,_1fr)_minmax(250px,_1fr)_minmax(250px,_1fr)_minmax(250px,_1fr)]">
                  {/* Feature Title and Description Container */}
                  <div className="grid grid-cols-[180px_1fr] relative">
                    {/* Feature Titles Column */}
                    <div className="space-y-[2px]">
                      {[
                        "Team User Limit",
                        "Knowledge Base Resources",
                        "Priority Ticket Queue",
                        "Pre-built Task Catalogue Access",
                        "Strategic Consulting",
                        "CRM Setup, Support & Training",
                        "CRM Integration Development & Design"
                      ].map((title, index) => (
                        <div key={title} className={`h-14 ${index % 2 === 1 ? 'bg-gray-100' : ''}`}>
                          <div className="flex items-center px-3 h-full">
                            <span className="text-sm font-medium text-gray-600">{title}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Feature Descriptions Column */}
                    <div className="space-y-[2px]">
                      {[
                        "The amount of team members who can access and interact with the CRM support portal",
                        "Access our library of HubSpot guides, tips, and best practices curated by our diverse team of experts",
                        "Enjoy faster response times with prioritised ticket handling and reduced scope turnaround time",
                        "Browse and request from our catalogue of pre-configured support tasks for streamlined assistance",
                        "Expert guidance on CRM strategy, system optimisation, and business process improvement",
                        "CRM data import & customisation requests, automation configuration, and personalised training sessions",
                        "Integration development, custom sales asset design and technical implementation services"
                      ].map((description, index) => (
                        <div key={description} className={`h-14 ${index % 2 === 1 ? 'bg-gray-100' : ''} relative`}>
                          <div className="absolute left-0 top-3 bottom-3 w-px bg-gray-200"/>
                          <div className="flex items-center pl-4 pr-3 h-full">
                            <span className="text-xs text-gray-400 line-clamp-2">{description}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Basic Column */}
                  <div className="space-y-[2px]">
                    {[
                      { type: "text", value: "5 Users" },
                      { type: "check" },
                      { type: "cross" },
                      { type: "cross" },
                      { type: "cross" },
                      { type: "text", value: "12 hours" },
                      { type: "text", value: "3 hours" }
                    ].map((item, index) => (
                      <div key={index} className={`flex items-center justify-center h-14 ${index % 2 === 1 ? 'bg-gray-100' : ''}`}>
                        {item.type === "text" ? (
                          <span className="text-sm">{item.value}</span>
                        ) : item.type === "check" ? (
                          <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="none">
                            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Advanced Column */}
                  <div className="space-y-[2px]">
                    {[
                      { type: "text", value: "10 Users" },
                      { type: "check" },
                      { type: "check" },
                      { type: "check" },
                      { type: "text", value: "3 hours" },
                      { type: "text", value: "16 hours" },
                      { type: "text", value: "5 hours" }
                    ].map((item, index) => (
                      <div key={index} className={`flex items-center justify-center h-14 ${index % 2 === 1 ? 'bg-gray-100' : ''}`}>
                        {item.type === "text" ? (
                          <span className="text-sm">{item.value}</span>
                        ) : (
                          <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="none">
                            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Premium Column */}
                  <div className="space-y-[2px]">
                    {[
                      { type: "text", value: "Unlimited" },
                      { type: "check" },
                      { type: "check" },
                      { type: "check" },
                      { type: "text", value: "6 hours" },
                      { type: "text", value: "20 hours" },
                      { type: "text", value: "7 hours" }
                    ].map((item, index) => (
                      <div key={index} className={`flex items-center justify-center h-14 ${index % 2 === 1 ? 'bg-gray-100' : ''}`}>
                        {item.type === "text" ? (
                          <span className="text-sm">{item.value}</span>
                        ) : (
                          <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="none">
                            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Custom Support Plan */}
              <div className="mt-8 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Custom Support Plan</h3>
                  <p className="text-sm text-gray-600 mt-1">Need a custom support agreement? We'll work with you to create a plan that perfectly matches your business requirements and budget.</p>
                </div>
                <button 
                  onClick={(e) => e.stopPropagation()}
                  className="px-4 py-2 text-sm font-medium text-white bg-[#FF4F11] rounded hover:bg-[#FF4F11]/90 transition-colors"
                >
                  Get in Touch
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}
