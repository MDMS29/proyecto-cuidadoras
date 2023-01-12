import { Outlet } from 'react-router-dom'
import HeaderFomulario from '../components/HeaderFomulario'

const InformacionPaciente = () => {
  return (
    <div className='bg-gray-50 h-screen'>
      <HeaderFomulario />
      <Outlet />
    </div>
  )
}

export default InformacionPaciente