import React from "react";

import NavbarDashboardLg from "../../../Components/NavbarDashboardLg";
import ExportIcons from "../../../Helpers/ExportIcons";

export default function Main() {
  return (
    <main className="overflow-auto d-flex">
      <NavbarDashboardLg />

      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-lg-10 offset-lg-1">
            <div className="row">
              <div className="col-4 font-weight-semiBold fs-4">
                Últimos Orçamentos
              </div>

              <div className="col-4 text-end">
                <div className="col-12 text-lg-end">
                  <button
                    type="button"
                    className="btn btn-gray btn-lg rounded-0"
                  >
                    <ExportIcons.AddClient />

                    <a href="" className="text-decoration-none ps-2">
                      Novo Cliente
                    </a>
                  </button>
                </div>
              </div>
              <div className="col-4 text-end">
                <div className="col-12 text-lg-end">
                  <button
                    type="button"
                    className="btn btn-gray btn-lg rounded-0"
                  >
                    <ExportIcons.Novo className="colorIconWhite" />
                    <a href="" className="text-decoration-none ps-2">
                      Novo Orçamento
                    </a>
                  </button>
                </div>
              </div>

              <div className="col-12">
                <div className="row align-items-center pt-3 mt-2">
                  <div className="col-12 col-lg-4">
                    <select
                      className="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                    >
                      <option selected>Ações por lotes</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>

                  <div className="col-12 col-lg-8 pt-3 pt-lg-0 text-lg-start">
                    <button type="submit" className="btn btn-secondary ">
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
                        <tr>
                          <th className="fw-normal" scope="row">
                            #0088
                          </th>
                          <td>Marcelo Machado</td>
                          <td className="text-end">50,00€</td>
                          <td className="text-center">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic example"
                            >
                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded me-2"
                                >
                                  <ExportIcons.EditOrcamento/>
                                </button>
                              </a>

                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded"
                                >
                                  <ExportIcons.Ver />
                                </button>
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <th className="fw-normal" scope="row">
                            #0087
                          </th>
                          <td>Antonio Rodrigues</td>
                          <td className="text-end">100,00€</td>
                          <td className="text-center">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic example"
                            >
                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded me-2"
                                >
                                  <ExportIcons.EditOrcamento/>
                                </button>
                              </a>

                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded"
                                >
                                    <ExportIcons.Ver />

                                </button>
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <th className="fw-normal" scope="row">
                            #0086
                          </th>
                          <td>Rui Matias</td>
                          <td className="text-end">450,00€</td>
                          <td className="text-center">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic example"
                            >
                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded me-2"
                                >
                                    <ExportIcons.EditOrcamento/>

                                </button>
                              </a>

                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded"
                                >
                                  <ExportIcons.Ver />
                                </button>
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <th className="fw-normal" scope="row">
                            #0085
                          </th>
                          <td>Mario Guerreiro</td>
                          <td className="text-end">1.500,00€</td>
                          <td className="text-center">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic example"
                            >
                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded me-2"
                                >
                                  <ExportIcons.EditOrcamento/>
                                </button>
                              </a>

                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded"
                                >
                                  <ExportIcons.Ver />
                                </button>
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <th className="fw-normal" scope="row">
                            #0084
                          </th>
                          <td>Ana Batista</td>
                          <td className="text-end">850,00€</td>
                          <td className="text-center">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic example"
                            >
                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded me-2"
                                >
                                  <ExportIcons.EditOrcamento/>
                                </button>
                              </a>

                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded"
                                >
                                  <ExportIcons.Ver />
                                </button>
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <th className="fw-normal" scope="row">
                            #0083
                          </th>
                          <td>Tiago Pinto</td>
                          <td className="text-end">450,00€</td>
                          <td className="text-center">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic example"
                            >
                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded me-2"
                                >
                                  <ExportIcons.EditOrcamento/>
                                </button>
                              </a>

                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded"
                                >
                                  <ExportIcons.Ver />
                                </button>
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <th className="fw-normal" scope="row">
                            #0082
                          </th>
                          <td>Joana Nicolau</td>
                          <td className="text-end">650,00€</td>
                          <td className="text-center">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic example"
                            >
                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded me-2"
                                >
                                  <ExportIcons.EditOrcamento/>
                                </button>
                              </a>

                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded"
                                >
                                  <ExportIcons.Ver />
                                </button>
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <th className="fw-normal" scope="row">
                            #0081
                          </th>
                          <td>Bruno Cunha</td>
                          <td className="text-end">3.500,00€</td>
                          <td className="text-center">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic example"
                            >
                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded me-2"
                                >
                                  <ExportIcons.EditOrcamento/>
                                </button>
                              </a>

                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded"
                                >
                                  <ExportIcons.Ver />
                                </button>
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <th className="fw-normal" scope="row">
                            #0080
                          </th>
                          <td>Paulo Real</td>
                          <td className="text-end">250,00€</td>
                          <td className="text-center">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic example"
                            >
                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded me-2"
                                >
                                  <ExportIcons.EditOrcamento/>
                                </button>
                              </a>

                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded"
                                >
                                  <ExportIcons.Ver />
                                </button>
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <th className="fw-normal" scope="row">
                            #0079
                          </th>
                          <td>Mario Guerreiro</td>
                          <td className="text-end">5.500,00€</td>
                          <td className="text-center">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic example"
                            >
                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded me-2"
                                >
                                  <ExportIcons.EditOrcamento/>
                                </button>
                              </a>

                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded"
                                >
                                  <ExportIcons.Ver />
                                </button>
                              </a>
                            </div>
                          </td>
                        </tr>
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
                        <tr>
                          <th className="fw-normal" scope="row">
                            #0088
                          </th>
                          <td>Marcelo Machado</td>
                          <td>20&frasl;março&frasl;2022</td>
                          <td className="d-flex justify-content-center">
                            <div className="w-50 w-md-100 py-2 bg-red text-center text-break text-white rounded">
                              Nova
                            </div>
                          </td>
                          <td className="text-end">50,00€</td>
                          <td className="text-center">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic example"
                            >
                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded me-2"
                                >
                                  <ExportIcons.EditOrcamento/>
                                </button>
                              </a>

                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded"
                                >
                                  <ExportIcons.Ver />
                                </button>
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <th className="fw-normal" scope="row">
                            #0087
                          </th>
                          <td>Antonio Rodrigues</td>
                          <td>19&frasl;março&frasl;2022</td>
                          <td className="d-flex justify-content-center">
                            <div className="w-50 w-md-100 py-2 bg-red text-center text-break text-white rounded">
                              Nova
                            </div>
                          </td>
                          <td className="text-end">100,00€</td>
                          <td className="text-center">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic example"
                            >
                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded me-2"
                                >
                                  <ExportIcons.EditOrcamento/>
                                </button>
                              </a>

                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded"
                                >
                                  <ExportIcons.Ver />
                                </button>
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <th className="fw-normal" scope="row">
                            #0086
                          </th>
                          <td>Rui Matias</td>
                          <td>19&frasl;março&frasl;2022</td>
                          <td className="d-flex justify-content-center">
                            <div className="w-50 w-md-100 py-2 bg-red text-center text-break text-white rounded">
                              Nova
                            </div>
                          </td>
                          <td className="text-end">450,00€</td>
                          <td className="text-center">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic example"
                            >
                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded me-2"
                                >
                                  <ExportIcons.EditOrcamento/>
                                </button>
                              </a>

                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded"
                                >
                                  <ExportIcons.Ver />
                                </button>
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <th className="fw-normal" scope="row">
                            #0085
                          </th>
                          <td>Mario Guerreiro</td>
                          <td>17&frasl;março&frasl;2022</td>
                          <td className="d-flex justify-content-center">
                            <div className="w-75 w-md-100 py-2 bg-yellow text-center text-break text-white rounded">
                              Em tratamento
                            </div>
                          </td>
                          <td className="text-end">1.500,00€</td>
                          <td className="text-center">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic example"
                            >
                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded me-2"
                                >
                                  <ExportIcons.EditOrcamento/>
                                </button>
                              </a>

                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded"
                                >
                                  <ExportIcons.Ver />
                                </button>
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <th className="fw-normal" scope="row">
                            #0084
                          </th>
                          <td>Ana Batista</td>
                          <td>17&frasl;março&frasl;2022</td>
                          <td className="d-flex justify-content-center">
                            <div className="w-75 w-md-100 py-2 bg-yellow text-center text-break text-white rounded">
                              Em tratamento
                            </div>
                          </td>
                          <td className="text-end">850,00€</td>
                          <td className="text-center">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic example"
                            >
                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded me-2"
                                >
                                  <ExportIcons.EditOrcamento/>
                                </button>
                              </a>

                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded"
                                >
                                  <ExportIcons.Ver />
                                </button>
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <th className="fw-normal" scope="row">
                            #0083
                          </th>
                          <td>Tiago Pinto</td>
                          <td>15&frasl;março&frasl;2022</td>
                          <td className="d-flex justify-content-center">
                            <div className="w-50 w-md-100 py-2 bg-gray text-center text-break text-white rounded">
                              Enviado
                            </div>
                          </td>
                          <td className="text-end">450,00€</td>
                          <td className="text-center">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic example"
                            >
                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded me-2"
                                >
                                  <ExportIcons.EditOrcamento/>
                                </button>
                              </a>

                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded"
                                >
                                  <ExportIcons.Ver />
                                </button>
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <th className="fw-normal" scope="row">
                            #0082
                          </th>
                          <td>Joana Nicolau</td>
                          <td>12&frasl;março&frasl;2022</td>
                          <td className="d-flex justify-content-center">
                            <div className="w-75 w-md-100 py-2 bg-blue text-center text-break text-white rounded">
                              Confirmado
                            </div>
                          </td>
                          <td className="text-end">650,00€</td>
                          <td className="text-center">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic example"
                            >
                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded me-2"
                                >
                                  <ExportIcons.EditOrcamento/>
                                </button>
                              </a>

                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded"
                                >
                                  <ExportIcons.Ver />
                                </button>
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <th className="fw-normal" scope="row">
                            #0081
                          </th>
                          <td>Bruno Cunha</td>
                          <td>10&frasl;março&frasl;2022</td>
                          <td className="d-flex justify-content-center">
                            <div className="w-75 w-md-100 py-2 bg-blue text-center text-break text-white rounded">
                              Confirmado
                            </div>
                          </td>
                          <td className="text-end">3.500,00€</td>
                          <td className="text-center">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic example"
                            >
                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded me-2"
                                >
                                  <ExportIcons.EditOrcamento/>
                                </button>
                              </a>

                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded"
                                >
                                  <ExportIcons.Ver />
                                </button>
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <th className="fw-normal" scope="row">
                            #0080
                          </th>
                          <td>Paulo Real</td>
                          <td>8&frasl;março&frasl;2022</td>
                          <td className="d-flex justify-content-center">
                            <div className="w-50 w-md-100 py-2 bg-grayHover text-center text-break text-white rounded">
                              Cancelado
                            </div>
                          </td>
                          <td className="text-end">250,00€</td>
                          <td className="text-center">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic example"
                            >
                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded me-2"
                                >
                                  <ExportIcons.EditOrcamento/>
                                </button>
                              </a>

                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded"
                                >
                                  <ExportIcons.Ver />
                                </button>
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <th className="fw-normal" scope="row">
                            #0079
                          </th>
                          <td>Mario Guerreiro</td>
                          <td>6&frasl;março&frasl;2022</td>
                          <td className="d-flex justify-content-center">
                            <div className="w-50 w-md-100 py-2 bg-grayHover text-center text-break text-white rounded">
                              Cancelado
                            </div>
                          </td>
                          <td className="text-end">5.500,00€</td>
                          <td className="text-center">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic example"
                            >
                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded me-2"
                                >
                                  <ExportIcons.EditOrcamento/>
                                </button>
                              </a>

                              <a href="">
                                <button
                                  type="button"
                                  className="btn btn-light border border-light rounded"
                                >
                                  <ExportIcons.Ver />
                                </button>
                              </a>
                            </div>
                          </td>
                        </tr>
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
