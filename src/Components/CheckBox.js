import React, { useState } from 'react';

import Icons from '../Helpers/ExportIcons';

export default function CheckBox(props) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        setIsActive(isActive => !isActive); //(current == false) => (current == true) TRUE -> foi selecionado 
    };

    function changeIcon(props) {
        switch (props.name) {
            case "Marketing Digital":
                return < Icons.MarketingDigitalIcon className={isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Design Grafico":
                return < Icons.DesignGrafico className={isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Website & Loja Online":
                return < Icons.WebsiteLojaOnline className={isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Comunicação & Consultoria":
                return < Icons.ComunicacaoConsultoria className={isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Gestão de redes Sociais":
                return < Icons.GestaoRedesSociais className={isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Paid Media":
                return < Icons.PaidMedia className={isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Email & SMS marketing":
                return < Icons.EmailSMS className={isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Otimização SEO e SEM":
                return < Icons.OtimizacaoSEOSEM className={isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Marketing e Comunicação":
                return < Icons.MarketingComunicacao className={isActive ? onClickChangeColorIcon() : classIcon(props)} />
            default:
                console.log("Erro ao carregar icon");
                break;
        }
    }

    return (
        <div className="mt-5">
            <div className={isActive ? onClickChangeColor(props) : changeColor(props)} onClick={handleClick}>
                <div className={isActive ? onClickChangeColorText() : ChangeColorText()}>
                    {changeIcon(props)}
                    {changeNameLabel(props)}
                </div>

                <div className="input-group-text border-0 bg-transparent">
                    <input checked={isActive} type="checkbox" className={ changeColorCheck(props) } onChange={createEventClick(props)} defaultValue={changeNameLabel(props)}/>
                </div>
            </div>
        </div>
    );
}

function changeColor(props) {
    return " input-js input-group input-group-lg border cursor-pointer bg-checkBox " + props.color;
}

function onClickChangeColor(props) {
    return "input-js input-group input-group-lg border cursor-pointer " + props.color;
}

function ChangeColorText() {
    return "changeFormControl form-control border-0 bg-transparent";
}

function onClickChangeColorText() {
    return "changeFormControl form-control border-0 bg-transparent text-white";
}

function classIcon(props) {
    return "iconCheckBox me-2 " + props.colorIcon;
}

function onClickChangeColorIcon() {
    return "iconCheckBox me-2 colorIconWhite ";
}

function changeColorCheck(props) {
    return "cursor-pointer changeInput " + props.textColor;
}

function createEventClick(props) {
    return props.function;
}

function changeNameLabel(props) {
    return props.name;
}