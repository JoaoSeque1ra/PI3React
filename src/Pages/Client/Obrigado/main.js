import React from "react";

import ImagemObrigado from "../../../Assets/Images/obrigada.jpg";

export default function Main() {
  return (
    <main>
      <div>
        <div>
          <div className="card-img-overlay bg-blue">
            <h5 className="fundo-obrigada w-1">obrigada</h5>
            <p className="texto-fundo">Será contactado nas próximas 48h</p>
            <p className="texto-fundo">pela nossa equipa comercial</p>
          </div>
        </div>
      </div>
    </main>
  );
}