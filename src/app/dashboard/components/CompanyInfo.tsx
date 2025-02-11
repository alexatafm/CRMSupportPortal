import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CompanyInfo() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <CardTitle>Company Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground">Company Name</h3>
          <p className="text-base">Dunder Mifflin Paper Company</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-muted-foreground">Plan Start Date</h3>
          <p className="text-base">23/12/2024</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-muted-foreground">Plan Usage Reset Date</h3>
          <p className="text-base">23/01/2025</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-muted-foreground">Engagement Term</h3>
          <p className="text-base">12-Month Contract</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-muted-foreground">Engagement Type</h3>
          <p className="text-base">Premium</p>
        </div>
      </CardContent>
    </Card>
  )
} 