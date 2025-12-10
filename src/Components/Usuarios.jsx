import { useState} from 'react'

function Usuarios() {
    return (
    <>
    <h1 className="text-2xl font-bold ml-2 mb-4">Gerenciar os usuários</h1>
    <div className="flex w-full flex-col lg:flex-row">
        <div className="card bg-base-300 rounded-box grid h-auto grow">
            <div className="card-body">
                <div className="card-title">
                    <h1>Armadilha de pragas</h1>
                    <button className="btn btn-primary ml-auto" onClick={()=>document.getElementById('modalAdd').showModal()}>Adicionar</button>
                    <dialog id="modalAdd" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg mb-2">Cadastrar novo usuário</h3>

                            <form onSubmit={''}>
                                <div className='space-y-4'>
                                    <div className='form-control'>
                                        <input type="text" name="nome" id="" placeholder='Nome' className="input input-bordered w-full" />
                                    </div>
                                    <div className='form-control'>
                                        <input type="email" name="email" id="" placeholder='Email' className="input input-bordered w-full" />
                                    </div>

                                </div>
                            </form>

                            <div className="modal-action">
                                <button type='button' className='btn btn-warning' onClick={''}>Cancelar</button>
                                <button type='submit' className='btn btn-primary' onClick={''}>Cadastrar</button>
                            </div>
                        </div>
                    </dialog>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Nome</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td><button>Config</button></td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td><button>Config</button></td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td><button>Config</button></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="card bg-base-300 rounded-box grid h-auto grow">
            <div className="card-body">
                <div className="card-title">
                    <h1>Irrigação de arroz</h1>
                    <button className="btn btn-primary ml-auto" onClick={()=>document.getElementById('modalAdd').showModal()}>Adicionar</button>
                    <dialog id="modalAdd" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Cadastrar novo usuário</h3>
                            <p className="py-4">Press ESC key or click the button below to close</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Fechar</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
                
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Nome</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td><button>Config</button></td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td><button>Config</button></td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td><button>Config</button></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Usuarios