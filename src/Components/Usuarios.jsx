import { useState, useEffect } from 'react'
import { usersMock } from '../mocks/usersMock'
import { authService } from '../services/authService'
import { userService } from '../services/userService'
import ModalAddUser from '../Components/ModalAddUser'
import ModalUserConfig from './ModalUserConfig'

export default function Usuarios() {
    const [usuarios, setUsuarios] = useState([])
    const [usuarioEditando, setUsuarioEditando] = useState(null)
    const [modalAberto, setModalAberto] = useState(false)

    useEffect(() => {
        const userLogado = authService.getUser()
        if (!userLogado) return

        const todosUsuarios = userService.getUsers()

        const filtrados = todosUsuarios.filter(
            u => u.tenant.tenant_id === userLogado.tenant.tenant_id
        )
        setUsuarios(filtrados)
    }, [])

    // Adicionar usuário
    const handleCadastro = (novoUsuario) => {
        const userLogado = authService.getUser()
        const todosUsuarios = userService.getUsers()

        const novoId = usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id)) + 1 : 1;

        const usuario = {
            id: novoId,
            name: novoUsuario.name,
            email: novoUsuario.email,
            password_hash: "mock",
            platform_role: novoUsuario.platform_role,
            is_active: true,
            tenant: {
                tenant_id: userLogado.tenant.tenant_id,
                tenant_role: novoUsuario.tenant_role
            }
        };

        const atualizados = userService.addUser(usuario)
        const filtrados = atualizados.filter(
            u => u.tenant.tenant_id === userLogado.tenant.tenant_id
        )
        setUsuarios(filtrados)
        console.log('Adicionado usuário: ', novoId);
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
        setUsuarios(prevUsuarios => {
            const atualizados = prevUsuarios.map(usuario =>
                usuario.id === id ? novosDados : usuario
            )
            console.log("Usuarios atualizados:", atualizados)
            return atualizados
        })
    }

    // Função para excluir um usuário
    const handleExcluirUsuario = (id) => {
        console.log('Excluindo usuário:', id);
        const atualizados = userService.deleteUser(id)
        const userLogado = authService.getUser()
        const filtrados = atualizados.filter(
            u => u.tenant.tenant_id === userLogado.tenant.tenant_id
        )
        setUsuarios(filtrados)
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
                            <th>Email</th>
                            <th>Função</th>
                            <th>Tipo</th>
                            <th>Status</th>
                            <th>Configurações</th>
                        </tr>
                        </thead>
                        <tbody> 
                            {usuarios.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="text-center py-8 text-base-content/70">Nenhum usuário cadastrado</td>
                                </tr>
                            )
                            : usuarios.map((usuario) => (
                                <tr key={usuario.id}>
                                    <td>{usuario.name}</td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.platform_role}</td>
                                    <td>{usuario.tenant.tenant_role}</td>
                                    <td>{usuario.is_active ? "Ativo" : "Inativo"}</td>
                                    <td><button className="btn btn-sm btn-outline hover:bg-base-200" onClick={() => handleAbrirConfig(usuario)}>Config</button></td>
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