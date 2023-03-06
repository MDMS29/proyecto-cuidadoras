import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LayoutPrivate from './layout/LayoutPrivate'
import LayoutPublic from './layout/LayoutPublic'
import FormularioPaciente from './pages/FormularioPaciente'
import Home from './pages/Home'
import Login from './pages/Login'
import ListadoPacientes from './pages/ListadoPacientes'

import { AuthProvider } from './context/AuthProvider'
import RegistroUsuario from './pages/RegistroUsuario'
import ControlDeposicion from './components/ModalControlDeposicion'

function App() {
  return (
    <BrowserRouter>
      {/* <AuthProvider> */}
      <Routes>

        {/* RUTAS PUBLICAS */}
        <Route path='/' element={<LayoutPublic />}>
          <Route index element={<Login />} />
        </Route>

        {/* RUTAS AUTORIZADAS */}
        <Route path='/auth' element={<LayoutPrivate />}>
          <Route index element={<Home />} />
          <Route path="registro" element={<RegistroUsuario />} />
          <Route path='formulario-paciente' element={<FormularioPaciente />} />
          <Route path='listado-pacientes' element={<ListadoPacientes />} />
          <Route path='control-deposicion/:id' element={<ControlDeposicion />} />
        </Route>
      </Routes>
      {/* </AuthProvider> */}
    </BrowserRouter>
  )
}

export default App
