import React,{useState} from 'react';

import Header from '../../components/header'
import './cad.css'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';





export default class cadastroDeProdutos extends React.Component {
  constructor(){
    super()
    this.state={
      nome: '',
      img:'',
      preco: '',
      desc: '',
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
    this.setState({ ...this.state, opcionais: [{ [event.target.name]: event.target.value}] })
}
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
   
   
      <input type="name" name="nomeopc" value={this.state.opcionais.nomeopc} placeholder="Nome do opcional" class="form-control" id="inputEmail4"/>
   
      <input type="number" name="precoopc" value={this.state.opcionais.precoopc} placeholder="Preço do opcional" min="0"  class="form-control" id="inputEmail4"/>
      <div class="input-group-append" onChange={()=>{this.setState({ ...this.state, opcionais: [{ nomeopc: this.state.opcionais.nomeopc, precoopc: this.state.opcionais.precoopc}]})}}>
        {console.log(this.state)}
      <button className="btn btn-outline-info"> Adicionar Opcionais</button>
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