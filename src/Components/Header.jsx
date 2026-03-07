import { Link, useLocation } from 'react-router-dom'
import logo from "../assets/folha_logo.png"

function Header() {
    const location = useLocation()

    const hideLoginBtn = location.pathname === '/cadastro' || location.pathname.startsWith('/login');

    return (
    <>
    <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start"></div>
        <div className="navbar-center">
            <img src={logo} className="max-w-15 lg:max-w-20" alt="Logo Smartchê" />
            <Link to='/'><h1 className='text-3xl'>Smartchê</h1></Link>
        </div>
        <div className="navbar-end">
            {!hideLoginBtn && (<Link to="/login"><button className="btn btn-outline mr-2 lg:mr-10">Login</button></Link>)}
        </div>
    </div>
    </>
    )
}

export default Header