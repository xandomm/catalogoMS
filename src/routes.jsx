import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import main from './pages/main/main';
import PrivateRoute from "./PrivateRoute";
import cardapio from './pages/cardapio/cardapio'
import login from './pages/login/login'
import cadastro1 from './pages/login/cadastro1'
import cadastrarprodutos from './pages/login/cadastroprodutos';
import cadastrarCardapio from './pages/login/cadastroDeCardapio';
import cardapioNoturno from './pages/cardapio/cardapioNoturno'
import dadospag from './pages/login/dashboard/dadospagamento'
import dadosRestaurante from './pages/login/dashboard/dadosRestaurante'
import Checkout from './pages/login/checkout'
import dashboard from './pages/login/dashboard/dashboard';
import daytest from './pages/cardapio/daytest';
function Routes(){
    return(
 <BrowserRouter>
     <Switch>
        
        <Route path="/" exact component={ main }/>
        <Route path="/cardapio" exact component={cardapio}/>
        <Route path="/cardapioNoturno" component={cardapioNoturno}/>
        <Route path="/d/:url" component={daytest}/>
        <Route path="/n/:url" component={cardapioNoturno}/>
        <Route path="/login" component={login}/>
        <Route path="/cadastro" component={cadastro1}/>
        <PrivateRoute path="/cadastrocardapio" component={cadastrarCardapio}/>
        <PrivateRoute path="/cadastroprodutos" component={cadastrarprodutos}/>
        <Route path="/checkout" component={Checkout}/>
        
        
        <PrivateRoute path="/dashboard" component={dashboard}/>
        <PrivateRoute path="/dadospagamento" component={dadospag}/>
        <PrivateRoute path="/dadosrestaurante" component={dadosRestaurante}/>
     </Switch>
 </BrowserRouter>);
};
export default Routes;