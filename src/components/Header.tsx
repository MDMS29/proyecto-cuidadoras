import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo-fundacion.png'
import { AuthContext } from '../context/AuthContext'
const Header = () => {
    const { state, setState } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleCerrarSesion = () => {
        setState({ ...state, auth: {} })
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <div className='flex flex-col justify-center items-center mb-5'>
            <svg className='absolute max-sm:top-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,160L80,181.3C160,203,320,245,480,240C640,235,800,181,960,165.3C1120,149,1280,171,1360,181.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
            <img src={logo} alt="" className='w-32 z-10' />
            <button type='button' className='absolute z-10 right-10' onClick={handleCerrarSesion}>Cerrar Sesion</button>
        </div>
    )
}

export default Header