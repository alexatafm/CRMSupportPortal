"use client"

import { GuideSection, GuideTip, PageTitle } from './shared'

export function TeamManagement() {
  return (
    <div>
      <PageTitle>Team Management</PageTitle>

      <GuideSection title="Overview">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-[#1C2B4F] mb-2">Efficient Team Management</h3>
              <p className="text-sm text-[#42526E]">
                The Team Management section allows you to efficiently manage your CRM Support Portal team members, their roles, and permissions. This centralized control ensures proper access levels and maintains security across your organization.
              </p>
            </div>
          </div>
        </div>
      </GuideSection>

      <GuideSection title="User Roles & Permissions">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-[#1C2B4F] mb-1">View & Comment</h4>
                <p className="text-sm text-[#42526E]">Basic access level that allows users to view tickets and add comments. Ideal for team members who need to stay informed and contribute to discussions.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4v16m0-16l-4 4m4-4l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-[#1C2B4F] mb-1">Create Tickets</h4>
                <p className="text-sm text-[#42526E]">Users can create new support tickets and manage their own tickets. Suitable for team members who need to initiate support requests.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-[#1C2B4F] mb-1">Approve Tickets</h4>
                <p className="text-sm text-[#42526E]">Advanced permission level that allows users to review and approve tickets. Essential for project managers and team leads who oversee task progression.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-[#1C2B4F] mb-1">Admin</h4>
                <p className="text-sm text-[#42526E]">Full system access with the ability to manage users, modify settings, and oversee all aspects of the CRM Support Portal. Reserved for system administrators.</p>
              </div>
            </div>
          </div>
        </div>
      </GuideSection>

      <GuideSection title="Managing Team Members">
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                  <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#1C2B4F] mb-2">Adding New Users</h3>
                <div className="space-y-2 text-sm text-[#42526E]">
                  <p>1. Click the "Add Team Member" button in the top-right corner</p>
                  <p>2. Fill in the required information (Name, Email, Job Title)</p>
                  <p>3. Select appropriate permission level(s)</p>
                  <p>4. Click "Add User" to send an invitation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                  <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#1C2B4F] mb-2">Editing User Details</h3>
                <div className="space-y-2 text-sm text-[#42526E]">
                  <p>1. Locate the user in the team members table</p>
                  <p>2. Click the edit icon (pencil) next to their name</p>
                  <p>3. Update their information or permissions</p>
                  <p>4. Save changes to apply updates immediately</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
            <div className="flex items-start gap-3">
              <div className="shrink-0 w-5 h-5 mt-0.5">
                <svg className="w-5 h-5 text-amber-500" viewBox="0 0 24 24" fill="none">
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-medium text-amber-800 mb-1">Important Security Note</h4>
                <p className="text-sm text-amber-700">
                  Only users with Admin permissions can add or modify team members. Ensure you assign Admin rights carefully to maintain system security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </GuideSection>

      <GuideSection title="Best Practices">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-start gap-3 mb-3">
              <svg className="w-5 h-5 text-[#FF4F11] mt-0.5" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div>
                <h4 className="font-medium text-[#1C2B4F] mb-1">Regular Reviews</h4>
                <p className="text-sm text-[#42526E]">Regularly review user permissions to ensure they align with current roles and remove access for team members who no longer require it.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-start gap-3 mb-3">
              <svg className="w-5 h-5 text-[#FF4F11] mt-0.5" viewBox="0 0 24 24" fill="none">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div>
                <h4 className="font-medium text-[#1C2B4F] mb-1">Documentation</h4>
                <p className="text-sm text-[#42526E]">Maintain clear documentation of permission changes and ensure new team members complete onboarding before granting elevated permissions.</p>
              </div>
            </div>
          </div>
        </div>
      </GuideSection>
    </div>
  )
} 