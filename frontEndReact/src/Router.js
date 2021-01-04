import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Importar componentes a Routear
import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';

class Router extends Component {

    render(){
        return(
            <BrowserRouter>
                {/* Configurar rutas y páginas */}
                <Switch>
                    <Route exact path="/" component={Peliculas}/>
                    <Route exact path="/ruta-prueba" component={SeccionPruebas}/>
                    <Route exact path="/segunda-ruta" component={MiComponente}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;