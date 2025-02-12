"use client"

import { useState, useEffect } from "react"
import { UserTable } from "./components/UserTable"
import { EditUserModal } from "./components/EditUserModal"
import { AddUserModal } from "./components/AddUserModal"
import { User } from "./types"

export default function TeamMembersPage() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  // Connect the header button to this component
  useEffect(() => {
    const handleHeaderClick = () => setIsAddModalOpen(true)
    // @ts-ignore - window.headerAction is added dynamically
    window.headerAction = handleHeaderClick
    return () => {
      // @ts-ignore
      delete window.headerAction
    }
  }, [])

  const handleSaveUser = (updatedUser: User) => {
    // TODO: Implement save functionality
    console.log('Saving user:', updatedUser)
  }

  const handleAddUser = (newUser: Omit<User, 'id' | 'lastSignIn'>) => {
    // TODO: Implement add functionality
    console.log('Adding user:', newUser)
    setIsAddModalOpen(false)
  }

  return (
    <div className="h-[calc(100vh-3.5rem)] bg-gradient-to-b from-[#374365] to-[#7E879C] flex flex-col overflow-hidden">
      <div className="px-4 xl:px-6 flex-1 min-h-0 overflow-y-auto py-4">
        <UserTable onEdit={setSelectedUser} />
      </div>

      <EditUserModal 
        user={selectedUser}
        onClose={() => setSelectedUser(null)}
        onSave={handleSaveUser}
      />

      <AddUserModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddUser}
      />
    </div>
  )
} 