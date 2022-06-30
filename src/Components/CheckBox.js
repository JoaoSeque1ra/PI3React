import React from 'react';

import Icons from '../Helpers/ExportIcons';

export default function CheckBox(props) {
    return (
        <div className="mt-5">
            <div className={changeColor(props)} onClick={createEventClick(props)} >
                <div className="changeFormControl form-control border-0 bg-transparent">
                    {changeIcon(props)}
                    {changeNameLabel(props)}
                </div>

                <div className="input-group-text border-0 bg-transparent">
                    <input type="checkbox" className={ changeColorCheck(props) } />
                </div>
            </div>
        </div>
    );
}

function createEventClick(props) {
    return props.function;
}

function changeNameLabel(props) {
    return props.name;
}

function changeColor(props) {
    return "input-js input-group input-group-lg border cursor-pointer bg-checkBox " + props.color;
}

function changeColorCheck(props) {
    return "cursor-pointer changeInput " + props.textColor;
}

function changeIcon(props) {
    switch (props.name) {
        case "Marketing Digital":
            return < Icons.MarketingDigitalIcon className={classIcon(props)} />
        case "Design Grafico":
            return < Icons.DesignGrafico className={classIcon(props)} />
        case "Website & Loja Online":
            return < Icons.WebsiteLojaOnline className={classIcon(props)} />
        case "Comunicação & Consultoria":
            return < Icons.ComunicacaoConsultoria className={classIcon(props)} />
        case "Gestão de redes Sociais":
            return < Icons.GestaoRedesSociais className={classIcon(props)} />
        case "Paid Media":
            return < Icons.PaidMedia className={classIcon(props)} />
        case "Email & SMS marketing":
            return < Icons.EmailSMS className={classIcon(props)} />
        case "Otimização SEO e SEM":
            return < Icons.OtimizacaoSEOSEM className={classIcon(props)} />
        default:
            console.log("Erro ao carregar icon");
            break;
    }
}

function classIcon(props) {
    return "iconCheckBox me-2 " + props.colorIcon;
}