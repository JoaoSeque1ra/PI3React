import React from 'react';

import NavbarDashboardLg from '../../../Components/Dashboard/NavbarDashboard/NavbarDashboardLg';
import ButtonDashboard from '../../../Components/Dashboard/Button';
import BreadcrumbsDashboard from '../../../Components/Dashboard/Breadcrumb';
import ClientInput from '../../../Components/Dashboard/ClientInput';

export default function Main(){
    return(
        <main className='overflow-auto d-flex'>
            <NavbarDashboardLg />

            <div className="container-fluid changeSpace">
                <div className="row mt-5">

                    <div className="col-lg-10 offset-lg-1">
                        <div className="row">
                            <BreadcrumbsDashboard route1="Novo Cliente"/>

                            <div className="col-3 col-lg-4 text-end">
                                <ButtonDashboard text="Guardar"/>
                            </div>

                            {/* Campos para preencher de novo cliente */}

                            <div className="col-12 mt-5 bg-cardsDashboard">
                                <div className="row py-4">

                                    <div className="col-12">
                                        <form className="row pt-4">

                                            <ClientInput onchange={""} value="" text="Nome:" id="nomeClient" />

                                            <ClientInput onchange={""} value="" text="Empresa:" id="empresaCLiente" />

                                            <ClientInput onchange={""} value="" text="Morada:" id="moradaCLiente" />

                                            <ClientInput onchange={""} value="" text="Cidade:" id="cidadeCLiente" />

                                            <ClientInput onchange={""} value="" text="Codigo Postal:" id="codigoPostalCliente" />
                                            
                                            <ClientInput onchange={""} value="" text="Pais:" id="paisCliente" />

                                            <ClientInput onchange={""} value="" text="Telefone:" id="telefoneCliente" />

                                            <ClientInput onchange={""} value="" text="Email:" id="emailCliente" />

                                            <ClientInput onchange={""} value="" text="NIF:" id="nifCliente" />

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