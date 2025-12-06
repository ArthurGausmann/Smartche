import Header from "../Components/Header"
import Sidebar from "../Components/Sidebar"
import { Link } from 'react-router-dom'

function DashboardPage() {
    return (
    <>
    <Header/>
    <Sidebar/>
    <Link to='/'><button className="btn">Voltar</button></Link>
    </>
    )
}

export default DashboardPage