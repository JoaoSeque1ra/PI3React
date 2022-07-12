import React from 'react';

import NavbarDashboardLg from '../../../Components/Dashboard/NavbarDashboard/NavbarDashboardLg';
import BreadcrumbsDashboard from '../../../Components/Dashboard/Breadcrumb';
import ButtonDashboard from '../../../Components/Dashboard/Button';
import TablesClientes from '../../../Components/Dashboard/TableClientes';

export default function Main() {
    return (  
        <main className='overflow-auto d-flex'>
            <NavbarDashboardLg />

            <div className="container-fluid">
                <div className="row mt-5">

                    <div className="col-lg-10 offset-lg-1">
                        <div className="row">

                            <BreadcrumbsDashboard route2="Clientes" />

                            <div className="col-3 col-lg-4 text-end">
                                <ButtonDashboard text="Novo Cliente"/>
                            </div>

                            <div className='col-12'>
                                <div className='row pt-5'>

                                    <TablesClientes campo1="Nome" campo2="Email" campo3="Telefone" campo4="Orçamentos" campo5="Total"/>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </main>
    );
}