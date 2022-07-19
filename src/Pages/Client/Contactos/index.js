import React, {useEffect} from 'react';

import Navbar from '../../../Components/NavbarClient';
import Main from './main';

export function Contactos() {
    useEffect(()=>{
        document.title='Contactos'
    })

    return (  
        <>
            <Navbar />
            <Main />
        </>
    );
}