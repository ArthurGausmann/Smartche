import Header from "../Components/Header"
import { Link } from "react-router-dom"

function Sobre() {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-base-200 py-20 px-4">
        <div className="max-w-5xl mx-auto">
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body p-10">
                    <div className="card-title mb-6"> <Link to='/'><button className="btn btn-outline">Voltar</button></Link> </div>
                    <section className="mb-10">
                        <h1 className="text-4xl font-bold mb-4">Sobre a plataforma</h1>
                        <p className="text-lg opacity-80 leading-relaxed">
                        A plataforma <strong>Smartchê</strong> foi desenvolvida com o objetivo de
                        conectar tecnologia e dados para facilitar a tomada de decisão.
                        Utilizamos ferramentas modernas de análise e visualização para
                        transformar dados complexos em informações claras e úteis.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Objetivos</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="card bg-base-200 p-6">
                                <h3 className="font-bold text-lg mb-2">Análise de dados</h3>
                                <p className="text-sm opacity-80">
                                Fornecer ferramentas que permitam interpretar dados de forma
                                rápida e eficiente.
                                </p>
                            </div>

                            <div className="card bg-base-200 p-6">
                                <h3 className="font-bold text-lg mb-2">Tecnologia acessível</h3>
                                <p className="text-sm opacity-80">
                                Criar soluções tecnológicas intuitivas que possam ser utilizadas
                                por diferentes perfis de usuários.
                                </p>
                            </div>

                            <div className="card bg-base-200 p-6">
                                <h3 className="font-bold text-lg mb-2">Inovação</h3>
                                <p className="text-sm opacity-80">
                                Explorar novas abordagens e tecnologias para melhorar processos
                                e apoiar decisões estratégicas.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-6 text-center">Equipe</h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                            <div className="card bg-base-200 shadow-md">
                                <div className="card-body items-center text-center">
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                    <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                                    </div>
                                </div>
                                <h3 className="font-bold text-lg mt-2">Arthur</h3>
                                <p className="text-sm opacity-70">Desenvolvedor</p>
                                </div>
                            </div>

                            <div className="card bg-base-200 shadow-md">
                                <div className="card-body items-center text-center">
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                    <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                                    </div>
                                </div>
                                <h3 className="font-bold text-lg mt-2">Felipe</h3>
                                <p className="text-sm opacity-70">Gerente</p>
                                </div>
                            </div>

                            <div className="card bg-base-200 shadow-md">
                                <div className="card-body items-center text-center">
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-lg mt-2">Partamon</h3>
                                    <p className="text-sm opacity-70">Gerente</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Sobre