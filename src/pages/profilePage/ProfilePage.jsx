import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './ProfilePage.module.css'
import { ButtonBack, InfoUser } from '../../components'

export function ProfilePage () {
  const navigate = useNavigate()
  return (
    <section className={styles.Main}>
      <div className={styles.header}>
        <div className={styles.bannerContainer}>
          <img src='/assets/Banner.png' alt='Banner' className={styles.bannerImg} />
          <div className={styles.overlay}>
            <div className={styles.headerContent}>
              <ButtonBack onClick={() => navigate(-1)} />
              <h1>Perfil</h1>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.contentProfileImgUser}>
          <img src='/assets/ProfileEdit.png' alt='User' className={styles.profileImg} />
        </div>
        <div className={styles.contentComponentInfoUser}>
          <div className={styles.componentInfoUser}>
            <InfoUser />
          </div>
        </div>
      </div>
    </section>
  )
}
