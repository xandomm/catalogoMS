import React, { Component } from 'react';
import {BrowserRouter, Switch, Route,Redirect, withRouter} from 'react-router-dom';
import main from './pages/main/main';
import PrivateRoute from "./utils/PrivateRoute";
import cardapio from './pages/cardapio/cardapio'
import Login from './pages/login/login'
import Cadastro1 from './pages/login/cadastro1'
import cadastrarprodutos from './pages/login/cadastroprodutos';
import cadastrarCardapio from './pages/login/cadastroDeCardapio';
import cardapioNoturno from './pages/cardapio/cardapioNoturno'
import dadospag from './pages/login/dashboard/dadospagamento'
import dadosRestaurante from './pages/login/dashboard/dadosRestaurante'
import Checkout from './pages/login/checkout'
import Dashboard from './pages/login/dashboard/dashboard';
import daytest from './pages/cardapio/daytest';

import withState from './utils/withState';


class App extends Component {
    componentDidMount() {
        this.unlisten = this.props.history.listen((location, action) => {
            if (this.props.store.error !== '') {
                this.props.actions.clearErrors();
            }
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }

    render() {
        const {
            store: { isLoggedIn }
        } = this.props;

        return (
            <div className="App">
            
                <Switch>
                        <Route exact path="/" component={main} />
                        <PrivateRoute path="/dashboard" component={Dashboard} />
                        <Route path="/cardapio" exact component={cardapio}/>
                        <Route path="/cardapioNoturno" component={cardapioNoturno}/>
                        <Route path="/d/:url" component={daytest}/>
                        <Route path="/n/:url" component={cardapioNoturno}/>
               
                        <PrivateRoute path="/cadastrocardapio" component={cadastrarCardapio}/>
                        <PrivateRoute path="/cadastroprodutos" component={cadastrarprodutos}/>
                        <Route path="/checkout" component={Checkout}/>
                     
                        <PrivateRoute path="/dadospagamento" component={dadospag}/>
                        <PrivateRoute path="/dadosrestaurante" component={dadosRestaurante}/>
                        <Route
                            path="/login"
                            render={() =>
                                isLoggedIn ? (
                                    <Redirect to="/dashboard" />
                                ) : (
                                    <Login />
                                )
                            }
                        />
                        <Route
                            path="/cadastro"
                            render={() =>
                                isLoggedIn ? (
                                    <Redirect to="/dashboard" />
                                ) : (
                                    <Cadastro1 />
                                )
                            }
                        />

                  
                </Switch>
            </div>
        );
    }
}

export default withRouter(withState(App));














// function Routes(){    return(

//  <BrowserRouter>
//      <Switch>
        
//         <Route path="/" exact component={ main }/>
//         <Route path="/cardapio" exact component={cardapio}/>
//         <Route path="/cardapioNoturno" component={cardapioNoturno}/>
//         <Route path="/d/:url" component={daytest}/>
//         <Route path="/n/:url" component={cardapioNoturno}/>
//         <Route path="/login" component={login}/>
//         <Route path="/cadastro" component={cadastro1}/>
//         <PrivateRoute path="/cadastrocardapio" component={cadastrarCardapio}/>
//         <PrivateRoute path="/cadastroprodutos" component={cadastrarprodutos}/>
//         <Route path="/checkout" component={Checkout}/>
        
        
//         <PrivateRoute path="/dashboard" component={dashboard}/>
//         <PrivateRoute path="/dadospagamento" component={dadospag}/>
//         <PrivateRoute path="/dadosrestaurante" component={dadosRestaurante}/>
//      </Switch>
//  </BrowserRouter>);
// // };
// export default Routes;