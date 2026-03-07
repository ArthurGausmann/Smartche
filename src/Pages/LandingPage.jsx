import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { Link } from 'react-router-dom'
import dashboardExemplo from "../assets/dashboard_armadilha.png"
import bgFarm from "../assets/farm-view-bg.jpg"

function LandingPage () {
    return (
    <>
    <Header/>
    <div className="min-h-screen flex flex-col items-center justify-start text-center relative" 
    style={{backgroundImage: `url(${bgFarm})`, backgroundSize: "cover", backgroundPosition: "center", }} >
    <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center mt-24 px-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-white">Plataforma Smartchê</h1>
            <p className="py-6 text-white">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>

            <div className="flex gap-6 mt-6">
                <Link to="/sobre">
                    <button className="btn btn-primary btn-lg px-7">Sobre</button>
                </Link>
                <Link to="/servicos">
                    <button className="btn btn-primary btn-lg px-7">Serviços</button>
                </Link>
            </div>

            <div className="my-20 flex flex-col items-center">
                <h2 className="text-xl lg:text-3xl font-bold mb-4 text-white">Exemplo dashboard</h2>
                <img src={dashboardExemplo} className="max-w-full lg:max-w-4xl rounded-sm shadow-2xl" alt="Exemplo dashboard" />
            </div>
        </div>
    </div>
    <Footer />
    </>
    )
}

export default LandingPage