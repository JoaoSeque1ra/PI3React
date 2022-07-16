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
        const baseUrl ="http://localhost:3001/orcamento/findMarketingDigital"

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
                                <ButtonDashboard text="Guardar"/>
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

                                            <PacksInput value={gestaoPackStart.preco} nomePack="Start" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> setGestaoPackStart(value.target.value)}/>

                                            <PacksInput value={gestaoPackBoost.preco} nomePack="Boost" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> setGestaoPackBoost(value.target.value)}/>

                                            <PacksInput value={gestaoPackBomb.preco} nomePack="Bomb" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value)=> setGestaoPackBomb(value.target.value)}/>

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

                                                    <PacksInput nomePack="Por publicação"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={facebookPublicacao.preco} onChange={(value)=> setFacebookPublicacao(value.target.value)}/>

                                                    <PacksInput nomePack="Por storie"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={facebookStorie.preco} onChange={(value)=> setFacebookStorie(value.target.value)}/>

                                                    <PacksInput nomePack="Por reel"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={facebookReel.preco} onChange={(value)=> setFacebookReel(value.target.value)}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.2.Instagram
                                                    </div>

                                                    <PacksInput nomePack="Por publicação"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={instaPublicacao.preco} onChange={(value)=> setInstaPublicacao(value.target.value)}/>

                                                    <PacksInput nomePack="Por storie"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={instaStorie.preco} onChange={(value)=> setInstaStorie(value.target.value)}/>

                                                    <PacksInput nomePack="Por reel"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={instaReel.preco} onChange={(value)=> setInstaReel(value.target.value)}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.3.Twitter
                                                    </div>
            
                                                    <PacksInput nomePack="Por publicação"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={twitterPublicacao.preco} onChange={(value)=> setTwitterPublicacao(value.target.value)}/>

                                                    <PacksInput nomePack="Por storie"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={twitterStorie.preco} onChange={(value)=> setTwitterStorie(value.target.value)}/>

                                                    <PacksInput nomePack="Por reel"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={twitterReel.preco} onChange={(value)=> setTwitterReel(value.target.value)} />

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.4.TikTok
                                                    </div>
            
                                                    <PacksInput nomePack="Por publicação"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={tiktokPublicacao.preco} onChange={(value)=> setTiktokPublicacao(value.target.value)}/>

                                                    <PacksInput nomePack="Por storie"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={tiktokStorie.preco} onChange={(value)=> setTiktokStorie(value.target.value)}/>

                                                    <PacksInput nomePack="Por reel"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={tiktokReel.preco} onChange={(value)=> setTiktokReel(value.target.value)}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.5.Linkedin
                                                    </div>
            
                                                    <PacksInput nomePack="Por publicação"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={linkedinPublicacao.preco} onChange={(value)=> setLinkedinPublicacao(value.target.value)}/>

                                                    <PacksInput nomePack="Por storie"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={linkedinStorie.preco} onChange={(value)=> setLinkedinStorie(value.target.value)}/>

                                                    <PacksInput nomePack="Por reel"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={linkedinReel.preco} onChange={(value)=> setLinkedinReel(value.target.value)}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.6.Youtube
                                                    </div>
            
                                                    <PacksInput nomePack="Por publicação"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={youtubePublicacao.preco} onChange={(value)=> setYoutubePublicacao(value.target.value)}/>

                                                    <PacksInput nomePack="Por storie"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={youtubeStorie.preco} onChange={(value)=> setYoutubeStorie(value.target.value)}/>

                                                    <PacksInput nomePack="Por reel"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={youtubeReel.preco} onChange={(value)=> setYoutubeReel(value.target.value)}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.7.Google My Business
                                                    </div>
            
                                                    <PacksInput nomePack="Por publicação"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={googlePublicacao.preco} onChange={(value)=> setGooglePublicacao(value.target.value)}/>

                                                    <PacksInput nomePack="Por storie"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={googleStorie.preco} onChange={(value)=> setGoogleStorie(value.target.value)}/>

                                                    <PacksInput nomePack="Por reel"  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={googleReel.preco} onChange={(value)=> setGoogleReel(value.target.value)}/>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-12 ps-lg-5">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                2.8.Cover
                                            </div>

                                            <PacksInput  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={cover.preco} onChange={(value)=> setCover(value.target.value)}/>

                                        </div>
                                    </div>

                                    <div className="col-12 ps-lg-5">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                2.9.Design para publicações
                                            </div>

                                            <PacksInput  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={design.preco} onChange={(value)=> setDesign(value.target.value)}/>

                                        </div>
                                    </div>

                                    <div className="col-12 ps-lg-5">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                2.10.Copywriting
                                            </div>

                                            <PacksInput  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={copywriting.preco} onChange={(value)=> setCopywriting(value.target.value)}/>

                                        </div>
                                    </div>

                                    <div className="col-12 ps-lg-5">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                2.11.Planificação Editorial
                                            </div>

                                            <PacksInput  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={planificacao.preco} onChange={(value)=> setPlanificacao(value.target.value)}/>

                                        </div>
                                    </div>

                                    <div className="col-12 ps-lg-5">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                2.12.Consultoria Digital
                                            </div>

                                            <PacksInput  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={consultoria.preco} onChange={(value)=> setConsultoria(value.target.value)}/>

                                        </div>
                                    </div>

                                    <div className="col-12 ps-lg-5">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                2.13.Gestão de Campanhas
                                            </div>

                                            <PacksInput  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={gestao.preco} onChange={(value)=> setGestao(value.target.value)}/>

                                        </div>
                                    </div>

                                    <div className="col-12 ps-lg-5">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                2.14.Relatório Mensal
                                            </div>

                                            <PacksInput  className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={relatorio.preco} onChange={(value)=> setRelatorio(value.target.value)}/>

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

                                            <PacksInput nomePack="Start" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={paidPackStart.preco} onChange={(value)=> setPaidPackStart(value.target.value)}/>

                                            <PacksInput nomePack="Boost" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={paidPackBoost.preco} onChange={(value)=> setPaidPackBoost(value.target.value)}/>

                                            <PacksInput nomePack="Bomb" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={paidPackBomb.preco} onChange={(value)=> setPaidPackBomb(value.target.value)}/>

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

                                                    <PacksInput nomePack="Facebook" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={estrategiaFacebook.preco} onChange={(value)=> setEstrategiaFacebook(value.target.value)}/>

                                                    <PacksInput nomePack="Instagram" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={estrategiaInsta.preco} onChange={(value)=> setEstrategiaInsta(value.target.value)}/>

                                                    <PacksInput nomePack="Google" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={estrategiaGoogle.preco} onChange={(value)=> setEstrategiaGoogle(value.target.value)}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.2.Criação de campanhas e anúncios
                                                    </div>

                                                    <PacksInput nomePack="Facebook" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={criacaoCampanhaFacebook.preco} onChange={(value)=> setCriacaoCampanhaFacebook(value.target.value)}/>

                                                    <PacksInput nomePack="Instagram" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={criacaoCampanhaInsta.preco} onChange={(value)=> setCriacaoCampanhaInsta(value.target.value)}/>

                                                    <PacksInput nomePack="Google" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={criacaoCampanhaGoogle.preco} onChange={(value)=> setCriacaoCampanhaGoogle(value.target.value)}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.3.Segmentação do público
                                                    </div>

                                                    <PacksInput nomePack="Facebook" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={segmentacaoFacebook.preco} onChange={(value)=> setSegmentacaoFacebook(value.target.value)}/>

                                                    <PacksInput nomePack="Instagram" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={segmentacaoInsta.preco} onChange={(value)=> setSegmentacaoInsta(value.target.value)}/>

                                                    <PacksInput nomePack="Google" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={segmentacaoGoogle.preco} onChange={(value)=> setSegmentacaoGoogle(value.target.value)}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.4.Otimização de campanha
                                                    </div>

                                                    <PacksInput nomePack="Facebook" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={otimizacaoFacebook.preco} onChange={(value)=> setOtimizacaoFacebook(value.target.value)}/>

                                                    <PacksInput nomePack="Instagram" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={otimizacaoInsta.preco} onChange={(value)=> setOtimizacaoInsta(value.target.value)}/>

                                                    <PacksInput nomePack="Google" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={otimizacaoGoogle.preco} onChange={(value)=> setOtimizacaoGoogle(value.target.value)}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.5.Relatório mensal
                                                    </div>

                                                    <PacksInput nomePack="Facebook" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={relatorioFacebook.preco} onChange={(value)=> setRelatorioFacebook(value.target.value)}/>

                                                    <PacksInput nomePack="Instagram" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={relatorioInsta.preco} onChange={(value)=> setRelatorioInsta(value.target.value)}/>

                                                    <PacksInput nomePack="Google" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={relatorioGoogle.preco} onChange={(value)=> setRelatorioGoogle(value.target.value)}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.6.Criação de conversões c/Google Tag Manager
                                                    </div>

                                                    <PacksInput nomePack="Facebook" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={googleTagFacebook.preco} onChange={(value)=> setGoogleTagFacebook(value.target.value)}/>

                                                    <PacksInput nomePack="Instagram" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={googleTagInsta.preco} onChange={(value)=> setGoogleTagInsta(value.target.value)}/>

                                                    <PacksInput nomePack="Google" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={googleTagGoogle.preco} onChange={(value)=> setGoogleTagGoogle(value.target.value)}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.7.Gestão de campanhas
                                                    </div>

                                                    <PacksInput nomePack="Facebook" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={gestaoFacebook.preco} onChange={(value)=> setGestaoFacebook(value.target.value)}/>

                                                    <PacksInput nomePack="Instagram" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={gestaoInsta.preco} onChange={(value)=> setGestaoInsta(value.target.value)}/>

                                                    <PacksInput nomePack="Google" className="col-lg-2" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={gestaoGoogle.preco} onChange={(value)=> setGestaoGoogle(value.target.value)}/>

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

                                            <PacksInput className="col-lg-4" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={emialSMS.preco} onChange={(value)=> setEmailSMS(value.target.value)}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                                        <div className="row py-4 bg-cardsDashboard h-100">

                                            <div className="col-12 col-lg-4 ps-lg-4 fs-4 font-weight-semiBold align-self-center text-break">
                                                Otimização SEO &#38; SEM
                                            </div>

                                            <PacksInput className="col-lg-4" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" value={otimizacaoSEOSEM.preco} onChange={(value)=> setOtimizacaoSEOSEM(value.target.value)}/>

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