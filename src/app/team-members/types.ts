export type Permission = "View & Comment" | "Create Tickets" | "Approve Tickets" | "Admin"

export type User = {
  id?: string
  name: string
  email: string
  jobTitle: string
  lastSignIn?: string
  permissions: Permission
} 