import React, { useEffect, useState } from 'react';

import Breadcrumbs from '../../../Components/Breadcrumb';
import CheckBox from '../../../Components/CheckBox';
import CardsCheckBox from '../../../Components/CardsCheckBox';
import Buttons from '../../../Components/Buttons';

import ImagemMarketingDigital from "../../../Assets/Images/marketingdigital_banner2.png";

export default function Main() {
    const [gestaoRedesSociais, setGestaoRedesSociais] = useState(false)
    const [paidMedia, setPaidMedia] = useState(false)
    const [emialSMS, setEmailSMS] = useState(false)
    const [seoSem, setSeoSem] = useState(false)

    useEffect(() => {
        const localSave = localStorage

        for(let i = 0; i < localSave.length; i++) {
            console.log(localSave.key(i))
            if(localSave.key(i) === "gestao-redes-sociais")
                setGestaoRedesSociais(true)
            if(localSave.key(i) === "paid-media")
                setPaidMedia(true)
            if(localSave.key(i) === "56")
                setEmailSMS(true)
            if(localSave.key(i) === "57")
                setSeoSem(true)
        }
    },[])

    return (
        <main>
            <div className="container-fluid">
                <div className="row vh-100">
                    <div className="col-md-12 col-lg-7 pt-pageLeft">
                        <div className="row">
                            <Breadcrumbs route1="Orçamento" route2="/ Marketing Digital" textColor="text-yellow"/>

                            <div className="col-md-12 col-lg-10 offset-lg-1">
                                <CheckBox onClick={valeu=>{
                                    console.log(valeu.target)
                                    setGestaoRedesSociais(valeu.target.checked)
                                    saveLocal(valeu, "gestao-redes-sociais")
                                    }} isActive={gestaoRedesSociais} name="Gestão de redes Sociais" color="bg-checkBoxYellow" colorIcon="colorIconYellow" textColor="text-yellow" />
                                <CardsCheckBox text="Responsabilizamos-nos pelo planeamento e pela estratégia nos social media." />

                                <CheckBox onClick={valeu=>{
                                    setPaidMedia(valeu.target.checked)
                                    saveLocal(valeu, "paid-media")
                                }} isActive={paidMedia} name="Paid Media" color="bg-checkBoxYellow" colorIcon="colorIconYellow" textColor="text-yellow" />
                                <CardsCheckBox text="Consiste na promoção de conteúdo, recorrendo a anúncios pagos, para aumentar a exposição dos conteúdos que a empresa controla (como o site, por exemplo)."/>

                                <CheckBox onClick={valeu=>{
                                    setEmailSMS(valeu.target.checked)
                                    saveLocal(valeu, "56")
                                }} isActive={emialSMS} name="Email &#38; SMS marketing" color="bg-checkBoxYellow" colorIcon="colorIconYellow" textColor="text-yellow" />
                                <CardsCheckBox text="Utilização do Email e SMS&#39;s como ferramentas para ações de marketing. 
                                Normalmente está associado à utilização de newsletters online."/>

                                <CheckBox onClick={valeu=>{
                                    setSeoSem(valeu.target.checked)
                                    saveLocal(valeu, "57")
                                }} isActive={seoSem} name="Otimização SEO e SEM" color="bg-checkBoxYellow" colorIcon="colorIconYellow" textColor="text-yellow" />
                                <CardsCheckBox text="Conjunto de técnicas para otimizar a presença na web para motores de pesquisa, aumentando visitas e conversões orgânicas"/>


                            </div>

                            <div className="col-md-5 offset-md-7 col-lg-6 offset-lg-5 text-end my-5">
                                <Buttons color="btn-transparent" text="Anterior" to={" "}/>
                                <Buttons color="btn-yellow" text="Seguinte" to={rotas()} />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-5 d-none d-lg-flex justify-content-center align-items-center bg-yellow pt-pageRight position-fixed end-0 vh-100">
                        <div className="row">
                            <div className="col-md-auto">
                                <img src={ImagemMarketingDigital} className="img-fluid" alt="Marketing Digital Imagem" />
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

        localSave.removeItem("marketing-digital")

        for(let i = 0; i < localSave.length; i++) {
            console.log(localSave.key(i))
            if(localSave.key(i) === "gestao-redes-sociais")
                return "marketing-digital/gestao-redes-sociais"
            if(localSave.key(i) === "paid-media")
                return "marketing-digital/paid-media"
        }

        return rotas2()
    }

    function rotas2() {
        const localSave = localStorage

        console.log(localSave.key(0))

        for(let i = 0; i < localSave.length; i++) {
            console.log(localSave.key(i))
            if(localSave.key(i) === "design-grafico")
                return "design-grafico"
            if(localSave.key(i) === "comunicacao-consultoria")
                return "comunicacao-consultoria"
            if(localSave.key(i) === "website-loja-online")
                return "website-loja-online"
        }

        return "contactos"
    }
}