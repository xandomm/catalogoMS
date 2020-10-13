import React from 'react';

import Header from '../../components/header'
import './cad.css'




export default class cadastroDeProdutos extends React.Component {
  constructor(){
    super()
    this.state={
      nome: '',
      img:'',
      preco: '',
      desc: '',
      nomeopc1: '',
      precoopc1: '',
      opcionais: [{
        nomeopc: '',
        precoopc: ''
      }]
    }
   
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeO = this.handleChangeO.bind(this);
    
  }
  
  handleChange(event) {

    this.setState({ ...this.state, [event.target.name]: event.target.value })
  }
handleChangeO(event) {
    this.setState({ ...this.state, [event.target.name]: event.target.value})
}


mudapora(){this.setState({ ...this.state, opcionais: [...this.state.opcionais, { nomeopc: 'f', precoopc: 2}]})}
    render(){
        return (
        <div>
                <Header/>

<div>
<div className="" style={{backgroundColor:"#f3f3f3", color: "black"}} >
          
         
            <h3 class="card-header info-color white-text text-center py-4" style={{color: "#f2f2f2", backgroundColor: "#0D2840", fontFamily: "'Anton', sans-serif", letterSpacing: "2pt"}}>Cadastrar ou alterar produtos</h3>
           <br/>
           
            <form className="container">
            <div class="form-row">
    <div class="form-group col-md-6">
   
      <label for="inputEmail4"><h5>Nome do produto</h5></label>
      <input type="name" name="nome" value={this.state.nome} onChange={this.handleChange} class="form-control" id="inputEmail4"/>
    </div>
 
  <div class="form-group">
    <label for="exampleFormControlFile1"><h5>Foto do produto</h5></label>
    <input type="file" name="img" value={this.state.img} onChange={this.handleChange} class="form-control-file" id="exampleFormControlFile1"/>
  </div>

<div class="form-group col-md-6">
      <label for="inputEmail4"><h5>Preço</h5></label>
      <input type="name" name="preco" value={this.state.preco} onChange={this.handleChange} class="form-control" id="inputEmail4"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4"><h5>Descrição</h5></label>
      <input type="name" name="desc" value={this.state.desc} onChange={this.handleChange} class="form-control" id="inputEmail4"/>
    </div>
    <h5>Opcionais</h5>
    <div className="input-group">
   
   
      <input type="name" name="nomeopc1" value={this.state.opcionais.nomeopc1}  onChange={this.handleChangeO} placeholder="Nome do opcional" class="form-control" id="inputEmail4"/>
   
      <input type="number" name="precoopc1" value={this.state.opcionais.precoopc1} onChange={this.handleChangeO} placeholder="Preço do opcional" min="0"  class="form-control" id="inputEmail4"/>
      <div class="input-group-append" >
        {console.log(this.state)}
      <button className="btn btn-outline-info" type="submit" onChange={this.mudapora}> Adicionar Opcionais</button>
    </div>
  </div>
    <div className="radioinput1">
    <div class="form-check form-check-inline">
  <a href="/cadastroDeProdutos" class="btn btn-primary">cadastrar outro produto</a></div>


  <div class="form-check form-check-inline">
  <a href="/cadastroDeProdutos" class="btn btn-primary">finalizar</a>
  </div>
  </div>
        </div></form><br/>
</div>
</div>
        </div>
        )
        }
  
      }