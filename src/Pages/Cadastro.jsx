import Header from "../Components/Header"

function Cadastro() {
    return (
    <>
        <Header/>
        <div className="login">
            <input type="text" name="" id="nome_completo" placeholder="Nome Completo"/>
            <input type="text" name="" id="email" placeholder="Email"/>
            <input type="password" name="" id="senha" placeholder="Senha"/>
            <input type="password" name="" id="confirma_senha" placeholder="Confirmar Senha"/>
            <button className="btn-cadastrar">Confirmar</button>
        </div>
    </>
    )
}

export default Cadastro