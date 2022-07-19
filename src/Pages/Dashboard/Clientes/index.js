import React, {useEffect} from 'react';

import NavbarDashboardMd from '../../../Components/Dashboard/NavbarDashboard/NavbarDashboardMd';
import Main from './main';

export function Clientes() {
    useEffect(()=>{
        document.title='Dashboard - Ver Clientes'
    })

    return (  
        <>
            <NavbarDashboardMd />
            <Main />
        </>
    );
}