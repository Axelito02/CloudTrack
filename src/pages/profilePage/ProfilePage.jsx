import React from 'react'
import styles from './ProfilePage.module.css'
import { ButtonBack, InfoUser} from '../../components'

export function ProfilePage () {
  return (
    <section className={styles.Main}>
      <div className={styles.head}>
        <div>
          <ButtonBack/>
        </div>
        <div>
          <h1>Perfil</h1>
        </div>
      </div>
      <div className={styles.contentBanner}>
        <div className={styles.contentBanner}>
          <img src="../../../../assets/Banner.png"/>
        </div>
      </div>
      <div className={styles.contentProfileImgUser}>
        <div className={styles.contentImgUser}>
          <img src="../../../../assets/ProfileEdit.png" alt='User'/>
        </div>
      </div>
      <div className={styles.contentComponentInfoUser}>
        <div className={styles.componentInfoUser}>
          <InfoUser />
        </div>
      </div>
    </section>
  )
}
