"use client"

import { useState } from "react"
import { TaskCard } from "./TaskCard"
import { TaskDetailsPanel } from "./TaskDetailsPanel"

type Task = {
  id: string
  title: string
  description: string
  categories: string[]
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

  const allCategories = Array.from(new Set(tasks.flatMap(task => task.categories)))

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
          
          <select 
            className="h-10 px-4 rounded-lg bg-white/10 text-white border border-white/10 text-sm min-w-[200px] focus:outline-none focus:border-white/20"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option>All Categories</option>
            {allCategories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

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