import React from "react";

import NavbarDashboardLg from "../../../Components/NavbarDashboard/NavbarDashboardLg";
import ButtonDashboard from "../../../Components/Dashboard/Button";
import TableTrMd from "../../../Components/Dashboard/TableTrMd";
import TableTrLg from "../../../Components/Dashboard/TableTrLg";

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

              <div className="col-12">
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
              </div>

              <div className="col-12">
                <div className="row pt-5">

                  <div className="table-responsive d-flex d-lg-none">
                    <table className="table table-hover table-striped">
                      <thead>
                        <tr>
                          <th className="fw-light" scope="col">
                            Orçamento
                          </th>
                          <th className="fw-light" scope="col">
                            Nome
                          </th>
                          <th className="fw-light text-end" scope="col">
                            Total
                          </th>
                          <th className="fw-light text-center" scope="col">
                            Ações
                          </th>
                        </tr>
                      </thead>

                      <tbody className="align-middle">

                        <TableTrMd id="0088" nome="Marcelo Machado" valor="50,00€" />
                        
                        <TableTrMd id="0087" nome="Antonio Rodrigues" valor="100,00€" />

                        <TableTrMd id="0086" nome="Rui Matias" valor="450,00€" />

                        <TableTrMd id="0085" nome="Mario Guerreiro" valor="1.450,00€" />

                        <TableTrMd id="0084" nome="Ana Batista" valor="850,00€" />

                        <TableTrMd id="0083" nome="Tiago Pinto" valor="450,00€" />

                        <TableTrMd id="0082" nome="Joana Nicolau" valor="650,00€" />

                        <TableTrMd id="0081" nome="Bruno Cunha" valor="3.850,00€" />

                        <TableTrMd id="0080" nome="Paulo Real" valor="250,00€" />

                        <TableTrMd id="0079" nome="Mario Guerreiro" valor="10.050,00€" />

                      </tbody>

                      <tfoot>
                        <tr>
                          <th className="fw-light" scope="col">
                            Orçamento
                          </th>
                          <th className="fw-light" scope="col">
                            Nome
                          </th>
                          <th className="fw-light text-end" scope="col">
                            Total
                          </th>
                          <th className="fw-light text-center" scope="col">
                            Ações
                          </th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  <div className="table-responsive d-none d-lg-flex">
                    <table className="table table-hover table-striped">
                      <thead>
                        <tr>
                          <th className="fw-light" scope="col">
                            Orçamento
                          </th>
                          <th className="fw-light" scope="col">
                            Nome
                          </th>
                          <th className="fw-light" scope="col">
                            Data
                          </th>
                          <th className="fw-light text-center" scope="col">
                            Estado
                          </th>
                          <th className="fw-light text-end" scope="col">
                            Total
                          </th>
                          <th className="fw-light text-center" scope="col">
                            Ações
                          </th>
                        </tr>
                      </thead>

                      <tbody className="align-middle">

                        <TableTrLg id="0088" nome="Marcelo Machado" valor="50,00€" data="20&frasl;março&frasl;2022" estado="Novo"/>
                        
                        <TableTrLg id="0087" nome="Antonio Rodrigues" valor="100,00€" data="20&frasl;março&frasl;2022" estado="Novo"/>

                        <TableTrLg id="0086" nome="Rui Matias" valor="450,00€" data="19&frasl;março&frasl;2022" estado="Novo"/>

                        <TableTrLg id="0085" nome="Mario Guerreiro" valor="1.450,00€" data="15&frasl;março&frasl;2022" estado="Novo"/>

                        <TableTrLg id="0084" nome="Ana Batista" valor="850,00€" data="12&frasl;março&frasl;2022" estado="Novo"/>

                        <TableTrLg id="0083" nome="Tiago Pinto" valor="450,00€" data="12&frasl;março&frasl;2022" estado="Novo"/>

                        <TableTrLg id="0082" nome="Joana Nicolau" valor="650,00€" data="8&frasl;março&frasl;2022" estado="Novo"/>

                        <TableTrLg id="0081" nome="Bruno Cunha" valor="3.850,00€" data="7&frasl;março&frasl;2022" estado="Novo"/>

                        <TableTrLg id="0080" nome="Paulo Real" valor="250,00€" data="7&frasl;março&frasl;2022" estado="Novo"/>

                        <TableTrLg id="0079" nome="Mario Guerreiro" valor="10.050,00€" data="2&frasl;março&frasl;2022" estado="Novo"/>
                          
                      </tbody>

                      <tfoot>
                        <tr>
                          <th className="fw-light" scope="col">
                            Orçamento
                          </th>
                          <th className="fw-light" scope="col">
                            Nome
                          </th>
                          <th className="fw-light" scope="col">
                            Data
                          </th>
                          <th className="fw-light text-center" scope="col">
                            Estado
                          </th>
                          <th className="fw-light text-end" scope="col">
                            Total
                          </th>
                          <th className="fw-light text-center" scope="col">
                            Ações
                          </th>
                        </tr>
                      </tfoot>
                    </table>
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
