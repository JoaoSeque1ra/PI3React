import React, { useEffect, useState } from 'react';
import axios from 'axios'

import NavbarDashboardLg from '../../../Components/Dashboard/NavbarDashboard/NavbarDashboardLg';
import BreadcrumbsDashboard from '../../../Components/Dashboard/Breadcrumb';
import ButtonDashboard from '../../../Components/Dashboard/Button';
import PacksInput from '../../../Components/Dashboard/PacksInput';


export default function Main() {
    const [criacaoLogotipo, setCriacaoLogotipo] = useState([])
    const [analiseConcorrencia, setAnaliseConcorrencia] = useState([])
    const [paletaCores, setPaletaCores] = useState([])
    const [slogan, setSlogan] = useState([])
    const [manual, setManual] = useState([])
    const [estacionario, setEstacionario] = useState([])
    const [brandingRebranding, setBrandingRebranding] = useState([])
    const [estrategia, setEstrategia] = useState([])
    const [registo, setRegisto] = useState([])
    const [desginEditorial, setDesginEditorial] = useState([])

    useEffect(()=> {
        const baseUrl = "http://localhost:3001/orcamento/findServicosDesignGrafico"

        axios.get(baseUrl)
            .then(response => {
                if (!response.data.success)
                    return alert(response.data.message)

                const data = response.data.data
                setCriacaoLogotipo(data[0])
                setAnaliseConcorrencia(data[7])
                setPaletaCores(data[3])
                setSlogan(data[9])
                setManual(data[5])
                setEstacionario(data[4])
                setBrandingRebranding(data[6])
                setEstrategia(data[1])
                setRegisto(data[2])
                setDesginEditorial(data[8])
            })
            .catch(err => {
                alert(err)
            })
    },[])

    return (  
        <main className='overflow-auto d-flex'>
            <NavbarDashboardLg />

            <div className="container-fluid changeSpace">
                <div className="row mt-5">

                    <div className="col-lg-10 offset-lg-1">
                        <div className="row">

                            <BreadcrumbsDashboard route1="Preços" route2="/ Design Gráfico" />

                            <div className="col-3 col-lg-4 text-end">
                                <ButtonDashboard text="Guardar" onClick={() => save()}/>
                            </div>

                            {/* Identidade Visual */}

                            <div className="col-12 mt-5 bg-cardsDashboard">
                                <div className="row py-4">

                                    <div className="col-12 ps-lg-4 fs-4 font-weight-semiBold">
                                        Identidade Visual
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                1.Criação de Logótipo
                                            </div>

                                            <PacksInput className="col-lg-4" value={criacaoLogotipo.preco} onChange={(value)=> setCriacaoLogotipo(value.target.value)}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                2.Análise da concorrência
                                            </div>

                                            <PacksInput className="col-lg-4" value={analiseConcorrencia.preco} onChange={(value)=> setAnaliseConcorrencia(value.target.value)}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                3.Paleta de cores
                                            </div>

                                            <PacksInput value={paletaCores.preco} className="col-lg-4" onChange={(value)=> setPaletaCores(value.target.value)}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                4.Slogan para marca
                                            </div>

                                            <PacksInput value={slogan.preco} className="col-lg-4" onChange={(value)=> setSlogan(value.target.value)}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                5.Manual normas gráficas
                                            </div>

                                            <PacksInput value={manual.preco} className="col-lg-4" onChange={(value)=> setManual(value.target.value)}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                6.Estacionário
                                            </div>

                                            <PacksInput value={estacionario.preco} className="col-lg-4" onChange={(value)=> setEstacionario(value.target.value) }/>

                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Branding & Rebranding */}
                            {/* Estratégia de marca */}

                            <div className="col-12 mt-5">
                                <div className="row gx-5">

                                    <div className="col-12 col-lg-6">
                                        <div className="row py-4 bg-cardsDashboard h-100">

                                            <div className="col-12 col-lg-4 ps-lg-4 fs-4 font-weight-semiBold align-self-center text-break">
                                                Branding &#38; Rebranding
                                            </div>

                                            <PacksInput value={brandingRebranding.preco} className="col-lg-4" onChange={(value)=> setBrandingRebranding(value.target.value) }/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                                        <div className="row py-4 bg-cardsDashboard h-100">

                                            <div className="col-12 col-lg-4 ps-lg-4 fs-4 font-weight-semiBold align-self-center text-break">
                                                Estratégia de marca
                                            </div>

                                            <PacksInput value={estrategia.preco} className="col-lg-4" onChange={(value)=> setEstacionario(value.target.value) }/>

                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                                                   

                            {/* Registo de marca */}
                            {/* Design editorial */}

                            <div className="col-12 my-5">
                                <div className="row gx-5">

                                    <div className="col-12 col-lg-6">
                                        <div className="row py-4 bg-cardsDashboard h-100">

                                            <div className="col-12 col-lg-4 ps-lg-4 fs-4 font-weight-semiBold align-self-center text-break">
                                                Registo de marca
                                            </div>

                                            <PacksInput value={registo.preco} className="col-lg-4" onChange={()=> console.count("4: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                                        <div className="row py-4 bg-cardsDashboard h-100">

                                            <div className="col-12 col-lg-4 ps-lg-4 fs-4 font-weight-semiBold align-self-center text-break">
                                                Design editorial
                                            </div>

                                            <PacksInput value={desginEditorial.preco} className="col-lg-4" onChange={()=> console.count("4: ")}/>

                                        </div>
                                    </div>

                                </div>
                            </div>
                                                        
                        </div>
                    </div>

                </div>
            </div>

        </main>
    );

    function save() {
        if(criacaoLogotipo.preco <= 0 || analiseConcorrencia.preco <= 0 || paletaCores.preco <= 0 || slogan.preco <= 0 || manual.preco <= 0 || estacionario.preco <= 0 || brandingRebranding.preco <= 0 || estrategia.preco <= 0 || registo.preco <= 0 || desginEditorial.preco <= 0)
            return alert("Introduza um valor acima de 0")

        const baseUrl = ""
        const data = {
            // preco:
        }

        axios.post(baseUrl, data)
        .then(response => {
            if(response.data.success)
                return alert(response.data.message)

            alert("ERRO")
        })
        .catch(err=> {
            alert("ERRO: " + err)
        })
    }
}