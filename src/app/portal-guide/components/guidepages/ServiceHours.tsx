import { GuideSection, GuideTip, PageTitle } from './shared'

export function ServiceHours() {
  return (
    <div>
      <PageTitle>Service Hours</PageTitle>

      <GuideSection title="Understanding Support Hours">
        <div className="space-y-6">
          {/* Hours Overview */}

          {/* Service Roles */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Service Roles</h3>
            <div className="grid grid-cols-3 gap-6">
              {/* Strategic Consulting */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-900">Strategic Consulting</h4>
                </div>
                <p className="text-sm text-gray-600 mb-4">Expert guidance on CRM strategy, business process optimization, and system architecture planning.</p>
                <div className="space-y-3">
                  <h5 className="text-sm font-medium text-gray-900">Common Tasks:</h5>
                  <ul className="space-y-2">
                    {[
                      'CRM strategy development and roadmapping',
                      'Business process analysis and optimization',
                      'Workflow automation planning',
                      'Data structure and architecture consulting',
                      'Integration strategy and planning',
                      'ROI analysis and recommendations',
                      'Change management guidance'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-[#FF4F11] mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CRM Support & Training */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-900">CRM Support & Training</h4>
                </div>
                <p className="text-sm text-gray-600 mb-4">Comprehensive system setup, configuration, and user training to ensure successful CRM adoption.</p>
                <div className="space-y-3">
                  <h5 className="text-sm font-medium text-gray-900">Common Tasks:</h5>
                  <ul className="space-y-2">
                    {[
                      'Initial CRM setup and configuration',
                      'Data import and migration',
                      'Custom field and form setup',
                      'Automation rule implementation',
                      'User role and permission setup',
                      'Personalized team training sessions',
                      'Documentation and user guides',
                      'Custom report development',
                      'Ongoing support and troubleshooting'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-[#FF4F11] mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CRM Development */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                      <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M7 8L11 12L7 16M13 16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-900">CRM Development</h4>
                </div>
                <p className="text-sm text-gray-600 mb-4">Custom integration setup & maintenance, as well as sales and marketing related asset design & development.</p>
                <div className="space-y-3">
                  <h5 className="text-sm font-medium text-gray-900">Common Tasks:</h5>
                  <ul className="space-y-2">
                    {[
                      'Custom Quote Template Design',
                      'Custom Email Template Design',
                      'Blog Listing Page Development',
                      'Custom Landing Page Design',
                      'API Integration Development',
                      'Third-party System Connections',
                      'Custom Form Development',
                      'Web Tracking Setup',
                      'CRM Custom Coded Workflows'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-[#FF4F11] mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Hour Management */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Hour Management</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Hour Rollover Rules</h4>
                <ul className="space-y-2">
                  {[
                    'Unused hours automatically roll over to next month',
                    'Rollover hours expire at the end of the next month',
                    'Rollover hours are used before current month hours',
                    'Each service role tracks its own rollover hours',
                    'Monthly usage reports show rollover status'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[#FF4F11] mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Hour Borrowing Rules</h4>
                <ul className="space-y-2">
                  {[
                    'Can only borrow from the next month',
                    'Borrowed hours are deducted from next month',
                    'Cannot borrow from months beyond next month',
                    'Available for any service role',
                    'No additional fees for borrowing'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[#FF4F11] mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Hour Usage Examples */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Hour Usage Example</h3>
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-6">
                <h4 className="font-medium text-gray-900 mb-3">3-Month Timeline Example</h4>
                <div className="grid grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="mb-3">
                      <span className="text-sm font-medium text-gray-900">January</span>
                      <p className="text-xs text-gray-600 mt-1">Current Month</p>
                    </div>
                    <div className="space-y-4">
                      {/* Strategic Consulting */}
                      <div className="pb-3 border-b border-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                            <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                            <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          <span className="text-xs font-medium text-gray-900">Strategic Consulting</span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Monthly Hours:</span>
                            <span className="font-medium text-gray-900">6h</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Used Hours:</span>
                            <span className="font-medium text-gray-900">4h</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Unused Hours:</span>
                            <span className="font-medium text-[#FF4F11]">2h rolls over →</span>
                          </div>
                        </div>
                      </div>

                      {/* CRM Support & Training */}
                      <div className="pb-3 border-b border-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                          <span className="text-xs font-medium text-gray-900">CRM Support & Training</span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Monthly Hours:</span>
                            <span className="font-medium text-gray-900">20h</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Used Hours:</span>
                            <span className="font-medium text-gray-900">15h</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Unused Hours:</span>
                            <span className="font-medium text-[#FF4F11]">5h rolls over →</span>
                          </div>
                        </div>
                      </div>

                      {/* CRM Development */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                            <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z" stroke="currentColor" strokeWidth="2"/>
                            <path d="M7 8L11 12L7 16M13 16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span className="text-xs font-medium text-gray-900">CRM Development</span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Monthly Hours:</span>
                            <span className="font-medium text-gray-900">7h</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Used Hours:</span>
                            <span className="font-medium text-gray-900">7h</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Unused Hours:</span>
                            <span className="font-medium text-gray-500">0h</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="mb-3">
                      <span className="text-sm font-medium text-gray-900">February</span>
                      <p className="text-xs text-gray-600 mt-1">Next Month</p>
                    </div>
                    <div className="space-y-4">
                      {/* Strategic Consulting */}
                      <div className="pb-3 border-b border-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                            <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                            <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          <span className="text-xs font-medium text-gray-900">Strategic Consulting</span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Rollover Hours:</span>
                            <span className="font-medium text-[#FF4F11]">2h from Jan</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Monthly Hours:</span>
                            <span className="font-medium text-gray-900">6h</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Total Available:</span>
                            <span className="font-medium text-gray-900">8h</span>
                          </div>
                        </div>
                      </div>

                      {/* CRM Support & Training */}
                      <div className="pb-3 border-b border-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                          <span className="text-xs font-medium text-gray-900">CRM Support & Training</span>
                        </div>
                        <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Rollover Hours:</span>
                            <span className="font-medium text-[#FF4F11]">5h from Jan</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Monthly Hours:</span>
                            <span className="font-medium text-gray-900">20h</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Available Hours:</span>
                            <span className="font-medium text-gray-900">25h</span>
                          </div>
                        </div>
                      </div>

                      {/* CRM Development */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                            <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z" stroke="currentColor" strokeWidth="2"/>
                            <path d="M7 8L11 12L7 16M13 16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span className="text-xs font-medium text-gray-900">CRM Development</span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Monthly Hours:</span>
                            <span className="font-medium text-gray-900">7h</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Pre-borrowed:</span>
                            <span className="font-medium text-orange-500">-3h</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Available Hours:</span>
                            <span className="font-medium text-gray-900">4h</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="mb-3">
                      <span className="text-sm font-medium text-gray-900">March</span>
                      <p className="text-xs text-gray-600 mt-1">Future Month</p>
                    </div>
                    <div className="space-y-4">
                      {/* Strategic Consulting */}
                      <div className="pb-3 border-b border-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                            <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                            <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          <span className="text-xs font-medium text-gray-900">Strategic Consulting</span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Jan Rollover:</span>
                            <span className="font-medium text-red-500">Expired</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Monthly Hours:</span>
                            <span className="font-medium text-gray-900">6h</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Available Hours:</span>
                            <span className="font-medium text-gray-900">6h</span>
                          </div>
                        </div>
                      </div>

                      {/* CRM Support & Training */}
                      <div className="pb-3 border-b border-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                          <span className="text-xs font-medium text-gray-900">CRM Support & Training</span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Jan Rollover:</span>
                            <span className="font-medium text-red-500">Expired</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Monthly Hours:</span>
                            <span className="font-medium text-gray-900">20h</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Available Hours:</span>
                            <span className="font-medium text-gray-900">20h</span>
                          </div>
                        </div>
                      </div>

                      {/* CRM Development */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                            <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z" stroke="currentColor" strokeWidth="2"/>
                            <path d="M7 8L11 12L7 16M13 16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span className="text-xs font-medium text-gray-900">CRM Development</span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Monthly Hours:</span>
                            <span className="font-medium text-gray-900">7h</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Pre-borrowed:</span>
                            <span className="font-medium text-orange-500">-3h</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Available Hours:</span>
                            <span className="font-medium text-gray-900">4h</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                  <div className="flex gap-2">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none">
                      <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="text-sm text-blue-800">
                      This example shows two different scenarios: (1) Both Strategic Consulting and CRM Support & Training have unused hours rolling over to February (2h and 5h respectively), which expire in March, and (2) CRM Development borrowed 3h from March to complete urgent work in February, reducing March's available hours to 4h. Remember that rollover hours must be used in the immediate following month or they'll expire. For using hours in advance, you can only borrow from the immediate next month.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits of Hour Management */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Understanding Our Hour Management Approach</h3>
            
            {/* Value Proposition */}
            <div className="mb-6">
              <p className="text-sm text-gray-600">
                Our hour management policy is designed to give you maximum flexibility while ensuring you always have access to our dedicated support team when you need them most.
              </p>
            </div>

            {/* Main Benefits Grid */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-900">What You Get</h4>
                </div>
                <ul className="space-y-2">
                  {[
                    'Roll over unused hours to next month',
                    'Borrow from next month for urgent work',
                    'No fees for rollovers or borrowing',
                    'Track hours by service role',
                    'Monthly usage reports'
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[#FF4F11] mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                      <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-900">How It Helps You</h4>
                </div>
                <ul className="space-y-2">
                  {[
                    'Use next month\'s hours for a larger task this month',
                    'Handle urgent needs without delays',
                    'Maintain consistent support quality',
                    'Guaranteed resource availability',
                    'Predictable monthly planning'
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[#FF4F11] mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Why This Works */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-blue-900 mb-2">Why This Approach Works Best</h4>
                  <p className="text-sm text-blue-800">
                    By limiting rollovers to one month and borrowing to the next month only, we maintain a dedicated team that's always available when you need them. This ensures you get consistent, high-quality support while having the flexibility to manage your hours effectively. Think of it like a restaurant reservation system - it helps us guarantee your table (our support team) will be ready when you need it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GuideSection>
    </div>
  )
}