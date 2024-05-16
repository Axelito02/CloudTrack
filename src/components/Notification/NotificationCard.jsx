import React from 'react'
import styles from './NotificationCard.module.css'
import trash from '../../../assets/trash.png'

const NotificationCard = ({ name, text, rol }) => {
  return (
    <section className={styles.notification}>
      <div className={styles.notificationCard}>
        <div className={styles.name}>
          <h3>{name}</h3>
          <p>{rol}</p>
        </div>
        <div className={styles.rectangulo}>
          <p className={styles.cursor}>{text} <span><a><u>Ver Todos</u></a></span></p>
          <div className={styles.time}>
            <img src={trash} alt='Basura' />
            <p>9:20am</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotificationCard
