import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Cadastro from './Cadastro';
import ListaUsuarios from './ListaUsuarios';
import Login from './Login';
import Main from './Main';
import Produtos from './Produtos';
import Usuario from './Usuario';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/produtos" component={Produtos} />
                <Route path="/login" component={Login} />
                <Route path="/adicionar" component={Cadastro} />
                <Route path="/mostrausuario" component={Usuario} />
                <Route path="/listausuarios" component={ListaUsuarios} />

            </Switch>
        </BrowserRouter>
    );
};

export default Routes;

