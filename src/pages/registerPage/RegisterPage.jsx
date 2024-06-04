import { Register } from '../../components'

export function RegisterPage () {
  return (
    <div className='mainDiv' style={{ overflowY: 'hidden' }}>
      <section className='navbar'>
        <div>
          <img src='/assets/SignUpImagen.png' />
        </div>
      </section>
      <section className='content'>
        <Register />
      </section>
    </div>
  )
}
