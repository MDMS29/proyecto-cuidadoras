import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LayoutPrivate from './layout/LayoutPrivate'
import LayoutPublic from './layout/LayoutPublic'
import FormularioPaciente from './pages/FormularioPaciente'
import Home from './pages/Home'
import Login from './pages/Login'

import { AuthProvider } from './context/AuthProvider'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>

          {/* RUTAS PUBLICAS */}
          <Route path='/' element={<LayoutPublic />}>
            <Route index element={<Login />} />
          </Route>

          {/* RUTAS AUTORIZADAS */}
          <Route path='/auth' element={<LayoutPrivate />}>
            <Route index element={<Home />} />
            <Route path='formulario-paciente' element={<FormularioPaciente />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
