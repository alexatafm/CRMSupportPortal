"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { User } from "../types"

type AddUserModalProps = {
  isOpen: boolean
  onClose: () => void
  onAdd: (user: Omit<User, 'id' | 'lastSignIn'>) => void
}

export function AddUserModal({ isOpen, onClose, onAdd }: AddUserModalProps) {
  const [formData, setFormData] = useState<Omit<User, 'id' | 'lastSignIn'>>({
    name: "",
    email: "",
    jobTitle: "",
    permissions: "View & Comment"
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAdd(formData)
    setFormData({
      name: "",
      email: "",
      jobTitle: "",
      permissions: "View & Comment"
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/20 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-[500px] bg-white shadow-xl z-[101] rounded-lg overflow-hidden"
          >
            <div className="flex items-start justify-between p-6 border-b">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Add Team Member</h2>
                <p className="text-sm text-gray-500 mt-1">Add a new member to your team</p>
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

            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    required
                    value={formData.jobTitle}
                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="permissions" className="block text-sm font-medium text-gray-700 mb-2">
                    Permissions
                  </label>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, permissions: "View & Comment" })}
                      className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
                        formData.permissions === "View & Comment"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      View & Comment
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, permissions: "Create Tickets" })}
                      className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
                        formData.permissions === "Create Tickets"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      Create Tickets
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, permissions: "Approve Tickets" })}
                      className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
                        formData.permissions === "Approve Tickets"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      Approve Tickets
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#FF4F11] text-white text-sm font-medium rounded-md hover:bg-[#FF4F11]/90 transition-colors"
                >
                  Add Member
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
