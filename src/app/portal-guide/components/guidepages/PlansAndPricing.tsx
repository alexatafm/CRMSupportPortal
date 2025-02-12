import { GuideSection, PageTitle } from './shared'

export function PlansAndPricing() {
  return (
    <div>
      <PageTitle>Plans & Pricing</PageTitle>

      {/* Billing Cycle Section */}
      <GuideSection title="Billing & Usage Cycles">
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">30-Day Billing Cycle</h3>
              <p className="text-sm text-gray-600">Your billing cycle starts on the day you activate your plan and renews every 30 days. For example, if you start on March 5th, your next billing and hour reset date will be April 4th.</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <h4 className="font-medium text-gray-900">Cycle Start</h4>
              </div>
              <p className="text-sm text-gray-600">Hours are allocated on your start date</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h4 className="font-medium text-gray-900">30-Day Period</h4>
              </div>
              <p className="text-sm text-gray-600">Consistent 30-day cycles for billing and hours</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <h4 className="font-medium text-gray-900">Auto-Renewal</h4>
              </div>
              <p className="text-sm text-gray-600">Hours automatically reset every 30 days</p>
            </div>
          </div>
        </div>
      </GuideSection>

      <GuideSection title="Available Plans">
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Basic Plan */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Basic</h3>
              <div className="text-[#FF4F11] font-medium flex items-baseline"><span className="text-gray-500 text-sm mr-1">From</span> $2,862/mo</div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <span className="text-gray-900 font-medium">5 User Limit</span>
                  <p className="text-sm text-gray-500 mt-1">Suitable for small teams</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <span className="text-gray-900 font-medium">Monthly WIP Meeting</span>
                  <p className="text-sm text-gray-500 mt-1">Track progress and plan ahead</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <span className="text-gray-900 font-medium">Task Catalogue</span>
                  <p className="text-sm text-gray-500 mt-1">Browse and request support tasks</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-gray-400" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <span className="text-gray-400">Knowledge Base</span>
                  <p className="text-sm text-gray-400 mt-1">Not available in Basic plan</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-gray-400" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <span className="text-gray-400">Priority Support</span>
                  <p className="text-sm text-gray-400 mt-1">Not available in Basic plan</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <span className="text-gray-900 font-medium">Support Hours</span>
                  <p className="text-sm text-gray-500 mt-1">12h CRM Support & Training</p>
                  <p className="text-sm text-gray-500">3h CRM Development</p>
                  <p className="text-sm text-gray-500">0h Strategic Consulting</p>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                Perfect for businesses getting started with CRM, needing basic setup and occasional support.
              </p>
            </div>
          </div>

          {/* Advanced Plan */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Advanced</h3>
              <div className="text-[#FF4F11] font-medium flex items-baseline"><span className="text-gray-500 text-sm mr-1">From</span> $4,721/mo</div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <span className="text-gray-900 font-medium">10 User Limit</span>
                  <p className="text-sm text-gray-500 mt-1">Great for growing teams</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <span className="text-gray-900 font-medium">Monthly WIP Meeting</span>
                  <p className="text-sm text-gray-500 mt-1">Strategic planning and review</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <span className="text-gray-900 font-medium">Task Catalogue</span>
                  <p className="text-sm text-gray-500 mt-1">Browse and request support tasks</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <span className="text-gray-900 font-medium">Knowledge Base</span>
                  <p className="text-sm text-gray-500 mt-1">Access best practices and guides</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-gray-400" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <span className="text-gray-400">Priority Support</span>
                  <p className="text-sm text-gray-400 mt-1">Not available in Advanced plan</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <span className="text-gray-900 font-medium">Support Hours</span>
                  <p className="text-sm text-gray-500 mt-1">16h CRM Support & Training</p>
                  <p className="text-sm text-gray-500">5h CRM Development</p>
                  <p className="text-sm text-gray-500">3h Strategic Consulting</p>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                Ideal for businesses actively using CRM, needing regular support and optimization.
              </p>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Premium</h3>
              <div className="text-[#FF4F11] font-medium flex items-baseline"><span className="text-gray-500 text-sm mr-1">From</span> $6,579/mo</div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <span className="text-gray-900 font-medium">Unlimited Users</span>
                  <p className="text-sm text-gray-500 mt-1">Perfect for larger organizations</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <span className="text-gray-900 font-medium">Monthly WIP Meeting</span>
                  <p className="text-sm text-gray-500 mt-1">Comprehensive strategy sessions</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <span className="text-gray-900 font-medium">Task Catalogue</span>
                  <p className="text-sm text-gray-500 mt-1">Browse and request support tasks</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <span className="text-gray-900 font-medium">Knowledge Base</span>
                  <p className="text-sm text-gray-500 mt-1">Access best practices and guides</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <span className="text-gray-900 font-medium">Priority Support</span>
                  <p className="text-sm text-gray-500 mt-1">Dedicated Priority Ticket Queue</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <span className="text-gray-900 font-medium">Support Hours</span>
                  <p className="text-sm text-gray-500 mt-1">20h CRM Support & Training</p>
                  <p className="text-sm text-gray-500">7h CRM Development</p>
                  <p className="text-sm text-gray-500">6h Strategic Consulting</p>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                Best for businesses fully committed to CRM success, needing comprehensive support and strategic guidance.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg mb-12">
          <svg className="w-5 h-5 text-blue-600 shrink-0" viewBox="0 0 24 24" fill="none">
            <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <p className="text-sm text-blue-800">Contact our sales team for detailed pricing information and custom enterprise solutions.</p>
        </div>
      </GuideSection>

      <GuideSection title="Term Length & Discounts">
        <div className="grid grid-cols-3 gap-6">
          {/* 3 Month Term */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">3 Month Term</h3>
              <span className="text-gray-600 font-medium">Standard Rate</span>
            </div>
            <p className="text-sm text-gray-600">Monthly billing with 3-month minimum commitment. Perfect for trying out our services.</p>
          </div>

          {/* 6 Month Term */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">6 Month Term</h3>
              <span className="text-[#FF4F11] font-medium">5% Off</span>
            </div>
            <p className="text-sm text-gray-600">Monthly billing with 6-month commitment. Includes 5% discount on all plans.</p>
          </div>

          {/* 12 Month Term */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">12 Month Term</h3>
              <span className="text-[#FF4F11] font-medium">10% Off</span>
            </div>
            <p className="text-sm text-gray-600">Monthly billing with 12-month commitment. Best value with 10% discount on all plans.</p>
          </div>
        </div>
      </GuideSection>

      <GuideSection title="Contract Terms & Payment Policies">
        <div className="space-y-6">
          {/* Early Cancellation */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                  <path d="M9 7h6m0 10v-3m-3 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Early Cancellation Policy</h3>
                <div className="prose prose-sm text-gray-600">
                  <p className="mb-4">
                    Our pricing model is based on term commitment lengths, offering significant discounts for longer terms. To maintain fair pricing for all clients, the following conditions apply:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-medium text-gray-900 mb-2">Contract Duration</p>
                    <p className="text-gray-600 mb-4">All contract terms (3, 6, or 12 months) must be honored for their agreed duration to maintain the applied discounts and service continuity.</p>
                    
                    <p className="font-medium text-gray-900 mb-2">Early Termination Fee</p>
                    <p className="text-gray-600">If early cancellation is required, the difference between the standard rate and the discounted rate will be charged for the previously billed months.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Terms & Account Status */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-[#FF4F11]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#FF4F11]" viewBox="0 0 24 24" fill="none">
                  <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Payment Terms & Account Status</h3>
                <div className="prose prose-sm text-gray-600">
                  <p className="mb-4">
                    To ensure continuous service delivery and maintain active account status, please review our payment process:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-4">
                    <div>
                      <p className="font-medium text-gray-900 mb-2">Payment Schedule</p>
                      <div className="pl-4 border-l-2 border-gray-200">
                        <p className="text-gray-600 mb-2">• Initial payment attempt on scheduled billing date</p>
                        <p className="text-gray-600 mb-2">• Second attempt after 2 business days</p>
                        <p className="text-gray-600">• Final attempt 5 business days after initial attempt</p>
                      </div>
                    </div>

                    <div>
                      <p className="font-medium text-gray-900 mb-2">Late Payment Fee</p>
                      <p className="text-gray-600">A 5% late payment fee will be applied after two failed payment attempts.</p>
                    </div>

                    <div>
                      <p className="font-medium text-gray-900 mb-2">Account Access</p>
                      <div className="bg-amber-50 p-4 rounded-lg flex gap-3">
                        <svg className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none">
                          <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p className="text-sm text-amber-800">
                          After two failed payment attempts, your CRM Support Portal account and task progression will be temporarily frozen until the outstanding amount and late fee are paid.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GuideSection>
    </div>
  )
}