import React, { useState, useEffect } from 'react';
import Auto from '../components/Auto';
import Axios from 'axios';
import { useLocation } from 'react-router-dom';

const NuestrosAutos = () => {
  //Busqueda
  const location = useLocation();

  const [autos, setAutos] = useState([]);

  useEffect(() => {
    cargarAutos();
  }, [location.state]);

  const cargarAutos = async () => {
    let filtroDatos = [];
    await Axios.get('autos.json').then((res) => {
      filtroDatos = res.data;
    });
    if (location.search === '') {
      setAutos(filtroDatos);
    } else {
      let busq = location.state.datos;
      console.log(busq);
      const result = [];
      filtroDatos.map((auto) => {
        if (
          auto.marca.toLowerCase().indexOf(busq.toLowerCase()) !== -1 ||
          auto.modelo.toLowerCase().indexOf(busq.toLowerCase()) !== -1 ||
          auto.anio.toLowerCase().indexOf(busq.toLowerCase()) !== -1
        ) {
          result.push(auto);
        }
      });
      setAutos(result);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        {autos !== undefined &&
          autos.map((auto) => (
            <div className="col-3 d-flex justify-content-center">
              <Auto {...auto} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default NuestrosAutos;
