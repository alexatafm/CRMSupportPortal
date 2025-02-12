"use client"

import { GuideSection, GuideTip, PageTitle } from './shared'

export function AdditionalHours() {
  return (
    <div>
      <PageTitle>Additional Hours</PageTitle>

      <GuideSection title="Overview">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-[#1C2B4F] mb-2">Flexible Support Coverage</h3>
              <p className="text-sm text-[#42526E]">
                The Additional Hours feature allows you to purchase extra support hours when you need them. With flexible term options and volume discounts, you can easily scale your support coverage to match your CRM needs.
              </p>
            </div>
          </div>
        </div>
      </GuideSection>

      <GuideSection title="Service Categories & Rates">
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h4 className="font-medium text-[#1C2B4F]">Strategic Consulting</h4>
              </div>
              <p className="text-sm text-[#42526E] mb-4">Expert guidance on CRM strategy, business process optimization, and system architecture planning.</p>
              <div className="space-y-3 mb-6">
                <h5 className="text-sm font-medium text-[#1C2B4F]">Common Tasks:</h5>
                <ul className="space-y-2 text-sm text-[#42526E]">
                  <li>• CRM strategy development and roadmapping</li>
                  <li>• Business process analysis and optimization</li>
                  <li>• Workflow automation planning</li>
                  <li>• Data structure and architecture consulting</li>
                  <li>• Integration strategy and planning</li>
                  <li>• ROI analysis and recommendations</li>
                  <li>• Change management guidance</li>
                </ul>
              </div>
            </div>
            <div className="mt-auto pt-4 border-t border-gray-100">
              <div className="flex flex-col">
                <p className="text-sm font-medium text-[#FF4F11]">Starting from $247.50/hour</p>
                <p className="text-xs text-[#42526E]">Standard rate $275/hour</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4 className="font-medium text-[#1C2B4F]">CRM Support & Training</h4>
              </div>
              <p className="text-sm text-[#42526E] mb-4">Comprehensive system setup, configuration, and user training to ensure successful CRM adoption.</p>
              <div className="space-y-3 mb-6">
                <h5 className="text-sm font-medium text-[#1C2B4F]">Common Tasks:</h5>
                <ul className="space-y-2 text-sm text-[#42526E]">
                  <li>• Initial CRM setup and configuration</li>
                  <li>• Data import and migration</li>
                  <li>• Custom field and form setup</li>
                  <li>• Automation rule implementation</li>
                  <li>• User role and permission setup</li>
                  <li>• Personalized team training sessions</li>
                  <li>• Documentation and user guides</li>
                  <li>• Custom report development</li>
                  <li>• Ongoing support and troubleshooting</li>
                </ul>
              </div>
            </div>
            <div className="mt-auto pt-4 border-t border-gray-100">
              <div className="flex flex-col">
                <p className="text-sm font-medium text-[#FF4F11]">Starting from $198/hour</p>
                <p className="text-xs text-[#42526E]">Standard rate $220/hour</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                    <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M7 8L11 12L7 16M13 16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-medium text-[#1C2B4F]">CRM Development</h4>
              </div>
              <p className="text-sm text-[#42526E] mb-4">Custom integration setup & maintenance, as well as sales and marketing related asset design & development.</p>
              <div className="space-y-3 mb-6">
                <h5 className="text-sm font-medium text-[#1C2B4F]">Common Tasks:</h5>
                <ul className="space-y-2 text-sm text-[#42526E]">
                  <li>• Custom Quote Template Design</li>
                  <li>• Custom Email Template Design</li>
                  <li>• Blog Listing Page Development</li>
                  <li>• Custom Landing Page Design</li>
                  <li>• API Integration Development</li>
                  <li>• Third-party System Connections</li>
                  <li>• Custom Form Development</li>
                  <li>• Web Tracking Setup</li>
                  <li>• CRM Custom Coded Workflows</li>
                </ul>
              </div>
            </div>
            <div className="mt-auto pt-4 border-t border-gray-100">
              <div className="flex flex-col">
                <p className="text-sm font-medium text-[#FF4F11]">Starting from $162/hour</p>
                <p className="text-xs text-[#42526E]">Standard rate $180/hour</p>
              </div>
            </div>
          </div>
        </div>
      </GuideSection>

      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 mt-4 mb-8">
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none">
              <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <h4 className="font-medium text-blue-900 mb-2">Pricing Note</h4>
            <p className="text-sm text-blue-800">
              The hourly rates shown above include potential discounts based on your current plan term (3, 6, or 12 months). These discounts are automatically applied to your account based on your current plan.
            </p>
          </div>
        </div>
      </div>

      <GuideSection title="Term Options & Discounts">
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-[#1C2B4F] mb-2">3 Month Term</h4>
                <ul className="space-y-2 text-sm text-[#42526E]">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Standard rates apply
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Flexible commitment
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Ideal for short-term projects
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-[#1C2B4F] mb-2">6 Month Term</h4>
                <ul className="space-y-2 text-sm text-[#42526E]">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    5% discount on all services
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Medium-term commitment
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Better value for ongoing support
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                  <path d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-[#1C2B4F] mb-2">12 Month Term</h4>
                <ul className="space-y-2 text-sm text-[#42526E]">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    10% discount on all services
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Long-term commitment
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Best value for sustained support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </GuideSection>

      <GuideSection title="How to Purchase">
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#1C2B4F] mb-2">Purchasing Process</h3>
                <ul className="space-y-2 text-sm text-[#42526E]">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Select your preferred term length (3, 6, or 12 months)
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Use the sliders to allocate hours across service categories
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Review the total cost with applied discounts
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Click "Purchase Hours" to complete your order
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                  <path d="M9 17v1a3 3 0 106 0v-1m-6 0a3 3 0 003-3V7m0 10a3 3 0 003-3V7m-6 10h6m-6-3v-7a3 3 0 016 0v7m-6 0h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#1C2B4F] mb-2">Hour Management</h3>
                <ul className="space-y-2 text-sm text-[#42526E]">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Hours are available immediately after purchase
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Track usage through the dashboard
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Receive notifications when hours are running low
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Purchase additional hours at any time
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none">
                  <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-blue-900 mb-2">Important Note</h4>
                <p className="text-sm text-blue-800">
                  Purchased hours are valid for the duration of your selected term. While you can purchase additional hours at any time, we recommend monitoring your usage to ensure continuous support coverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </GuideSection>
    </div>
  )
} 