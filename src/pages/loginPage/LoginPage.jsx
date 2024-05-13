import { Login } from '../../components'

export function LoginPage () {
  return (
    <div className='mainDiv' style={{ overflowY: 'hidden' }}>
      <section className='navbar'>
        <div>
          <img src='../../../assets/ImageBackground.png' />
        </div>
      </section>
      <section className='content'>
        <Login />
      </section>
    </div>
  )
}
