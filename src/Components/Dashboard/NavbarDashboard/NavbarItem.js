import React from 'react';

import ExportIcons from '../../../Helpers/ExportIcons';

export default function NavbarItem({text, font}) {
    switch(text) {
        case "Preços":
            return(
                <div className={"nav-link rounded-0 rounded-start text-white cursor-pointer " + font}>
                    {changeIcon(text)}
                    {text}
                </div>
            )
        case "Orçamento":
            return(
                <div className={"nav-link rounded-0 rounded-start text-white cursor-pointer " + font}>
                    {changeIcon(text)}
                    {text}
                </div>
            )
        case "Cliente":
            return(
                <div className={"nav-link rounded-0 rounded-start text-white cursor-pointer " + font}>
                    {changeIcon(text)}
                    {text}
                </div>
            )
        case "Dados":
            return(
                <div className={"nav-link rounded-0 rounded-start text-white cursor-pointer " + font}>
                    {changeIcon(text)}
                    {text}
                </div>
            )
        default:
            return (
                <li className="nav-item">
                    <a className={"nav-link rounded-0 rounded-start text-white cursor-pointer " + font}>
                        {changeIcon(text)}
                        {text}
                    </a>
                </li>
            )
    }

    
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