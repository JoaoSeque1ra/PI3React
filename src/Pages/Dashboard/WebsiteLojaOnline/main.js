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
        const baseUrl = "http://localhost:3001/orcamento/findWebsiteLojaOnline"

        axios.get(baseUrl)
            .then(response => {
                if (!response.data.success)
                    return alert(response.data.message)

                const data = response.data.data
                console.log(data)
                setWebsiteNumeroPaginas5(data[0])
                setWebsiteNumeroPaginas10(data[1])
                setWebsiteNumeroPaginasMaior10(data[2])
                setWebsite(data[8])
                setLandingPage(data[3])
                setPortofolio(data[4])
                setWebsiteCriacaoConteudos(data[5])
                setWebsiteAlojamento(data[6])
                setWebsiteDominio(data[7])

                setLojaNumeroPaginas5(data[0])
                setLojaNumeroPaginas10(data[1])
                setLojaNumeroPaginasMaior10(data[2])
                setProdutos(data[8])
                setContactos(data[9])
                setEquipas(data[10])
                setOutros(data[11])
                setLojaCriacaoConteudos(data[12])
                setLojaAlojamento(data[13])
                setLojaDominio(data[15])
                setSuporteManutencao(data[32])
                setServidorDominio(data[15])
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

                                            <PacksInput nomePack="&lsaquo;5 páginas" value={websiteNumeroPaginas5.preco} className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> setWebsiteNumeroPaginas5(value.target.value)}/>

                                            <PacksInput nomePack="&lsaquo;10 páginas" value={websiteNumeroPaginas10.preco} className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> setWebsiteNumeroPaginas10(value.target.value)}/>

                                            <PacksInput nomePack="&rsaquo;10 páginas" value={websiteNumeroPaginasMaior10.preco} className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> setWebsiteNumeroPaginasMaior10(value.target.value)}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                2.Website
                                            </div>

                                            <PacksInput value={Website.preco} className="col-lg-4" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> setWebsite(value.target.value)}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                3.Landing page
                                            </div>

                                            <PacksInput value={LandingPage.preco} className="col-lg-4" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> setLandingPage(value.target.value)}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                4.Portfólio
                                            </div>

                                            <PacksInput value={portofolio.preco} className="col-lg-4" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> setPortofolio(value.target.value)}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                5.Criação de conteúdos textuais
                                            </div>

                                            <PacksInput value={websiteCriacaoConteudos.preco} className="col-lg-4" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> setWebsiteCriacaoConteudos(value.target.value)}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                6.Com alojamento
                                            </div>

                                            <PacksInput value={websiteAlojamento.preco} className="col-lg-4" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> setWebsiteAlojamento(value.target.value)}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                7.Com domínio
                                            </div>

                                            <PacksInput value={websiteDominio.preco} className="col-lg-4" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> setWebsiteDominio(value.target.value)}/>

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

                                            <PacksInput nomePack="&lsaquo;5 páginas" value={lojaNumeroPaginas5.preco}  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> setLojaNumeroPaginas5(value.target.value)}/>

                                            <PacksInput nomePack="&lsaquo;10 páginas" value={lojaNumeroPaginas10.preco} className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> setLojaNumeroPaginas10(value.target.value)}/>

                                            <PacksInput nomePack="&rsaquo;10 páginas" value={lojaNumeroPaginasMaior10.preco} className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> setLojaNumeroPaginasMaior10(value.target.value)}/>

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

                                                    <PacksInput value={produtos.preco} className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> setProdutos(value.target.value)}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.2.Contactos
                                                    </div>

                                                    <PacksInput value={contactos.preco} className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> setContactos(value.target.value)}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.3.Equipas
                                                    </div>

                                                    <PacksInput value={equipas.preco} className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> setEquipas(value.target.value)}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.4.Outros
                                                    </div>

                                                    <PacksInput value={outros.preco} className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> setOutros(value.target.value)}/>

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

                                                    <PacksInput value={lojaDominio.preco} className="col-lg-4" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> setLojaDominio(value.target.value)}/>

                                                </div>
                                            </div>

                                            <div className="col-12 col-lg-6">
                                                <div className="row pt-4">

                                                    <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                        4.Com alojamento
                                                    </div>

                                                    <PacksInput value={lojaAlojamento.preco} className="col-lg-4" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> setLojaAlojamento(value.target.value)}/>

                                                </div>
                                            </div>

                                            <div className="col-12 col-lg-6">
                                                <div className="row pt-4">

                                                    <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                        5.Com criação de conteúdos textuais
                                                    </div>

                                                    <PacksInput value={lojaCriacaoConteudos.preco} className="col-lg-4" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> setLojaCriacaoConteudos(value.target.value)}/>

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

                                            <PacksInput value={suporteManutencao.preco} className="col-lg-4" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> setSuporteManutencao(value.target.value)}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                                        <div className="row py-4 bg-cardsDashboard h-100">

                                            <div className="col-12 col-lg-4 ps-lg-4 fs-4 font-weight-semiBold align-self-center text-break">
                                                Servidor &#38; Domínio
                                            </div>

                                            <PacksInput value={servidorDominio.preco} className="col-lg-4" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> setServidorDominio(value.target.value)}/>

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

        if(websiteNumeroPaginas5.preco <= 0 || websiteNumeroPaginas10.preco <= 0 || websiteNumeroPaginasMaior10.preco <= 0 || Website.preco <= 0 || LandingPage.preco <= 0 || portofolio.preco <= 0 || websiteCriacaoConteudos.preco <= 0 || websiteAlojamento.preco <= 0 || websiteDominio.preco <= 0 || lojaNumeroPaginas5.preco <= 0 || lojaNumeroPaginas10.preco <= 0 || 
        lojaNumeroPaginasMaior10.preco <= 0 || produtos.preco <= 0 || contactos.preco <= 0 || equipas.preco <= 0 || outros.preco <= 0 
        || lojaCriacaoConteudos.preco <= 0 || lojaAlojamento.preco <= 0 || lojaDominio.preco <= 0 || suporteManutencao.preco <= 0 || servidorDominio.preco <= 0) 
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