import { ReactNode } from 'react'

export interface GuideTipProps {
  children: ReactNode
}

export function GuideTip({ children }: GuideTipProps) {
  return (
    <div className="border-l-4 border-blue-500 bg-gradient-to-r from-blue-50 to-transparent pl-4 py-3 mb-8">
      <div className="flex gap-3">
        <svg className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <div className="text-sm text-blue-800">{children}</div>
      </div>
    </div>
  )
}

export interface GuideSectionProps {
  title: string
  children: ReactNode
}

export function GuideSection({ title, children }: GuideSectionProps) {
  return (
    <section className="mb-12 scroll-mt-6" id={title.toLowerCase().replace(/\s+/g, '-')}>
      <h2 className="text-xl text-gray-900 font-semibold mb-6 flex items-center gap-2">
        <div className="h-6 w-1 bg-[#FF4F11] rounded-full"></div>
        {title}
      </h2>
      {children}
    </section>
  )
}

export function PageTitle({ children }: { children: ReactNode }) {
  return (
    <div className="mb-8 pb-6 border-b">
      <h1 className="text-3xl font-bold text-gray-900">{children}</h1>
    </div>
  )
} 