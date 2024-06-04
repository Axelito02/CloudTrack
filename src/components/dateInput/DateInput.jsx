import React, { useState } from 'react'
import styles from './DateInput.module.css'

export function DateInput ({ id, name, onChange }) {
  const [selectedDate, setSelectedDate] = useState('')

  const handleDateChange = (e) => {
    const value = e.target.value
    setSelectedDate(value)
    if (onChange) {
      onChange(e)
    }
  }

  const formatDate = (date) => {
    const dateObj = new Date(date)
    dateObj.setMinutes(dateObj.getMinutes() + dateObj.getTimezoneOffset())
    const options = { day: '2-digit', month: 'long', year: 'numeric' }
    const formattedDate = dateObj.toLocaleDateString('es-ES', options)
    const [day, month, year] = formattedDate.match(/(\d+)\s+de\s+(\w+)\s+de\s+(\d+)/).slice(1, 4)

    return { day, month, year }
  }

  const date = selectedDate ? formatDate(selectedDate) : null

  return (
    <div className={styles.dateInputContainer}>
      <input
        id={id}
        name={name}
        type='date'
        onChange={handleDateChange}
        value={selectedDate}
        className={styles.hiddenDateInput}
      />
      <div className={styles.formattedDateDisplay}>
        {date
          ? (
            <>
              <span className={styles.flex}>
                <span className={styles.day}>{date.day}</span>
                <span className={styles.monthYear}>
                  <span>{date.month}</span>
                  <span>{date.year}</span>
                </span>
                <img className={styles.editIcon} src='/assets/EditIcon2.svg' />
              </span>
            </>
            )
          : (
            <>
              <p className={styles.sf}>Sin fecha asignada</p>
              <img className={styles.editIcon} src='/assets/EditIcon2.svg' />
            </>
            )}
      </div>
    </div>
  )
}
