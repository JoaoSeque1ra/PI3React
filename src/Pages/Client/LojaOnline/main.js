import React, { useState } from "react";

import Breadcrumbs from "../../../Components/Breadcrumb";
import CheckBox from "../../../Components/CheckBox";
import CardsCheckBox from "../../../Components/CardsCheckBox";
import Buttons from "../../../Components/Buttons";
import CheckBoxNumberPage from  "../../../Components/CheckBoxNumberPage"

import ImagemLojaOnline from "../../../Assets/Images/lojas_online-1.png";

export default function Main() {
  const [numeroPaginas, setNumeroPaginas] = useState(1)
  const [comIntegracao, setComIntegracao] = useState(false)
  const [criacaoConteudos, setCriacaoConteudos] = useState(false)
  const [alojamento, setAlojamento] = useState(false)
  const [dominio, setDominio] = useState(false)

  return (
    <main>
      <div className="container-fluid">
        <div className="row vh-100">
          <div className="col-md-12 col-lg-7 pt-pageLeft">
            <div className="row">
              <Breadcrumbs route1="Orçamento" route2="/ Loja Online" textColor="text-purple" />

              <div className="col-md-12 col-lg-10 offset-lg-1">
                <CheckBoxNumberPage onchange={() => setNumeroPaginas(numeroPaginas++)} colorIcon="colorIconWhite"/>

                <CheckBox
                  onClick={value=>setComIntegracao(value.target.checked)} isActive={comIntegracao}
                  name="Com Integração"
                  color="bg-checkBoxPurple"
                  colorIcon="colorIconPurple"
                  textColor="text-purple"
                />
                <div className="card rounded-0 border-top-0">
                  <div className="card-body">
                    Para a criação da sua página online quais os tópicos que
                    gostaria de adicionar?
                    <div className="ps-2 pt-4">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input text-purple cursor-pointer"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="Produtos"
                        />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">
                          Produtos
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input text-purple cursor-pointer"
                          type="checkbox"
                          value="Contactos"
                        />
                        <label className="form-check-label" htmlFor="inlineCheckbox2">
                          Contactos
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input text-purple cursor-pointer"
                          type="checkbox"
                          value="Equipas"
                        />
                        <label className="form-check-label" htmlFor="inlineCheckbox3">
                          Equipas
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input text-purple cursor-pointer"
                          type="checkbox"
                          value="Outros"
                        />
                        <label className="form-check-label" htmlFor="inlineCheckbox4">
                          Outros
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <CheckBox
                  onClick={value=>setCriacaoConteudos(value.target.checked)} isActive={criacaoConteudos}
                  name="Com criação de conteúdos textuais"
                  color="bg-checkBoxPurple"
                  colorIcon="colorIconPurple"
                  textColor="text-purple"
                />
                <CardsCheckBox text="Pretende que todos os conteúdos textuais a ser implementados na loja online sejam realizados pela Incommun?" />

                <CheckBox
                  onClick={value=>setAlojamento(value.target.checked)} isActive={alojamento}
                  name="Com alojamento"
                  color="bg-checkBoxPurple"
                  colorIcon="colorIconPurple"
                  textColor="text-purple"
                />
                <CardsCheckBox text="O alojamento web permite que a sua loja não só esteja online como atualiza regularmente o seu hardware para um melhor desempenho e maior proteção." />

                <CheckBox
                  onClick={value=>setDominio(value.target.checked)} isActive={dominio}
                  name="Com domínio"
                  color="bg-checkBoxPurple"
                  colorIcon="colorIconPurple"
                  textColor="text-purple"
                />
                <CardsCheckBox text="O url do seu site será a primeira coisa que os visitantes irão ver. O domínio torna mais fácil a identificação da loja e aumenta o reconhecimento da marca e da sua empresa." />
              </div>

              <div className="col-md-5 offset-md-7 col-lg-6 offset-lg-5 text-end my-5">
                <Buttons color="btn-transparent" text="Anterior" />
                <Buttons color="btn-purple" text="Seguinte" />
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
}
