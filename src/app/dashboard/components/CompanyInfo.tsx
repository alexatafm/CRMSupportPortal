import { Card, CardContent } from "@/components/ui/card"

export function CompanyInfo() {
  return (
    <Card className="h-full">
      <CardContent className="p-4">
        <div className="flex flex-col h-full">
          <h2 className="text-lg font-semibold text-[#1C2B4F] mb-4">Company Information</h2>

          <div className="space-y-3 text-sm">
            <div>
              <div className="text-[#42526E] mb-0.5">Company Name</div>
              <div className="font-medium text-[#1C2B4F]">Dunder Mifflin Paper Company</div>
            </div>

            <div>
              <div className="text-[#42526E] mb-0.5">Plan Type</div>
              <div className="font-medium text-[#1C2B4F]">Premium</div>
            </div>

            <div>
              <div className="text-[#42526E] mb-0.5">Contract Type</div>
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#42526E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <path d="M16 2v4M8 2v4M3 10h18"/>
                </svg>
                <span className="font-medium text-[#1C2B4F]">12-Month Contract</span>
              </div>
            </div>

            <div>
              <div className="text-[#42526E] mb-0.5">Reset Date</div>
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#42526E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 4"/>
                </svg>
                <span className="font-medium text-[#1C2B4F]">23/01/2025</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 