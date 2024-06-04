import React from 'react'
import styles from './DateInput.module.css'

export function DateRender ({ date }) {
  const formatDate = (fecha) => {
    if (fecha === '') {
      return 'Sin fecha asignada'
    }
    const [year, month, day] = fecha.split('-')
    const meses = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ]
    const monthName = meses[parseInt(month, 10) - 1]
    return { day, month: monthName, year }
  }

  const formatedDate = formatDate(date)

  return (
    <div className={styles.dateInputContainer}>
      <div className={styles.formattedDateDisplay}>
        {date !== ''
          ? (
            <>
              <span className={styles.flex}>
                <span className={styles.day}>{formatedDate.day}</span>
                <span className={styles.monthYear}>
                  <span>{formatedDate.month}</span>
                  <span>{formatedDate.year}</span>
                </span>
                <img className={styles.editIcon} src='../../../assets/EditIcon2.svg' />
              </span>
            </>
            )
          : (
            <>
              <p className={styles.sf}>Sin fecha asignada</p>
              <img className={styles.editIcon} src='../../../assets/EditIcon2.svg' />
            </>
            )}
      </div>
    </div>
  )
}
