"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { PaymentDetailsModal } from "./paymentDetailsModal"

interface Invoice {
  id: string
  name: string
  status: "Paid" | "Pending" | "Overdue"
  amount: number
  dateIssued: string
  datePaid?: string
  paidBy?: string
  paymentMethod?: string
}

const mockInvoices: Invoice[] = [
  {
    id: "INV-2024-004",
    name: "Additional Support Hours - Strategic Consulting",
    status: "Pending" as const,
    amount: 550,
    dateIssued: "2024-03-15"
  },
  {
    id: "INV-2024-003",
    name: "Premium Plan",
    status: "Pending" as const,
    amount: 7310,
    dateIssued: "2024-03-01"
  },
  {
    id: "INV-2024-002",
    name: "Premium Plan",
    status: "Paid" as const,
    amount: 7310,
    dateIssued: "2024-02-01",
    datePaid: "2024-02-01",
    paidBy: "John Smith",
    paymentMethod: "Visa ending in 4242"
  },
  {
    id: "INV-2024-001",
    name: "Premium Plan",
    status: "Paid" as const,
    amount: 7310,
    dateIssued: "2024-01-01",
    datePaid: "2024-01-01",
    paidBy: "John Smith",
    paymentMethod: "Visa ending in 4242"
  }
].sort((a, b) => new Date(b.dateIssued).getTime() - new Date(a.dateIssued).getTime())

export function Invoices() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)

  const getStatusColor = (status: Invoice["status"]) => {
    switch (status) {
      case "Paid":
        return "bg-green-50 text-green-700"
      case "Pending":
        return "bg-yellow-50 text-yellow-700"
      case "Overdue":
        return "bg-red-50 text-red-700"
    }
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return "-"
    return new Date(dateString).toLocaleDateString("en-AU", {
      year: "numeric",
      month: "short",
      day: "numeric"
    })
  }

  const handleDownload = (invoiceId: string) => {
    // TODO: Implement invoice download functionality
    console.log(`Downloading invoice ${invoiceId}`)
  }

  return (
    <Card className="w-full">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium text-[#42526E]">Invoices</h2>
          <div className="flex gap-3">
            <button
              onClick={() => setIsPaymentModalOpen(true)}
              className="px-4 py-2 text-sm font-medium text-[#42526E] bg-white border border-[#DFE1E6] rounded-lg hover:bg-gray-50 transition-colors"
            >
              Update Payment Details
            </button>
            <button
              className="px-4 py-2 text-sm font-medium text-[#42526E] bg-white border border-[#DFE1E6] rounded-lg hover:bg-gray-50 transition-colors"
            >
              Contact Accounting
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#DFE1E6]">
                <th className="text-left py-3 px-4 text-sm font-medium text-[#42526E]">Invoice #</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[#42526E]">Name</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[#42526E]">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[#42526E]">Amount</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[#42526E]">Date Issued</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[#42526E]">Date Paid</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[#42526E]">Paid By</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[#42526E]">Payment Method</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-[#42526E]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockInvoices.map((invoice) => (
                <tr key={invoice.id} className="border-b border-[#DFE1E6] hover:bg-gray-50">
                  <td className="py-4 px-4 text-sm text-[#42526E]">{invoice.id}</td>
                  <td className="py-4 px-4 text-sm text-[#42526E]">{invoice.name}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(invoice.status)}`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-[#42526E]">${invoice.amount.toLocaleString()}</td>
                  <td className="py-4 px-4 text-sm text-[#42526E]">{formatDate(invoice.dateIssued)}</td>
                  <td className="py-4 px-4 text-sm text-[#42526E]">{formatDate(invoice.datePaid)}</td>
                  <td className="py-4 px-4 text-sm text-[#42526E]">{invoice.paidBy || "-"}</td>
                  <td className="py-4 px-4 text-sm text-[#42526E]">{invoice.paymentMethod || "-"}</td>
                  <td className="py-4 px-4 text-right">
                    <button
                      onClick={() => handleDownload(invoice.id)}
                      className="text-[#42526E] hover:text-[#FF4F11] transition-colors"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <path d="M12 7v10m0 0l-4-4m4 4l4-4M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <PaymentDetailsModal 
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      />
    </Card>
  )
}
