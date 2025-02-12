"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

type Term = "3" | "6" | "12"

type ServiceType = "Strategic Consulting" | "CRM Support & Training" | "CRM Development"

const hourlyRates = {
  "Strategic Consulting": 275,
  "CRM Support & Training": 220,
  "CRM Development": 180
}

interface AddonCalculatorProps {
  selectedTerm: Term
}

export function AddonCalculator({ selectedTerm: defaultTerm }: AddonCalculatorProps) {
  const [selectedTerm, setSelectedTerm] = useState<Term>(defaultTerm)
  const [hours, setHours] = useState<Record<ServiceType, number>>({
    "Strategic Consulting": 0,
    "CRM Support & Training": 0,
    "CRM Development": 0
  })

  const calculateTotal = () => {
    const discount = selectedTerm === "6" ? 0.95 : selectedTerm === "12" ? 0.90 : 1
    return Object.entries(hours).reduce((total, [service, hours]) => {
      return total + (hours * hourlyRates[service as ServiceType] * discount)
    }, 0)
  }

  const getDiscountedRate = (rate: number) => {
    const discount = selectedTerm === "6" ? 0.95 : selectedTerm === "12" ? 0.90 : 1
    return Math.round(rate * discount)
  }

  const handleHourChange = (service: ServiceType, value: number) => {
    setHours(prev => ({
      ...prev,
      [service]: value
    }))
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-[250px_1fr] gap-6">
          {/* Info Card */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-[#1E2B4D] text-lg font-medium mb-2">Additional Support Hours</h3>
            <p className="text-sm text-gray-600 mb-6">
              Purchase extra support hours with term-length discounts. Ideal for scaling your CRM capabilities or handling unexpected projects.
            </p>
            
            <div className="space-y-3">
              <button 
                onClick={() => setSelectedTerm("3")}
                className={`w-full px-4 py-3 text-sm rounded-lg text-left transition-colors ${
                  selectedTerm === "3" 
                    ? 'bg-[#FF4F11] text-white' 
                    : 'bg-white text-gray-600 hover:bg-white/80'
                }`}
              >
                3 Month Term
              </button>
              <button 
                onClick={() => setSelectedTerm("6")}
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
                onClick={() => setSelectedTerm("12")}
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

          {/* Right Column */}
          <div className="flex flex-col">
            {/* Sliders */}
            <div className="flex-1 space-y-4">
              {(Object.keys(hourlyRates) as ServiceType[]).map((service) => (
                <div key={service} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">{service}</label>
                    <div className="text-sm">
                      {selectedTerm !== "3" && (
                        <span className="line-through text-gray-400 mr-2">
                          ${hourlyRates[service]}/hour
                        </span>
                      )}
                      <span className="text-gray-700 font-medium">
                        ${getDiscountedRate(hourlyRates[service])}/hour
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="relative flex-1">
                      <input
                        type="range"
                        min="0"
                        max="20"
                        step="0.5"
                        value={hours[service]}
                        onChange={(e) => handleHourChange(service, parseFloat(e.target.value))}
                        className="relative w-full h-1.5 bg-white rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-[#FF4F11] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:z-[2] [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:bg-[#FF4F11] [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:relative [&::-moz-range-thumb]:z-[2]"
                        style={{
                          background: `linear-gradient(to right, #FF4F11 0%, #FF4F11 ${(hours[service] / 20) * 100}%, white ${(hours[service] / 20) * 100}%, white 100%)`
                        }}
                      />
                    </div>
                    <div className="w-16 px-2 py-1 text-sm text-center bg-white rounded shadow-sm border border-gray-100 font-medium text-gray-700">
                      {hours[service].toFixed(1)}h
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Total Cost</h4>
                  {selectedTerm !== "3" && (
                    <p className="text-xs text-[#FF4F11] mt-1">
                      {selectedTerm === "6" ? "5%" : "10%"} discount applied
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-gray-900">${Math.round(calculateTotal()).toLocaleString()}</span>
                    <span className="text-sm text-gray-500 ml-1">AUD</span>
                  </div>
                  <button className="px-6 py-2.5 bg-[#FF4F11] text-white rounded text-sm font-medium hover:bg-[#FF4F11]/90 transition-colors">
                    Purchase Hours
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
