import React,{useState} from 'react';

import Header from '../../../components/header'

import Cookies from "js-cookie";



class dashboard extends React.Component {
 
  logout() {
    fetch("http://localhost:5000/api/logout/" + this.props.id, {
      method: "PUT",
    });
    Cookies.remove("session");
    window.location.href = "/";
  }


  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      Dados: {},
    };
    this.logout = this.logout.bind(this);
  }


  componentDidMount() {
    fetch("http://localhost:5000/api/cliente/" + this.props.id)
      .then((dados) => dados.json())
      .then((data) => {
        this.setState({
          Dados: data,
          isLoading: false,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
        return (
        <div>
                <Header/>

<div>
<div className="" style={{backgroundColor:"#f3f3f3", color: "black"}} >
          
         
            <h3 class="card-header info-color white-text text-center py-4" style={{color: "#f2f2f2", backgroundColor: "#0D2840", fontFamily: "'Anton', sans-serif", letterSpacing: "2pt"}}>Área do cliente</h3>
           <br/>
        <h5 className="container">Bem vindo {this.state.Dados.nome}</h5>
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
  <a href="/cadastroDeProdutos" class="btn btn-primary">Fazer logout</a>
  </div>
  </div>
        </div></form><br/>
</div>
</div>
        </div>
        )
        }
      }
        export default dashboard;