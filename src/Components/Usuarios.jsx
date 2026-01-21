import { useState } from 'react'
import ModalAddUser from '../Components/ModalAddUser'
import ModalUserConfig from './ModalUserConfig'

function Usuarios() {
    const [usuarios, setUsuarios] = useState([])
    const [usuarioEditando, setUsuarioEditando] = useState(null)
    const [modalAberto, setModalAberto] = useState(false)

    // Adicionar usuário
    const handleCadastro = (novoUsuario) => {
        const novoId = usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id)) + 1 : 1;

        const usuario = {
            ...novoUsuario,
            id: novoId
        };

        setUsuarios([...usuarios, usuario]);
        console.log('Adicionado usuário:', novoId);
    }

    // Função para abrir o modal de configurações
    const handleAbrirConfig = (usuario) => {
        setUsuarioEditando(usuario)
        setModalAberto(true)
    }

    // Função para fechar o modal
    const handleFecharModal = () => {
        setModalAberto(false)
        setUsuarioEditando(null)
    }

    // Função para editar um usuário
    const handleEditarUsuario = (id, novosDados) => {
        console.log('Editando usuário:', id);

        console.log('Recebendo edição:', {
            id,
            novosDados,
            usuariosAntes: prevUsuarios,
            usuariosDepois: prevUsuarios.map(usuario => 
                usuario.id === id ? { ...usuario, ...novosDados } : usuario
            )
        });

        setUsuarios(prevUsuarios => 
            prevUsuarios.map(usuario => 
                usuario.id === id ? { ...usuario, ...novosDados } : usuario
            )
        )
    }

    // Função para excluir um usuário
    const handleExcluirUsuario = (id) => {
        console.log('Excluindo usuário:', id);
        
        // Remove o usuário da lista
        setUsuarios(prevUsuarios => 
            prevUsuarios.filter(usuario => usuario.id !== id)
        )
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
                                    <td><button className="btn btn-sm btn-outline hover:bg-base-200" onClick={handleAbrirConfig}>Config</button></td>
                                </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        {modalAberto && usuarioEditando && (
                <ModalUserConfig usuario={usuarioEditando} onEditar={handleEditarUsuario} onExcluir={handleExcluirUsuario} onClose={handleFecharModal}/>
        )}
    </>
    )
}

export default Usuarios