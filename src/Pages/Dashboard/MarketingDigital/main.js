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
                
                setGestaoPackStart()
                setGestaoPackBoost()
                setGestaoPackBomb()
                setFacebookPublicacao()
                setFacebookStorie()
                setFacebookReel()

                setInstaPublicacao()
                setInstaStorie()
                setInstaReel()
            
                setTwitterPublicacao()
                setTwitterStorie()
                setTwitterReel()
            
                setTiktokPublicacao()
                setTiktokStorie()
                setTiktokReel()
            
                setLinkedinPublicacao()
                setLinkedinStorie()
                setLinkedinReel()
            
                setYoutubePublicacao()
                setYoutubeStorie()
                setYoutubeReel()
            
                setGooglePublicacao()
                setGoogleStorie()
                setGoogleReel()
            
                setCover()
                setDesign()
                setCopywriting()
                setPlanificacao()
                setConsultoria()
                setGestao()
                setRelatorio()
            
                setPaidPackStart()
                setPaidPackBoost()
                setPaidPackBomb()
            
                setEstrategiaFacebook()
                setEstrategiaInsta()
                setEstrategiaGoogle()
            
                setCriacaoCampanhaFacebook()
                setCriacaoCampanhaInsta()
                setCriacaoCampanhaGoogle()
            
                setSegmentacaoFacebook()
                setSegmentacaoInsta()
                setSegmentacaoGoogle()
            
                setOtimizacaoFacebook()
                setOtimizacaoInsta()
                setOtimizacaoGoogle()
            
                setRelatorioFacebook()
                setRelatorioInsta()
                setRelatorioGoogle()
            
                setGoogleTagFacebook()
                setGoogleTagInsta()
                setGoogleTagGoogle()
            
                setGestaoFacebook()
                setGestaoInsta()
                setGestaoGoogle()
            
                setEmailSMS()
                setOtimizacaoSEOSEM()

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

                                            <PacksInput nomePack="Start" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("1: ")}/>

                                            <PacksInput nomePack="Boost" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("2: ")}/>

                                            <PacksInput nomePack="Bomb" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("3: ")}/>

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

                                                    <PacksInput nomePack="Por publicação" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                    <PacksInput nomePack="Por storie" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                                    <PacksInput nomePack="Por reel" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.2.Instagram
                                                    </div>

                                                    <PacksInput nomePack="Por publicação" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                    <PacksInput nomePack="Por storie" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                                    <PacksInput nomePack="Por reel" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.3.Twitter
                                                    </div>
            
                                                    <PacksInput nomePack="Por publicação" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                    <PacksInput nomePack="Por storie" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                                    <PacksInput nomePack="Por reel" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.4.TikTok
                                                    </div>
            
                                                    <PacksInput nomePack="Por publicação" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                    <PacksInput nomePack="Por storie" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                                    <PacksInput nomePack="Por reel" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.5.Linkedin
                                                    </div>
            
                                                    <PacksInput nomePack="Por publicação" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                    <PacksInput nomePack="Por storie" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                                    <PacksInput nomePack="Por reel" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.6.Youtube
                                                    </div>
            
                                                    <PacksInput nomePack="Por publicação" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                    <PacksInput nomePack="Por storie" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                                    <PacksInput nomePack="Por reel" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.7.Google My Business
                                                    </div>
            
                                                    <PacksInput nomePack="Por publicação" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                    <PacksInput nomePack="Por storie" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                                    <PacksInput nomePack="Por reel" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-12 ps-lg-5">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                2.8.Cover
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12 ps-lg-5">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                2.9.Design para publicações
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12 ps-lg-5">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                2.10.Copywriting
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12 ps-lg-5">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                2.11.Planificação Editorial
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12 ps-lg-5">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                2.12.Consultoria Digital
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12 ps-lg-5">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                2.13.Gestão de Campanhas
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12 ps-lg-5">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                2.14.Relatório Mensal
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

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

                                            <PacksInput nomePack="Start" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                            <PacksInput nomePack="Boost" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                            <PacksInput nomePack="Bomb" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

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

                                                    <PacksInput nomePack="Facebook" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                    <PacksInput nomePack="Instagram" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                                    <PacksInput nomePack="Google" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.2.Criação de campanhas e anúncios
                                                    </div>

                                                    <PacksInput nomePack="Facebook" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                    <PacksInput nomePack="Instagram" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                                    <PacksInput nomePack="Google" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.3.Segmentação do público
                                                    </div>

                                                    <PacksInput nomePack="Facebook" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                    <PacksInput nomePack="Instagram" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                                    <PacksInput nomePack="Google" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.4.Otimização de campanha
                                                    </div>

                                                    <PacksInput nomePack="Facebook" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                    <PacksInput nomePack="Instagram" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                                    <PacksInput nomePack="Google" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.5.Relatório mensal
                                                    </div>

                                                    <PacksInput nomePack="Facebook" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                    <PacksInput nomePack="Instagram" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                                    <PacksInput nomePack="Google" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.6.Criação de conversões c/Google Tag Manager
                                                    </div>

                                                    <PacksInput nomePack="Facebook" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                    <PacksInput nomePack="Instagram" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                                    <PacksInput nomePack="Google" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.7.Gestão de campanhas
                                                    </div>

                                                    <PacksInput nomePack="Facebook" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                    <PacksInput nomePack="Instagram" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                                    <PacksInput nomePack="Google" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

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

                                            <PacksInput valor="0,00&#8364;" className="col-lg-4" onChange={()=> console.count("4: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                                        <div className="row py-4 bg-cardsDashboard h-100">

                                            <div className="col-12 col-lg-4 ps-lg-4 fs-4 font-weight-semiBold align-self-center text-break">
                                                Otimização SEO &#38; SEM
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