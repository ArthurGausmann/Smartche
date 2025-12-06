import Dashboard from '../Components/Dashboard'
import Usuarios from './Usuarios';
import { Link, useLocation } from 'react-router-dom'

function Sidebar() {
    const location = useLocation();

    const dashboard = location.pathname === '/login/dashboard';

    return (
    <>
    <div className="drawer lg:drawer-open">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            {dashboard && (<Dashboard/>)}
            {!dashboard && (<Usuarios/>)}
            <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
                Open drawer
            </label>
        </div>
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4">
                {/* Sidebar content here */}
                <Link to='/login/dashboard'><li><button className='btn btn-primary btn-active w-full text-2xl border-accent py-7 mb-1'>Dahsboard</button></li></Link>
                <Link to='/login/usuarios'><li><button className='btn w-full text-2xl border-accent py-7 mb-1'>Usuários</button></li></Link>
            </ul>
        </div>
    </div>
    </>
    )
}

export default Sidebar