import React from 'react'
import './RolDesignado.css'
import icono from '../../../assets/mas.png'

const RolDesignado = ({ titulo, avatarSrc, nombre, cantidad }) => {
  return (
    <div className='RolDesignado'>
      <h3>{titulo}</h3>
      <div className='RolDesignado-avatar'>
        <img src={avatarSrc} alt='Avatar' />
        <div className='RolDesignado-add'>
          <img src={icono} alt='icono' />
        </div>
      </div>
      <div className='RolDesignado-info'>
        <p>{nombre} {cantidad}</p>
      </div>
    </div>
  )
}

export default RolDesignado
