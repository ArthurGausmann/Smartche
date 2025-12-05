import Header from "../Components/Header"
import { Link } from 'react-router-dom'

function Sobre() {
    return (
    <>
    <Header/>
    <div className="min-h-screen bg-base-200">
        <div className="flex items-center justify-center">
            <div className="mt-48 card bg-base-100 w-lg shadow-md">
                <div className="card-title mt-2 ml-2">
                    <Link to='/'><button className="btn">Voltar</button></Link>
                </div>
                <div className="card bg-base-100 w-96">
                    <div className="card-body">
                        <div className="my-3">
                            <h2 className="card-title">Sobre nós</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        </div>
                        <div className="my-3">
                            <h2 className="card-title">Objetivos</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        </div>
                        <div className="my-3">
                            <h2 className="card-title">Equipe</h2>
                            <p>Nossa equipe é composta por:</p>
                            <div className="avatar mx-2">
                                <h3>Arthur</h3>
                                <div className="w-24">
                                    <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                                </div>
                            </div>
                            <div className="avatar mx-2">
                                <h3>Felipe</h3>
                                <div className="w-24">
                                    <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                                </div>
                            </div>
                            <div className="avatar mx-2">
                                <h3>Milena</h3>
                                <div className="w-24">
                                    <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*<h1>Sobre nós</h1>
    <h3>Objetivo</h3>
    <h3>Equipe</h3>*/}
    </>
    )
}

export default Sobre