import React from 'react';

import NavbarDashboardLg from '../../../Components/Dashboard/NavbarDashboard/NavbarDashboardLg';
import BreadcrumbsDashboard from '../../../Components/Dashboard/Breadcrumb';
import ButtonDashboard from '../../../Components/Dashboard/Button';
import Tables from '../../../Components/Dashboard/TableOrcamentos/Index';

export default function Main() {
    return (  
        <main className='overflow-auto d-flex'>
            <NavbarDashboardLg />

            <div className="container-fluid">
                <div className="row mt-5">

                    <div className="col-lg-10 offset-lg-1">
                        <div className="row">

                            <BreadcrumbsDashboard route2="Orçamentos"/>

                            <div className="col-3 col-lg-4 text-end">
                                <ButtonDashboard text="Novo Orçamento" to="/dashboard"/>
                            </div>

                            <div className="col-12">
                                <div className="row pt-5">

                                    <Tables campo1="Orçamento" campo2="Nome" campo3="Data" campo4="Estado" campo5="Total" campo6="Ações"/>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </main>
    );
}