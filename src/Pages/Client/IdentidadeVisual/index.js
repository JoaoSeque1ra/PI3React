import React, {useEffect} from 'react';

import Navbar from '../../../Components/NavbarClient';
import Main from './main';

export function IdentidadeVisual() {
    useEffect(()=>{
        document.title='Identidade Visual'
    })

    return (  
        <>
            <Navbar />
            <Main />
        </>
    );
}
