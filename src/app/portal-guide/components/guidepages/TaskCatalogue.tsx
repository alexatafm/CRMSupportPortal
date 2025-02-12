"use client"

import { GuideSection, GuideTip, PageTitle } from './shared'

export function TaskCatalogue() {
  return (
    <div>
      <PageTitle>Task Catalogue</PageTitle>

      <GuideSection title="Overview">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-[#1C2B4F] mb-2">Maximize Your Support Hours</h3>
              <p className="text-sm text-[#42526E]">
                The Task Catalogue helps you make the most of your support hours by providing pre-configured tasks and improvement opportunities for your CRM environment. Monitor your current hour usage, discover new ways to enhance your system, and ensure you're getting maximum value from your CRM investment.
              </p>
            </div>
          </div>
        </div>
      </GuideSection>

      <GuideSection title="Understanding Task Cards">
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                  <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zM5 20a1 1 0 01-1-1v-2a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#1C2B4F] mb-4">Example Task Card</h3>
                
                <div className="grid grid-cols-[400px_300px_300px] gap-6">
                  {/* Example Task Card */}
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3 mb-2.5">
                        <h3 className="font-medium text-[#1C2B4F] text-sm line-clamp-2 leading-snug">Sales Pipeline Optimization</h3>
                        <div className="flex items-center gap-1 shrink-0">
                          <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-red-50 text-red-600">
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                              <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                              <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                            <span className="text-[11px] font-medium">4h</span>
                          </div>
                          <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-blue-50 text-blue-600">
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            <span className="text-[11px] font-medium">2h</span>
                          </div>
                          <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-blue-50 text-blue-600">
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                              <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z" stroke="currentColor" strokeWidth="2"/>
                              <path d="M7 8L11 12L7 16M13 16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="text-[11px] font-medium">1h</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-[#42526E] leading-relaxed mb-3">Optimize your sales pipeline with custom stages, automated workflows, and improved tracking mechanisms.</p>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="px-2 py-0.5 text-[11px] rounded bg-gray-100 text-gray-600 font-medium">Sales</span>
                        <span className="px-2 py-0.5 text-[11px] rounded bg-gray-100 text-gray-600 font-medium">Automation</span>
                      </div>
                    </div>
                  </div>

                  {/* Role Icons */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-[#1C2B4F]">Role Icons</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                        <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                            <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                            <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        </div>
                        <p className="font-medium text-[#1C2B4F] text-sm">Strategic Consulting</p>
                      </div>

                      <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                        <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </div>
                        <p className="font-medium text-[#1C2B4F] text-sm">CRM Support & Training</p>
                      </div>

                      <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                        <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                            <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z" stroke="currentColor" strokeWidth="2"/>
                            <path d="M7 8L11 12L7 16M13 16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <p className="font-medium text-[#1C2B4F] text-sm">CRM Development</p>
                      </div>
                    </div>
                  </div>

                  {/* Hour Badge Colors */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-[#1C2B4F]">Hour Badge Colors</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 bg-red-50 rounded-lg p-3">
                        <div className="flex items-center gap-1 px-2 py-1 rounded bg-red-100/80 text-red-600">
                          <span className="text-sm font-medium">4h</span>
                        </div>
                        <div>
                          <p className="font-medium text-red-900 text-sm">Insufficient Hours</p>
                          <p className="text-xs text-red-700">Additional hours needed</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 bg-blue-50 rounded-lg p-3">
                        <div className="flex items-center gap-1 px-2 py-1 rounded bg-blue-100/80 text-blue-600">
                          <span className="text-sm font-medium">2h</span>
                        </div>
                        <div>
                          <p className="font-medium text-blue-900 text-sm">Sufficient Hours</p>
                          <p className="text-xs text-blue-700">Hours available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GuideSection>

      <GuideSection title="Key Features">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                  <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-[#1C2B4F] mb-2">Smart Filtering</h4>
                <p className="text-sm text-[#42526E]">Filter tasks based on your available hours for each role. Quickly identify tasks that match your current hour allocation and find opportunities that fit your schedule.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                  <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-[#1C2B4F] mb-2">Task Discovery</h4>
                <p className="text-sm text-[#42526E]">Explore pre-configured tasks designed to enhance your CRM environment. Get inspiration for future improvements and ensure you're maximizing your system's potential.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-[#1C2B4F] mb-2">Hour Management</h4>
                <p className="text-sm text-[#42526E]">Track your remaining hours for each role and plan tasks accordingly. The system helps you optimize hour usage before the end of your billing period.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-[#1C2B4F] mb-2">Detailed Task Information</h4>
                <p className="text-sm text-[#42526E]">Click any task card to view comprehensive details, objectives, and expected outcomes in a side panel. Easily understand the value and requirements of each task.</p>
              </div>
            </div>
          </div>
        </div>
      </GuideSection>

      <GuideSection title="Managing Hours">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-[#1C2B4F] mb-3">Flexible Hour Solutions</h3>
              <p className="text-sm text-[#42526E] mb-4">
                When viewing task details, you have multiple options if you don't have sufficient hours:
              </p>
              <ul className="space-y-2 text-sm text-[#42526E]">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Purchase additional hours directly from the task details panel
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Borrow hours from your upcoming month's allocation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </GuideSection>

      <GuideTip>
        Regularly review the Task Catalogue to discover new opportunities for improving your CRM environment and ensure you're making the most of your support hours before they reset or expire.
      </GuideTip>
    </div>
  )
} 