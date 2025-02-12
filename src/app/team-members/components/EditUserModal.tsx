"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { User, Permission } from "../types"

type EditUserModalProps = {
  user: User | null
  onCloseAction: () => void
  onSaveAction: (user: User) => void
}

export function EditUserModal({ user, onCloseAction, onSaveAction }: EditUserModalProps) {
  const [formData, setFormData] = useState<User | null>(null)

  useEffect(() => {
    if (user) {
      setFormData(user)
    }
  }, [user])

  if (!user || !formData) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData) {
      onSaveAction(formData)
      onCloseAction()
    }
  }

  const handlePermissionChange = (permission: Permission, checked: boolean) => {
    if (typeof formData.permissions === 'string') return // Don't modify if Admin

    const currentPermissions = Array.isArray(formData.permissions) ? formData.permissions : []
    const newPermissions: Permission[] = checked
      ? [...currentPermissions, permission]
      : currentPermissions.filter(p => p !== permission)
    
    setFormData({ ...formData, permissions: newPermissions })
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 flex items-center justify-center">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-black/20 backdrop-blur-sm z-[100]"
          onClick={onCloseAction}
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
              <h2 className="text-xl font-semibold text-gray-900">Edit Team Member</h2>
              <p className="text-sm text-gray-500 mt-1">Update user details and permissions</p>
            </div>
            <button 
              onClick={onCloseAction}
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
                  value={formData.jobTitle}
                  onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="permissions" className="block text-sm font-medium text-gray-700 mb-2">
                  Permissions
                </label>
                {typeof formData.permissions === 'string' && formData.permissions === "Admin" ? (
                  <div className="inline-flex px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    Admin (Cannot be modified)
                  </div>
                ) : (
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={Array.isArray(formData.permissions) && formData.permissions.includes("View & Comment")}
                        onChange={(e) => handlePermissionChange("View & Comment", e.target.checked)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">View & Comment</span>
                    </label>
                    
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={Array.isArray(formData.permissions) && formData.permissions.includes("Create Tickets")}
                        onChange={(e) => handlePermissionChange("Create Tickets", e.target.checked)}
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <span className="text-sm text-gray-700">Create Tickets</span>
                    </label>

                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={Array.isArray(formData.permissions) && formData.permissions.includes("Approve Tickets")}
                        onChange={(e) => handlePermissionChange("Approve Tickets", e.target.checked)}
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-sm text-gray-700">Approve Tickets</span>
                    </label>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onCloseAction}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#FF4F11] text-white text-sm font-medium rounded-md hover:bg-[#FF4F11]/90 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  )
} 