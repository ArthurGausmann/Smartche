import { useState } from 'react'

export default function ModalUserConfig({ usuario, onEditar, onExcluir, onClose }) {
    const [novoPlatformRole, setNovoPlatformRole] = useState(usuario.platform_role)
    const [novoTenantRole, setNovoTenantRole] = useState(usuario?.tenant?.tenant_role || "USER")
    const [novoStatus, setNovoStatus] = useState(usuario.is_active)
    
    const [excluirConfirmado, setExcluirConfirmado] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (usuario?.id && onEditar) {
            const usuarioAtualizado = {
                ...usuario,
                platform_role: novoPlatformRole,
                is_active: novoStatus,
                tenant: {
                    ...(usuario.tenant || {}),
                    tenant_role: novoTenantRole
                }
            }

            onEditar(usuario.id, usuarioAtualizado)
        } else {
            console.error("ID do usuário não encontrado ou onEditar não definido")
        }
        onClose()
    }

    const handleExcluir = () => {
        if (excluirConfirmado && usuario?.id && onExcluir) {
            onExcluir(usuario.id)
            onClose()
        } else if (!excluirConfirmado) {
            setExcluirConfirmado(true)
        }
    }

    const handleCancelarExcluir = () => {
        setExcluirConfirmado(false)
    }

    return (
        <div className="modal modal-open">
            <div className="modal-box w-11/12 sm:max-w-lg p-6">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg">Configurar Usuário</h3>
                    <button className="btn btn-sm btn-circle btn-ghost" onClick={onClose}>✕</button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="space-y-4 mb-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Nome</span>
                            </label>
                            <input type="text" className="input input-bordered w-full bg-base-200" value={usuario.name || ''} disabled />
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" className="input input-bordered w-full bg-base-200" value={usuario.email || ''} disabled />
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Função</span>
                            </label>
                            <select className="select select-bordered w-full" value={novoPlatformRole} onChange={(e) => setNovoPlatformRole(e.target.value)} >
                                <option value="STANDARD">Padrão</option>
                                <option value="ADMIN">Administrador</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Tipo</span>
                            </label>
                            <select className="select select-bordered w-full" value={novoTenantRole} onChange={(e) => setNovoTenantRole(e.target.value)} >
                                <option value="USER">Usuário</option>
                                <option value="MANAGER">Gerente</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Status</span>
                            </label>
                            <select className="select select-bordered w-full" value={novoStatus} onChange={(e) => setNovoStatus(e.target.value === "true")} >
                                <option value="true">Ativo</option>
                                <option value="false">Inativo</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center gap-4">
                        <div className="min-w-[220px]">
                            {excluirConfirmado ? (
                                <div className="flex gap-2">
                                    <button  type="button"  className="btn btn-error btn-sm whitespace-nowrap" onClick={handleExcluir} >
                                        Confirmar
                                    </button>
                                    <button type="button" className="btn btn-ghost btn-sm"onClick={handleCancelarExcluir}>
                                        Cancelar
                                    </button>
                                </div>
                            ) : (
                                <button type="button" className="btn btn-outline btn-error btn-sm w-full sm:w-auto"onClick={handleExcluir}>
                                    Excluir Usuário
                                </button>
                            )}
                        </div>

                        <div className="flex gap-3 justify-end">
                            <button type="button" className="btn btn-outline"onClick={onClose}>
                                Cancelar
                            </button>

                            <button type="submit" className="btn btn-primary"disabled={ 
                                    novoPlatformRole === usuario.platform_role && 
                                    novoTenantRole === usuario?.tenant?.tenant_role && 
                                    novoStatus === usuario.is_active 
                                }>
                                Salvar Alterações
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            
            <div className="modal-backdrop" onClick={onClose}></div>
        </div>
    )
}