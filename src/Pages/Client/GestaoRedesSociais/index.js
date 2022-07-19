import React, {useEffect} from 'react';

import Navbar from '../../../Components/NavbarClient';
import Main from './main';

export function GestaoRedesSociais() {
    useEffect(()=>{
        document.title='Gestão de Redes Sociais'
    })

    return ( 
        <>
            <Navbar />
            <Main />
        </>     
    );
}