import React from 'react';

import Icons from '../Helpers/ExportIcons';

export default function CheckBox(props) {
    function changeIcon(props) {
        switch (props.name) {
            case "Marketing Digital":
                return < Icons.MarketingDigitalIcon className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Design Grafico":
                return < Icons.DesignGrafico className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Website & Loja Online":
                return < Icons.WebsiteLojaOnline className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Comunicação & Consultoria":
                return < Icons.ComunicacaoConsultoria className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Gestão de redes Sociais":
                return < Icons.GestaoRedesSociais className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Paid Media":
                return < Icons.PaidMedia className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Email & SMS marketing":
                return < Icons.EmailSMS className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Otimização SEO e SEM":
                return < Icons.OtimizacaoSEOSEM className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Marketing e Comunicação":
                return < Icons.MarketingComunicacao className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Organização de eventos":
                return < Icons.OrganizacaoEventos className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Identidade Visual":
                return < Icons.IdentidadeVisual className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Branding & Rebranding":
                return < Icons.BrandingRebranding className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Estratégia de Marca":
                return < Icons.EstrategiaMarca className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Registo de Marca":
                return < Icons.RegistoMarca className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Design Editorial":
                return < Icons.DesignEditorial className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Análise da Concorrência":
                return < Icons.AnaliseConcorrencia className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Criação do Logótipo":
                return < Icons.CriacaoLogotipo className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Paleta de Cores":
                return < Icons.PaletaCores className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Slogan para Marca":
                return < Icons.SloganMarca className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Manual de Normas Gráficas":
                return < Icons.ManualNormasGraficas className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Estacionário":
                return < Icons.Estacionario className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Website":
                return < Icons.Website className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Lojas online | E-commerce":
                    return < Icons.LojaOnlineEcommerce className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Suporte & manutenção":
                return < Icons.SuporteManutencao className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Servidor & Domínio":
                 return < Icons.ServidorDominio className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Landing Page":
                return < Icons.LandingPage className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Com portfólio":
                return < Icons.Portfolio className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Com criação de conteúdos textuais":
                return < Icons.CriacaoConteudosTextuais className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Com alojamento":
                return < Icons.Alojamento className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Com domínio":
                return < Icons.Dominio className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Número de páginas":
                return < Icons.NumeroPaginas className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Com Integração":
                return < Icons.Integracao className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Assessoria e criação de conteúdo":
                return < Icons.AssessoriaCriacaoConteudo className={props.isActive ? onClickChangeColorIcon() : classIcon(props)} />
            default:
                console.log("Erro ao carregar icon no componente CheckBox");
                break;
        }
    }

    return (
        <div className="d-flex align-items-center mt-5">
            <label className={props.isActive ? onClickChangeColor(props) : changeColor(props)} htmlFor={props.nameCheckBox}>
                {changeIcon(props)}
                {props.name}
                <input 
                    id={props.nameCheckBox} 
                    type="checkbox" 
                    className={changeColorCheck(props)}
                    defaultChecked={props.isActive}
                    defaultValue={props.name}
                    onClick={valeu => props.onClick(valeu)}
                />
            </label>
        </div>
    );
}

function changeColor(props) {
    return "form-check ps-3 py-2 w-100 fs-5 border cursor-pointer bg-checkBox " + props.color;
}

function onClickChangeColor(props) {
    return "form-check ps-3 py-2 w-100 fs-5 border text-white cursor-pointer " + props.color;
}

function classIcon(props) {
    return "me-2 " + props.colorIcon;
}

function onClickChangeColorIcon() {
    return "me-2 colorIconWhite";
}

function changeColorCheck(props) {
    return "form-check-input float-end ms-0 me-3 " + props.textColor
}