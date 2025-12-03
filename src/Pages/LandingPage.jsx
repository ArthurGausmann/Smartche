import Header from "../Components/Header";
import { Outlet, Link } from 'react-router-dom'

function LandingPage () {
    return (
    <>
        <Header/>
        
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                    <h1 className="text-5xl font-bold">Plataforma Smartchê</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <Link to="/sobre"><button className="btn btn-primary btn-lg px-7">Sobre</button></Link>
                </div>
                <img src="../assets/dashboard_armadilha.png" className="max-w-sm rounded-lg shadow-2xl" />
            </div>
        </div>
    </>
    )
}

export default LandingPage