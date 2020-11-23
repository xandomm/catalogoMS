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

var backendURL= process.env.REACT_APP_API_URL

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default class dadospagamento extends React.Component {


  componentDidMount(){
    fetch(backendURL+'/api/restaurante/'+this.props.id).then(
      res=>{
        if (res.status===404) {
          this.setState({
            isUpdate: false
          })
        }
        else{
          res.json().then(
          dados => {
            console.log(dados)
            this.setState({
            _id:this.props.id,
            isLoading: false,
            nome:dados.nome,
            desc:dados.desc,
            endereco:dados.endereco,
            CEP:dados.CEP,
            abertura: dados.abertura,
            fechamen: dados.fechamen,
            telefone:dados.telefone,
            url: dados.url,
            cidade:dados.cidade,
            frete: dados.frete,
            estado:dados.estado,
            valeRefeicao: dados.valeRefeicao,
            isUpdate: true,
            credito: dados.credito,
            debito: dados.debito,
            dinheiro: dados.dinheiro,
            frete: dados.frete,
            freteV: dados.freteV,
            freteGratis: dados.freteGratis,
            freteGratisV: dados.freteGratisV,
           
            retirar: dados.retirar
          })}
          )
        }
      }
    )
  }
  constructor(){
    super()
    this.state={
      credito: true,
      debito: true,
      dinheiro: true,
      frete: false,
      freteV: '',
      freteGratis: false,
      freteGratisV: '',
      compraMin: false,
      compraMinV: '',
      retirar: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeV = this.handleChangeV.bind(this);
    this.cadastrarProduto = this.cadastrarProduto.bind(this);
  }
  
  handleChange(event) {

    this.setState({ ...this.state, [event.target.name]: event.target.checked })
  }
  handleChangeV(event) {

    this.setState({ ...this.state, [event.target.name]: event.target.value})
  }

  cadastrarProduto(){


    var data = { 
      credito: this.state.credito,
      debito: this.state.debito,
      dinheiro: this.state.dinheiro,
      frete: this.state.frete,
      freteV: this.state.freteV,
      freteGratis: this.state.freteGratis,
      freteGratisV: this.state.freteGratisV,
      _id:this.props.id,
      retirar: this.state.retirar
      

    }
  

    data = JSON.stringify(data)

  





     
      fetch(backendURL+'/api/restaurante/'+this.props.id,{
        method:"PUT",
        headers: {'Content-Type': 'application/json'},
        body:data
    }).then(alert('Catálogo alterado com sucesso'))
    .catch(err => alert(err))
    window.location.href='/dashboard'
    }











  inputTypeFrete(frete){
    if(frete===true){
        return ( <TextField id="standard-basic" value={this.state.freteV} onChange={this.handleChangeV.bind(this)} className="inputpreencher" name="freteV" label="Digite o Valor do frete aqui:" required/>)
    }
  }
  inputTypeFreteGratis( freteg ){
    if(freteg===true){
        return ( <TextField id="standard-basic"  value={this.state.freteGratisV} onChange={this.handleChangeV.bind(this)} className="inputpreencher" name="freteGratisV" label="Digite o Valor mínimo para frete grátis:" required/>)
    }
  }
inputTypeValormin( valor ){
    if(valor===true){
        return ( <TextField id="standard-basic"  value={this.state.compraMinV} onChange={this.handleChangeV.bind(this)} className="inputpreencher" name="compraMinV" label="Digite o Valor mínimo de compras:" required/>)
    }
  }


render(){
      
        return (
        <div>
                <Header/>

<div>
<div className="" style={{backgroundColor:"#f3f3f3", color: "black"}} >
          
         {  console.log(this.state)}
            <h3 class="card-header info-color white-text text-center py-4" style={{color: "#f2f2f2", backgroundColor: "#0D2840", fontFamily: "'Anton', sans-serif", letterSpacing: "2pt"}}>Área de pagamento</h3>
           <br/>
           <div className="container inputpagamento">
              
              <div></div> <form>
               <FormControl component="fieldset">
      <FormLabel component="legend">Tipos de pagamento</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={this.state.credito} color="primary" onChange={this.handleChange.bind(this)} name="credito" />}
          label="Crédito"
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
      <FormControlLabel
          control={<Switch checked={this.state.retirar} color="primary" onChange={this.handleChange.bind(this)} name="retirar" />}
          label="Retirar no local"
        />
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={this.state.frete} color="primary"  onChange={this.handleChange.bind(this)} name="frete" />}
          label="Taxa de entrega"
        />
        
        <FormControlLabel
          control={<Switch checked={this.state.freteGratis} color="primary"  onChange={this.handleChange.bind(this)} name="freteGratis" />}
          label="Valor do pedido mínimo para entrega Grátis"
        />

      </FormGroup>
     
    </FormControl>
               </form>
               </div>
             
               </div>
               
           </div>
           {this.inputTypeFrete(this.state.frete)}
      {this.inputTypeFreteGratis(this.state.freteGratis)}
      {this.inputTypeValormin(this.state.compraMin)}
      <br/><br/><br/>
      <button className="btn btn-info" onClick={this.cadastrarProduto}>
        Realizar alterações
      </button>
      </div>

      </div>

  </div>
        
        )
    
        }}
  
