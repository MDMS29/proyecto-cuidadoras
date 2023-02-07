import { useNavigate, Link } from "react-router-dom"

const Login = () => {

    const navigate = useNavigate()

    // console.log(navigate('/'))
    return (
        <div className='flex justify-center items-center h-[500px]'>
            <form className='z-10 bg-white flex items-center flex-col w-3/4 max-w-[550px] gap-3 px-2 py-5 h-[250px] shadow'>
                <h1 className='font-semibold text-4xl '>Iniciar Sesión</h1>
                <div className='flex w-5/6 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>

                    <input type="text" className='placeholder:text-gray-400 bg-gray-50 w-11/12 px-2 py-2 outline-none focus:border-b focus:border-b-black focus:bg-gray-100 transition-all rounded-md' placeholder='Ingrese Usuario' />
                </div>

                <div className='flex w-5/6 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                    </svg>

                    <input type="password" className='placeholder:text-gray-400 bg-gray-50 w-11/12 px-2 py-2 outline-none focus:border-b focus:border-b-black focus:bg-gray-100 transition-all rounded-md' placeholder='Ingrese su contraseña' />
                </div>
                <Link to={'/auth/home'} className='w-56 bg-blue-500 hover:bg-blue-700 transition-colors text-white font-bold text-lg uppercase rounded px-2 py-1 cursor-pointer text-center'>Ingresar</Link>
            </form>
        </div>
    )
}

export default Login