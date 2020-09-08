import React from 'react';
import {BrowserRouter, Switch, Route,Redirect} from 'react-router-dom';
import main from './pages/main/main';
import cardapio from './pages/cardapio/cardapio'
import login from './pages/login/login'
import cadastro1 from './pages/login/cadastro1'
import cadastrarprodutos from './pages/login/cadastroprodutos';
import cadastrarCardapio from './pages/login/cadastroDeCardapio';
import cardapioNoturno from './pages/cardapio/cardapioNoturno'
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
     </Switch>
 </BrowserRouter>);
};
export default Routes;