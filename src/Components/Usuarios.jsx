import { useState } from 'react'
import ModalAddUser from '../Components/ModalAddUser'

function Usuarios() {
    return (
    <>
    <h1 className="text-2xl font-bold ml-2 mb-4">Gerenciar os usuários</h1>
    <div className="flex w-full flex-col lg:flex-row">
        <div className="card bg-base-300 rounded-box grid h-auto grow">
            <div className="card-body">
                <div className="card-title">
                    <h1>Armadilha de pragas</h1>
                    <ModalAddUser />
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
                    <ModalAddUser />
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