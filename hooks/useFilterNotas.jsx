import { useState, useEffect } from 'react'

export function useFiltersNotas (notas) {
  const [filterednotas, setFilterednotas] = useState(notas)
  const [filters, setFilters] = useState({
    search: '',
    dateRange: { start: '', end: '' },
    empresaConstructora: '',
    contratista: '',
    localidad: '',
    barrio: '',
    tipoVenta: '',
    tipoConstruccion: '',
    checked: null
    // más filtros
  })

  useEffect(() => {
    let result = notas

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

    if (filters.empresaConstructora) {
      result = result.filter(project =>
        project.empresaConstructora === filters.empresaConstructora
      )
    }

    if (filters.contratista) {
      result = result.filter(project =>
        project.contratista === filters.contratista
      )
    }

    if (filters.localidad) {
      result = result.filter(project =>
        project.localidad === filters.localidad
      )
    }

    if (filters.barrio) {
      result = result.filter(project =>
        project.barrio === filters.barrio
      )
    }

    if (filters.tipoVenta) {
      result = result.filter(project =>
        project.tipoVenta === filters.tipoVenta
      )
    }

    if (filters.tipoConstruccion) {
      result = result.filter(project =>
        project.tipoConstruccion === filters.tipoConstruccion
      )
    }

    setFilterednotas(result)
  }, [notas, filters])

  const setSearchTerm = (searchTerm) => {
    setFilters(prev => ({ ...prev, search: searchTerm }))
  }

  return { filterednotas, setFilters, setSearchTerm }
}
