import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const LayoutPublic = () => {
    return (
        <div className='bg-gray-50 h-screen'>
            <Header />
            <Outlet />
        </div>
    )
}

export default LayoutPublic