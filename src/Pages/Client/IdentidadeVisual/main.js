import React, { useState, useEffect } from 'react';

import Breadcrumbs from '../../../Components/Breadcrumb';
import CheckBox from '../../../Components/CheckBox';
import CardsCheckBox from '../../../Components/CardsCheckBox';
import Buttons from '../../../Components/Buttons';

import ImagemIdentidadeVisual from "../../../Assets/Images/identidadeVisual.png";

export default function Main () {
    const [analiseConcorrencia, setAnaliseConcorrencia] = useState(false)
    const [criacaoLogotipo, setCriacaoLogotipo] = useState(false)
    const [paletaCores, setPaletaCores] = useState(false)
    const [sloganMarca, setSloganMarca] = useState(false)
    const [manualNormas, setManualNormas] = useState(false)
    const [estacionario, setEstacionario] = useState(false)

    useEffect(() => {
        const localSave = localStorage

        for(let i = 0; i < localSave.length; i++) {
            console.log(localSave.key(i))
            if(localSave.key(i) === "58")
                setCriacaoLogotipo(true)
            if(localSave.key(i) === "59")
                setAnaliseConcorrencia(true)
            if(localSave.key(i) === "60")
                setPaletaCores(true)
            if(localSave.key(i) === "61")
                setSloganMarca(true)
            if(localSave.key(i) === "62")
                setManualNormas(true)
            if(localSave.key(i) === "63")
                setEstacionario(true)
        }
    },[])

    return (
        <main>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-lg-7 pt-pageLeft">
                        <div className="row"> 
                            <Breadcrumbs route1="Orçamento / Design Gráfico" route2="/ Identidade Visual" textColor="text-orange"/>
                        
                            <div className="col-md-12 col-lg-10 offset-lg-1">

                                <CheckBox onClick={valeu=>{
                                    setAnaliseConcorrencia(valeu.target.checked)
                                    saveLocal(valeu, "59")
                                }} isActive={analiseConcorrencia} name="Análise da Concorrência" color="bg-checkBoxOrange" colorIcon="colorIconOrange" textColor="text-orange" />
                                <CardsCheckBox text="Prática de monitorar regularmente os seus concorrentes, tendo em atenção negócios e serviços
                                similares aos seus." />

                                <CheckBox onClick={valeu=>{
                                    setCriacaoLogotipo(valeu.target.checked)
                                    saveLocal(valeu, "58")
                                }} isActive={criacaoLogotipo} name="Criação do Logótipo" color="bg-checkBoxOrange" colorIcon="colorIconOrange" textColor="text-orange" />
                                <CardsCheckBox text="É o ponto de identificação da sua empresa, comunica os valores da sua marca em cartões, flyers,
                                websites, social media e, principalmente, na mente do consumidor." />

                                <CheckBox onClick={valeu=>{
                                    setPaletaCores(valeu.target.checked)
                                    saveLocal(valeu, "60")
                                }} isActive={paletaCores} name="Paleta de Cores" color="bg-checkBoxOrange" colorIcon="colorIconOrange" textColor="text-orange" />
                                <CardsCheckBox text="A paleta de cores gera uma identidade visual através de cores pré-selecionadas utilizadas de forma
                                harmoniosa de forma a passar alguma ideia para o utilizador." />

                                <CheckBox onClick={valeu=>{
                                    setSloganMarca(valeu.target.checked)
                                    saveLocal(valeu, "61")
                                }} isActive={sloganMarca} name="Slogan para Marca" color="bg-checkBoxOrange" colorIcon="colorIconOrange" textColor="text-orange" />
                                <CardsCheckBox text="Slogan é uma forma de fazer os utilizadores associarem mentalmente uma frase simples a uma marca." />

                                <CheckBox onClick={valeu=>{
                                    setManualNormas(valeu.target.checked)
                                    saveLocal(valeu, "62")
                                }} isActive={manualNormas} name="Manual de Normas Gráficas" color="bg-checkBoxOrange" colorIcon="colorIconOrange" textColor="text-orange" />
                                <CardsCheckBox text="Manual de normas gráficas não passa de um documento com regras e restrições para que a identidade
                                visual seja mantida independentemente da aplicação." />

                                <CheckBox onClick={valeu=>{
                                    setEstacionario(valeu.target.checked)
                                    saveLocal(valeu, "63")
                                }} isActive={estacionario} name="Estacionário" color="bg-checkBoxOrange" colorIcon="colorIconOrange" textColor="text-orange" />
                                <CardsCheckBox text="Estacionário refere-se a todos os produtos que incorporem a identidade gráfica de uma organização,
                                na maioria dos casos em suporte papel ou em formato digital." />

                            </div>

                            <div className="col-md-5 offset-md-7 col-lg-6 offset-lg-5 text-end my-5">
                                <Buttons color="btn-transparent" text="Anterior" to={"design-grafico"}/>
                                <Buttons color="btn-orange" text="Seguinte" to={rotas()}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-5 d-none d-lg-flex justify-content-center align-items-center bg-orange pt-pageRight position-fixed end-0 vh-100">
                        <div className="row">
                            <div className="col-md-auto">
                                <img src={ImagemIdentidadeVisual} className="img-fluid" alt="Design Gráfico Imagem" />
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
        localStorage.removeItem("identidade-visual")

        return rotas2()
    }

    function rotas2() {
        const localSave = localStorage

        console.log(localSave.key(0))

        for(let i = 0; i < localSave.length; i++) {
            console.log(localSave.key(i))
            if(localSave.key(i) === "marketing-digital")
                return "marketing-digital"
            if(localSave.key(i) === "comunicacao-consultoria")
                return "comunicacao-consultoria"
            if(localSave.key(i) === "website-loja-online")
                return "website-loja-online"
        }

        return "contactos"
    }
}