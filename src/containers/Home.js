import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Auto from '../components/Auto';

const Home = () => {
  const [autos, setAutos] = useState();

  useEffect(() => {
    cargarAutosDestacados();
  }, []);

  const cargarAutosDestacados = async () => {
    await Axios.get('autos.json').then((res) => {
      const datos = res.data;
      const autosDestacados = [];
      datos.map((dato) => {
        if (dato.destacado === 'Y') autosDestacados.push(dato);
      });
      setAutos(autosDestacados);
    });
  };

  return (
    <div className="container d-flex flex-column mt-5">
      <div>
        <h1 className="title">A TODO MOTOR AUTOS</h1>
      </div>
      <div>
        <h3 className="sub-title">
          Publicá sin registrarte en un sólo paso. ¿Apurado por vender? Recibí
          ofertas en Efectivo de concesionarios registrados. ¡Súper!
        </h3>
      </div>
      <div>
        <div className="destacados rounded p-2 pl-4 text-white">Destacados</div>
        <div className="row d-flex justify-content-center">
          {autos !== undefined &&
            autos.map((auto) => (
              <div className="col-3 d-flex justify-content-center">
                <Auto {...auto} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
