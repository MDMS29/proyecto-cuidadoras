import logo from '../assets/logo-fundacion.png'
import { useLocation } from 'react-router-dom'
import { convertLength } from '@mui/material/styles/cssUtils'
const Header = () => {
    return (
        <div className='flex flex-col items-center mb-5'>
            <svg className='absolute' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L80,181.3C160,203,320,245,480,240C640,235,800,181,960,165.3C1120,149,1280,171,1360,181.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
            <img src={logo} alt="" className='w-32 z-10' />
        </div>
    )
}

export default Header