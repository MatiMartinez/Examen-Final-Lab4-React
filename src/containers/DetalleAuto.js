import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const DetalleAuto = () => {
  const location = useLocation();
  const [auto, setAuto] = useState();

  useEffect(() => {
    cargarAuto();
  }, []);

  const cargarAuto = () => {
    const datosAuto = location.state.datos;
    setAuto(datosAuto);
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      {auto !== undefined && (
        <div className="d-flex flex-column align-items-center text-center border border-secondary rounded w-25">
          <div>
            <img
              src={require('../img/' + auto.imagen)}
              alt="imagen-auto"
              className="img-fluid"
            />
          </div>
          <div>
            <h3>{auto.marca}</h3>
            <h3>{auto.modelo}</h3>
            <h4>{auto.localidad}</h4>
            <h4>{auto.anio}</h4>
            <h4 className="text-success">
              {auto.precio === '0' ? 'Consultar' : '$ ' + auto.precio}
            </h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetalleAuto;
