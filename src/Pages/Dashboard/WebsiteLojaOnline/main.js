import React, { useEffect, useState } from 'react';
import axios from 'axios'

import NavbarDashboardLg from '../../../Components/Dashboard/NavbarDashboard/NavbarDashboardLg';
import BreadcrumbsDashboard from '../../../Components/Dashboard/Breadcrumb';
import ButtonDashboard from '../../../Components/Dashboard/Button';
import PacksInput from '../../../Components/Dashboard/PacksInput';

export default function Main() {
    const [websiteNumeroPaginas5, setWebsiteNumeroPaginas5] = useState([])
    const [websiteNumeroPaginas10, setWebsiteNumeroPaginas10] = useState([])
    const [websiteNumeroPaginasMaior10, setWebsiteNumeroPaginasMaior10] = useState([])
    const [Website, setWebsite] = useState([])
    const [LandingPage, setLandingPage] = useState([])
    const [portofolio, setPortofolio] = useState([])
    const [websiteCriacaoConteudos, setWebsiteCriacaoConteudos] = useState([])
    const [websiteAlojamento, setWebsiteAlojamento] = useState([])
    const [websiteDominio, setWebsiteDominio] = useState([])
    const [lojaNumeroPaginas5, setLojaNumeroPaginas5] = useState([])
    const [lojaNumeroPaginas10, setLojaNumeroPaginas10] = useState([])
    const [lojaNumeroPaginasMaior10, setLojaNumeroPaginasMaior10] = useState([])
    const [produtos, setProdutos] = useState([])
    const [contactos, setContactos] = useState([])
    const [equipas, setEquipas] = useState([])
    const [outros, setOutros] = useState([])
    const [lojaCriacaoConteudos, setLojaCriacaoConteudos] = useState([])
    const [lojaAlojamento, setLojaAlojamento] = useState([])
    const [lojaDominio, setLojaDominio] = useState([])
    const [suporteManutencao, setSuporteManutencao] = useState([])
    const [servidorDominio, setServidorDominio] = useState([])

    useEffect(() => {
        const baseUrl = "http://localhost:3001/orcamento/findDescricaoServicos/3"

        axios.get(baseUrl)
            .then(response => {
                if (!response.data.success)
                    return alert(response.data.message)

                const data = response.data.data
                console.log(data)
                setWebsiteNumeroPaginas5(data[0])
                setWebsiteNumeroPaginas10(data[1])
                setWebsiteNumeroPaginasMaior10(data[2])
                setWebsite(data[3])
                setLandingPage(data[4])
                setPortofolio(data[5])
                setWebsiteCriacaoConteudos(data[6])
                setWebsiteAlojamento(data[7])
                setWebsiteDominio(data[8])

                setLojaNumeroPaginas5(data[9])
                setLojaNumeroPaginas10(data[10])
                setLojaNumeroPaginasMaior10(data[11])
                setProdutos(data[12])
                setContactos(data[13])
                setEquipas(data[14])
                setOutros(data[15])

                setLojaCriacaoConteudos(data[18])
                setLojaAlojamento(data[17])
                setLojaDominio(data[16])
                setSuporteManutencao(data[19])
                setServidorDominio(data[20])
            })
            .catch(err => {
                alert(err)
            })
    }, [])

    return (
        <main className='overflow-auto d-flex'>
            <NavbarDashboardLg />

            <div className="container-fluid changeSpace">
                <div className="row mt-5">

                    <div className="col-lg-10 offset-lg-1">
                        <div className="row">

                            <BreadcrumbsDashboard route1="Preços" route2="/ Website &#38; Loja Online" />

                            <div className="col-3 col-lg-4 text-end">
                                <ButtonDashboard text="Guardar" onClick={() => save()}/>
                            </div>

                            {/* Website */}

                            <div className="col-12 mt-5 bg-cardsDashboard">
                                <div className="row py-4">

                                    <div className="col-12 ps-lg-4 fs-4 font-weight-semiBold">
                                        Website
                                    </div>

                                    <div className="col-12">
                                        <div className="row pt-4">
                                            
                                            <div className="col-md-12 col-lg-2 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                1.Número de páginas
                                            </div>

                                            <PacksInput nomePack="&lsaquo;5 páginas" value={websiteNumeroPaginas5.preco} className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> {
                                            const newPreco = websiteNumeroPaginas5
                                            newPreco.preco = parseFloat(value.target.value)
                                            setWebsiteNumeroPaginas5(newPreco)
                                            }}/>

                                            <PacksInput nomePack="&lsaquo;10 páginas" value={websiteNumeroPaginas10.preco} className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> {
                                            const newPreco = websiteNumeroPaginas5
                                            newPreco.preco = parseFloat(value.target.value)
                                            setWebsiteNumeroPaginas10(newPreco)
                                            }}/>

                                            <PacksInput nomePack="&rsaquo;10 páginas" value={websiteNumeroPaginasMaior10.preco} className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> {
                                            const newPreco = websiteNumeroPaginas5
                                            newPreco.preco = parseFloat(value.target.value)
                                            setWebsiteNumeroPaginasMaior10(newPreco)
                                            }}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                2.Website
                                            </div>

                                            <PacksInput value={Website.preco} className="col-lg-4" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> {
                                            const newPreco = websiteNumeroPaginas5
                                            newPreco.preco = parseFloat(value.target.value)
                                            setWebsite(newPreco)
                                            }}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                3.Landing page
                                            </div>

                                            <PacksInput value={LandingPage.preco} className="col-lg-4" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> {
                                            const newPreco = websiteNumeroPaginas5
                                            newPreco.preco = parseFloat(value.target.value)
                                            setLandingPage(newPreco)
                                            }}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                4.Portfólio
                                            </div>

                                            <PacksInput value={portofolio.preco} className="col-lg-4" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> {
                                            const newPreco = websiteNumeroPaginas5
                                            newPreco.preco = parseFloat(value.target.value)
                                            setPortofolio(newPreco)
                                            }}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                5.Criação de conteúdos textuais
                                            </div>

                                            <PacksInput value={websiteCriacaoConteudos.preco} className="col-lg-4" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> {
                                            const newPreco = websiteNumeroPaginas5
                                            newPreco.preco = parseFloat(value.target.value)
                                            setWebsiteCriacaoConteudos(newPreco)
                                            }}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                6.Com alojamento
                                            </div>

                                            <PacksInput value={websiteAlojamento.preco} className="col-lg-4" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> {
                                            const newPreco = websiteNumeroPaginas5
                                            newPreco.preco = parseFloat(value.target.value)
                                            setWebsiteAlojamento(newPreco)
                                            }}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                7.Com domínio
                                            </div>

                                            <PacksInput value={websiteDominio.preco} className="col-lg-4" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> {
                                            const newPreco = websiteNumeroPaginas5
                                            newPreco.preco = parseFloat(value.target.value)
                                            setWebsiteDominio(newPreco)
                                            }}/>

                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Lojas Online | E-Commerce */}

                            <div className="col-12 mt-5 bg-cardsDashboard">
                                <div className="row py-4">

                                    <div className="col-12 ps-lg-4 fs-4 font-weight-semiBold">
                                        Lojas Online | E-Commerce
                                    </div>

                                    <div className="col-12">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                1.Número de páginas
                                            </div>

                                            <PacksInput nomePack="&lsaquo;5 páginas" value={lojaNumeroPaginas5.preco}  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> {
                                            const newPreco = websiteNumeroPaginas5
                                            newPreco.preco = parseFloat(value.target.value)
                                            setLojaNumeroPaginas5(newPreco)
                                            }}/>

                                            <PacksInput nomePack="&lsaquo;10 páginas" value={lojaNumeroPaginas10.preco} className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> {
                                            const newPreco = websiteNumeroPaginas5
                                            newPreco.preco = parseFloat(value.target.value)
                                            setLojaNumeroPaginas10(newPreco)
                                            }}/>

                                            <PacksInput nomePack="&rsaquo;10 páginas" value={lojaNumeroPaginasMaior10.preco} className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> {
                                            const newPreco = websiteNumeroPaginas5
                                            newPreco.preco = parseFloat(value.target.value)
                                            setLojaNumeroPaginasMaior10(newPreco)
                                            }}/>

                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="row pt-5">

                                            <div className="col-12 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                2.Com integração
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.1.Produtos
                                                    </div>

                                                    <PacksInput value={produtos.preco} className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> {
                                                    const newPreco = websiteNumeroPaginas5
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setProdutos(newPreco)
                                                    }}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.2.Contactos
                                                    </div>

                                                    <PacksInput value={contactos.preco} className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> {
                                                    const newPreco = websiteNumeroPaginas5
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setContactos(newPreco)
                                                    }}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.3.Equipas
                                                    </div>

                                                    <PacksInput value={equipas.preco} className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> {
                                                    const newPreco = websiteNumeroPaginas5
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setEquipas(newPreco)
                                                    }}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.4.Outros
                                                    </div>

                                                    <PacksInput value={outros.preco} className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> {
                                                    const newPreco = websiteNumeroPaginas5
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setOutros(newPreco)
                                                    }}/>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="row pt-5">

                                            <div className="col-12 col-lg-6">
                                                <div className="row pt-4">

                                                    <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                        3.Com domínio
                                                    </div>

                                                    <PacksInput value={lojaDominio.preco} className="col-lg-4" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> {
                                                    const newPreco = websiteNumeroPaginas5
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setLojaDominio(newPreco)
                                                    }}/>

                                                </div>
                                            </div>

                                            <div className="col-12 col-lg-6">
                                                <div className="row pt-4">

                                                    <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                        4.Com alojamento
                                                    </div>

                                                    <PacksInput value={lojaAlojamento.preco} className="col-lg-4" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> {
                                                    const newPreco = websiteNumeroPaginas5
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setLojaAlojamento(newPreco)
                                                    }}/>

                                                </div>
                                            </div>

                                            <div className="col-12 col-lg-6">
                                                <div className="row pt-4">

                                                    <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                        5.Com criação de conteúdos textuais
                                                    </div>

                                                    <PacksInput value={lojaCriacaoConteudos.preco} className="col-lg-4" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> {
                                                    const newPreco = websiteNumeroPaginas5
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setLojaCriacaoConteudos(newPreco)
                                                    }}/>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Suporte & Manutenção */}
                            {/* Servidor & Domínio */}

                            <div className="col-12 my-5">
                                <div className="row gx-5">

                                    <div className="col-12 col-lg-6">
                                        <div className="row py-4 bg-cardsDashboard h-100">

                                            <div className="col-12 col-lg-4 ps-lg-4 fs-4 font-weight-semiBold align-self-center text-break">
                                                Suporte &#38; Manutenção
                                            </div>

                                            <PacksInput value={suporteManutencao.preco} className="col-lg-4" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> {
                                            const newPreco = websiteNumeroPaginas5
                                            newPreco.preco = parseFloat(value.target.value)
                                            setSuporteManutencao(newPreco)
                                            }}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                                        <div className="row py-4 bg-cardsDashboard h-100">

                                            <div className="col-12 col-lg-4 ps-lg-4 fs-4 font-weight-semiBold align-self-center text-break">
                                                Servidor &#38; Domínio
                                            </div>

                                            <PacksInput value={servidorDominio.preco} className="col-lg-4" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> {
                                            const newPreco = websiteNumeroPaginas5
                                            newPreco.preco = parseFloat(value.target.value)
                                            setServidorDominio(newPreco)
                                            }}/>

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
        const servicosArray = []

        if(websiteNumeroPaginas5.preco <= 0 || websiteNumeroPaginas10.preco <= 0 || websiteNumeroPaginasMaior10.preco <= 0 || Website.preco <= 0 || 
        LandingPage.preco <= 0 || portofolio.preco <= 0 || websiteCriacaoConteudos.preco <= 0 || websiteAlojamento.preco <= 0 || websiteDominio.preco <= 0 || lojaNumeroPaginas5.preco <= 0 || 
        lojaNumeroPaginas10.preco <= 0 || lojaNumeroPaginasMaior10.preco <= 0 || produtos.preco <= 0 || contactos.preco <= 0 || equipas.preco <= 0 || outros.preco <= 0 || 
        lojaCriacaoConteudos.preco <= 0 || lojaAlojamento.preco <= 0 || lojaDominio.preco <= 0 || suporteManutencao.preco <= 0 || servidorDominio.preco <= 0) 
            return alert("Introduza um valor acima de 0")

        
        servicosArray.push(websiteNumeroPaginas5, websiteNumeroPaginas10, websiteNumeroPaginasMaior10, Website, LandingPage, portofolio, websiteCriacaoConteudos, websiteAlojamento,
        websiteDominio, lojaNumeroPaginas5, lojaNumeroPaginas10, lojaNumeroPaginasMaior10, produtos, contactos, equipas, outros, lojaCriacaoConteudos, lojaAlojamento, 
        lojaDominio, suporteManutencao, servidorDominio)
        
        servicosArray.map((data, index) => {
            const baseUrl = "http://localhost:3001/orcamento/updateDescricaoServicos/" + data.id
            const newData = {
                novoPreco: data.preco
            }

            axios.post(baseUrl, newData)
            .then(response => {
                if(response.data.success)
                    if(index === servicosArray.length - 1)
                        return alert(response.data.message)

                if(!response.data.success) {
                    alert(response.data.message + " " + data.descricao)
                }

            })
            .catch(err=> {
                alert("ERRO: " + err)
            })
        })
       
    }
}