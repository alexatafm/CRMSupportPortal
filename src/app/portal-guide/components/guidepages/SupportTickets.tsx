import { GuideSection, GuideTip, PageTitle } from './shared'

export function SupportTickets() {
  return (
    <div>
      <PageTitle>Support Tickets</PageTitle>
      
      <GuideSection title="Ticket Workflow Overview">
        <div className="grid grid-cols-3 gap-6">
          {/* Submitted Stage */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-500 uppercase text-sm">Submitted</h3>
              <span className="text-sm text-gray-500">3 Statuses</span>
            </div>
            <div className="space-y-4">
              {/* New Request Card */}
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <div className="h-2.5 w-40 bg-gray-200 rounded"></div>
                  <span className="inline-flex items-center px-1.5 py-0.25 rounded-full text-[10px] font-medium bg-amber-50 text-amber-700 border border-amber-200">
                    New Request
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-gray-100 rounded w-5/6"></div>
                  <div className="h-2 bg-gray-100 rounded w-4/6"></div>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-gray-100 rounded-full"></div>
                    <div className="h-2 w-12 bg-gray-100 rounded"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-gray-100 rounded-full"></div>
                    <div className="h-2 w-12 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Ticket Scoping Card */}
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <div className="h-2.5 w-40 bg-gray-200 rounded"></div>
                  <span className="inline-flex items-center px-1.5 py-0.25 rounded-full text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-200">
                    Ticket Scoping
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-gray-100 rounded w-5/6"></div>
                  <div className="h-2 bg-gray-100 rounded w-4/6"></div>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-gray-100 rounded-full"></div>
                    <div className="h-2 w-12 bg-gray-100 rounded"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-gray-100 rounded-full"></div>
                    <div className="h-2 w-12 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Awaiting Approval Card */}
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <div className="h-2.5 w-40 bg-gray-200 rounded"></div>
                  <span className="inline-flex items-center px-1.5 py-0.25 rounded-full text-[10px] font-medium bg-purple-50 text-purple-700 border border-purple-200">
                    Awaiting Approval
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-gray-100 rounded w-5/6"></div>
                  <div className="h-2 bg-gray-100 rounded w-4/6"></div>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-gray-100 rounded-full"></div>
                    <div className="h-2 w-12 bg-gray-100 rounded"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-gray-100 rounded-full"></div>
                    <div className="h-2 w-12 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* In Progress Stage */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-500 uppercase text-sm">In Progress</h3>
              <span className="text-sm text-gray-500">3 Statuses</span>
            </div>
            <div className="space-y-4">
              {/* Scope Approved Card */}
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <div className="h-2.5 w-40 bg-gray-200 rounded"></div>
                  <span className="inline-flex items-center px-1.5 py-0.25 rounded-full text-[10px] font-medium bg-indigo-50 text-indigo-700 border border-indigo-200">
                    Scope Approved
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-gray-100 rounded w-5/6"></div>
                  <div className="h-2 bg-gray-100 rounded w-4/6"></div>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-gray-100 rounded-full"></div>
                    <div className="h-2 w-12 bg-gray-100 rounded"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-gray-100 rounded-full"></div>
                    <div className="h-2 w-12 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>

              {/* In Progress Card */}
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <div className="h-2.5 w-40 bg-gray-200 rounded"></div>
                  <span className="inline-flex items-center px-1.5 py-0.25 rounded-full text-[10px] font-medium bg-orange-50 text-orange-700 border border-orange-200">
                    In Progress
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-gray-100 rounded w-5/6"></div>
                  <div className="h-2 bg-gray-100 rounded w-4/6"></div>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-gray-100 rounded-full"></div>
                    <div className="h-2 w-12 bg-gray-100 rounded"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-gray-100 rounded-full"></div>
                    <div className="h-2 w-12 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Awaiting Feedback Card */}
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <div className="h-2.5 w-40 bg-gray-200 rounded"></div>
                  <span className="inline-flex items-center px-1.5 py-0.25 rounded-full text-[10px] font-medium bg-sky-50 text-sky-700 border border-sky-200">
                    Awaiting Feedback
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-gray-100 rounded w-5/6"></div>
                  <div className="h-2 bg-gray-100 rounded w-4/6"></div>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-gray-100 rounded-full"></div>
                    <div className="h-2 w-12 bg-gray-100 rounded"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-gray-100 rounded-full"></div>
                    <div className="h-2 w-12 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Closed Stage */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-500 uppercase text-sm">Closed</h3>
              <span className="text-sm text-gray-500">2 Statuses</span>
            </div>
            <div className="space-y-4">
              {/* Completed Card */}
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <div className="h-2.5 w-40 bg-gray-200 rounded"></div>
                  <span className="inline-flex items-center px-1.5 py-0.25 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Completed
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-gray-100 rounded w-5/6"></div>
                  <div className="h-2 bg-gray-100 rounded w-4/6"></div>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-gray-100 rounded-full"></div>
                    <div className="h-2 w-12 bg-gray-100 rounded"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-gray-100 rounded-full"></div>
                    <div className="h-2 w-12 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Abandoned Card */}
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <div className="h-2.5 w-40 bg-gray-200 rounded"></div>
                  <span className="inline-flex items-center px-1.5 py-0.25 rounded-full text-[10px] font-medium bg-slate-50 text-slate-700 border border-slate-200">
                    Abandoned
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-gray-100 rounded w-5/6"></div>
                  <div className="h-2 bg-gray-100 rounded w-4/6"></div>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-gray-100 rounded-full"></div>
                    <div className="h-2 w-12 bg-gray-100 rounded"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-gray-100 rounded-full"></div>
                    <div className="h-2 w-12 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GuideSection>

      <GuideSection title="Ticket Status Explained">
        <div className="space-y-6">
          {/* Submitted Stage */}
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-4">Submitted Stage</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-600 border border-amber-200 whitespace-nowrap">
                  New Request
                </span>
                <p className="text-sm text-gray-600">Your ticket has been submitted and is awaiting initial review by our support team. We'll assess your request and begin scoping if needed.</p>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 border border-blue-200 whitespace-nowrap">
                  Ticket Scoping
                </span>
                <p className="text-sm text-gray-600">Our team is analyzing your request to determine the required hours, resources, and approach. We'll provide a detailed scope for your approval.</p>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-600 border border-purple-200 whitespace-nowrap">
                  Awaiting Approval
                </span>
                <p className="text-sm text-gray-600">The scope has been prepared and requires your review and approval before work can begin.</p>
              </div>
            </div>
          </div>

          {/* In Progress Stage */}
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-4">In Progress Stage</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-600 border border-indigo-200 whitespace-nowrap">
                  Scope Approved
                </span>
                <p className="text-sm text-gray-600">You've approved the scope, and the ticket is now queued for implementation. Work will begin according to the agreed timeline.</p>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-600 border border-orange-200 whitespace-nowrap">
                  In Progress
                </span>
                <p className="text-sm text-gray-600">Active work is being performed on your ticket. You'll receive regular updates on progress and any important developments.</p>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-sky-50 text-sky-600 border border-sky-200 whitespace-nowrap">
                  Awaiting Feedback
                </span>
                <p className="text-sm text-gray-600">We've completed the work and need your review to either approve it for completion or request any necessary changes before closing the ticket.</p>
              </div>
            </div>
          </div>

          {/* Closed Stage */}
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-4">Closed Stage</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600 border border-emerald-200 whitespace-nowrap">
                  Completed
                </span>
                <p className="text-sm text-gray-600">The work has been successfully completed and meets all requirements. The ticket is now closed.</p>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-50 text-slate-600 border border-slate-200 whitespace-nowrap">
                  Abandoned
                </span>
                <p className="text-sm text-gray-600">The ticket has been closed without completion, either at your request or due to other circumstances.</p>
              </div>
            </div>
          </div>
        </div>
      </GuideSection>

      <GuideTip>
        Keep an eye on tickets in the "Awaiting Feedback" status - your prompt review helps maintain project momentum and efficient use of support hours.
      </GuideTip>

      <GuideSection title="Best Practices">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-start gap-3 mb-3">
              <svg className="w-5 h-5 text-[#FF4F11] mt-0.5" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Clear Requirements</h4>
                <p className="text-sm text-gray-600">Provide detailed information about your needs, including screenshots and specific examples when possible.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-start gap-3 mb-3">
              <svg className="w-5 h-5 text-[#FF4F11] mt-0.5" viewBox="0 0 24 24" fill="none">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Timely Responses</h4>
                <p className="text-sm text-gray-600">Respond promptly to questions and review requests to keep your projects moving forward efficiently.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-start gap-3 mb-3">
              <svg className="w-5 h-5 text-[#FF4F11] mt-0.5" viewBox="0 0 24 24" fill="none">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Review Thoroughly</h4>
                <p className="text-sm text-gray-600">Take time to test completed work and provide specific feedback if adjustments are needed.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-start gap-3 mb-3">
              <svg className="w-5 h-5 text-[#FF4F11] mt-0.5" viewBox="0 0 24 24" fill="none">
                <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Communicate Changes</h4>
                <p className="text-sm text-gray-600">If your requirements change, let us know early to avoid unnecessary work and optimize hour usage.</p>
              </div>
            </div>
          </div>
        </div>
      </GuideSection>

      <GuideSection title="Inbox & Notifications">
        <div className="space-y-6">
          {/* Overview */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                  <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#1C2B4F] mb-2">Stay Updated with Smart Notifications</h3>
                <p className="text-sm text-[#42526E]">Our notification system keeps your team informed about ticket updates, required actions, and important milestones. Each notification is directly linked to its relevant ticket for quick access and efficient workflow management.</p>
              </div>
            </div>
          </div>

      {/* Benefits */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#FF4F11] mt-0.5" viewBox="0 0 24 24" fill="none">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <div>
                  <h4 className="font-medium text-[#1C2B4F] mb-1">Quick Navigation</h4>
                  <p className="text-sm text-[#42526E]">Direct links to relevant tickets for immediate action and context</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#FF4F11] mt-0.5" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <div>
                  <h4 className="font-medium text-[#1C2B4F] mb-1">Smart Filtering</h4>
                  <p className="text-sm text-[#42526E]">Easily identify and prioritize actions with intelligent categorization</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#FF4F11] mt-0.5" viewBox="0 0 24 24" fill="none">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <div>
                  <h4 className="font-medium text-[#1C2B4F] mb-1">Optimized Workflow</h4>
                  <p className="text-sm text-[#42526E]">Streamlined process for faster turnaround times and better outcomes</p>
                </div>
              </div>
            </div>
          </div>

          <GuideTip>
                  In addition to these notifications, all notifications will also be sent to the relevant team member's email address. Notifications are automatically removed once the action is completed.
          </GuideTip>
          

          {/* Filter Types Explanation */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full bg-[#FF4F11]/10 flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4 className="font-medium text-[#1C2B4F]">Awaiting Response</h4>
              </div>
              <p className="text-sm text-[#42526E]">Tickets that require your team's input, feedback, or review. These are time-sensitive and may block further progress.</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full bg-[#FF4F11]/10 flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4 className="font-medium text-[#1C2B4F]">Awaiting Approval</h4>
              </div>
              <p className="text-sm text-[#42526E]">Tickets with completed scopes or work that need your approval before proceeding. Quick approvals help maintain project momentum.</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full bg-[#FF4F11]/10 flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-medium text-[#1C2B4F]">Status Updates</h4>
              </div>
              <p className="text-sm text-[#42526E]">Important progress updates, milestone completions, and phase transitions. Keep track of your ticket's journey through the workflow.</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full bg-[#FF4F11]/10 flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4 className="font-medium text-[#1C2B4F]">Other</h4>
              </div>
              <p className="text-sm text-[#42526E]">System notifications, maintenance updates, and general announcements about the CRM Support Portal.</p>
            </div>
          </div>

          {/* Example Notifications */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-200">
              <h4 className="text-sm font-medium text-[#1C2B4F]">Example Notifications</h4>
            </div>
            <div className="divide-y divide-gray-100">
              <div className="flex items-center gap-4 p-4 hover:bg-gray-50/50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#1C2B4F] font-medium">Awaiting response on CRM integration</p>
                  <p className="text-xs text-[#42526E] mt-1">Action Required: Review the integration setup and provide feedback to proceed with implementation</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[#FF4F11]">#T-1234</span>
                  <span className="text-[#42526E]">Sarah Chen</span>
                  <span className="text-[#FF4F11]">2 mins ago</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 hover:bg-gray-50/50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#1C2B4F] font-medium">Sales Dashboard setup scope ready</p>
                  <p className="text-xs text-[#42526E] mt-1">Action Required: Review and approve the scope to begin dashboard implementation</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[#FF4F11]">#T-1235</span>
                  <span className="text-[#42526E]">Michael Scott</span>
                  <span className="text-[#FF4F11]">1 hour ago</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 hover:bg-gray-50/50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#1C2B4F] font-medium">Email automation moved to "In Progress"</p>
                  <p className="text-xs text-[#42526E] mt-1">Status Update: Your automation workflow is now in progress - no action required</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[#FF4F11]">#T-1236</span>
                  <span className="text-[#42526E]">Jim Halpert</span>
                  <span className="text-[#FF4F11]">2 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </GuideSection>
    </div>
  )
} 