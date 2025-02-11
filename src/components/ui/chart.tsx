"use client"

import { forwardRef } from "react"
import { 
  TooltipProps, 
  ResponsiveContainer,
  Tooltip,
} from "recharts"

export interface ChartConfig {
  [key: string]: {
    label: string
    color: string
  }
}

interface ChartContainerProps {
  children: React.ReactNode
  config: ChartConfig
}

export function ChartContainer({
  children,
  config,
}: ChartContainerProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <style>
        {Object.entries(config).map(
          ([key, value]) => `
            :root {
              --color-${key}: ${value.color};
            }
          `
        )}
      </style>
      {children}
    </ResponsiveContainer>
  )
}

interface ChartTooltipProps extends Omit<TooltipProps<any, any>, "content"> {
  content?: React.ReactNode
  indicator?: "line" | "dashed"
}

export function ChartTooltip({ content, ...props }: ChartTooltipProps) {
  return <Tooltip {...props} content={content} />
}

interface ChartTooltipContentProps extends TooltipProps<any, any> {
  config?: ChartConfig
  indicator?: "line" | "dashed"
}

export function ChartTooltipContent({
  active,
  payload,
  label,
  config = {},
  indicator = "line",
}: ChartTooltipContentProps) {
  if (!active || !payload) return null

  return (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      <div className="grid gap-2">
        <div className="flex items-center justify-between gap-2">
          <div className="text-sm text-muted-foreground">{label}</div>
        </div>
        <div className="grid gap-1">
          {payload.map(({ value, name }: any) => (
            <div key={name} className="flex items-center gap-2">
              <div
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor: config[name]?.color,
                }}
              />
              <div className="flex items-center gap-1">
                <span className="text-sm font-medium">
                  {config[name]?.label}:
                </span>
                <span className="text-sm text-muted-foreground">{value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 