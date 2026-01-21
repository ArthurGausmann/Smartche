import { useState } from 'react'

function ModalUserConfig({ usuario, onEditar, onExcluir, onClose }) {
    const [novoAcesso, setNovoAcesso] = useState(usuario.acesso)
    const [excluirConfirmado, setExcluirConfirmado] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        console.log('Enviando alterações:', {
            id: usuario.id,
            novoAcesso: novoAcesso,
            usuarioOriginal: usuario
        });

        if (usuario?.id && onEditar) {
            onEditar(usuario.id, { ...usuario, acesso: novoAcesso })
        } else {
            console.error('ID do usuário não encontrado ou onEditar não definido');
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
                            <input type="text" className="input input-bordered w-full bg-base-200" value={usuario.nome || ''} disabled />
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" className="input input-bordered w-full bg-base-200" value={usuario.email || ''} disabled />
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Acesso</span>
                            </label>
                            <select className="select select-bordered w-full" value={novoAcesso}onChange={(e) => setNovoAcesso(e.target.value)} >
                                <option value="Armadilha de Pragas">Armadilha de Pragas</option>
                                <option value="Irrigação de Arroz">Irrigação de Arroz</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div>
                            {excluirConfirmado ? (
                                <div className="flex gap-2">
                                    <button type="button" className="btn btn-error" onClick={handleExcluir} >
                                        Confirmar Exclusão
                                    </button>
                                    <button type="button" className="btn btn-ghost" onClick={handleCancelarExcluir}>Cancelar</button>
                                </div>
                            ) : (
                                <button type="button" className="btn btn-outline btn-error" onClick={handleExcluir}>Excluir Usuário</button>
                            )}
                        </div>

                        <div className="flex gap-3">
                            <button type="button" className="btn btn-outline" onClick={onClose}>Cancelar</button>
                            <button type="submit" className="btn btn-primary" disabled={novoAcesso === usuario.acesso}>Salvar Alterações</button>
                        </div>
                    </div>
                </form>
            </div>
            
            <div className="modal-backdrop" onClick={onClose}></div>
        </div>
    )
}

export default ModalUserConfig