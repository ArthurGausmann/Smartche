import Header from "../Components/Header"
import { Link } from 'react-router-dom'

function Cadastro() {
    return (
    <>
    <Header/>
    <div className="min-h-screen bg-base-200">
        <div className="flex items-center justify-center">
            <div className="mt-40 card bg-base-100 w-sm lg:w-lg shadow-sm">
                <div className="card-title mt-2 ml-2">
                    <Link to='/login'><button className="btn">Voltar</button></Link>
                </div>
                <div className="card-body items-center text-center py-12">
                    <form className="space-y-4">
                        <h2 className="text-3xl font-bold">Realize seu cadastro</h2>
                        <div className="form-control">
                            <input className="input pr-28" type="text" name="" id="nome-completo" placeholder="Nome Completo"/>
                        </div>
                        <div className="form-control">
                            <input className="input pr-28" type="text" name="" id="email" placeholder="Email"/>
                        </div>
                        <div className="form-control">
                            <input className="input pr-28" type="text" name="" id="senha" placeholder="Senha"/>
                        </div>
                        <div className="form-control">
                            <input className="input pr-28" type="password" name="" id="confirma-senha" placeholder="Confirmar Senha"/>
                        </div>
                        <div className="form-control">
                            <button className="btn btn-outline btn-primary mx-2">Confirmar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Cadastro