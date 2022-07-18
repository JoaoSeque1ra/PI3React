import React, { useState, useEffect } from 'react';

import Breadcrumbs from '../../../Components/Breadcrumb';
import CheckBox from '../../../Components/CheckBox';
import CardsCheckBox from '../../../Components/CardsCheckBox';
import Buttons from '../../../Components/Buttons';

import ImagemComunicacaoConsultoria from "../../../Assets/Images/banner_comunicacao .jpg";

export default function Main() {
    const [marketingComunicacao, setMarketingComunicacao] = useState(false)
    const [organizacaoEventos, setOrganizacaoEventos] = useState(false)
    const [acessoria, setAcessoria] = useState(false)

    useEffect(() => {
        const localSave = localStorage

        for(let i = 0; i < localSave.length; i++) {
            console.log(localSave.key(i))
            if(localSave.key(i) === "89")
                setMarketingComunicacao(true)
            if(localSave.key(i) === "90")
                setOrganizacaoEventos(true)
            if(localSave.key(i) === "91")
                setAcessoria(true)
        }
    },[])

    return(
        <main>
            <div className="container-fluid">
                <div className="row vh-100">
                    <div className="col-md-12 col-lg-7 pt-pageLeft">
                        <div className="row">
                            <Breadcrumbs route1="Orçamento" route2="/ Comunicação &#38; Consultoria" textColor="text-yellow"/>

                            <div className="col-md-12 col-lg-10 offset-lg-1">
                                <CheckBox onClick={valeu=>{
                                    setMarketingComunicacao(valeu.target.checked)
                                    saveLocal(valeu, "89")
                                }} isActive={marketingComunicacao} name="Marketing e Comunicação" color="bg-checkBoxYellow" colorIcon="colorIconYellow" textColor="text-yellow" />
                                <CardsCheckBox text="Consultoria é o acompanhamento ao nosso cliente em planos de comunicação publicidade e marketing.
                                Desenhamos uma estratégia adaptada ao nosso cliente que são apresentadas e discutidas para objetivos
                                positivos e lineares." />

                                <CheckBox onClick={valeu=>{
                                    setOrganizacaoEventos(valeu.target.checked)
                                    saveLocal(valeu, "90")
                                }} isActive={organizacaoEventos} name="Organização de eventos" color="bg-checkBoxYellow" colorIcon="colorIconYellow" textColor="text-yellow" />
                                <CardsCheckBox text="Planeamos e organizamos juntos um evento memorável para celebrar o aniversário da sua empresa ou
                                datas importantes."/>

                                <CheckBox onClick={valeu=>{
                                    setAcessoria(valeu.target.checked)
                                    saveLocal(valeu, "91")
                                }} isActive={acessoria} name="Assessoria e criação de conteúdo" color="bg-checkBoxYellow" colorIcon="colorIconYellow" textColor="text-yellow" />
                                <CardsCheckBox text="Ligado ao marketing digital, assessoria de impressa procura criar uma boa relação com os canais de
                                informação e assim dessa forma gerar tráfego para a empresa."/>

                            </div>

                            <div className="col-md-5 offset-md-7 col-lg-6 offset-lg-5 text-end my-5">
                                <Buttons color="btn-transparent" text="Anterior" to=" "/>
                                <Buttons color="btn-yellow" text="Seguinte" to="contactos"/>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-5 d-none d-lg-flex justify-content-center align-items-center bg-yellow pt-pageRight position-fixed end-0 vh-100">
                        <div className="row">
                            <div className="col-md-auto">
                                <img src={ImagemComunicacaoConsultoria} className="img-fluid" alt="Marketing Digital Imagem" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );

    function saveLocal(value, nome) {
        if(value.target.checked)
            return localStorage.setItem(nome,value.target.checked)
        localStorage.removeItem(nome)
    }

    function rotas() {
        const localSave = localStorage

        console.log(localSave.key(0))

        localSave.removeItem("comunicacao-consultoria")

        for(let i = 0; i < localSave.length; i++) {
            console.log(localSave.key(i))
            if(localSave.key(i) === "marketing-digital")
                return "marketing-digital"
            if(localSave.key(i) === "desgin-grafico")
                return "desgin-grafico"
            if(localSave.key(i) === "website-loja-online")
                return "website-loja-online"
        }

        return "contactos"
    }
    
}