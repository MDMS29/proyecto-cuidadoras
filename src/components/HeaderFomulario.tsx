import React from 'react'
import logo from '../assets/logo-fundacion.png'

const HeaderFomulario = () => {
    return (
        <div className='flex flex-col items-center mb-5'>
            <svg className='absolute' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L80,181.3C160,203,320,245,480,240C640,235,800,181,960,165.3C1120,149,1280,171,1360,181.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
            <img src={logo} alt="" className='w-32 z-10' />
            <div className='mt-2 z-10'>
                <h1 className='font-semibold text-2xl text-center z-10 2xl:text-white'>INGRESO A PROGRAMA DE CUIDADOS PRIMARIOS</h1>
                <div className='flex justify-around font-semibold text-xl mt-2'>
                    <div>F-SER043</div>
                    <div>VERSION : 04</div>
                </div>
            </div>
        </div>
    )
}

export default HeaderFomulario