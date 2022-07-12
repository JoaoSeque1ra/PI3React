import React from "react";

import Breadcrumbs from "../../../Components/Breadcrumb";
import CheckBox from "../../../Components/CheckBox";
import CardsCheckBox from "../../../Components/CardsCheckBox";
import Buttons from "../../../Components/Buttons";
import CheckBoxNumberPage from  "../../../Components/CheckBoxNumberPage"

import ImagemLojaOnline from "../../../Assets/Images/lojas_online-1.png";

export default function Main() {
  return (
    <main>
      <div className="container-fluid">
        <div className="row vh-100">
          <div className="col-md-12 col-lg-7 pt-pageLeft">
            <div className="row">
              <Breadcrumbs route1="Orçamento" route2="/ Loja Online" textColor="text-purple" />

              <div className="col-md-12 col-lg-10 offset-lg-1">
                <CheckBoxNumberPage colorIcon="colorIconWhite"/>

                <CheckBox
                  name="Com Integração"
                  color="bg-checkBoxPurple"
                  colorIcon="colorIconPurple"
                  textColor="text-purple"
                />
                <div class="card rounded-0 border-top-0">
                  <div class="card-body">
                    Para a criação da sua página online quais os tópicos que
                    gostaria de adicionar?
                    <div class="ps-2 pt-4">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input text-purple cursor-pointer"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="Produtos"
                        />
                        <label class="form-check-label" for="inlineCheckbox1">
                          Produtos
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input text-purple cursor-pointer"
                          type="checkbox"
                          value="Contactos"
                        />
                        <label class="form-check-label" for="inlineCheckbox2">
                          Contactos
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input text-purple cursor-pointer"
                          type="checkbox"
                          value="Equipas"
                        />
                        <label class="form-check-label" for="inlineCheckbox3">
                          Equipas
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input text-purple cursor-pointer"
                          type="checkbox"
                          value="Outros"
                        />
                        <label class="form-check-label" for="inlineCheckbox4">
                          Outros
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <CheckBox
                  name="Com criação de conteúdos textuais"
                  color="bg-checkBoxPurple"
                  colorIcon="colorIconPurple"
                  textColor="text-purple"
                />
                <CardsCheckBox text="Pretende que todos os conteúdos textuais a ser implementados na loja online sejam realizados pela Incommun?" />

                <CheckBox
                  name="Com alojamento"
                  color="bg-checkBoxPurple"
                  colorIcon="colorIconPurple"
                  textColor="text-purple"
                />
                <CardsCheckBox text="O alojamento web permite que a sua loja não só esteja online como atualiza regularmente o seu hardware para um melhor desempenho e maior proteção." />

                <CheckBox
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
