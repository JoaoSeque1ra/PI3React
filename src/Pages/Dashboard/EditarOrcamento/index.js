import React, { useEffect } from 'react';

import NavbarDashboardMd from '../../../Components/Dashboard/NavbarDashboard/NavbarDashboardMd';
import Main from './main';

export function EditarOrcamento() {
    useEffect(()=>{
        document.title='Dashboard - Editar Orçamento'
    })
    
    return (  
        <>
            <NavbarDashboardMd />
            <Main />
        </>
    );
}