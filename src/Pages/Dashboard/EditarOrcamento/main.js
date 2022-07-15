import React from 'react';
import { useParams } from 'react-router-dom';

import NavbarDashboardLg from '../../../Components/Dashboard/NavbarDashboard/NavbarDashboardLg';
import BreadcrumbsDashboard from '../../../Components/Dashboard/Breadcrumb';
import ExportIcons from '../../../Helpers/ExportIcons';
import TablesVerOrcamento from '../../../Components/Dashboard/TableVerOrcamento';
import EstadosOrcamento from '../../../Components/Dashboard/EstadosOrcamento';

export default function Main() {
    const { idOrcamento } = useParams();
    console.log(idOrcamento)

    return (
        <main className='overflow-auto d-flex'>
            <NavbarDashboardLg />

            <div className="container-fluid changeSpace">
                <div className="row mt-5">

                    <div className="col-lg-10 offset-lg-1">
                        <div className="row">

                            <BreadcrumbsDashboard route2="Orçamento" />

                            <div className="col-4 mt-4 col-lg-4 mt-lg-0">
                                <div className="row">

                                    <div className="col-3">
                                        <div className="row text-lg-center">

                                            <div className='col-12'>
                                                <ExportIcons.ClienteBorder />
                                            </div>
                                            <div className="col-12 d-none d-lg-block mt-1">
                                                Perfil
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-3">
                                        <div className="row text-lg-center">

                                            <div className='col-12'>
                                                <ExportIcons.ClienteBorder />
                                            </div>
                                            <div className="col-12 d-none d-lg-block mt-1">
                                                Outros Orç
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-3">
                                        <div className="row text-lg-center">

                                            <div className='col-12'>
                                                <ExportIcons.ClienteBorder />
                                            </div>
                                            <div className="col-12 d-none d-lg-block mt-1">
                                                PDF
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-3">
                                        <div className="row text-lg-center">

                                            <div className='col-12'>
                                                <ExportIcons.ClienteBorder />
                                            </div>
                                            <div className="col-12 d-none d-lg-block mt-1">
                                                Enviar Email
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-12 fs-5 mt-3 mt-lg-0 mb-lg-3">
                                Detalhes do orçamento #{idOrcamento}
                            </div>

                            {/* Informações do Orçamento */}

                            <div className="col-12 mt-5 bg-cardsDashboard">
                                <div className="row py-4">

                                    <div className="col-12 col-lg-4 ps-lg-4">
                                        <div className='row'>

                                            <div className="col-5 fw-light">
                                                Data de Criação:
                                            </div>
                                            <div className='col-7'>
                                                12-07-2022
                                            </div>

                                            <div className='col-5 fw-light mt-3'>
                                                Estado:
                                            </div>
                                            <div className='col-7 mt-3'>
                                                <EstadosOrcamento estadoSelecionado="Novo"/>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-4 ps-lg-4 mt-3 mt-lg-0">
                                        <div className='row'>

                                            <div className="col-12 fw-light">
                                                Cliente:
                                            </div>
                                            <div className='col-7 fs-5 mt-lg-2'>
                                                João Sequeira
                                            </div>
                                            <div className='col-12 col-lg-8 fw-light text-break'>
                                                Rua do Bom Jesus, 45 - A 4700-005 Braga Portugal 
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-4 ps-lg-4 mt-3 mt-lg-0">
                                        <div className='row'>

                                            <div className="col-2 fw-light text-break">
                                                Email:
                                            </div>
                                            <div className='col-10 text-break'>
                                                joaoSequeira28@hotmail.com
                                            </div>

                                            <div className="col-4 fw-light text-break mt-2">
                                                Telefone:
                                            </div>
                                            <div className='col-8 text-break mt-2'>
                                                910933857
                                            </div>

                                            <div className="col-4 fw-light text-break mt-2">
                                                NIF / NIPC:
                                            </div>
                                            <div className='col-8 text-break mt-2'>
                                                186590111
                                            </div>
                                            
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Orçamento */}

                            <div className="col-12 mt-5 bg-cardsDashboard">
                                <div className="row py-4">

                                    <TablesVerOrcamento campo1="Serviço" campo2="Custo" campo3="Quantidade" campo4="Total" campo5="IVA" />

                                    <div className='offset-6 col-4 offset-lg-7 col-lg-3 text-end mt-4 fw-bold fs-5 text-break'>
                                        Subtotal: 	
                                    </div>
                                    <div className='col-2 text-end pe-4 mt-4 fw-bold fs-5'>
                                        78€
                                    </div>

                                    <div className='offset-6 col-3 offset-lg-8 col-lg-2 text-end mt-4 fw-bold fs-5 text-break'>
                                        IVA: 	
                                    </div>
                                    <div className='col-3 col-lg-2 text-end pe-4 mt-4 fw-bold fs-5'>
                                        27,25€
                                    </div>

                                    <div className='offset-3 col-7 offset-lg-5 col-lg-5 text-end mt-4 fw-bold fs-5 text-break'>
                                        Total do Orçamento:	
                                    </div>
                                    <div className='col-2 text-end pe-4 mt-4 fw-bold fs-5'>
                                        78€
                                    </div>

                                </div>
                            </div>
                    
                        </div>
                    </div>

                </div>
            </div>


        </main >
    );
}