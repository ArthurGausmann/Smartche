import Dashboard from './Dashboard'
import Usuarios from './Usuarios';

export default function Navbar() {
    return (
    <>
    <div className="tabs tabs-lift">
        <input type="radio" name="my_tabs_3" className="tab text-xl px-6" aria-label="Dashboard" defaultChecked />
        <div className="tab-content bg-base-100 border-base-300 p-6"><Dashboard/></div>

        <input type="radio" name="my_tabs_3" className="tab text-xl px-6" aria-label="Usuários" />
        <div className="tab-content bg-base-100 border-base-300 p-6"><Usuarios/></div>
    </div>
    </>
    )
}