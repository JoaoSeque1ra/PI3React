import React, { useEffect, useState } from "react";

import Breadcrumbs from "../../../Components/Breadcrumb";
import CheckBox from "../../../Components/CheckBox";
import CardsCheckBox from "../../../Components/CardsCheckBox";
import Buttons from "../../../Components/Buttons";

import ExportIcons from "../../../Helpers/ExportIcons";

import ImagemLojaOnline from "../../../Assets/Images/lojas_online-1.png";

export default function Main() {
  const [numeroPaginas, setNumeroPaginas] = useState(1)
  const [comIntegracao, setComIntegracao] = useState(false)

  const [produto, setProduto] = useState(false)
  const [contactos, setContactos] = useState(false)
  const [equipa, setEquipa] = useState(false)
  const [outros, setOutros] = useState(false)

  const [criacaoConteudos, setCriacaoConteudos] = useState(false)
  const [alojamento, setAlojamento] = useState(false)
  const [dominio, setDominio] = useState(false)

  useEffect(() => {
    saveLocalNumber(numeroPaginas)
  }, [numeroPaginas])

  const addNumeroPaginas = () => {
    if(numeroPaginas === 12) {
      alert("Número máximo atingido")
      return
    }
    
    setNumeroPaginas(numeroPaginas => numeroPaginas + 1)
  }

  const removeNumeroPaginas = () => {
    if(numeroPaginas === 1) {
      alert("Número mínimo atingido")
      return
    }
    
    setNumeroPaginas(numeroPaginas => numeroPaginas - 1)
  }

  return (
    <main>
      <div className="container-fluid">
        <div className="row vh-100">
          <div className="col-md-12 col-lg-7 pt-pageLeft">
            <div className="row">
              <Breadcrumbs route1="Orçamento / Website &#38; Loja Online" route2="/ Loja Online" textColor="text-purple" />

              <div className="col-md-12 col-lg-10 offset-lg-1">

                <div className="d-flex align-items-center mt-5">
                    <label className="form-check ps-3 py-2 w-100 fs-5 border text-white bg-purple">
                        <ExportIcons.NumeroPaginas className="me-2 colorIconWhite"/>
                        Número de páginas

                        <div className="btn-group float-end me-3">
                            <button className="btn btn-sm btn-light rounded" onClick={removeNumeroPaginas}>
                              <ExportIcons.Remove width={22} height={22} />
                            </button>
                            
                            <input type="number" className="text-white text-center bg-transparent border-0 px-3" value={numeroPaginas} min={1} max={12} disabled/>

                            <button className="btn btn-sm btn-light rounded" onClick={addNumeroPaginas} >
                              <ExportIcons.Add className='colorIconBlack' width={22} height={22} />
                            </button>
                        </div>
                    </label>
                </div>

                <div className="d-flex align-items-center mt-5">
                    <label className="form-check ps-3 py-2 w-100 fs-5 border text-white bg-purple">
                        <ExportIcons.Integracao className="me-2 colorIconWhite"/>
                        Com Integração
                    </label>
                </div>
                <div className="card rounded-0 border-top-0">
                  <div className="card-body">
                    Para a criação da sua página online quais os tópicos que
                    gostaria de adicionar?
                    <div className="ps-2 pt-4">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input text-purple cursor-pointer"
                          type="checkbox"
                          id="checkBoxProduto"
                          value="Produtos"
                          onClick={value => {
                            setProduto(value.target.checked)
                            saveLocal(value, "80")
                          }}
                        />
                        <label className="form-check-label" htmlFor="checkBoxProduto">
                          Produtos
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input text-purple cursor-pointer"
                          type="checkbox"
                          id="checkBoxContactos"
                          value="Contactos"
                          onClick={value => {
                            setProduto(value.target.checked)
                            saveLocal(value, "81")
                          }}
                        />
                        <label className="form-check-label" htmlFor="checkBoxContactos">
                          Contactos
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input text-purple cursor-pointer"
                          type="checkbox"
                          id="checkBoxEquipas"
                          value="Equipas"
                          onClick={value => {
                            setProduto(value.target.checked)
                            saveLocal(value, "82")
                          }}
                        />
                        <label className="form-check-label" htmlFor="checkBoxEquipas">
                          Equipas
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input text-purple cursor-pointer"
                          type="checkbox"
                          id="checkBoxOutros"
                          value="Outros"
                          onClick={value => {
                            setProduto(value.target.checked)
                            saveLocal(value, "83")
                          }}
                        />
                        <label className="form-check-label" htmlFor="checkBoxOutros">
                          Outros
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <CheckBox
                  onClick={value=>{
                    setCriacaoConteudos(value.target.checked)
                    saveLocal(value, "86")
                  }} isActive={criacaoConteudos}
                  name="Com criação de conteúdos textuais"
                  color="bg-checkBoxPurple"
                  colorIcon="colorIconPurple"
                  textColor="text-purple"
                />
                <CardsCheckBox text="Pretende que todos os conteúdos textuais a ser implementados na loja online sejam realizados pela Incommun?" />

                <CheckBox
                  onClick={value=>{
                    setAlojamento(value.target.checked)
                    saveLocal(value,"85")
                  }} isActive={alojamento}
                  name="Com alojamento"
                  color="bg-checkBoxPurple"
                  colorIcon="colorIconPurple"
                  textColor="text-purple"
                />
                <CardsCheckBox text="O alojamento web permite que a sua loja não só esteja online como atualiza regularmente o seu hardware para um melhor desempenho e maior proteção." />

                <CheckBox
                  onClick={value=>{
                    setDominio(value.target.checked)
                    saveLocal(value, "84")
                  }} isActive={dominio}
                  name="Com domínio"
                  color="bg-checkBoxPurple"
                  colorIcon="colorIconPurple"
                  textColor="text-purple"
                />
                <CardsCheckBox text="O url do seu site será a primeira coisa que os visitantes irão ver. O domínio torna mais fácil a identificação da loja e aumenta o reconhecimento da marca e da sua empresa." />
              </div>

              <div className="col-md-5 offset-md-7 col-lg-6 offset-lg-5 text-end my-5">
                <Buttons color="btn-transparent" text="Anterior" />
                <Buttons color="btn-purple" text="Seguinte" to={"comunicacao-consultoria"}/>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-lg-5 d-none d-lg-flex justify-content-center align-items-center bg-purple pt-pageRight position-fixed end-0 vh-100">
            <div className="row">
              <div className="col-md-auto">
                <img
                  src={ImagemLojaOnline}
                  className="img-fluid"
                  alt="Loja Online Imagem"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );

  function saveLocal(value, nome) {
    if(value.target.checked) {
        localStorage.removeItem("website")
        return localStorage.setItem(nome,value.target.checked)
    }
    localStorage.removeItem(nome)
  }

  function saveLocalNumber(value) {
      console.log(value)
      if(value < 5) {
          localStorage.removeItem("78")
          localStorage.removeItem("79")
          return localStorage.setItem("77",true)
      }
      if(value < 10) {
          localStorage.removeItem("77")
          localStorage.removeItem("79")
          return localStorage.setItem("78",true)
      }

      localStorage.removeItem("77")
      localStorage.removeItem("78")
      return localStorage.setItem("79",true)
  }

}