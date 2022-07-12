import React from 'react';
import { Link } from 'react-router-dom';

import ExportIcons from '../../../Helpers/ExportIcons';

export default function NavbarItem({text, font, route}) {
    if(text === "Preços" || text === "Orçamento" || text === "Cliente"|| text === "Dados") {
        return(
            <div className={"nav-link rounded-0 rounded-start text-white cursor-default active " + font}>
                {changeIcon(text)}
                {text}
            </div>
        )
    }

    return (
        <li className="nav-item">
            <Link className={"nav-link rounded-0 rounded-start text-white cursor-pointer " + font} to={"/dashboard/" + route}>
                {changeIcon(text)}
                {text}
            </Link>
        </li>
    )
    
}

function changeIcon(text) {
    switch (text) {
        case "Marketing Digital":
            return < ExportIcons.MarketingDigitalIcon className="me-2 colorIconWhite" />
        case "Design Gráfico":
            return < ExportIcons.DesignGrafico className="me-2 colorIconWhite" />
        case "Website & Loja Online":
            return < ExportIcons.WebsiteLojaOnline className="me-2 colorIconWhite" />
        case "Comunicação & Consultoria":
            return < ExportIcons.ComunicacaoConsultoria className="me-2 colorIconWhite" />
        case "Ver orçamentos":
            return < ExportIcons.Ver className="me-2 colorIconWhite" />
        case "Novo orçamento":
            return < ExportIcons.Novo className="me-2 colorIconWhite" />
        case "Orçamento":
            return < ExportIcons.Orcamento className="me-2 colorIconWhite" />
        case "Ver clientes":
            return < ExportIcons.Ver className="me-2 colorIconWhite" />
        case "Novo cliente":
            return < ExportIcons.Novo className="me-2 colorIconWhite" />
        case "Ver dados":
            return < ExportIcons.Novo className="me-2 colorIconWhite" />
        case "Preços":
            return < ExportIcons.Preco className="me-2 colorIconWhite" />
        case "Cliente":
            return < ExportIcons.Cliente className="me-2 colorIconWhite" />
        case "Dados":
            return < ExportIcons.Dados className="me-2 colorIconWhite" />
        default:
            console.log("Erro ao carregar icon no componente CheckBox");
            break;
    }
}