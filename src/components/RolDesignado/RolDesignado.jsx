import React from 'react'
import styles from './RolDesignado.module.css'

import tecnicos from '../../../assets/tecnicos.svg'
import conexiones from '../../../assets/conexiones.svg'
import redes from '../../../assets/redes.svg'
import comercial from '../../../assets/comercial.svg'

export function RolDesignado ({ titulo, avatarSrc, lista, onClick }) {
  const nombre = lista.length > 0 ? lista[0].nombre : ''
  const cantidad = lista.length > 1 ? `y ${lista.length - 1} +` : ''
  let avatarType
  if (titulo === 'Técnicos') {
    avatarType = tecnicos
  } else if (titulo === 'Conexiones') {
    avatarType = conexiones
  } else if (titulo === 'Redes') {
    avatarType = redes
  } else if (titulo === 'Comercial') {
    avatarType = comercial
  } else {
    // Si el título no coincide con ninguno de los casos anteriores, avatarType será null o undefined
  }
  const avatar = lista.length === 0 ? avatarSrc : avatarType

  return (
    <div className={`${styles.RolDesignado} ${lista.length > 0 && styles.chosen}`}>
      <h3 className={styles.title}>{titulo}</h3>
      <div>
        <img onClick={onClick} className={styles.RolDesignadoAvatar} src={avatar} alt='Add' />
      </div>
      <div className={styles.RolDesignadoInfo}>
        <p>{nombre} {cantidad}</p>
      </div>
    </div>
  )
}
