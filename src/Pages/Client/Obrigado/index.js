import React, {useEffect} from 'react';

import Navbar from '../../../Components/NavbarClient';
import Main from './main';

export function Obrigado() {
    useEffect(()=>{
        document.title='Orçamento - Obrigado'
    })

    return (  
        <>
            <Navbar />
            <Main />
        </>
    );
}