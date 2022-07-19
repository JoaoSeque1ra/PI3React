import React, { useState } from 'react';

import Breadcrumbs from '../../../Components/Breadcrumb';
import RedesSociaisIcons from '../../../Components/RedesSociaisIcons';
import OptionsPacks from '../../../Components/OptionsPacks';
import CheckBoxMini from '../../../Components/CheckBoxMini';
import Buttons from '../../../Components/Buttons';

export default function Main() {
    const [selectFacebook, setSelectFacebook] = useState(false)
    const [selectInsta, setSelectInsta] = useState(false)
    const [selectTwitter, setSelectTwitter] = useState(false)
    const [selectTiktok, setSelectTiktok] = useState(false)
    const [selectGoogle, setSelectGoogle] = useState(false)
    const [selectLink, setSelectLink] = useState(false)
    const [selectYoutube, setSelectYoutube] = useState(false)

    return (  
        <main className='container-fluid'>
            <div className='row vh-100'>

                <div className='col-md-12 col-lg-7 pt-pageLeft'>
                    <div className='row'>

                        <Breadcrumbs route1="Orçamento / Marketing Digital / Gestão redes sociais" route2=" / Personalizar" textColor="text-blue" />

                        <div className="col-md-12 col-lg-10 offset-lg-1">

                            <div className="card border-0 border-0 bg-cardColorOpacity mt-5">
                                <div className="card-body">

                                    <h5 className="card-title mt-2 text-blue">Redes Sociais</h5>
                                    <h6 className="card-subtitle mb-5 fw-light"> 
                                        Selecione as redes sócias onde pretende que sejam feitas publicações
                                    </h6>
                                    
                                    <div className="container-fluid">
                                        <div className="row">

                                        <RedesSociaisIcons nome="facebook" isActive={selectFacebook} onClick={(value) => {
                                            setSelectFacebook(current => !current)
                                        }}/>

                                        <RedesSociaisIcons nome="insta" isActive={selectInsta} onClick={() => {
                                            setSelectInsta(current => !current)
                                        }}/>

                                        <RedesSociaisIcons nome="twitter" isActive={selectTwitter} onClick={() => {
                                            setSelectTwitter(current => !current)
                                        }}/>

                                        <RedesSociaisIcons nome="tiktok" isActive={selectTiktok} onClick={() => {
                                            setSelectTiktok(current => !current)
                                        }}/>

                                        <RedesSociaisIcons nome="google" isActive={selectGoogle} onClick={() => {
                                            setSelectGoogle(current => !current)
                                        }} />

                                        <RedesSociaisIcons nome="link" isActive={selectLink} onClick={() => {
                                            setSelectLink(current => !current)
                                        }}/>
                                        
                                        <RedesSociaisIcons nome="youtube" isActive={selectYoutube} onClick={() => {
                                            setSelectYoutube(current => !current)
                                        }}/>

                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="card border-0 border-0 bg-cardColorOpacity mt-5">
                                <div className="card-body">

                                    <h5 className="card-title mt-2 text-blue">Publicações</h5>
                                    <h6 className="card-subtitle mb-5 fw-light"> 
                                        Qual a quantidade que pretende por semana?
                                    </h6>
                                    
                                    <div className="container-fluid">
                                        <div className="row">

                                            <OptionsPacks text="Publicações por semana:" tamanho={15}
                                                onChange={(value) => {
                                                    saveLocalNumberPublicacoes(value.target.value)
                                                }}
                                            />
                                            <div className='col-12 my-3 fs-6 fw-light'>
                                                Descrição do que são publicações por semana
                                            </div>

                                            <OptionsPacks text="Stories por semana:" tamanho={10} 
                                                onChange={(value) => {
                                                    saveLocalNumberStories(value.target.value)
                                                }}
                                            />
                                            <div className='col-12 my-3 fs-6 fw-light'>
                                                Descrição do que são stories por semana
                                            </div>

                                            <OptionsPacks text="Reels por semana:" tamanho={7}
                                                onChange={(value) => {
                                                    saveLocalNumberReels(value.target.value)
                                                }}
                                            />
                                            <div className='col-12 my-3 fs-6 fw-light'>
                                                Descrição do que são reels por semana
                                            </div>

                                        </div>
                                    </div>

                                    

                                </div>
                            </div>

                            <div className="card border-0 border-0 bg-cardColorOpacity my-5">
                                <div className="card-body">

                                    <h5 className="card-title mt-2 text-blue">Serviços</h5>
                                    <h6 className="card-subtitle mb-5 fw-light"> 
                                        Selecione outros serviços para o seu pack
                                    </h6>
                                    
                                    <div className="container-fluid">
                                        <div className="row">

                                            <CheckBoxMini
                                            onClick={(value) => {
                                                console.log(value.target)
                                                saveLocal(value.target.checked, "26")
                                            }}
                                            text="Design para publicações" id="designPublicacoes"/>

                                            <CheckBoxMini                                            
                                            onClick={(value) => {
                                                saveLocal(value.target.checked, "25")
                                            }}
                                            text="Cover" id="cover"/>

                                            <CheckBoxMini                  
                                            onClick={(value) => {
                                                saveLocal(value.target.checked, "27")
                                            }}
                                            text="Copywriting" id="copywriting"/>

                                            <CheckBoxMini  
                                            onClick={(value) => {
                                                saveLocal(value.target.checked, "28")
                                            }}
                                            text="Planificação Editorial" id="planificacaoDigital"/>

                                            <CheckBoxMini        
                                            onClick={(value) => {
                                                saveLocal(value.target.checked, "29")
                                            }}
                                            text="Consultoria Digital" id="consultoriaDigital"/>

                                            <CheckBoxMini    
                                            onClick={(value) => {
                                                saveLocal(value.target.checked, "30")
                                            }}
                                            text="Gestão de Campanhas" id="gestaoCampanhas"/>

                                            <CheckBoxMini  
                                            onClick={(value) => {
                                                saveLocal(value.target.checked, "31")
                                            }}
                                            text="Relatório Mensal" id="relatorioMensal"/>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="col-md-5 offset-md-7 col-lg-6 offset-lg-5 text-end my-5">
                            <Buttons color="btn-transparent" text="Anterior" to=" "/>
                            <Buttons color="btn-blue" text="Seguinte" to={rotas()}/>
                        </div>

                    </div>
                </div>

                <div className="col-md-12 col-lg-5 d-none d-lg-flex justify-content-center align-items-center bg-blue-degrade pt-pageRight position-fixed end-0 vh-100"></div>

            </div>
        </main>
    );

    function rotas() {
        const localSave = localStorage

        console.log(localSave.key(0))

        localSave.removeItem("gestao-redes-sociais")

        for(let i = 0; i < localSave.length; i++) {
            console.log(localSave.key(i))
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

    function saveLocal(value, nome) {
        if(value)
            return localStorage.setItem(nome,value)
        localStorage.removeItem(nome)
    }

    function saveLocalNumberPublicacoes(value) {
        // console.log(value)
        if(selectFacebook)
            localStorage.setItem("4", value)
        else
            localStorage.removeItem("4")

        if(selectInsta)
            localStorage.setItem("7", value)
        else
            localStorage.setItem("7")

        if(selectTwitter)
            localStorage.setItem("10", value)
        else
            localStorage.setItem("10")

        if(selectTiktok)
            localStorage.setItem("13", value)
        else
            localStorage.setItem("13")

        if(selectGoogle)
            localStorage.setItem("22", value)
        else
            localStorage.setItem("22")
        
        if(selectLink)
            localStorage.setItem("16", value)
        else
            localStorage.setItem("16")

        if(selectYoutube)
            localStorage.setItem("19", value)
        else
            localStorage.setItem("19") 
    }

    function saveLocalNumberStories(value) {
        // console.log(value)
        if(selectFacebook)
            localStorage.setItem("5", value)
        else
            localStorage.removeItem("5")

        if(selectInsta)
            localStorage.setItem("8", value)
        else
            localStorage.setItem("8")

        if(selectTwitter)
            localStorage.setItem("1", value)
        else
            localStorage.setItem("1")

        if(selectTiktok)
            localStorage.setItem("14", value)
        else
            localStorage.setItem("14")

        if(selectGoogle)
            localStorage.setItem("23", value)
        else
            localStorage.setItem("23")
        
        if(selectLink)
            localStorage.setItem("17", value)
        else
            localStorage.setItem("17")

        if(selectYoutube)
            localStorage.setItem("20", value)
        else
            localStorage.setItem("20") 
    }

    function saveLocalNumberReels(value) {
        // console.log(value)
        if(selectFacebook)
            localStorage.setItem("6", value)
        else
            localStorage.removeItem("6")

        if(selectInsta)
            localStorage.setItem("9", value)
        else
            localStorage.setItem("9")

        if(selectTwitter)
            localStorage.setItem("12", value)
        else
            localStorage.setItem("12")

        if(selectTiktok)
            localStorage.setItem("15", value)
        else
            localStorage.setItem("15")

        if(selectGoogle)
            localStorage.setItem("24", value)
        else
            localStorage.setItem("24")
        
        if(selectLink)
            localStorage.setItem("18", value)
        else
            localStorage.setItem("18")

        if(selectYoutube)
            localStorage.setItem("21", value)
        else
            localStorage.setItem("21") 
    }
}