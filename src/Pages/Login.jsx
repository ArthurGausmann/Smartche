import Header from "../Components/Header"
import { Link } from 'react-router-dom'

function Login() {
    return (
    <>
        <Header/>
        <div className="login">
            <input className="input" type="text" name="" id="email" placeholder="Email"/>
            <input className="input" type="password" name="" id="senha" placeholder="Senha"/>
            <button className="btn-entrar">Entrar</button>
            <Link to="/cadastro"><button className="btn-cadastrar">Cadastrar</button></Link>
        </div>
    </>
    )
}

export default Login