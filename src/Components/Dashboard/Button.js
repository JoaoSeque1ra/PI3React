import React from 'react';
import { Link } from 'react-router-dom';

import ExportIcons from '../../Helpers/ExportIcons';

export default function ButtonDashboard({text, to}) {
    if(to != null) {
        return(
            <Link className="btn btn-gray btn-lg rounded-0 text-white text-break" to={to}>
                {changeIcon(text)}
                <div className='d-none d-md-inline'>
                    {text}
                </div>
            </Link>
        )
    }

    return (
        <button type='button' className="btn btn-gray btn-lg rounded-0 text-white text-break">
            {changeIcon(text)}
            <div className='d-none d-md-inline'>
                {text}
            </div>
        </button>
    );
}

function changeIcon(text) {
    switch (text) {
        case "Novo Cliente":
            return < ExportIcons.AddClient className="me-md-2 colorIconWhite" />
        case "Novo Orçamento":
            return < ExportIcons.Novo className="me-md-2 colorIconWhite" />
        case "Guardar":
            return < ExportIcons.Guardar className="me-md-2 colorIconWhite" />
        default:
            console.log("Erro ao carregar icon no componente CheckBox");
            break;
    }
}