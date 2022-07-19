import React, {useEffect} from 'react';

import NavbarDashboardMd from '../../../Components/Dashboard/NavbarDashboard/NavbarDashboardMd';
import Main from '../EditarCliente/main';

export function EditarCliente() {
    useEffect(()=>{
        document.title='Dashboard - Editar Cliente'
    })

    return (  
        <>
            <NavbarDashboardMd />
            <Main />
        </>
    );
}