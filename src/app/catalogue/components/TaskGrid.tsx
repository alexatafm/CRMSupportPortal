"use client"

import { useState } from "react"
import { TaskCard } from "./TaskCard"
import { TaskDetailsPanel } from "./TaskDetailsPanel"

type Task = {
  id: string
  title: string
  description: string
  duration: string
  supportCategories: string[]
  hubspotRequirements: string[]
  availableToPlans: string[]
}

type TaskGridProps = {
  tasks: Task[]
}

export function TaskGrid({ tasks }: TaskGridProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("All Support Categories")
  const [selectedArea, setSelectedArea] = useState<string>("All Support Areas")
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)

  // Get unique categories and areas for filter options
  const allCategories = Array.from(new Set(tasks.flatMap(task => task.supportCategories)))
  const allAreas = Array.from(new Set(tasks.flatMap(task => task.availableToPlans)))

  // Filter tasks based on search and filters
  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCategory = selectedCategory === "All Support Categories" ||
                          task.supportCategories.includes(selectedCategory)
    
    const matchesArea = selectedArea === "All Support Areas" ||
                       task.availableToPlans.includes(selectedArea)
    
    return matchesSearch && matchesCategory && matchesArea
  })

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("All Support Categories")
    setSelectedArea("All Support Areas")
  }

  // Remove the placeholder tasks logic
  const displayTasks = filteredTasks.slice(0, 16)

  return (
    <>
      <div className="flex flex-col h-[calc(100vh-280px)]">
        <div className="flex gap-3 mb-3">
          <div className="relative flex-1">
            <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" viewBox="0 0 24 24" fill="none">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full pl-8 pr-3 py-1 rounded bg-white/5 text-white placeholder:text-white/40 border border-white/10 text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select 
            className="px-3 py-1 rounded bg-white/5 text-white border border-white/10 text-sm min-w-[180px]"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option>All Support Categories</option>
            {allCategories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <select
            className="px-3 py-1 rounded bg-white/5 text-white border border-white/10 text-sm min-w-[180px]"
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
          >
            <option>All Support Areas</option>
            {allAreas.map(area => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>
          <button 
            onClick={clearFilters}
            className="px-3 py-1 rounded bg-white/5 text-white border border-white/10 text-sm flex items-center gap-2 hover:bg-white/10 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Clear Filters
          </button>
        </div>

        <div className="grid grid-cols-4 grid-rows-3 gap-3 flex-1">
          {displayTasks.map((task) => (
            <div key={task.id} onClick={() => setSelectedTask(task)} className="h-full">
              <TaskCard
                title={task.title}
                description={task.description}
                duration={task.duration}
                supportCategories={task.supportCategories}
                hubspotRequirements={task.hubspotRequirements}
                availableToPlans={task.availableToPlans}
              />
            </div>
          ))}
        </div>

        {filteredTasks.length === 0 && (
          <div className="text-center py-8 text-white/60">
            No tasks match your search criteria
          </div>
        )}
      </div>

      <TaskDetailsPanel 
        task={selectedTask}
        onClose={() => setSelectedTask(null)}
      />
    </>
  )
} 