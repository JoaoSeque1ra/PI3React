import React, { useEffect } from 'react';

import NavbarDashboardMd from '../../../Components/Dashboard/NavbarDashboard/NavbarDashboardMd';
import Main from './main';

export function ComunicacaoConsultoria() {
    useEffect(()=>{
        document.title='Dashboard - Comunicação e Consultoria'
    })
    return (  
        <>
            <NavbarDashboardMd />
            <Main />
        </>
    );
}