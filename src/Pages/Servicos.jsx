import Header from '../Components/Header'
import dashboardExemplo from "../assets/dashboard_armadilha.png";
import { Link } from 'react-router-dom'


function Servicos() {
    return (
    <>
    <Header/>
    <div className="min-h-screen bg-base-200">
        <Link to='/'><button className="btn btn-active m-2 lg:hidden">Voltar</button></Link>
        <div className="hero bg-base-200 min-h-auto">
            <div className="hero-content flex-col lg:flex-row my-10 lg:my-20">
                <img
                src={dashboardExemplo}
                className="max-w-full lg:max-w-lg rounded-sm shadow-xl lg:mr-10"
                />
                <div>
                <h1 className="text-4xl font-bold">Armadilha de pragas - Partamon</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary"><a href='https://partamon.com/project/desenvolvimento-de-redes-de-sensores-sem-fio-para-o-manejo-integrado-de-pragas/'>Conheça</a></button>
                </div>
            </div>
        </div>

        <div className="hero bg-base-200 min-h-auto">
            <div className="hero-content flex-col lg:flex-row-reverse lg:my-20">
                <img
                src={dashboardExemplo}
                className="max-w-full lg:max-w-lg rounded-sm shadow-xl my-10 lg:ml-10"
                />
                <div>
                <h1 className="text-4xl font-bold">Irrigação automática de arroz - XYZ</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Conheça</button>
                </div>
            </div>
        </div>
    </div>    
    </>
    )
}

export default Servicos