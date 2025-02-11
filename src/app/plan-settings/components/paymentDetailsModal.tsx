"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface PaymentDetailsModalProps {
  isOpen: boolean
  onClose: () => void
}

interface PaymentDetails {
  billingName: string
  billingEmail: string
  cardNumber: string
  expiryDate: string
  cvv: string
}

export function PaymentDetailsModal({ isOpen, onClose }: PaymentDetailsModalProps) {
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({
    billingName: "John Smith",
    billingEmail: "john.smith@example.com",
    cardNumber: "•••• •••• •••• 4242",
    expiryDate: "12/24",
    cvv: "•••"
  })

  const handleSubmit = () => {
    // TODO: Handle payment details update
    onClose()
  }

  if (!isOpen) return null

  return (
    <div 
      className="absolute inset-0 bg-[#111827]/90 flex items-center justify-center z-[9999] h-screen overflow-hidden"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, margin: 0, padding: 0 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <div className="bg-white rounded-lg w-[600px] overflow-hidden m-4">
        <div className="flex items-start justify-between p-6 border-b border-[#DFE1E6]">
          <div>
            <h2 className="text-lg font-semibold text-[#42526E]">Payment Details</h2>
            <p className="text-sm text-[#6B778C] mt-1">Update your payment information</p>
          </div>
          <button
            onClick={onClose}
            className="text-[#6B778C] hover:text-[#42526E] transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="p-6">
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="billingName" className="block text-sm font-medium text-[#42526E] mb-2">
                  Billing Name
                </label>
                <input
                  id="billingName"
                  type="text"
                  className="w-full px-3 py-2 text-sm border border-[#DFE1E6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4F11] focus:border-transparent text-[#42526E]"
                  value={paymentDetails.billingName}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, billingName: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="billingEmail" className="block text-sm font-medium text-[#42526E] mb-2">
                  Billing Email
                </label>
                <input
                  id="billingEmail"
                  type="email"
                  className="w-full px-3 py-2 text-sm border border-[#DFE1E6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4F11] focus:border-transparent text-[#42526E]"
                  value={paymentDetails.billingEmail}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, billingEmail: e.target.value })}
                />
              </div>
            </div>

            <div className="pt-4 border-t border-[#DFE1E6]">
              <h3 className="text-sm font-medium text-[#42526E] mb-4">Payment Method</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-[#42526E] mb-2">
                    Card Number
                  </label>
                  <input
                    id="cardNumber"
                    type="text"
                    className="w-full px-3 py-2 text-sm border border-[#DFE1E6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4F11] focus:border-transparent text-[#42526E]"
                    value={paymentDetails.cardNumber}
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiryDate" className="block text-sm font-medium text-[#42526E] mb-2">
                      Expiry Date
                    </label>
                    <input
                      id="expiryDate"
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-3 py-2 text-sm border border-[#DFE1E6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4F11] focus:border-transparent text-[#42526E]"
                      value={paymentDetails.expiryDate}
                      onChange={(e) => setPaymentDetails({ ...paymentDetails, expiryDate: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-[#42526E] mb-2">
                      CVV
                    </label>
                    <input
                      id="cvv"
                      type="password"
                      maxLength={4}
                      className="w-full px-3 py-2 text-sm border border-[#DFE1E6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4F11] focus:border-transparent text-[#42526E]"
                      value={paymentDetails.cvv}
                      onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-[#42526E] bg-white border border-[#DFE1E6] rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF4F11]"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 text-sm font-medium text-white bg-[#FF4F11] rounded-lg hover:bg-[#FF4F11]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF4F11]"
              >
                Update Payment Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
