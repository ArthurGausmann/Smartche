import { useEffect, useState } from "react"
import { authService } from "../services/authService"
import Header from "../Components/Header"
import Navbar from "../Components/Navbar"

export default function Admin() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const usuarioLogado = authService.getUser()
        setUser(usuarioLogado)
    }, [])

    return (
    <>
    <Header/>
    <div className="flex justify-end items-center p-4">
        <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col text-sm leading-tight text-right">
                <span className="font-medium">{user?.name}</span>
                <span className="opacity-70">{user?.email}</span>
            </div>
            <button className="btn btn-outline btn-sm" onClick={() => { authService.logout(); window.location.href = "/login" }} > Sair </button>
        </div>
    </div>
    <Navbar/>
    </>
    )
}