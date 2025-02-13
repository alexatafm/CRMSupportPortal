"use client"

import { useState } from "react"
import { TaskCard } from "./TaskCard"
import { TaskDetailsPanel } from "./TaskDetailsPanel"
import React from "react"

type Task = {
  id: string
  title: string
  description: string
  categories: string[]
  supportArea: string
  specificationNotes: string
  strategicHours?: number
  setupHours?: number
  integrationHours?: number
}

type TaskGridProps = {
  tasks: Task[]
  availableHours: {
    strategic: number
    setup: number
    integration: number
  }
}

export function TaskGrid({ tasks, availableHours }: TaskGridProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories")
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [showAvailableOnly, setShowAvailableOnly] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const dropdownRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const categories = [
    "AI/Breeze Intelligence",
    "Custom Integration Issue",
    "Dashboards & Reporting",
    "Data Formatting",
    "Data Migration",
    "HubSpot Automation",
    "HubSpot Custom Email Template",
    "HubSpot Custom Quote Design",
    "HubSpot Customisation",
    "HubSpot Integration Request",
    "HubSpot Training Session(s)",
    "HubSpot Website/s",
    "Import/Export",
    "Native Integration Issue",
    "Software Compatibility",
    "Software Process Consulting",
    "Training Material",
    "Other"
  ]

  const allCategories = Array.from(new Set([...categories, ...tasks.flatMap(task => task.categories)]))

  const hasEnoughHours = (task: Task) => {
    const hasStrategicHours = !task.strategicHours || task.strategicHours <= availableHours.strategic
    const hasSetupHours = !task.setupHours || task.setupHours <= availableHours.setup
    const hasIntegrationHours = !task.integrationHours || task.integrationHours <= availableHours.integration
    return hasStrategicHours && hasSetupHours && hasIntegrationHours
  }

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCategory = selectedCategory === "All Categories" ||
                          task.categories.includes(selectedCategory)
    
    const matchesAvailability = !showAvailableOnly || hasEnoughHours(task)
    
    return matchesSearch && matchesCategory && matchesAvailability
  })

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("All Categories")
    setShowAvailableOnly(false)
  }

  const displayTasks = filteredTasks.slice(0, 12)

  return (
    <>
      <div className="flex flex-col">
        {/* Search and Filters */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" viewBox="0 0 24 24" fill="none">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full h-10 pl-10 pr-4 rounded-lg bg-white/10 text-white placeholder:text-white/50 border border-white/10 text-sm focus:outline-none focus:border-white/20"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="relative min-w-[200px]" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full h-10 px-4 rounded-lg bg-white/10 text-white border border-white/10 text-sm flex items-center justify-between hover:bg-white/20 focus:outline-none focus:border-white/20"
            >
              <span>{selectedCategory}</span>
              <svg className={`w-4 h-4 text-white/50 transition-transform ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {isOpen && (
              <div className="absolute top-full left-0 mt-1 w-[300px] max-h-[400px] overflow-y-auto bg-[#1C2B4F] rounded-lg border border-white/10 shadow-lg z-50">
                <div className="p-2">
                  <button
                    onClick={() => {
                      setSelectedCategory("All Categories")
                      setIsOpen(false)
                    }}
                    className="w-full px-3 py-2 text-left text-sm text-white/90 hover:bg-white/10 rounded-lg mb-1"
                  >
                    All Categories
                  </button>
                  <div className="space-y-0.5">
                    {allCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category)
                          setIsOpen(false)
                        }}
                        className={`w-full px-3 py-2 text-left text-sm rounded-lg transition-colors ${
                          selectedCategory === category
                            ? 'bg-white text-[#1C2B4F]'
                            : 'text-white/90 hover:bg-white/10'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => setShowAvailableOnly(!showAvailableOnly)}
            className={`h-10 px-4 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors ${
              showAvailableOnly 
                ? 'bg-white text-[#1C2B4F] hover:bg-white/90' 
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <svg 
              className={`w-4 h-4 ${showAvailableOnly ? 'text-[#1C2B4F]' : 'text-white'}`} 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Tasks within my hours
          </button>
          
          <button 
            onClick={clearFilters}
            className="h-10 px-4 rounded-lg bg-white/10 text-white border border-white/10 text-sm flex items-center gap-2 hover:bg-white/20 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Clear Filters
          </button>
        </div>

        {/* Task Grid */}
        <div className="grid grid-cols-3 xl:grid-cols-4 gap-5 pb-5">
          {displayTasks.map((task) => (
            <div key={task.id} onClick={() => setSelectedTask(task)}>
              <TaskCard
                title={task.title}
                description={task.description}
                categories={task.categories}
                supportArea={task.supportArea}
                strategicHours={task.strategicHours}
                setupHours={task.setupHours}
                integrationHours={task.integrationHours}
                availableStrategicHours={availableHours.strategic}
                availableSetupHours={availableHours.setup}
                availableIntegrationHours={availableHours.integration}
              />
            </div>
          ))}
        </div>

        {filteredTasks.length === 0 && (
          <div className="flex items-center justify-center h-[200px] text-white/70">
            No tasks match your search criteria
          </div>
        )}
      </div>

      <TaskDetailsPanel 
        task={selectedTask}
        onCloseAction={() => setSelectedTask(null)}
        availableHours={availableHours}
      />
    </>
  )
} 