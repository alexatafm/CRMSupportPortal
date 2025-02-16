import { type TicketStatus, type TimelineEvent, type RoleHours } from '../components/TicketCardModal'

export interface MockTicket {
  id: string
  title: string
  ticketNumber: string
  createdBy: string
  created: string
  description: string
  supportingFiles?: string[]
  supportArea: string[]
  supportCategory: string[]
  primaryOutcomeObjectives: string
  status: TicketStatus
  scopedHours?: RoleHours
  availableHours?: RoleHours
  approvedBy?: string
  approvalDate?: string
  completionDate?: string
}

export const mockTimelineEvents: TimelineEvent[] = [
  // New Request Timeline
  {
    type: "created",
    timestamp: "Jan 6, 2025, 07:21 AEST",
    user: "Robert Johnson",
    content: "Develop comprehensive training program for new sales team members",
    files: ["training_requirements.pdf", "team_structure.docx"]
  },

  // Ticket Scoping Timeline
  {
    type: "created",
    timestamp: "Jan 5, 2025, 14:30 AEST",
    user: "Emily Parker",
    content: "Implement automated deal stage progression and task creation in sales pipeline",
    files: ["current_pipeline.pdf", "automation_requirements.docx"]
  },
  {
    type: "status_change",
    timestamp: "Jan 5, 2025, 15:00 AEST",
    user: "System",
    status: "Ticket Scoping"
  },
  {
    type: "reply",
    timestamp: "Jan 5, 2025, 15:15 AEST",
    user: "Sarah Thompson (Fileroom)",
    content: "I'll begin scoping this request and prepare the required hours allocation."
  },

  // Awaiting Approval Timeline
  {
    type: "created",
    timestamp: "Jan 4, 2025, 09:15 AEST",
    user: "Michael Chang",
    content: "Setup and integrate marketing automation workflows with existing CRM processes",
    files: ["campaign_brief.pdf", "integration_points.xlsx"]
  },
  {
    type: "status_change",
    timestamp: "Jan 4, 2025, 09:45 AEST",
    user: "System",
    status: "Ticket Scoping"
  },
  {
    type: "reply",
    timestamp: "Jan 4, 2025, 10:00 AEST",
    user: "Sarah Thompson (Fileroom)",
    content: "I'll begin working on the scope for your marketing automation integration request."
  },
  {
    type: "status_change",
    timestamp: "Jan 4, 2025, 14:30 AEST",
    user: "System",
    status: "Awaiting Approval"
  },
  {
    type: "reply",
    timestamp: "Jan 4, 2025, 14:35 AEST",
    user: "Sarah Thompson (Fileroom)",
    content: "I've completed the scoping. Please review the allocated hours and approve if you're satisfied with the scope.",
    files: ["scope_document.pdf", "implementation_plan.pdf"]
  },

  // In Progress Timeline
  {
    type: "created",
    timestamp: "Jan 3, 2025, 11:45 AEST",
    user: "Sarah Wilson",
    content: "Create custom dashboard for customer service team with key metrics and KPIs",
    files: ["dashboard_requirements.pdf", "metric_definitions.xlsx"]
  },
  {
    type: "status_change",
    timestamp: "Jan 3, 2025, 13:00 AEST",
    user: "System",
    status: "Ticket Scoping"
  },
  {
    type: "reply",
    timestamp: "Jan 3, 2025, 13:15 AEST",
    user: "Sarah Thompson (Fileroom)",
    content: "I'll begin scoping the dashboard development work."
  },
  {
    type: "status_change",
    timestamp: "Jan 4, 2025, 10:30 AEST",
    user: "System",
    status: "Awaiting Approval"
  },
  {
    type: "reply",
    timestamp: "Jan 4, 2025, 10:35 AEST",
    user: "Sarah Thompson (Fileroom)",
    content: "Scope is ready for your review. Please check the allocated hours and approve to proceed."
  },
  {
    type: "status_change",
    timestamp: "Jan 4, 2025, 15:30 AEST",
    user: "System",
    status: "In Progress"
  },
  {
    type: "reply",
    timestamp: "Jan 4, 2025, 15:35 AEST",
    user: "David Miller",
    content: "Approved. Please proceed with the implementation."
  },

  // Awaiting Feedback Timeline
  {
    type: "created",
    timestamp: "Jan 2, 2025, 13:20 AEST",
    user: "Jennifer Lee",
    content: "Implement lead scoring system based on website activity and email engagement",
    files: ["scoring_criteria.pdf", "implementation_guide.docx"]
  },
  {
    type: "status_change",
    timestamp: "Jan 2, 2025, 14:00 AEST",
    user: "System",
    status: "Ticket Scoping"
  },
  {
    type: "status_change",
    timestamp: "Jan 3, 2025, 09:30 AEST",
    user: "System",
    status: "Awaiting Approval"
  },
  {
    type: "status_change",
    timestamp: "Jan 3, 2025, 09:45 AEST",
    user: "System",
    status: "In Progress"
  },
  {
    type: "status_change",
    timestamp: "Jan 5, 2025, 16:30 AEST",
    user: "System",
    status: "Awaiting Feedback"
  },
  {
    type: "reply",
    timestamp: "Jan 5, 2025, 16:35 AEST",
    user: "Sarah Thompson (Fileroom)",
    content: "Implementation is complete. Please review and provide feedback or approve for closure."
  },

  // Completed Timeline
  {
    type: "created",
    timestamp: "Jan 1, 2025, 10:00 AEST",
    user: "Rachel Green",
    content: "Migrate existing email templates to new brand guidelines and implement A/B testing",
    files: ["brand_guidelines.pdf", "template_inventory.xlsx"]
  },
  {
    type: "status_change",
    timestamp: "Jan 1, 2025, 11:00 AEST",
    user: "System",
    status: "Ticket Scoping"
  },
  {
    type: "status_change",
    timestamp: "Jan 2, 2025, 10:30 AEST",
    user: "System",
    status: "Awaiting Approval"
  },
  {
    type: "status_change",
    timestamp: "Jan 2, 2025, 11:15 AEST",
    user: "System",
    status: "In Progress"
  },
  {
    type: "status_change",
    timestamp: "Jan 5, 2025, 15:30 AEST",
    user: "System",
    status: "Awaiting Feedback"
  },
  {
    type: "status_change",
    timestamp: "Jan 5, 2025, 16:45 AEST",
    user: "System",
    status: "Completed"
  },
  {
    type: "reply",
    timestamp: "Jan 5, 2025, 16:50 AEST",
    user: "Mark Thompson",
    content: "All work has been completed and verified. Closing ticket."
  }
]

export const mockTickets: Record<TicketStatus, MockTicket> = {
  "New Request": {
    id: "new-1",
    title: "CRM Training Program Setup",
    ticketNumber: "18633083995",
    createdBy: "Robert Johnson",
    created: "Jan 6, 2025, 07:21 AEST",
    description: "Develop comprehensive training program for new sales team members",
    supportingFiles: ["training_requirements.pdf", "team_structure.docx"],
    supportArea: ["sales hub", "service hub"],
    supportCategory: ["training", "documentation"],
    primaryOutcomeObjectives: "Create standardized onboarding process",
    status: "New Request"
  },

  "Ticket Scoping": {
    id: "scoping-1",
    title: "Sales Pipeline Automation Setup",
    ticketNumber: "18633083996",
    createdBy: "Emily Parker",
    created: "Jan 5, 2025, 14:30 AEST",
    description: "Implement automated deal stage progression and task creation in sales pipeline",
    supportingFiles: ["current_pipeline.pdf", "automation_requirements.docx"],
    supportArea: ["sales hub"],
    supportCategory: ["automation", "workflow"],
    primaryOutcomeObjectives: "Streamline sales process and reduce manual task creation",
    status: "Ticket Scoping"
  },

  "Awaiting Approval": {
    id: "approval-1",
    title: "Marketing Campaign Integration",
    ticketNumber: "18633083997",
    createdBy: "Michael Chang",
    created: "Jan 4, 2025, 09:15 AEST",
    description: "Setup and integrate marketing automation workflows with existing CRM processes",
    supportingFiles: ["campaign_brief.pdf", "integration_points.xlsx"],
    supportArea: ["marketing hub", "sales hub"],
    supportCategory: ["integration", "automation"],
    primaryOutcomeObjectives: "Create seamless marketing to sales handoff process",
    status: "Awaiting Approval",
    scopedHours: {
      strategic: 5,
      setup: 8,
      integration: 12
    },
    availableHours: {
      strategic: 3,
      setup: 10,
      integration: 8
    }
  },

  "In Progress": {
    id: "progress-1",
    title: "Customer Service Dashboard Development",
    ticketNumber: "18633083998",
    createdBy: "Sarah Wilson",
    created: "Jan 3, 2025, 11:45 AEST",
    description: "Create custom dashboard for customer service team with key metrics and KPIs",
    supportingFiles: ["dashboard_requirements.pdf", "metric_definitions.xlsx"],
    supportArea: ["service hub"],
    supportCategory: ["reporting", "customization"],
    primaryOutcomeObjectives: "Improve service team visibility and performance tracking",
    status: "In Progress",
    scopedHours: {
      strategic: 3,
      setup: 6,
      integration: 8
    },
    approvedBy: "David Miller",
    approvalDate: "Jan 4, 2025, 15:30 AEST"
  },

  "Awaiting Feedback": {
    id: "feedback-1",
    title: "Lead Scoring Implementation",
    ticketNumber: "18633083999",
    createdBy: "Jennifer Lee",
    created: "Jan 2, 2025, 13:20 AEST",
    description: "Implement lead scoring system based on website activity and email engagement",
    supportingFiles: ["scoring_criteria.pdf", "implementation_guide.docx"],
    supportArea: ["marketing hub", "sales hub"],
    supportCategory: ["automation", "scoring"],
    primaryOutcomeObjectives: "Improve lead qualification and prioritization",
    status: "Awaiting Feedback",
    scopedHours: {
      strategic: 4,
      setup: 7,
      integration: 5
    },
    approvedBy: "Thomas Anderson",
    approvalDate: "Jan 3, 2025, 09:45 AEST"
  },

  "Completed": {
    id: "completed-1",
    title: "Email Template Migration",
    ticketNumber: "18633084000",
    createdBy: "Rachel Green",
    created: "Jan 1, 2025, 10:00 AEST",
    description: "Migrate existing email templates to new brand guidelines and implement A/B testing",
    supportingFiles: ["brand_guidelines.pdf", "template_inventory.xlsx"],
    supportArea: ["marketing hub"],
    supportCategory: ["email", "templates"],
    primaryOutcomeObjectives: "Update all email communications to new brand standards",
    status: "Completed",
    scopedHours: {
      strategic: 2,
      setup: 5,
      integration: 3
    },
    approvedBy: "Mark Thompson",
    approvalDate: "Jan 2, 2025, 11:15 AEST",
    completionDate: "Jan 5, 2025, 16:45 AEST"
  },

  "Abandoned": {
    id: "abandoned-1",
    title: "Custom Object Development",
    ticketNumber: "18633084001",
    createdBy: "Daniel Brown",
    created: "Dec 31, 2024, 09:30 AEST",
    description: "Create custom objects for project tracking and resource allocation",
    supportingFiles: ["object_schema.pdf", "relationship_diagram.png"],
    supportArea: ["development"],
    supportCategory: ["customization", "development"],
    primaryOutcomeObjectives: "Implement project management capabilities within CRM",
    status: "Abandoned",
    scopedHours: {
      strategic: 6,
      setup: 10,
      integration: 15
    }
  }
} 