import { useState } from 'react'
import ModalAddUser from '../Components/ModalAddUser'

function Usuarios() {
    const [usuarios, setUsuarios] = useState([])

    const handleCadastro = (novoUsuario) => {
        const novoId = usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id)) + 1 : 1;

        const usuario = {
            ...novoUsuario,
            id: novoId
        };

        setUsuarios([...usuarios, usuario]);
        alert(`Usuário ${novoUsuario.nome} cadastrado com sucesso!`)
    }

    return (
    <>
        <div className='flex justify-between itens-center mb-6'>
            <h1 className="text-2xl font-bold ml-2 mb-4">Gerenciar os usuários</h1>
            <ModalAddUser onCadastro={handleCadastro}/>
        </div>

        <div className="card bg-base-300 rounded-box">
            <div className="card-body p-0">
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Acesso</th>
                            <th>Configurações</th>
                        </tr>
                        </thead>
                        <tbody> 
                            {usuarios.length === 0 ? (
                                <tr>
                                    <td colSpan="3" className="text-center py-8 text-base-content/70">Nenhum usuário cadastrado</td>
                                </tr>
                            )
                            : usuarios.map((usuario) => (
                                <tr key={usuario.id}>
                                    <td>{usuario.nome}</td> 
                                    <td><span>{usuario.acesso}</span></td>
                                    <td><button className="btn btn-sm btn-outline hover:bg-base-200">Config</button></td>
                                </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
    )
}

export default Usuarios