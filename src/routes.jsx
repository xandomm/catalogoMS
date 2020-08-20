import React from 'react';
import {BrowserRouter, Switch, Route,Redirect} from 'react-router-dom';
import main from './pages/main/main';
import cardapio from './pages/cardapio/cardapio'

function Routes(){
    return(
 <BrowserRouter>
     <Switch>
        
        <Route path="/" exact component={ main }/>
        <Route path="/cardapio" component={cardapio}/>
     </Switch>
 </BrowserRouter>);
};
export default Routes;