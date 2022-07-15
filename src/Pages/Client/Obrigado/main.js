import React from "react";

import Buttons from "../../../Components/Buttons";

export default function Main() {
  return (
    <main>
      <div>
        <div>
          <div className="card-img-overlay bg-blue ">
            <h6 className="fundo-obrigada w-1">OBRIGADA</h6>
            <p className="texto-fundo">Será contactado nas próximas 48h</p>
            <p className="texto-fundo">pela nossa equipa comercial</p>
            <div className="text-center mt-5">
              <Buttons color="btn-blue" text="Home"/>
            </div>

            
          </div>
        </div>
      </div>
    </main>
  );
}