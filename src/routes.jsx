import React from 'react';
import {BrowserRouter, Switch, Route,Redirect} from 'react-router-dom';
import main from './pages/main/main';
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
function Routes(){
    return(
 <BrowserRouter>
     <Switch>
        
        <Route path="/" exact component={ main }/>
        <Route path="/cardapio" exact component={cardapio}/>
        <Route path="/cardapioNoturno" component={cardapioNoturno}/>
        <Route path="/login" component={login}/>
        <Route path="/cadastro" component={cadastro1}/>
        <Route path="/cadastrocardapio" component={cadastrarCardapio}/>
        <Route path="/cadastroprodutos" component={cadastrarprodutos}/>
        <Route path="/checkout" component={Checkout}/>
        
        
        <Route path="/dashboard" component={dashboard}/>
        <Route path="/dadospagamento" component={dadospag}/>
        <Route path="/dadosrestaurante" component={dadosRestaurante}/>
     </Switch>
 </BrowserRouter>);
};
export default Routes;