import React from 'react';

import NavbarDashboardLg from '../../../Components/Dashboard/NavbarDashboard/NavbarDashboardLg';
import BreadcrumbsDashboard from '../../../Components/Dashboard/Breadcrumb';
import ButtonDashboard from '../../../Components/Dashboard/Button';
import Tables from '../../../Components/Dashboard/Table/Index';

export default function Main() {
    return (  
        <main className='overflow-auto d-flex'>
            <NavbarDashboardLg />

            <div class="container-fluid">
                <div class="row mt-5">

                    <div class="col-lg-10 offset-lg-1">
                        <div class="row">

                            <BreadcrumbsDashboard route2="Clientes" />

                            <div className="col-3 col-lg-4 text-end">
                                <ButtonDashboard text="Novo Cliente"/>
                            </div>

                            <div className='col-12'>
                                <div className='row pt-5'>

                                    <Tables campo1="Nome" campo2="Email" campo3="Telefone" campo4="Orçamentos" campo5="Total" campo6="Ações" />

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </main>
    );
}