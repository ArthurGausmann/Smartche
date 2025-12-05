import Header from "../Components/Header"
import { Link } from 'react-router-dom'

function Sobre() {
    return (
    <>
    <Header />
    <div className="min-h-screen bg-base-200">
        <div className="flex items-center justify-center">
            <div className="mt-48 card bg-base-100 w-full max-w-3xl shadow-md">
                <div className="card-body">
                    <div className="card-title">
                        <Link to='/'><button className="btn">Voltar</button></Link>
                    </div>
                    <div className="my-3">
                        <h2 className="card-title text-2xl mb-2">Sobre nós</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    </div>
                    <div className="my-3">
                        <h2 className="card-title text-2xl mb-2">Objetivos</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    </div>
                    <div className="my-3">
                        <h2 className="card-title text-2xl mb-4">Equipe</h2>
                        <div className="flex flex-wrap justify-center gap-8">
                            <div className="flex flex-col items-center">
                                <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                                    </div>
                                </div>
                                <h3 className="font-bold mt-2">Arthur</h3>
                                <p className="text-sm opacity-70">Desenvolvedor</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                                    </div>
                                </div>
                                <h3 className="font-bold mt-2">Felipe</h3>
                                <p className="text-sm opacity-70">Gerente</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                                    </div>
                                </div>
                                <h3 className="font-bold mt-2">Milena</h3>
                                <p className="text-sm opacity-70">Gerente</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Sobre