import React from 'react';
import { useHistory } from 'react-router-dom';

const Auto = (props) => {
  let history = useHistory();

  const eventHandler = () => {
    history.push({
      pathname: '/detalle-auto',
      state: { datos: props },
    });
  };

  return (
    <div className="d-flex flex-column text-center auto-card m-3 rounded border border-secondary">
      <button onClick={() => eventHandler()} className="nav-link btn p-0">
        <div>
          <img
            src={require('../img/' + props.imagen)}
            alt="imagen-auto"
            className="img-fluid"
          />
        </div>
        <div>
          <p className="text-secondary m-0">
            <b>{props.marca}</b>
          </p>
          <p className="text-secondary m-0">{props.modelo}</p>
          <p className="text-secondary m-0">{props.anio}</p>
          <p className="text-warning m-0">
            {props.precio === '0' ? 'Consultar' : '$ ' + props.precio}
          </p>
        </div>
      </button>
    </div>
  );
};

export default Auto;
