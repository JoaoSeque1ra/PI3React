import React, { useEffect } from 'react';

import Navbar from '../../../Components/NavbarClient';
import Main from './main';

export function ComunicacaoConsultoria() {
    useEffect(()=>{
        document.title ="Comunicação e Consultoria"
    })
    
    return (  
        <>
            <Navbar />
            <Main />
        </>
    );
}