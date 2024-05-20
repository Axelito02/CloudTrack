import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import styles from './UserProfile.module.css'

export function UserProfile () {
  const navigate = useNavigate()
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className={styles.containerUserProfile} onClick={toggleMenu}>
      <div className={styles.userProfile}>
        <img className={styles.userImg} src='../../../assets/ImgUser.png' alt='User'/>
      </div>
      <div className={styles.userName}>
        <p className={styles.name}>Laura Sanchez</p>
      </div>
      {menuVisible && (
        <div className={styles.dropdownMenu}>
          <ul>
            <li>Perfil</li>
            <li>Ajustes</li>
            <li onClick={() => navigate('/iniciar-sesion')}>Cerrar sesión</li>
          </ul>
        </div>
      )}
    </div>
  )
}
