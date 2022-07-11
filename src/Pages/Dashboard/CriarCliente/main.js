import React from 'react';

import NavbarDashboardLg from '../../../Components/Dashboard/NavbarDashboard/NavbarDashboardLg';
import ButtonDashboard from '../../../Components/Dashboard/Button';
import BreadcrumbsDashboard from '../../../Components/Dashboard/Breadcrumb';
import PacksInput from '../../../Components/Dashboard/PacksInput';

export default function Main(){
    return(
        <main className='overflow-auto d-flex'>
            <NavbarDashboardLg />

            <div className="container-fluid">
                <div className="row mt-5">

                    <div className="col-lg-10 offset-lg-1">
                        <div className="row">
                            <BreadcrumbsDashboard route1="Novo Cliente"/>

                        </div>

                    </div>

                </div>
            </div>
        </main>

    );
}