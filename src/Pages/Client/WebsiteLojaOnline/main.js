import React, { useEffect, useState } from 'react';

import Breadcrumbs from '../../../Components/Breadcrumb';
import CheckBox from '../../../Components/CheckBox';
import CardsCheckBox from '../../../Components/CardsCheckBox';
import Buttons from '../../../Components/Buttons';

import ImagemWebsiteLojaOnline from "../../../Assets/Images/websites.jpg";

export default function Main() {
    const [website, setWebsite] = useState(false)
    const [lojaOnline, setLojaOnline] = useState(false)
    const [suporte, setSuporte] = useState(false)
    const [servidor, setServico] = useState(false)

    useEffect(() => {
        const localSave = localStorage

        for(let i = 0; i < localSave.length; i++) {
            console.log(localSave.key(i))
            if(localSave.key(i) === "website")
                setWebsite(true)
            if(localSave.key(i) === "loja-online")
                setLojaOnline(true)
            if(localSave.key(i) === "87")
                setSuporte(true)
            if(localSave.key(i) === "88")
                setServico(true)
        }
    },[])

    return(
        <main>
            <div className="container-fluid">
                <div className="row vh-100">
                    <div className="col-md-12 col-lg-7 pt-pageLeft">
                        <div className="row">
                            <Breadcrumbs route1="Orçamento" route2="/ Website &#38; Loja Online" textColor="text-purple"/>

                            <div className="col-md-12 col-lg-10 offset-lg-1">
                                <CheckBox onClick={valeu=>{
                                    console.log(valeu.target.checked)
                                    setWebsite(valeu.target.checked)
                                    saveLocal(valeu, "website")
                                }} isActive={website} name="Website" color="bg-checkBoxPurple" colorIcon="colorIconPurple" textColor="text-purple" />
                                <CardsCheckBox text="Um espaço online unicamente seu, que lhe permite estar ligado ao mundo e
                                divulgar os seus produtos/serviços 24 sob 24 horas." />

                                <CheckBox onClick={valeu=>{
                                    setLojaOnline(valeu.target.checked)
                                    saveLocal(valeu, "loja-online")
                                }} isActive={lojaOnline} name="Lojas online | E-commerce" color="bg-checkBoxPurple" colorIcon="colorIconPurple" textColor="text-purple" />
                                <CardsCheckBox text="As vantagens de marcar uma presença online são realmente positivas: vendas sem
                                limites geográficos, custos mais reduzidos do que um espaço físico, maior
                                conforto dos clientes, acompanhamento do desempenho das vendas e muito mais." />

                                <CheckBox onClick={valeu=>{
                                    setSuporte(valeu.target.checked)
                                    saveLocal(valeu, "87")
                                }} isActive={suporte} name="Suporte &#38; manutenção" color="bg-checkBoxPurple" colorIcon="colorIconPurple" textColor="text-purple" />
                                <CardsCheckBox text="Prestamos um serviço de apoio e manutenção em todos os websites desenvolvidos,
                                possibilitando assim a facilidade de utilização por parte do cliente. Fácil e
                                muito simples para que possa trabalhar no seu website sem dificuldades." />

                                <CheckBox onClick={valeu=>{
                                    setServico(valeu.target.checked)
                                    saveLocal(valeu, "88")
                                }} isActive={servidor} name="Servidor &#38; Domínio" color="bg-checkBoxPurple" colorIcon="colorIconPurple" textColor="text-purple" />
                                <CardsCheckBox text="Na incommun, registamos o domínio da sua marca e fornecemos, através de uma
                                anuidade, serviços de hosting seguros e rápidos." />
                            </div>

                            <div className="col-md-5 offset-md-7 col-lg-6 offset-lg-5 text-end my-5">
                                <Buttons color="btn-transparent" text="Anterior" to="design-grafico"/>
                                <Buttons color="btn-purple" text="Seguinte" to={rotas()}/>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-5 d-none d-lg-flex justify-content-center align-items-center bg-purple pt-pageRight position-fixed end-0 vh-100">
                        <div className="row">
                            <div className="col-md-auto">
                                <img src={ImagemWebsiteLojaOnline} className="img-fluid" alt="Marketing Digital Imagem" />
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

        for(let i = 0; i < localSave.length; i++) {
            console.log(localSave.key(i))
            if(localSave.key(i) === "website")
                return "website-loja-online/website"
            if(localSave.key(i) === "loja-online")
                return "website-loja-online/loja-online"
        }

        return "comunicacao-consultoria"
    }
}