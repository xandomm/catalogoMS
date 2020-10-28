import React,{useState} from 'react';

import Header from '../../components/header'
import './cad.css'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import axios from 'axios'

var now = new Date().getTime();

export default class cadastroDeProdutos extends React.Component {
 
  componentDidMount(){
    fetch('http://localhost:5000/api/restaurante/'+this.props.id).then(
        res=>{
          if (res.status===404) {
            this.catalogo({
              isUpdate: false
            })
          }
          else{
            
            res.json().then(
            dados => {
              console.log(dados)
              this.setState({
              _id: now,
              cardapio: dados.url,
              categorias: dados.categorias,
              categoria: dados.categorias[0],
              isUpdate: false
            })}
            )
          }
        }
      )
    }


  constructor(){
    super()
    this.state={
      _id: '',
      nome: '',
      img:null,
      preco: '',
      desc: '',
      nomeopc1: '',
      precopc1: '',
      cardapio: '',
      categoria:'',
      categorias: [],
      opcionais: []
    }
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeO = this.handleChangeO.bind(this);
    this.cadastrarProduto = this.cadastrarProduto.bind(this);
  
  }
  handleFileChange(event){
    const files = event.target.files[0]
    this.setState({
        img: files
    })
}

  handleChange(event) {

    this.setState({ ...this.state, [event.target.name]: event.target.value })
  }
handleChangeO(event) {
    this.setState({ ...this.state, opcionais: [{ [event.target.name]: event.target.value}] })
}

cadastrarProduto(){




//     _id: Number,
//     nome: String,
//     preco: Number,
//     img: String,
//     descricao: String,
//     cardapio: String

// }, {
//     timestamps: true,
//     collection: 'Produto'
// });




const files = this.state.img;
if(files !== null){

  var data = { 
    _id: this.state._id ,
    nome:this.state.nome,
    preco: this.state.preco,
    descricao: this.state.desc,
    categoria: this.state.categoria,
    opcionais: this.state.opcionais,
    cardapio: this.state.cardapio,
    img: this.state._id 
  }

const formData = new FormData()
formData.append('file',files)
console.log(data)
  data= JSON.stringify(data)
  fetch('http://localhost:5000/api/upload/'+this.state._id,{
      method:"POST",
      body:formData
  }).then(alert(this.state._id)).catch((err)=>{alert(err)});


fetch('http://localhost:5000/api/produto/'+this.state.cardapio,{
  method:"POST",
  headers: {'Content-Type': 'application/json'},
  body:data
}).then(alert('Produto Cadastrado com sucesso '+data._id))
.catch(err => alert(err))
window.location.href='/Planos'
} else {
  var data = { 
    _id: this.state._id ,
    nome:this.state.nome,
    preco: this.state.preco,
    desc: this.state.desc,
    categoria: this.state.categoria,
    opcionais: this.state.opcionais,
    cardapio: this.state.cardapio,
    img: ''
  }
  console.log(data)
  data= JSON.stringify(data)
  fetch('http://localhost:5000/api/produto/'+this.state.cardapio,{
    method:"POST",
    headers: {'Content-Type': 'application/json'},
    body:data
  }).then(alert('Catálogo Cadastrado com sucesso'+data))
  .catch(err => alert(err))
  window.location.href='/Planos'

}

}







handleSubmit = (e) => {
        
  console.log(JSON.stringify(this.state))
  axios.post('http://localhost:5000/api/produto/'+this.state.cardapio, JSON.stringify(this.state),{
      headers: {
          'Content-Type': 'application/json'
      },
  })
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log("caraio" +error)
    }) 
    window.location.href='/dashboard'



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
    <input type="file" onChange={this.handleFileChange} class="form-control-file" id="exampleFormControlFile1"/>
  </div>

<div class="form-group col-md-6">
      <label for="inputEmail4"><h5>Preço</h5></label>
      <input type="name" name="preco" value={this.state.preco} onChange={this.handleChange} class="form-control" id="inputEmail4"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4"><h5>Descrição</h5></label>
      <input type="name" name="desc" value={this.state.desc} onChange={this.handleChange} class="form-control" id="inputEmail4"/>
    </div>
    {/* onChange={(e)=>{this.setState({...this.state, this.state.categoria: this.state.categoria.value})}} */}
    <select class="form-control" value={this.state.categoria} onChange={(e)=>{this.setState({...this.state, categoria: e.target.value})}} >
      {
        this.state.categorias.map((cat)=>{
        return(<option value={cat}>{cat}</option>)
        })
      }
  
</select>
  
    <h5>Opcionais</h5>
    
    <table class="table table-dark">
  <thead>
    <tr>
     
      <th scope="col">Nome</th>
     
      <th scope="col">Preço</th>
    </tr>
  </thead>
  <tbody>


  {
    this.state.opcionais.map(item=>{ return(<tr>
     
    <td>{item.nomeopc}</td>
    <td>{item.precoopc}</td>
    
    </tr>)
    
     
    }
      )
    }

   
  </tbody>
</table>
    <div className="input-group">
   
   
      <input type="name" name="nomeopc1" value={this.state.nomeopc1} onChange={this.handleChange} placeholder="Nome do opcional" class="form-control" id="inputEmail4"/>
   
      <input type="number" name="precoopc1" value={this.state.precoopc1} onChange={this.handleChange} placeholder="Preço do opcional" min="0"  class="form-control" id="inputEmail4"/>
      <div class="input-group-append" >
        {console.log(this.state)}
      <a className="btn btn-outline-info" onClick={()=>{this.setState({ ...this.state, opcionais: [...this.state.opcionais,{ nomeopc: this.state.nomeopc1, precoopc: this.state.precoopc1}]})}}> Adicionar Opcionais</a>
    </div>
  </div>
    <div className="radioinput1">
    <div class="form-check form-check-inline">
  <a href="/cadastroprodutos" class="btn btn-primary" onClick={this.cadastrarProduto}>cadastrar outro produto</a></div>


  <div class="form-check form-check-inline">
  <a href="/dashboard" class="btn btn-primary" onClick={this.cadastrarProduto}>finalizar</a>
  </div>
  </div>
        </div></form><br/>
</div>
</div>
        </div>
        )
        }
  
      }