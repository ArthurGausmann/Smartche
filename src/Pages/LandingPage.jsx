import Header from "../Components/Header";
import { Outlet, Link } from 'react-router-dom'

function LandingPage () {
    return (
    <>
        <Header/>
        <Link to="/sobre">Sobre</Link>
        <Link to="/login">Login</Link>
    </>
    )
}

export default LandingPage