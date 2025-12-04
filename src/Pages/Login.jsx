import Header from "../Components/Header"
import { Link } from 'react-router-dom'

function Login() {
    return (
    <>
    <Header/>
    <div className="min-h-screen bg-base-200">
        <div className="flex items-center justify-center">
            <div className="mt-48 card bg-base-100 w-md shadow-sm">
                <div className="card-body items-center text-center py-12">
                    <form className="space-y-4">
                        <div className="form-control">
                            <input className="input pr-28" type="text" name="" id="email" placeholder="Email"/>
                        </div>
                        <div className="form-control">
                            <input className="input pr-28" type="password" name="" id="senha" placeholder="Senha"/>
                        </div>
                        <div className="form-control">
                            <button className="btn btn-outline btn-primary mx-2">Entrar</button>
                        </div>
                        <div className="form-control">
                            <Link to="/cadastro"><button className="btn btn-outline btn-primary mx-2">Cadastrar</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    </div>
    </>
    )
}

export default Login