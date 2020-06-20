import React from 'react';

const Contacto = () => {
  return (
    <div className="container mt-5">
      <div>
        <h4>
          <b className="text-secondary">
            ¿Necesitas ayuda o tenes alguna consulta?
          </b>
        </h4>
      </div>
      <div className="mt-5 mb-4">
        <h6>
          Es importante que sepas que sólo somos un sitio web de clasificados.
          <b>
            No nos hagas consultas respecto a información de los vehículos que
            se publican en el portal.
          </b>
          Éstas son responsabilidad exclusiva de sus anunciantes, y debes
          contactarlos desde la ficha de cada vehículo.
        </h6>
      </div>
      <div>
        <h6>
          ¿Aún querés escribirnos?, entonces envíanos tus consultas, dudas o
          sugerencias a <a href="/contacto">consultas@atodomotor.com.ar</a>, te
          responderemos a la brevedad.
        </h6>
      </div>
    </div>
  );
};

export default Contacto;
