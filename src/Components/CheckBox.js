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
            default:
                console.log("Erro ao carregar icon");
                break;
        }
    }

    return (
        <>
            <div className="d-flex align-items-center">
                <label className={isActive ? onClickChangeColor2(props) : changeColor2(props)} onClick={handleClick} htmlFor={nameCheckBox(props)}>
                    {changeIcon(props)}
                    {changeNameLabel(props)}
                    <input id={nameCheckBox(props)} type="checkbox" className={changeColorCheck2(props)} onChange={createEventOnChange(props)} value={changeNameLabel(props)} />
                </label>
            </div>

            {/* <div className="mt-5">
                <div className={isActive ? onClickChangeColor(props) : changeColor(props)} onClick={handleClick} htmlFor="flexCheckDefault">
                    <div className={isActive ? onClickChangeColorText() : ChangeColorText()}>
                        {changeIcon(props)}
                        {changeNameLabel(props)}
                    </div>

                    <div className="input-group-text border-0 bg-transparent">
                        <input id="flexCheckDefault" checked={isActive} type="checkbox" className={changeColorCheck(props)} onChange={createEventClick(props)} defaultValue={changeNameLabel(props)} />
                    </div>
                </div>
            </div> */}
        </>
    );
}

function nameCheckBox(props) {
    return props.nameCheckBox
}

function changeColor2(props) {
    return "form-check ps-3 py-2 mt-5 w-100 fs-5 border cursor-pointer bg-checkBox " + props.color;
}

function onClickChangeColor2(props) {
    return "form-check ps-3 py-2 mt-5 w-100 fs-5 border text-white cursor-pointer " + props.color;
}

// function changeColor(props) {
//     return "input-group input-group-lg border cursor-pointer bg-checkBox " + props.color;
// }

// function onClickChangeColor(props) {
//     return "input-group input-group-lg border cursor-pointer " + props.color;
// }

// function ChangeColorText() {
//     return "changeFormControl form-control border-0 bg-transparent";
// }

// function onClickChangeColorText() {
//     return "changeFormControl form-control border-0 bg-transparent text-white";
// }


function classIcon(props) {
    return "iconCheckBox me-2 " + props.colorIcon;
}

function onClickChangeColorIcon() {
    return "iconCheckBox me-2 colorIconWhite ";
}

// function changeColorCheck(props) {
//     return "cursor-pointer changeInput " + props.textColor;
// }

function changeColorCheck2(props) {
    return "form-check-input float-end ms-0 me-3 " + props.textColor
}

function createEventOnChange(props) {
    return props.onchange;
}

function changeNameLabel(props) {
    return props.name;
}