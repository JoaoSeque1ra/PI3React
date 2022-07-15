import React from 'react';

import NavbarDashboardLg from '../../../Components/Dashboard/NavbarDashboard/NavbarDashboardLg';
import ButtonDashboard from '../../../Components/Dashboard/Button';
import BreadcrumbsDashboard from '../../../Components/Dashboard/Breadcrumb';
import { useParams } from 'react-router-dom';

export default function Main(){
    const {idClient} = useParams()
    console.log(idClient)

    return(
        <main className='overflow-auto d-flex'>
            <NavbarDashboardLg />

            <div className="container-fluid changeSpace">
                <div className="row mt-5">

                    <div className="col-lg-10 offset-lg-1">
                        <div className="row">
                            <BreadcrumbsDashboard route1="Editar Cliente"/>

                            <div className="col-3 col-lg-4 text-end">
                                <ButtonDashboard text="Guardar"/>
                            </div>

                            {/* Campos editar cliente */}

                            <div className="col-12 mt-5 bg-cardsDashboard">
                                <div className="row py-4">

                                    <div className="col-12">
                                        <form className="row pt-4">

                                            <div className="col-lg-1 mb-3 pb-3 ms-5">
                                                <label for="nomeCLiente" class="form-label">Nome:</label>
                                            </div>
                                            <div className="col-lg-10">
                                                <input type="nomeCLiente" className="form-control" id="nomeCLiente" aria-describedby="nomeCliente" value="Marcelo Machado"/>
                                            </div>

                                            <div className="W-100"></div>

                                            <div className="col-lg-1 mb-3 pb-3 ms-5">
                                                <label for="empresaCLiente" className="form-label">Empresa:</label>
                                            </div>
                                            <div className="col-lg-10">
                                                <input type="empresaCLiente" className="form-control" id="empresaCLiente" aria-describedby="empresaCLiente" value=""/>
                                            </div>

                                            <div className="W-100"></div>

                                            <div className="col-lg-1 mb-3 pb-3 ms-5">
                                                <label for="moradaCLiente" className="form-label">Morada:</label>
                                            </div>
                                            <div className="col-lg-10">
                                                <input type="moradaCLiente" className="form-control" id="moradaCLiente" aria-describedby="moradaCLiente" value="Rua do Bom Jesus, 45 - A"/>
                                            </div>

                                            <div className="w-100"></div>

                                            <div className="col-lg-1 mb-3 pb-3 ms-5">
                                                <label for="cidadeCLiente" className="form-label">Cidade:</label>
                                            </div>
                                            <div className="col-lg-10">
                                                <input type="cidadeCLiente" className="form-control" id="cidadeCLiente" aria-describedby="cidadeCLiente" value="Braga"/>
                                            </div>

                                            <div className="w-100"></div>

                                            <div className="col-lg-1 mb-3 pb-3 ms-5">
                                                <label for="codigoPostalCliente" className="form-label">Codigo Postal:</label>
                                            </div>
                                            <div className="col-lg-10">
                                                <input type="codigoPostalCliente" className="form-control" id="codigoPostalCliente" aria-describedby="codigoPostalCliente" value="4700-005"/>
                                            </div>

                                            <div className="w-100"></div>

                                            <div className="col-lg-1 mb-3 pb-3 ms-5">
                                                <label for="paisCliente" className="form-label">Pais:</label>
                                            </div>
                                            <div className="col-lg-10">
                                                <input type="paisCliente" className="form-control" id="paisCliente" aria-describedby="paisCliente" value="Portugal"/>
                                            </div>

                                            <div className="w-100"></div>

                                            <div className="col-lg-1 mb-3 pb-3 ms-5">
                                                <label for="telefoneCliente" className="form-label">Telefone:</label>
                                            </div>
                                            <div className="col-lg-10">
                                                <input type="telefoneCliente" className="form-control" id="telefoneCliente" aria-describedby="telefoneCliente" value="964342988"/>
                                            </div>

                                            <div className="w-100"></div>

                                            <div className="col-lg-1 mb-3 pb-3 ms-5">
                                                <label for="emailCliente" className="form-label">Email:</label>
                                            </div>
                                            <div className="col-lg-10">
                                                <input type="emailCliente" className="form-control" id="emailCliente" aria-describedby="emailCliente" value="mmachado@gmail.com"/>
                                            </div>

                                            <div className="w-100"></div>

                                            <div className="col-lg-1 mb-3 pb-3 ms-5">
                                                <label for="nifCliente" className="form-label">Nif:</label>
                                            </div>
                                            <div className="col-lg-10">
                                                <input type="nifCliente" className="form-control" id="nifCliente" aria-describedby="nifCliente" value="186590111"/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}