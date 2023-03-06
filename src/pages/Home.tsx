import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className='flex justify-center flex-col'>
            <caption className="z-10 p-5 text-2xl shadow mx-4 font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                Bienvenido(a) a la Fundación Hogar La Roca
                <p className="mt-1 text-lg font-normal text-gray-500 dark:text-gray-400">En este apartado podrás encontrar las diferentes opciones para gestionar la entrada, registros diarios, evolución e inventario de los pacientes de nuestra fundación.</p>
            </caption>
            <div className='flex justify-center flex-wrap z-10 gap-5 mt-10'>
                <Link to="/auth/formulario-paciente" className='w-[200px] h-[200px] rounded-full bg-gray-100 hover:scale-125 hover:cursor-pointer transition-all shadow-lg flex items-center flex-col justify-center text-gray-700 hover:text-gray-400'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-full h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                    <p className="uppercase break-words px-5 text-center font-semibold  tracking-wider">Registro de Paciente</p>
                </Link>
                <Link to="/auth/listado-pacientes" className='w-[200px] h-[200px] rounded-full bg-gray-100 hover:scale-125 hover:cursor-pointer transition-all shadow-lg flex items-center flex-col justify-center text-gray-700 hover:text-gray-400'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                    </svg>

                    <p className="uppercase break-words px-5 text-center font-semibold  tracking-wider">Listado de Pacientes</p>
                </Link>
                <Link to="" className='w-[200px] h-[200px] rounded-full bg-gray-100 hover:scale-125 hover:cursor-pointer transition-all shadow-lg flex items-center flex-col justify-center text-gray-700 hover:text-gray-400'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    <p className="uppercase break-words px-5 text-center font-semibold  tracking-wider">Opcion en desarrollo</p>
                </Link>
            </div>
        </div>
    )
}

export default Home