import { BrowserRouter, Routes, Route } from 'react-router-dom'

import InformacionPaciente from './layout/InformacionPaciente'
import FormularioPaciente from './pages/FormularioPaciente'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<InformacionPaciente/>}>
          <Route index element={<FormularioPaciente/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
