import React, { useEffect, useState } from 'react';
import axios from 'axios'

import NavbarDashboardLg from '../../../Components/Dashboard/NavbarDashboard/NavbarDashboardLg';
import BreadcrumbsDashboard from '../../../Components/Dashboard/Breadcrumb';
import ButtonDashboard from '../../../Components/Dashboard/Button';
import PacksInput from '../../../Components/Dashboard/PacksInput';

export default function Main() {
    const [marketingComunicacao, setMarketingComunicacao] = useState([])
    const [organizacaoEventos, setOrganizacaoEventos] = useState([])
    const [acessoria, setAcessoria] = useState([])

    useEffect(()=>{
        const baseUrl = "http://localhost:3001/orcamento/findServicosComunicacaoConsultoria"
        axios.get(baseUrl)
        .then(response => {
            if(!response.data.success)
                return alert(response.data.message)

            const data = response.data.data
            setMarketingComunicacao(data[0])
            setOrganizacaoEventos(data[1])
            setAcessoria(data[2])
        })
    }, [marketingComunicacao, organizacaoEventos, acessoria])

    return (
        <main className='overflow-auto d-flex'>
            <NavbarDashboardLg />

            <div className="container-fluid changeSpace">
                <div className="row mt-5">

                    <div className="col-lg-10 offset-lg-1">
                        <div className="row">

                            <BreadcrumbsDashboard route1="Preços" route2="/ Comunicação &#38; Consultoria" />

                            <div className="col-3 col-lg-4 text-end">
                                <ButtonDashboard text="Guardar"/>
                            </div>

                            <div className="col-12 mt-5">
                                <div className="row gx-5">

                                    <div className="col-12 col-lg-6">
                                        <div className="row py-4 bg-cardsDashboard h-100">

                                            <div className="col-12 col-lg-4 ps-lg-4 fs-4 font-weight-semiBold align-self-center text-break">
                                                Marketing e Comunicação
                                            </div>

                                            <PacksInput value={marketingComunicacao.preco} className="col-lg-4" onChange={()=> console.count("4: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                                        <div className="row py-4 bg-cardsDashboard h-100">

                                            <div className="col-12 col-lg-4 ps-lg-4 fs-4 font-weight-semiBold align-self-center text-break">
                                                Organização de eventos
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-4" onChange={()=> console.count("4: ")}/>

                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-12 mt-5">
                                <div className="row gx-5">

                                    <div className="col-12 col-lg-6">
                                        <div className="row py-4 bg-cardsDashboard h-100">

                                            <div className="col-12 col-lg-4 ps-lg-4 fs-4 font-weight-semiBold align-self-center text-break">
                                                Assessoria e criação de conteúdo
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-4" onChange={()=> console.count("4: ")}/>

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
}