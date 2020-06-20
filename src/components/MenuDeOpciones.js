import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const MenuDeOpciones = () => {
  const { register, handleSubmit } = useForm();
  let history = useHistory();

  const onSubmit = async (data) => {
    history.push({
      pathname: '/nuestros-autos',
      search: data.busqueda,
      state: { datos: data.busqueda },
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
      <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/nuestros-autos">
              Nuestros Autos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contacto">
              Contacto
            </a>
          </li>
        </ul>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-inline my-2 my-lg-0"
        >
          <input
            className="form-control mr-sm-2"
            type="text"
            name="busqueda"
            placeholder="Buscar"
            ref={register({ required: true })}
          />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </nav>
  );
};

export default MenuDeOpciones;
