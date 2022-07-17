import React, { useEffect, useState } from 'react';
import axios from 'axios'

import NavbarDashboardLg from '../../../Components/Dashboard/NavbarDashboard/NavbarDashboardLg';
import ButtonDashboard from '../../../Components/Dashboard/Button';
import BreadcrumbsDashboard from '../../../Components/Dashboard/Breadcrumb';
import PacksInput from '../../../Components/Dashboard/PacksInput';

export default function Main() {
    const [gestaoPackStart, setGestaoPackStart] = useState([])
    const [gestaoPackBoost, setGestaoPackBoost] = useState([])
    const [gestaoPackBomb, setGestaoPackBomb] = useState([])
    const [facebookPublicacao, setFacebookPublicacao] = useState([])
    const [facebookStorie, setFacebookStorie] = useState([])
    const [facebookReel, setFacebookReel] = useState([])

    const [instaPublicacao, setInstaPublicacao] = useState([])
    const [instaStorie, setInstaStorie] = useState([])
    const [instaReel, setInstaReel] = useState([])

    const [twitterPublicacao, setTwitterPublicacao] = useState([])
    const [twitterStorie, setTwitterStorie] = useState([])
    const [twitterReel, setTwitterReel] = useState([])

    const [tiktokPublicacao, setTiktokPublicacao] = useState([])
    const [tiktokStorie, setTiktokStorie] = useState([])
    const [tiktokReel, setTiktokReel] = useState([])

    const [linkedinPublicacao, setLinkedinPublicacao] = useState([])
    const [linkedinStorie, setLinkedinStorie] = useState([])
    const [linkedinReel, setLinkedinReel] = useState([])

    const [youtubePublicacao, setYoutubePublicacao] = useState([])
    const [youtubeStorie, setYoutubeStorie] = useState([])
    const [youtubeReel, setYoutubeReel] = useState([])

    const [googlePublicacao, setGooglePublicacao] = useState([])
    const [googleStorie, setGoogleStorie] = useState([])
    const [googleReel, setGoogleReel] = useState([])

    const [cover, setCover] = useState([])
    const [design, setDesign] = useState([])
    const [copywriting, setCopywriting] = useState([])
    const [planificacao, setPlanificacao] = useState([])
    const [consultoria, setConsultoria] = useState([])
    const [gestao, setGestao] = useState([])
    const [relatorio, setRelatorio] = useState([])

    const [paidPackStart, setPaidPackStart] = useState([])
    const [paidPackBoost, setPaidPackBoost] = useState([])
    const [paidPackBomb, setPaidPackBomb] = useState([])

    const [estrategiaFacebook, setEstrategiaFacebook] = useState([])
    const [estrategiaInsta, setEstrategiaInsta] = useState([])
    const [estrategiaGoogle, setEstrategiaGoogle] = useState([])

    const [criacaoCampanhaFacebook, setCriacaoCampanhaFacebook] = useState([])
    const [criacaoCampanhaInsta, setCriacaoCampanhaInsta] = useState([])
    const [criacaoCampanhaGoogle, setCriacaoCampanhaGoogle] = useState([])

    const [segmentacaoFacebook, setSegmentacaoFacebook] = useState([])
    const [segmentacaoInsta, setSegmentacaoInsta] = useState([])
    const [segmentacaoGoogle, setSegmentacaoGoogle] = useState([])

    const [otimizacaoFacebook, setOtimizacaoFacebook] = useState([])
    const [otimizacaoInsta, setOtimizacaoInsta] = useState([])
    const [otimizacaoGoogle, setOtimizacaoGoogle] = useState([])

    const [relatorioFacebook, setRelatorioFacebook] = useState([])
    const [relatorioInsta, setRelatorioInsta] = useState([])
    const [relatorioGoogle, setRelatorioGoogle] = useState([])

    const [googleTagFacebook, setGoogleTagFacebook] = useState([])
    const [googleTagInsta, setGoogleTagInsta] = useState([])
    const [googleTagGoogle, setGoogleTagGoogle] = useState([])

    const [gestaoFacebook, setGestaoFacebook] = useState([])
    const [gestaoInsta, setGestaoInsta] = useState([])
    const [gestaoGoogle, setGestaoGoogle] = useState([])

    const [emialSMS, setEmailSMS] = useState([])
    const [otimizacaoSEOSEM, setOtimizacaoSEOSEM] = useState([])

    useEffect(() => {
        const baseUrl ="http://localhost:3001/orcamento/findDescricaoServicos/1"

        axios.get(baseUrl)
            .then(response => {
                if (!response.data.success)
                    return alert(response.data.message)

                const data = response.data.data
                console.log(data)
                
                setGestaoPackStart(data[0])
                setGestaoPackBoost(data[1])
                setGestaoPackBomb(data[2])

                setFacebookPublicacao(data[3])
                setFacebookStorie(data[4])
                setFacebookReel(data[5])

                setInstaPublicacao(data[6])
                setInstaStorie(data[7])
                setInstaReel(data[8])
            
                setTwitterPublicacao(data[9])
                setTwitterStorie(data[10])
                setTwitterReel(data[11])
            
                setTiktokPublicacao(data[12])
                setTiktokStorie(data[13])
                setTiktokReel(data[14])
            
                setLinkedinPublicacao(data[15])
                setLinkedinStorie(data[16])
                setLinkedinReel(data[17])
            
                setYoutubePublicacao(data[18])
                setYoutubeStorie(data[19])
                setYoutubeReel(data[20])
            
                setGooglePublicacao(data[21])
                setGoogleStorie(data[22])
                setGoogleReel(data[23])
            
                setCover(data[24])
                setDesign(data[25])
                setCopywriting(data[26])
                setPlanificacao(data[27])
                setConsultoria(data[28])
                setGestao(data[29])
                setRelatorio(data[30])
            
                setPaidPackStart(data[31])
                setPaidPackBoost(data[32])
                setPaidPackBomb(data[33])
            
                setEstrategiaFacebook(data[34])
                setEstrategiaInsta(data[35])
                setEstrategiaGoogle(data[36])
            
                setCriacaoCampanhaFacebook(data[37])
                setCriacaoCampanhaInsta(data[38])
                setCriacaoCampanhaGoogle(data[39])
            
                setSegmentacaoFacebook(data[40])
                setSegmentacaoInsta(data[41])
                setSegmentacaoGoogle(data[42])
            
                setOtimizacaoFacebook(data[43])
                setOtimizacaoInsta(data[44])
                setOtimizacaoGoogle(data[45])
            
                setRelatorioFacebook(data[46])
                setRelatorioInsta(data[47])
                setRelatorioGoogle(data[48])
            
                setGoogleTagFacebook(data[49])
                setGoogleTagInsta(data[50])
                setGoogleTagGoogle(data[51])
            
                setGestaoFacebook(data[52])
                setGestaoInsta(data[53])
                setGestaoGoogle(data[54])
            
                setEmailSMS(data[55])
                setOtimizacaoSEOSEM(data[56])
            })
            .catch(err => {
                alert(err)
            })
    }, [])

    return (  
        <main className='overflow-auto d-flex'>
            <NavbarDashboardLg fixed="top" />

            <div className="container-fluid changeSpace">
                <div className="row mt-5">

                    <div className="col-lg-10 offset-lg-1">
                        <div className="row">
                            <BreadcrumbsDashboard route1="Preços" route2="/ Marketing Digital"/>

                            <div className="col-3 col-lg-4 text-end">
                                <ButtonDashboard text="Guardar" onClick={() => save()}/>
                            </div>

                            {/* Gestão de redes Sociais */}

                            <div className="col-12 mt-5 bg-cardsDashboard">
                                <div className="row py-4">

                                    <div className="col-12">
                                        <div className="row">

                                            <div className="col-12 ps-lg-4 fs-4 font-weight-semiBold">
                                                Gestão de redes Sociais
                                            </div>

                                            <div className="col-md-12 col-lg-2 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                1.Packs
                                            </div>

                                            <PacksInput value={gestaoPackStart.preco} nomePack="Start" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> {
                                            const newPreco = gestaoPackStart
                                            newPreco.preco = parseFloat(value.target.value)
                                            setGestaoPackStart(newPreco)
                                            }}/>

                                            <PacksInput value={gestaoPackBoost.preco} nomePack="Boost" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> {
                                            const newPreco = gestaoPackBoost
                                            newPreco.preco = parseFloat(value.target.value)
                                            setGestaoPackBoost(newPreco)
                                            }}/>

                                            <PacksInput value={gestaoPackBomb.preco} nomePack="Bomb" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> {
                                            const newPreco = gestaoPackBomb
                                            newPreco.preco = parseFloat(value.target.value)
                                            setGestaoPackBomb(newPreco)
                                            }}/>

                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="row pt-4">

                                            <div className="col-12 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                2.Pack Personalizado
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.1.Facebook
                                                    </div>

                                                    <PacksInput nomePack="Por publicação"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={facebookPublicacao.preco} onChange={(value)=> { 
                                                    const newPreco = facebookPublicacao
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setFacebookPublicacao(newPreco)
                                                    }} />

                                                    <PacksInput nomePack="Por storie"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={facebookStorie.preco} onChange={(value)=> {
                                                     const newPreco = facebookStorie
                                                     newPreco.preco = parseFloat(value.target.value)
                                                     setFacebookStorie(newPreco)
                                                    }} />

                                                    <PacksInput nomePack="Por reel"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={facebookReel.preco} onChange={(value)=> {
                                                     const newPreco = facebookReel
                                                     newPreco.preco = parseFloat(value.target.value)
                                                     setFacebookReel(newPreco)
                                                    }} />

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.2.Instagram
                                                    </div>

                                                    <PacksInput nomePack="Por publicação"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={instaPublicacao.preco} onChange={(value)=>{
                                                    const newPreco = instaPublicacao
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setInstaPublicacao(newPreco)
                                                    }} />

                                                    <PacksInput nomePack="Por storie"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={instaStorie.preco} onChange={(value)=>{
                                                    const newPreco = instaStorie
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setInstaStorie(newPreco)
                                                    }} />

                                                    <PacksInput nomePack="Por reel"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={instaReel.preco} onChange={(value)=> {
                                                    const newPreco = instaReel
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setInstaReel(newPreco)
                                                    }}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.3.Twitter
                                                    </div>
            
                                                    <PacksInput nomePack="Por publicação"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={twitterPublicacao.preco} onChange={(value)=> {
                                                    const newPreco = twitterPublicacao
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setTwitterPublicacao(newPreco)
                                                    }}/>

                                                    <PacksInput nomePack="Por storie"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={twitterStorie.preco} onChange={(value)=> {
                                                    const newPreco = twitterStorie
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setTwitterStorie(newPreco)
                                                    }}/>

                                                    <PacksInput nomePack="Por reel"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={twitterReel.preco} onChange={(value)=> {
                                                    const newPreco = twitterReel
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setTwitterReel(newPreco)
                                                    }} />

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.4.TikTok
                                                    </div>
            
                                                    <PacksInput nomePack="Por publicação"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={tiktokPublicacao.preco} onChange={(value)=> {
                                                    const newPreco = tiktokPublicacao
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setTiktokPublicacao(newPreco)
                                                    }}/>

                                                    <PacksInput nomePack="Por storie"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={tiktokStorie.preco} onChange={(value)=> {
                                                    const newPreco = tiktokStorie
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setTiktokStorie(newPreco)
                                                    }}/>

                                                    <PacksInput nomePack="Por reel"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={tiktokReel.preco} onChange={(value)=> {
                                                    const newPreco = tiktokReel
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setTiktokReel(newPreco)
                                                    }}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.5.Linkedin
                                                    </div>
            
                                                    <PacksInput nomePack="Por publicação"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={linkedinPublicacao.preco} onChange={(value)=> {
                                                    const newPreco = linkedinPublicacao
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setLinkedinPublicacao(newPreco)
                                                    }}/>

                                                    <PacksInput nomePack="Por storie"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={linkedinStorie.preco} onChange={(value)=> {
                                                    const newPreco = linkedinStorie
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setLinkedinStorie(newPreco)
                                                    }}/>

                                                    <PacksInput nomePack="Por reel"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={linkedinReel.preco} onChange={(value)=> {
                                                    const newPreco = linkedinReel
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setLinkedinReel(newPreco)
                                                    }}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.6.Youtube
                                                    </div>
            
                                                    <PacksInput nomePack="Por publicação"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={youtubePublicacao.preco} onChange={(value)=> {
                                                    const newPreco = youtubePublicacao
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setYoutubePublicacao(newPreco)
                                                    }}/>

                                                    <PacksInput nomePack="Por storie"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={youtubeStorie.preco} onChange={(value)=> {
                                                    const newPreco = youtubeStorie
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setYoutubeStorie(newPreco)
                                                    }}/>

                                                    <PacksInput nomePack="Por reel"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={youtubeReel.preco} onChange={(value)=> {
                                                    const newPreco = youtubeReel
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setYoutubeReel(newPreco)
                                                    }}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.7.Google My Business
                                                    </div>
            
                                                    <PacksInput nomePack="Por publicação"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={googlePublicacao.preco} onChange={(value)=> {
                                                    const newPreco = googlePublicacao
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setGooglePublicacao(newPreco) 
                                                    }}/>

                                                    <PacksInput nomePack="Por storie"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={googleStorie.preco} onChange={(value)=> {
                                                    const newPreco = googleStorie
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setGoogleStorie(newPreco)
                                                    }}/>

                                                    <PacksInput nomePack="Por reel"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={googleReel.preco} onChange={(value)=> {
                                                    const newPreco = googleReel
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setGoogleReel(newPreco)
                                                    }}/>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-12 ps-lg-5">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                2.8.Cover
                                            </div>

                                            <PacksInput  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={cover.preco} onChange={(value)=> {
                                            const newPreco = cover
                                            newPreco.preco = parseFloat(value.target.value)
                                            setCover(newPreco)
                                            }}/>

                                        </div>
                                    </div>

                                    <div className="col-12 ps-lg-5">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                2.9.Design para publicações
                                            </div>

                                            <PacksInput  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={design.preco} onChange={(value)=> {
                                            const newPreco = design
                                            newPreco.preco = parseFloat(value.target.value)
                                            setDesign(newPreco)
                                            }}/>

                                        </div>
                                    </div>

                                    <div className="col-12 ps-lg-5">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                2.10.Copywriting
                                            </div>

                                            <PacksInput  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={copywriting.preco} onChange={(value)=> {
                                            const newPreco = copywriting
                                            newPreco.preco = parseFloat(value.target.value)
                                            setCopywriting(newPreco)
                                            }}/>

                                        </div>
                                    </div>

                                    <div className="col-12 ps-lg-5">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                2.11.Planificação Editorial
                                            </div>

                                            <PacksInput  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={planificacao.preco} onChange={(value)=>{
                                            const newPreco = planificacao
                                            newPreco.preco = parseFloat(value.target.value)
                                            setPlanificacao(newPreco)
                                            }}/>

                                        </div>
                                    </div>

                                    <div className="col-12 ps-lg-5">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                2.12.Consultoria Digital
                                            </div>

                                            <PacksInput  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={consultoria.preco} onChange={(value)=> {
                                            const newPreco = consultoria
                                            newPreco.preco = parseFloat(value.target.value)
                                            setConsultoria(newPreco)
                                            }}/>

                                        </div>
                                    </div>

                                    <div className="col-12 ps-lg-5">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                2.13.Gestão de Campanhas
                                            </div>

                                            <PacksInput  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={gestao.preco} onChange={(value)=> {
                                            const newPreco = gestao
                                            newPreco.preco = parseFloat(value.target.value)
                                            setGestao(newPreco)
                                            }}/>

                                        </div>
                                    </div>

                                    <div className="col-12 ps-lg-5">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                2.14.Relatório Mensal
                                            </div>

                                            <PacksInput  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={relatorio.preco} onChange={(value)=> {
                                            const newPreco = relatorio
                                            newPreco.preco = parseFloat(value.target.value)
                                            setRelatorio(newPreco)
                                            }}/>

                                        </div>
                                    </div>
                                    
                               </div>
                            </div>

                            {/* Paid Media */}

                            <div className="col-12 mt-5 bg-cardsDashboard">
                                <div className="row py-4">
                                    
                                    <div className="col-12 ps-lg-4 fs-4 font-weight-semiBold">
                                        Paid Media
                                    </div>

                                    <div className="col-12">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                1.Packs
                                            </div>

                                            <PacksInput nomePack="Start" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={paidPackStart.preco} onChange={(value)=> {
                                            const newPreco = paidPackStart
                                            newPreco.preco = parseFloat(value.target.value)
                                            setPaidPackStart(newPreco)
                                            }}/>

                                            <PacksInput nomePack="Boost" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={paidPackBoost.preco} onChange={(value)=> {
                                            const newPreco = paidPackBoost
                                            newPreco.preco = parseFloat(value.target.value)
                                            setPaidPackBoost(newPreco)
                                            }}/>

                                            <PacksInput nomePack="Bomb" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={paidPackBomb.preco} onChange={(value)=> {
                                            const newPreco = paidPackBomb
                                            newPreco.preco = parseFloat(value.target.value)
                                            setPaidPackBomb(newPreco)
                                            }}/>

                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="row py-4">

                                            <div className="col-12 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                2.Pack Personalizado
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.1.Estratégia Digital
                                                    </div>

                                                    <PacksInput nomePack="Facebook" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={estrategiaFacebook.preco} onChange={(value)=> {
                                                    const newPreco = estrategiaFacebook
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setEstrategiaFacebook(newPreco)
                                                    }}/>

                                                    <PacksInput nomePack="Instagram" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={estrategiaInsta.preco} onChange={(value)=> {
                                                    const newPreco = estrategiaInsta
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setEstrategiaInsta(newPreco)
                                                    }}/>

                                                    <PacksInput nomePack="Google" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={estrategiaGoogle.preco} onChange={(value)=> {
                                                    const newPreco = estrategiaGoogle
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setEstrategiaGoogle(newPreco)
                                                    }}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.2.Criação de campanhas e anúncios
                                                    </div>

                                                    <PacksInput nomePack="Facebook" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={criacaoCampanhaFacebook.preco} onChange={(value)=> {
                                                    const newPreco = criacaoCampanhaFacebook
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setCriacaoCampanhaFacebook(newPreco)
                                                    }}/>

                                                    <PacksInput nomePack="Instagram" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={criacaoCampanhaInsta.preco} onChange={(value)=> {
                                                    const newPreco = criacaoCampanhaInsta
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setCriacaoCampanhaInsta(newPreco)
                                                    }}/>

                                                    <PacksInput nomePack="Google" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={criacaoCampanhaGoogle.preco} onChange={(value)=> {
                                                    const newPreco = criacaoCampanhaInsta
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setCriacaoCampanhaGoogle(newPreco)
                                                    }}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.3.Segmentação do público
                                                    </div>

                                                    <PacksInput nomePack="Facebook" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={segmentacaoFacebook.preco} onChange={(value)=> {
                                                    const newPreco = segmentacaoFacebook
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setSegmentacaoFacebook(newPreco)
                                                    }}/>

                                                    <PacksInput nomePack="Instagram" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={segmentacaoInsta.preco} onChange={(value)=> {
                                                    const newPreco = segmentacaoInsta
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setSegmentacaoInsta(newPreco)
                                                    }}/>

                                                    <PacksInput nomePack="Google" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={segmentacaoGoogle.preco} onChange={(value)=> {
                                                    const newPreco = segmentacaoGoogle
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setSegmentacaoGoogle(newPreco)
                                                    }}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.4.Otimização de campanha
                                                    </div>

                                                    <PacksInput nomePack="Facebook" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={otimizacaoFacebook.preco} onChange={(value)=> {
                                                    const newPreco = otimizacaoFacebook
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setOtimizacaoFacebook(newPreco)
                                                    }}/>

                                                    <PacksInput nomePack="Instagram" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={otimizacaoInsta.preco} onChange={(value)=> {
                                                    const newPreco = otimizacaoInsta
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setOtimizacaoInsta(newPreco)
                                                    }}/>

                                                    <PacksInput nomePack="Google" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={otimizacaoGoogle.preco} onChange={(value)=> {
                                                    const newPreco = otimizacaoGoogle
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setOtimizacaoGoogle(newPreco)
                                                    }}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.5.Relatório mensal
                                                    </div>

                                                    <PacksInput nomePack="Facebook" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={relatorioFacebook.preco} onChange={(value)=> {
                                                    const newPreco = relatorioFacebook
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setRelatorioFacebook(newPreco)
                                                    }}/>

                                                    <PacksInput nomePack="Instagram" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={relatorioInsta.preco} onChange={(value)=> {
                                                    const newPreco = relatorioInsta
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setRelatorioInsta(newPreco)
                                                    }}/>

                                                    <PacksInput nomePack="Google" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={relatorioGoogle.preco} onChange={(value)=> {
                                                    const newPreco = relatorioGoogle
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setRelatorioGoogle(newPreco)
                                                    }}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.6.Criação de conversões c/Google Tag Manager
                                                    </div>

                                                    <PacksInput nomePack="Facebook" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={googleTagFacebook.preco} onChange={(value)=> {
                                                    const newPreco = googleTagFacebook
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setGoogleTagFacebook(newPreco)
                                                    }}/>

                                                    <PacksInput nomePack="Instagram" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={googleTagInsta.preco} onChange={(value)=> {
                                                    const newPreco = googleTagInsta
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setGoogleTagInsta(newPreco)
                                                    }}/>

                                                    <PacksInput nomePack="Google" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={googleTagGoogle.preco} onChange={(value)=> {
                                                    const newPreco = googleTagGoogle
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setGoogleTagGoogle(newPreco)
                                                    }}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.7.Gestão de campanhas
                                                    </div>

                                                    <PacksInput nomePack="Facebook" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={gestaoFacebook.preco} onChange={(value)=> {
                                                    const newPreco = gestaoFacebook
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setGestaoFacebook(newPreco)
                                                    }}/>

                                                    <PacksInput nomePack="Instagram" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={gestaoInsta.preco} onChange={(value)=> {
                                                    const newPreco = gestaoInsta
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setGestaoInsta(newPreco)
                                                    }}/>

                                                    <PacksInput nomePack="Google" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={gestaoGoogle.preco} onChange={(value)=> {
                                                    const newPreco = gestaoGoogle
                                                    newPreco.preco = parseFloat(value.target.value)
                                                    setGestaoGoogle(newPreco)
                                                    }}/>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Email & SMS Marketing */}
                            {/* Otimização & SEM */}

                            <div className="col-12 my-5">
                                <div className="row gx-5">

                                    <div className="col-12 col-lg-6">
                                        <div className="row py-4 bg-cardsDashboard h-100">

                                            <div className="col-12 col-lg-4 ps-lg-4 fs-4 font-weight-semiBold align-self-center text-break">
                                                Email &#38; SMS Marketing
                                            </div>

                                            <PacksInput className="col-lg-4" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={emialSMS.preco} onChange={(value)=> {
                                            const newPreco = emialSMS
                                            newPreco.preco = parseFloat(value.target.value)
                                            setEmailSMS(newPreco)
                                            }}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                                        <div className="row py-4 bg-cardsDashboard h-100">

                                            <div className="col-12 col-lg-4 ps-lg-4 fs-4 font-weight-semiBold align-self-center text-break">
                                                Otimização SEO &#38; SEM
                                            </div>

                                            <PacksInput className="col-lg-4" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={otimizacaoSEOSEM.preco} onChange={(value)=> {
                                            const newPreco = otimizacaoSEOSEM
                                            newPreco.preco = parseFloat(value.target.value)
                                            setOtimizacaoSEOSEM(newPreco)
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
        
        if(gestaoPackStart.preco <= 0 || gestaoPackBoost.preco <= 0 || gestaoPackBomb.preco <= 0 || facebookPublicacao.preco <= 0 || facebookStorie.preco <= 0 || 
        facebookReel.preco <= 0 || instaPublicacao.preco <= 0 || instaStorie.preco <= 0 || instaReel.preco <= 0 || twitterPublicacao.preco <= 0 || twitterStorie.preco <= 0 ||
        twitterReel.preco <= 0 || tiktokPublicacao.preco <= 0 || tiktokStorie.preco <= 0 || tiktokReel.preco <= 0 || linkedinPublicacao.preco <= 0 || linkedinStorie.preco <= 0 ||
        linkedinReel.preco <= 0 || youtubePublicacao.preco <= 0 || youtubeStorie.preco <= 0 || youtubeReel.preco <= 0 || googlePublicacao.preco <= 0 || googleStorie.preco <= 0 ||
        googleReel.preco <= 0 || cover.preco <= 0 || design.preco <= 0 || copywriting.preco <= 0 || planificacao.preco <= 0 || consultoria.preco <= 0 || gestao.preco <= 0 ||
        relatorio.preco <= 0 || paidPackStart.preco <= 0 || paidPackBoost.preco <= 0 || paidPackBomb.preco <= 0 || estrategiaFacebook.preco <= 0 || estrategiaInsta.preco <= 0 ||
        estrategiaGoogle.preco <= 0 || criacaoCampanhaFacebook.preco <= 0 || criacaoCampanhaInsta.preco <= 0 || criacaoCampanhaGoogle.preco <= 0 || segmentacaoFacebook.preco <= 0 ||
        segmentacaoInsta.preco <= 0 || segmentacaoGoogle.preco <= 0 || otimizacaoFacebook.preco <= 0 || otimizacaoInsta.preco <= 0 ||
        otimizacaoGoogle.preco <= 0 || relatorioFacebook.preco <= 0 || relatorioInsta.preco <= 0 || relatorioGoogle.preco <= 0 || googleTagFacebook.preco <= 0 ||
        googleTagInsta.preco <= 0 || googleTagGoogle.preco <= 0 || gestaoFacebook.preco <= 0 || gestaoInsta.preco <= 0 || gestaoGoogle.preco <= 0 || emialSMS.preco <= 0 ||
        otimizacaoSEOSEM.preco <= 0)
            return alert("Introduza um valor acima de 0")
            
        servicosArray.push(gestaoPackStart, gestaoPackBoost, gestaoPackBomb, facebookPublicacao, facebookStorie, facebookReel, instaPublicacao, instaStorie,
        instaReel, twitterPublicacao, twitterStorie, twitterReel, tiktokPublicacao, tiktokStorie, tiktokReel, linkedinPublicacao, linkedinStorie, linkedinReel, youtubePublicacao,
        youtubeStorie, youtubeReel, googlePublicacao, googleStorie, googleReel, cover, design, copywriting, planificacao, consultoria, gestao, relatorio, paidPackStart,
        paidPackBoost, paidPackBomb, estrategiaFacebook, estrategiaInsta, estrategiaGoogle, criacaoCampanhaFacebook, criacaoCampanhaInsta, criacaoCampanhaGoogle, segmentacaoFacebook,
        segmentacaoInsta, segmentacaoGoogle, otimizacaoFacebook, otimizacaoInsta, otimizacaoGoogle, relatorioFacebook, relatorioInsta, relatorioGoogle, googleTagFacebook,
        googleTagInsta, googleTagGoogle, gestaoFacebook, gestaoInsta, gestaoGoogle, emialSMS, otimizacaoSEOSEM)

        servicosArray.map((data, index) => {
            console.log(data)
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