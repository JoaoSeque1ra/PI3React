import React from "react";

import NavbarDashboardLg from "../../../Components/Dashboard/NavbarDashboard/NavbarDashboardLg";
import ButtonDashboard from "../../../Components/Dashboard/Button";
import Tables from "../../../Components/Dashboard/Table/Index";

export default function Main() {
  return (
    <main className="overflow-auto d-flex">
      <NavbarDashboardLg />

      <div className="container-fluid">
        <div className="row mt-5">

          <div className="col-lg-10 offset-lg-1">
            <div className="row">

              <div className="col-8 col-lg-6 font-weight-semiBold fs-4">
                Últimos Orçamentos
              </div>

              <div className="col-2 col-lg-3 text-end">

                <ButtonDashboard text="Novo Cliente" />

              </div>

              <div className="col-2 col-lg-3 text-end">

                <ButtonDashboard text="Novo Orçamento" />

              </div>

              {/* <div className="col-12">
                <div className="row mt-4">

                  <div className="col-10 col-lg-4">

                    <select className="form-select">
                      <option selected>Ações por lotes</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>

                  </div>

                  <div className="col-2 col-lg-8 text-lg-start">

                    <button type="submit" className="btn btn-secondary">
                      Aplicar
                    </button>

                  </div>

                </div>
              </div> */}

              <div className="col-12">
                <div className="row pt-5">
                  
                  <Tables campo1="Orçamento" campo2="Nome" campo3="Data" campo4="Estado" campo5="Total" campo6="Ações" />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
