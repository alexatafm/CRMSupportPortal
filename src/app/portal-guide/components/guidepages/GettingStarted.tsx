import { GuideSection, GuideTip, PageTitle } from './shared'

export function GettingStarted() {
  return (
    <div>
      <PageTitle>Getting Started</PageTitle>
      
      <GuideSection title="Welcome to Your CRM Support Portal">
        <p className="text-gray-600 mb-6">
          Welcome to your CRM Support Portal - your comprehensive platform for managing and maximizing your HubSpot CRM investment. This portal streamlines how you request, manage, and receive expert CRM support, ensuring you get the most value from your HubSpot implementation.
        </p>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                <path d="M4 4H10V10H4V4Z M14 4H20V10H14V4Z M4 14H10V20H4V14Z M14 14H20V20H14V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h4 className="font-medium">Dashboard</h4>
            </div>
            <p className="text-sm text-gray-600">Your central command center for monitoring active tickets, support hours usage, and important notifications. Get a quick overview of your support status and upcoming activities.</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M7 7H17 M7 12H17 M7 17H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h4 className="font-medium">Task Catalogue</h4>
            </div>
            <p className="text-sm text-gray-600">Browse and select from pre-configured support tasks, making it easy to implement best practices and stay current with HubSpot's latest features.</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M5 18C5 16.3431 8.13401 15 12 15C15.866 15 19 16.3431 19 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h4 className="font-medium">Team Members</h4>
            </div>
            <p className="text-sm text-gray-600">Manage your team's access to the portal, set permissions, and ensure everyone can collaborate effectively on support requests.</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h4 className="font-medium">Plan & Add-ons</h4>
            </div>
            <p className="text-sm text-gray-600">View your current plan, monitor usage, and easily purchase additional support hours as needed to maintain continuous support coverage.</p>
          </div>
        </div>
      </GuideSection>

      <GuideTip>
        Start by exploring the Task Catalogue to discover pre-configured support tasks that can help optimize your CRM implementation and team productivity.
      </GuideTip>

      <GuideSection title="Key Benefits">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Streamlined Support Experience</h4>
              <p className="text-sm text-gray-600">Communicate directly within ticket contexts, track progress in real-time, and maintain a clear history of all support interactions. Our structured approach ensures efficient resolution of your requests.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Expert Guidance & Best Practices</h4>
              <p className="text-sm text-gray-600">Access industry expertise, strategic consulting, and HubSpot best practices. Our team helps you optimize your CRM implementation and adopt the latest features to drive business growth.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M7 7H17 M7 12H17 M7 17H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Pre-Configured Task Templates</h4>
              <p className="text-sm text-gray-600">Browse our extensive catalogue of pre-configured tasks to easily implement common CRM enhancements, automations, and optimizations. Maximize your support hours with proven solutions.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M5 18C5 16.3431 8.13401 15 12 15C15.866 15 19 16.3431 19 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Team Enablement</h4>
              <p className="text-sm text-gray-600">Organize training sessions, access documentation, and ensure your team is equipped to leverage HubSpot effectively. Manage permissions and collaborate seamlessly on support requests.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Flexible Support Management</h4>
              <p className="text-sm text-gray-600">Monitor support hours usage, receive low-balance notifications, and easily purchase additional hours as needed. Maintain continuous support coverage with transparent pricing and flexible options.</p>
            </div>
          </div>
        </div>
      </GuideSection>
    </div>
  )
} 