import React from 'react'
import RolDesignado from '../RolDesignado/RolDesignado'
import './RolContainer.css'
import tecnicos from '../../../assets/tecnicos.png'
import conexiones from '../../../assets/conexiones.png'
import redes from '../../../assets/redes.png'
import comercial from '../../../assets/comercial.png'

const RolesContainer = () => {
  return (
    <div>
      <h2>Roles Designados</h2>
      <div className='RolesContainer'>
        <div className='RolesContainer-inner'>
          <RolDesignado titulo='Técnicos' avatarSrc={tecnicos} nombre='Juan' cantidad='4+' />
          <div className='line'> </div>
          <RolDesignado titulo='Conexiones' avatarSrc={conexiones} nombre='Pablo' cantidad='3+' />
          <div className='line'> </div>
          <RolDesignado titulo='Redes' avatarSrc={redes} nombre='Maria' cantidad='7+' />
          <div className='line'> </div>
          <RolDesignado titulo='Comercial' avatarSrc={comercial} nombre='Jose' cantidad='2+' />
        </div>
      </div>
    </div>
  )
}

export default RolesContainer
