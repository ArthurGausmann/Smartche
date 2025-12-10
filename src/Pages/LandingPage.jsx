import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { Link } from 'react-router-dom'
import dashboardExemplo from "../assets/dashboard_armadilha.png"
import bgFarm from "../assets/farm-view-bg.jpg"

function LandingPage () {
    

    return (
    <>
    <Header/>
    <div className="min-h-screen bg-base-200" style={{ backgroundImage:bgFarm,}}>
        <div className="hero bg-base-200 min-h-auto">
            <div className="hero-content flex-col lg:flex-row mt-32">
                <div>
                    <h1 className="text-3xl lg:text-5xl font-bold">Plataforma Smartchê</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <div className="flex justify-center space-x-8">
                        <Link to="/sobre"><button className="btn btn-primary btn-lg px-7">Sobre</button></Link>
                        <Link to="/servicos"><button className="btn btn-primary btn-lg px-7">Serviços</button></Link>                        
                    </div>
                </div>
                <div>
                    <h2 className="text-xl lg:text-3xl font-bold mb-2">Exemplo dashboard</h2>
                    <img src={dashboardExemplo} className="max-w-full lg:max-w-xl rounded-sm shadow-2xl" />
                </div>    
            </div>
        </div>
    </div>
    <Footer />
    </>
    )
}

export default LandingPage