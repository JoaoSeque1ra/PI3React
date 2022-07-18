import React, { useEffect, useState } from 'react';

import Breadcrumbs from '../../../Components/Breadcrumb';
import CheckBox from '../../../Components/CheckBox';
import Buttons from '../../../Components/Buttons';

export default function Main() {
    const [marketingDigital, setMarketingDigital] = useState(false)
    const [designGrafico, setDesignGrafico] = useState(false)
    const [websiteLojaOnLine, setWebsiteLojaOnLine] = useState(false)
    const [comunicacaoConsultoria, setComunicacaoConsultoria] = useState(false)

    useEffect(() => {
        localStorage.clear()
    })

    return (
        <main>
            <div className="container-fluid">
                <div className="row vh-100">
                    <div className="col-md-12 col-lg-7 pt-pageLeft">
                        <div className="row">
                            <Breadcrumbs route1="Orçamento"/>

                            <div className="col-md-12 col-lg-10 offset-lg-1">
                                <CheckBox onClick={valeu=>{
                                    setMarketingDigital(valeu.target.checked)
                                    saveLocal(valeu,"marketing-digital")
                                }} isActive={marketingDigital} nameCheckBox="marketingDigital" name="Marketing Digital" color="bg-checkBoxYellow" colorIcon="colorIconYellow" textColor="text-yellow" />

                                <CheckBox onClick={valeu=>{
                                    setDesignGrafico(valeu.target.checked)
                                    saveLocal(valeu,"design-grafico")
                                }} isActive={designGrafico} nameCheckBox="designGrafico" name="Design Grafico" color="bg-checkBoxYellow" colorIcon="colorIconYellow" textColor="text-yellow" />

                                <CheckBox onClick={valeu=>{
                                    setWebsiteLojaOnLine(valeu.target.checked)
                                    saveLocal(valeu,"website-loja-online")
                                }} isActive={websiteLojaOnLine} nameCheckBox="websiteLojaOnLine" name="Website &#38; Loja Online" color="bg-checkBoxYellow" colorIcon="colorIconYellow" textColor="text-yellow" />

                                <CheckBox onClick={valeu=>{
                                    setComunicacaoConsultoria(valeu.target.checked)
                                    saveLocal(valeu,"comunicacao-consultoria")
                                }} isActive={comunicacaoConsultoria} nameCheckBox="comunicacaoConsultoria" name="Comunicação &#38; Consultoria" color="bg-checkBoxYellow" colorIcon="colorIconYellow" textColor="text-yellow" />
                            </div>

                            <div className="col-md-5 offset-md-7 col-lg-6 offset-lg-5 text-end my-5">
                                <Buttons color="btn-yellow" text="Seguinte" to={"marketing-digital"} />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-12 col-lg-5 d-none d-lg-flex justify-content-center align-items-center bg-yellow pt-pageRight position-fixed end-0 vh-100">
                        <div className="row position-lg-fixed">
                            <div className="col-md-auto text-white fs-1 text-weight-black">
                                ativa
                                <b>e agita</b>
                                <br />
                                a tua
                                <b>marca.</b>
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
}