import React, { useState } from 'react';

import Icons from '../Helpers/ExportIcons';

export default function CheckBox(props) {
    const [isActive, setIsActive] = useState(false);

    function handleClick() {
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
            case "Organização de eventos":
                return < Icons.OrganizacaoEventos className={isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Identidade Visual":
                return < Icons.IdentidadeVisual className={isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Branding & Rebranding":
                return < Icons.BrandingRebranding className={isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Estratégia de Marca":
                return < Icons.EstrategiaMarca className={isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Registo de Marca":
                return < Icons.RegistoMarca className={isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Design Editorial":
                return < Icons.DesignEditorial className={isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Análise da Concorrência":
                return < Icons.AnaliseConcorrencia className={isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Criação do Logótipo":
                return < Icons.CriacaoLogotipo className={isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Paleta de Cores":
                return < Icons.PaletaCores className={isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Slogan para Marca":
                return < Icons.SloganMarca className={isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Manual de Normas Gráficas":
                    return < Icons.ManualNormasGraficas className={isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Estacionário":
                    return < Icons.Estacionario className={isActive ? onClickChangeColorIcon() : classIcon(props)} />
            default:
                console.log("Erro ao carregar icon no componente CheckBox");
                break;
        }
    }

    return (
        <div className="d-flex align-items-center mt-5">
            <label className={isActive ? onClickChangeColor(props) : changeColor(props)} htmlFor={nameCheckBox(props)}>
                {changeIcon(props)}
                {changeNameLabel(props)}
                <input id={nameCheckBox(props)} type="checkbox" className={changeColorCheck(props)} onClick={() => {handleClick(); createEventOnClick(props)}} onChange={createEventOnChange(props)} value={changeNameLabel(props)} />
            </label>
        </div>
    );
}

function nameCheckBox(props) {
    return props.nameCheckBox
}

function changeColor(props) {
    return "form-check ps-3 py-2 w-100 fs-5 border cursor-pointer bg-checkBox " + props.color;
}

function onClickChangeColor(props) {
    return "form-check ps-3 py-2 w-100 fs-5 border text-white cursor-pointer " + props.color;
}

function classIcon(props) {
    return "iconCheckBox me-2 " + props.colorIcon;
}

function onClickChangeColorIcon() {
    return "iconCheckBox me-2 colorIconWhite ";
}

function changeColorCheck(props) {
    return "form-check-input float-end ms-0 me-3 " + props.textColor
}

function createEventOnChange(props) {
    return props.onChange;
}

function createEventOnClick(props) {
    return props.onClick;
}

function changeNameLabel(props) {
    return props.name;
}