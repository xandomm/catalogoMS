import React from 'react';

import Header from '../../../components/header'
import './dash.css'

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';


import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default class dadospagamento extends React.Component {
  constructor(){
    super()
    this.state={
      retirar: true,
      debito: true,
      dinheiro: true,
      frete: false,
      freteGratis: false,
      compraMin: false
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {

    this.setState({ ...this.state, [event.target.name]: event.target.checked })
  }
  



render(){
      
        return (
        <div>
                <Header/>

<div>
<div className="" style={{backgroundColor:"#f3f3f3", color: "black"}} >
          
         
            <h3 class="card-header info-color white-text text-center py-4" style={{color: "#f2f2f2", backgroundColor: "#0D2840", fontFamily: "'Anton', sans-serif", letterSpacing: "2pt"}}>Área de pagamento</h3>
           <br/>
           <div className="container inputpagamento">
              
              <div></div> <form>
               <FormControl component="fieldset">
      <FormLabel component="legend">Tipos de pagamento</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={this.state.retirar} color="primary" onChange={this.handleChange.bind(this)} name="credito" />}
          label="Retirar no local"
        />
        <FormControlLabel
          control={<Switch checked={this.state.debito} color="primary" onChange={this.handleChange.bind(this)} name="debito" />}
          label="Débito"
        />
        <FormControlLabel
          control={<Switch checked={this.state.dinheiro} color="primary" onChange={this.handleChange.bind(this)} name="dinheiro" />}
          label="Dinheiro"
        />
      </FormGroup>
    
    </FormControl>
               </form>
               <div> <div>
               <form>
               <FormControl component="fieldset">
      <FormLabel component="legend">Dados da Entrega</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={this.state.frete} color="primary"  onChange={this.handleChange.bind(this)} name="frete" />}
          label="Frete"
        />
        
        <FormControlLabel
          control={<Switch checked={this.state.freteGratis} color="primary"  onChange={this.handleChange.bind(this)} name="freteGratis" />}
          label="Frete grátis para compras com Valor mínimo"
        />
        <FormControlLabel
          control={<Switch checked={this.state.compraMin} color="primary" onChange={this.handleChange.bind(this)} name="compraMin" />}
          label="Valor mínimo de compras"
        />
      </FormGroup>
     
    </FormControl>
               </form>
               </div>
             
               </div>
               
           </div>
           {inputTypeFrete(this.state.frete)}
      {inputTypeFreteGratis(this.state.freteGratis)}
      {inputTypeValormin(this.state.compraMin)}
      </div>
      </div>

  </div>
        
        )
        function inputTypeFrete( frete ){
          if(frete===true){
              return ( <TextField id="standard-basic" className="inputpreencher" name="precoFrete" label="Digite o Valor do frete aqui:" required/>)
          }
        }
        function inputTypeFreteGratis( freteg ){
          if(freteg===true){
              return ( <TextField id="standard-basic" className="inputpreencher" name="precoFrete" label="Digite o Valor mínimo para frete grátis:" required/>)
          }
        }
        function inputTypeValormin( valor ){
          if(valor===true){
              return ( <TextField id="standard-basic" className="inputpreencher" name="precoFrete" label="Digite o Valor mínimo de compras:" required/>)
          }
        }
        }}
  
