import Dashboard from './Dashboard'
import Usuarios from './Usuarios';

function Sidebar() {
    return (
    <>
    <div className="tabs tabs-lift">
        <input type="radio" name="my_tabs_3" className="tab" aria-label="Dashboard" />
        <div className="tab-content bg-base-100 border-base-300 p-6"><Dashboard/></div>

        <input type="radio" name="my_tabs_3" className="tab" aria-label="Usuários" defaultChecked />
        <div className="tab-content bg-base-100 border-base-300 p-6"><Usuarios/></div>
    </div>
    </>
    )
}

export default Sidebar