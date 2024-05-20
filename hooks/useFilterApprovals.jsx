import { useState, useMemo } from 'react'

export function useFilterApprovals (aprobaciones) {
  const [filter, setFilter] = useState('all')

  const filteredAprobaciones = useMemo(() => {
    if (filter === 'approved') {
      return aprobaciones.filter(aprobacion => aprobacion.checked)
    }
    if (filter === 'notApproved') {
      return aprobaciones.filter(aprobacion => !aprobacion.checked)
    }
    return aprobaciones
  }, [filter, aprobaciones])

  return { filter, setFilter, filteredAprobaciones }
}
