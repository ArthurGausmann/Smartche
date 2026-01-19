import { useState } from 'react'

function ModalAddUser({ onCadastro }) {
    const [formUser, setFormUser] = useState({
        nome:'',
        email:'',
        acesso: 'Armadilha de Pragas'
    });

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
        setFormUser({
            nome:'',
            email:'',
            acesso: 'Armadilha de Pragas'
        });;
    }

    const handleChange = (e) => {
        setFormUser({...formUser, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formUser.nome.trim() || !formUser.email.trim() || !formUser.acesso.trim()) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        console.log("Novo usuário: ", formUser);

        if (onCadastro) {
            onCadastro(formUser);
        }

        handleClose();
    }

    return (
    <>
    <button className="btn btn-primary ml-auto" onClick={handleOpen}>Adicionar</button>

    {isOpen && (
    <div className="modal modal-open">
        <div className="modal-box w-11/12 sm:max-w-lg p-6">
            <div className="mb-4">
                <h3 className="font-bold text-lg text-left">Cadastrar novo usuário</h3>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="space-y-4 mb-6">
                    <div className="form-control">
                        <input type="text" name="nome" placeholder="Nome" className="input input-bordered w-full"
                        value={formUser.nome} onChange={handleChange} required autoFocus />
                    </div>
                    <div className="form-control">
                        <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" 
                        value={formUser.email} onChange={handleChange} required/>
                    </div>
                    <div className='form-control'>
                        <select name="acesso" className='select select-bordered w-full' 
                        value={formUser.acesso} onChange={handleChange} required>
                            <option value="" disabled>Selecione o tipo de acesso</option>
                            <option value="Armadilha de Pragas">Armadilha de Pragas</option>
                            <option value="Irrigação de Arroz">Irrigação de Arroz</option>
                        </select>
                    </div>
                </div>

                <div className="modal-action flex-row gap-3">
                    <button type="submit" className="btn btn-primary">Cadastrar</button>
                    <button type="button" className="btn btn-outline" onClick={handleClose}>Cancelar</button>
                </div>
            </form>
        </div>

        <div className="modal-backdrop" onClick={handleClose}></div>
    </div>
    )}
    </>
    )
}

export default ModalAddUser