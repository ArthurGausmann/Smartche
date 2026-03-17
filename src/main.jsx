import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import ProtectedRoute from './routes/ProtectedRoute.jsx'
import LandingPage from './Pages/LandingPage.jsx'
import Sobre from './Pages/Sobre.jsx'
import Login from './Pages/Login.jsx'
import Cadastro from './Pages/Cadastro.jsx'
import DashboardPage from './Pages/DashboardPage.jsx'
import Servicos from './Pages/Servicos.jsx'
import Admin from './Pages/Admin.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/servicos" element={<Servicos/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>

        <Route path="/dashboard" element={<ProtectedRoute><DashboardPage/></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute role="ADMIN"><Admin/></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
