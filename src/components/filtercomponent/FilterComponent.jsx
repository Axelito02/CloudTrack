import React, { useState } from 'react'
import styles from './FilterComponent.module.css'

export const FilterComponent = ({ setFilters }) => {
  const [filters, setLocalFilters] = useState({
    constructora: '',
    contratista: '',
    localidad: '',
    barrio: '',
    tipoVenta: '',
    tipoConstruccion: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log(`Filter changed - ${name}: ${value}`)
    setLocalFilters(prev => ({ ...prev, [name]: value }))
    setFilters(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className={styles.filterComponent}>
      <h2 className={styles.title}>Filtros</h2>

      <div className={styles.filterGroupContainer}>
        <div className={styles.filterGroup}>
          <label>Constructora</label>
          <select className={styles.filterAdvanced} name='constructora' value={filters.constructora} onChange={handleChange}>
            <option value=''>Seleccionar</option>
            <option value='Jaramillo mora'>Jaramillo mora</option>
            <option value='Concali'>Concali</option>
            <option value='Constructora Bolivar'>Constructora Bolivar</option>
            <option value='Constructora Normandi'>Constructora Normandi</option>
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label>Contratista</label>
          <select className={styles.filterAdvanced} name='contratista' value={filters.contratista} onChange={handleChange}>
            <option value=''>Seleccionar</option>
            <option value='Contratista A'>Contratista A</option>
            <option value='Contratista B'>Contratista B</option>
            <option value='Contratista C'>Contratista C</option>
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label>Localidad</label>
          <select className={styles.filterAdvanced} name='localidad' value={filters.localidad} onChange={handleChange}>
            <option value=''>Seleccionar</option>
            <option value='Cali'>Cali</option>
            <option value='Jamundí'>Jamundí</option>
            <option value='Palmira'>Palmira</option>
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label>Barrio</label>
          <select className={styles.filterAdvanced} name='barrio' value={filters.barrio} onChange={handleChange}>
            <option value=''>Seleccionar</option>
            <option value='Bochalema'>Bochalema</option>
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label>Tipo de venta</label>
          <select className={styles.filterAdvanced} name='tipoVenta' value={filters.tipoVenta} onChange={handleChange}>
            <option value=''>Seleccionar</option>
            <option value='soloInterna'>Solo interna</option>
            <option value='soloCargo'>Solo cargo</option>
            <option value='completo'>Completo</option>
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label>Tipo de construcción</label>
          <select className={styles.filterAdvanced} name='tipoConstruccion' value={filters.tipoConstruccion} onChange={handleChange}>
            <option value=''>Seleccionar</option>
            <option value='casa'>Casas</option>
            <option value='edificio'>Edificios</option>
            <option value='otro'>Otros</option>
          </select>
        </div>
      </div>
    </div>
  )
}
