import { useState, useEffect } from 'react'

export function useFilters (projects) {
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [filters, setFilters] = useState({
    search: '',
    dateRange: { start: '', end: '' },
    checked: null
    // más filtros
  })

  useEffect(() => {
    let result = projects

    if (filters.search) {
      result = result.filter(project =>
        project.title.toLowerCase().includes(filters.search.toLowerCase())
      )
    }

    if (filters.dateRange.start && filters.dateRange.end) {
      result = result.filter(project => {
        const projectDate = new Date(project.date)
        return projectDate >= new Date(filters.dateRange.start) && projectDate <= new Date(filters.dateRange.end)
      })
    }

    setFilteredProjects(result)
  }, [projects, filters])

  return { filteredProjects, setFilters }
}
