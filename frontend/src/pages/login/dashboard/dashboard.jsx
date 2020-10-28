import React,{useState} from 'react';

import Header from '../../../components/header'

import Cookies from "js-cookie";

import withState from '../../../utils/withState';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.actions.retrieveUser();
    
}

  render() {
    const { user } = this.props.store;
    console.log(this.props.id)
        return (
        <div>
                <Header/>

<div>
<div className="" style={{backgroundColor:"#f3f3f3", color: "black"}} >
          
         
            <h3 class="card-header info-color white-text text-center py-4" style={{color: "#f2f2f2", backgroundColor: "#0D2840", fontFamily: "'Anton', sans-serif", letterSpacing: "2pt"}}>Área do cliente</h3>
           <br/>
        <h5 className="container">Bem vindo {user.name}</h5>
           <div className="radioinput1">

         </div>
            <form className="container">
            <div class="form-row">
    <div class="form-group col-md-6">

      <a className="btn col-md-12" style={{color: "#f2f2f2", backgroundColor: "#0D2840"}} href="/cadastroprodutos">Cadastrar produto</a>
    </div>
    
  <div class="form-group col-md-6">
  <a className="btn col-md-12" style={{color: "#f2f2f2", backgroundColor: "#0D2840"}} href="/cadastrocardapio">Alterar Cardápio</a>
  </div>


    <div class="form-group col-md-6">
    <a className="btn col-md-12" style={{color: "#f2f2f2", backgroundColor: "#0D2840"}} href="/dadospagamento">Alterar dados de pagamento</a>
    </div>
    <div class="form-group col-md-6">
    <a className="btn col-md-12" style={{color: "#f2f2f2", backgroundColor: "#0D2840"}}>Visualizar cardápio</a>
    </div>
    <div class="form-group col-md-6">
 
    

  <div class="form-check form-check-inline">
  <a href="/login" onClick={()=>this.props.actions.onLogout()} class="btn btn-primary">Fazer logout</a>
  </div>
  </div>
        </div></form><br/>
</div>
</div>
        </div>
        )
        }
      }
      export default withState(Dashboard);