import React, {useEffect} from 'react';

import Navbar from '../../../Components/NavbarClient';
import Main from './main';

export function PersonalizarGestaoRedesSociais() {
    useEffect(()=>{
        document.title='Personalizar Gestão de Redes Sociais'
    })

    return (  
        <>
            <Navbar />
            <Main />
        </>
    );
}