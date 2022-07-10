import React from 'react';

import ExportIcons from '../../Helpers/ExportIcons';

export default function ButtonDashboard({text}) {
    return (
        <button type="button" className="btn btn-gray btn-lg rounded-0 text-white">
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
        default:
            console.log("Erro ao carregar icon no componente CheckBox");
            break;
    }
}