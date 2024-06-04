import { useMemo, useState, useEffect } from 'react'

export function useFilteredProjects(projects, initialStatusFilter = 'all') {
  const [statusFilter, setStatusFilter] = useState(initialStatusFilter)

  const filteredByStatus = useMemo(() => {
    return projects.filter(project => {
      if (statusFilter === 'all') return true
      if (statusFilter === 'pending') return project.estado === 0
      if (statusFilter === 'InProgress') return project.estado === 1
      if (statusFilter === 'completed') return project.estado === 2
      return true
    })
  }, [projects, statusFilter])

  return { filteredByStatus, setStatusFilter, statusFilter }
}
