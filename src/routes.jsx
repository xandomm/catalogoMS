import React from 'react';
import {BrowserRouter, Switch, Route,Redirect} from 'react-router-dom';
import main from './pages/main/main';
import cardapio from './pages/cardapio/cardapio'
import login from './pages/login/login'
import cadastro1 from './pages/login/cadastro1'

function Routes(){
    return(
 <BrowserRouter>
     <Switch>
        
        <Route path="/" exact component={ main }/>
        <Route path="/cardapio" component={cardapio}/>
        <Route path="/login" component={login}/>
        <Route path="/cadastro" component={cadastro1}/>
     </Switch>
 </BrowserRouter>);
};
export default Routes;