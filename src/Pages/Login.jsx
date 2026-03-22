import Header from "../Components/Header"
import { Link } from 'react-router-dom'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { authService } from "../services/authService.js"
// import toast, { Toaster } from "react-hot-toast"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [erro, setErro] = useState("")

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        try {
            const user = authService.login(email, password)

            // Redireciona com base no tipo
            if (user.platform_role === "ADMIN") {
                navigate("/admin")
            } else {
                navigate("/dashboard")
            }

        } catch (err) {
            setErro(err.message)
        }
    }

    return (
    <>
    <Header/>
    <div className="min-h-screen bg-base-200">
        <div className="flex items-center justify-center">
            <div className="mt-40 card bg-base-100 w-sm lg:w-lg shadow-sm">
                <div className="card-title mt-2 ml-2">
                    <Link to='/'><button className="btn">Voltar</button></Link>
                </div>
                <div className="card-body items-center text-center py-12">
                    <form className="space-y-4" onSubmit={handleLogin}>
                        <h2 className="text-3xl font-bold">Entre na sua conta</h2>

                        {erro && (<p className="text-error text-sm">{erro}</p>)}

                        <div className="form-control">
                            <input className="input pr-28" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-control">
                            <input className="input pr-28" type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div className="form-control">
                            <button className="btn btn-outline btn-primary mx-2" type="submit">Entrar</button>
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