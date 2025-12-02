import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './Pages/App.jsx'
import LandingPage from './Pages/LandingPage.jsx'
import Sobre from './Pages/Sobre.jsx'
import Login from './Pages/Login.jsx'
import Cadastro from './Pages/Cadastro.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
      </Routes>
    </BrowserRouter>
    {/*<App />*/}
  </StrictMode>,
)
