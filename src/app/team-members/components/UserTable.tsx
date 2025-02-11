"use client"

import { useState } from "react"
import { User } from "../types"

type UserTableProps = {
  onEdit?: (user: User) => void
}

const mockUsers: User[] = [
  {
    id: "1",
    name: "Michael Scott",
    email: "alex@crm.services",
    jobTitle: "Regional Manager",
    lastSignIn: "Never",
    permissions: "Admin"
  }
]

export function UserTable({ onEdit }: UserTableProps) {
  const [users] = useState<User[]>(mockUsers)

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Name</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Email</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Job Title</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Last Sign In</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Permissions</th>
              <th className="text-right py-4 px-6 text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="group hover:bg-gray-50">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#FF4F11] flex items-center justify-center text-white font-medium">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm text-gray-900">{user.name}</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="text-sm text-gray-600">{user.email}</span>
                </td>
                <td className="py-4 px-6">
                  <span className="text-sm text-gray-600">{user.jobTitle}</span>
                </td>
                <td className="py-4 px-6">
                  <span className="text-sm text-gray-600">{user.lastSignIn}</span>
                </td>
                <td className="py-4 px-6">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${user.permissions === 'Admin' ? 'bg-blue-100 text-blue-800' : 
                      user.permissions === 'Create Tickets' ? 'bg-green-100 text-green-800' : 
                      'bg-gray-100 text-gray-800'}`}>
                    {user.permissions}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-end gap-2">
                    <button 
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        if (onEdit) onEdit(user)
                      }}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-red-600 transition-colors">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 