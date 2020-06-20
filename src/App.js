import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import MenuDeOpciones from './components/MenuDeOpciones';
import Home from './containers/Home';
import NuestrosAutos from './containers/NuestrosAutos';
import Contacto from './containers/Contacto';
import DetalleAuto from './containers/DetalleAuto';

function App() {
  return (
    <div>
      <MenuDeOpciones />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/nuestros-autos" component={NuestrosAutos} />
        <Route path="/contacto" component={Contacto} />
        <Route path="/detalle-auto/" component={DetalleAuto} />
      </Switch>
    </div>
  );
}

export default App;
