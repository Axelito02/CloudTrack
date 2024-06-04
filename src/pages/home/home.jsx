import React from 'react'
import { Buttonshome } from '../../components'
import styles from './home.module.css'

export function Home () {
  return (
    <section className={styles.Main}>
      <div className={styles.header}>
        <div className={styles.bannerContainer}>
          <div className={styles.overlay}>
            <div className={styles.headerContent}>
              <Buttonshome to='/iniciar-sesion' titulo='Iniciar Sesión' />
              <Buttonshome to='/registro' titulo='Registrarse' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
