import Header from "../Components/Header";
import { Outlet, Link } from 'react-router-dom'

function LandingPage () {
    return (
    <>
        <Header/>
        <Link to="/sobre">Sobre</Link>
        <Link to="/login">Login</Link>
        <button className="btn btn-primary">Test Button</button>
    </>
    )
}

export default LandingPage