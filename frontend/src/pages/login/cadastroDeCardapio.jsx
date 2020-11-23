import React from 'react';

import Header from '../../components/header'


import Button from '@material-ui/core/Button';


var backendURL= process.env.REACT_APP_API_URL
const str = 'ÁÉÍÓÚáéíóúâêîôûàèìòùÇç/.,~!@#$%&_-12345';
class cadastrarCardapio extends React.Component {

  componentDidMount(){
    fetch(`${backendURL}/api/restaurante/${this.props.id}`).then(
      res=>{
        if (res.status!==200 && res.status!==201) {
          console.log(res.status)
          this.setState({
            _id: this.props.id,
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
            img: dados.img,
            abertura: dados.abertura,
            fechamen: dados.fechamen,
            telefone:dados.telefone,
            url: dados.url,
            cidade:dados.cidade,
            token:dados.token,
            frete: dados.frete,
            categorias: dados.categorias,
            estado:dados.estado,
            valeRefeicao: dados.valeRefeicao,
            isUpdate: true
          })}
          )
        }
      }
    )
  }

  
  cadastrarProduto(){

  }

  constructor(props){
    super(props)
    this.state={
      _id:"",
      isLoading: true,
      nome1: '',
      nome:"",
      desc:"",
      endereco:"",
      CEP:null,
      telefone:null,
      cidade:"",
      frete:"",
      abertura: '',
      fechamen: '',
      categorias1: '',
      categorias: [],
      estado:"",
      img: "",
      valeRefeicao: null,
      url: '',
      isUpdate: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.cadastrarProduto = this.cadastrarProduto.bind(this);
    this.handleChange = this.handleChange.bind(this);
  
  }
 
  handleFileChange(event){
    const files = event.target.files[0]
    this.setState({
        img: files
    })
}

handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
if(name == 'nome' && this.state.nome != ''){this.setState({
  nome: this.state.nome
})}else{
    this.setState({
        [name]:value
    });}

}

  cadastrarProduto(){
    const files = this.state.img;
// var abertura1 = this.state.abertura.replace(":", ".")
// var fechamento1 = this.state.fechamen.replace(":", ".")
// abertura1 = Number(abertura1)
// fechamento1 = Number(fechamento1)
    var data = { 
        _id:this.props.id,
        nome:this.state.nome,
        telefone:this.state.telefone,
        endereco:this.state.endereco,
        valeRefeicao: this.state.valeRefeicao,
        abertura: this.state.abertura,
        fechamen: this.state.fechamen,
        desc:this.state.desc,
        categorias: this.state.categorias,
        cidade:this.state.cidade,
        freteV:this.state.frete,
        estado:this.state.estado,
        CEP:this.state.CEP,
        url:this.state.url,
        img: this.props.id
      }
    



    data = JSON.stringify(data)


      if(files !== null){
      var formData = new FormData()
      formData.append('file',files)
  


    if(!this.state.isUpdate){
    
      if(files !== null){
        formData = new FormData()
        formData.append('file',files)
        fetch(`${backendURL}/api/upload/${this.props.id}`,{
            method:"POST",
            body:formData
        }).then(alert('text')).catch((e)=>alert('erro: '+e));
    }

      fetch(`${backendURL}/api/restaurante`,{
        method:"POST",
        headers: {'Content-Type': 'application/json'},
        body:data
    }).then(alert('Catálogo Cadastrado com sucesso'))
    .catch(err => alert(err))
    window.location.href='/Planos'
    }
    else{
      formData = new FormData()
      formData.append('file',files)
      fetch(`${backendURL}/api/upload/del/${this.props.id}`,{
        method:"DELETE"
        });
      fetch(`${backendURL}/api/upload/${this.props.id}`,{
        method:"POST",
        body:formData
        }).then(alert('imagem postada'))
        .catch(err => alert(err));
      fetch(`${backendURL}/api/restaurante/${this.state._id}`,{
        method:"PUT",
        headers: {'Content-Type': 'application/json'},
        body:data
    }).then(alert('Catálogo alterado com sucesso'),
    window.location.href='/dashboard')
    .catch(err => alert(err))
    
    }
  }}


    render(){

        return (
          <div className="" style={{backgroundColor:"#f3f3f3", color: "black"}} >
          <Header/>
          <br/>
          <h3>Cadastrar ou alterar catálogo</h3>

          
          <form className="container">
          <div class="form-row">
          <label for="nome1"><h3>Nome do estabelecimento</h3><br/><p>Escolha bem o nome, ele não poderá ser alterado</p></label>
          <div className="input-group">
          
          
   <input type="name" name="nome1" value={this.state.nome1} onChange={this.handleChange} placeholder="Nome" class="form-control" id="nome1"/>

   <div class="input-group-append" >
     {console.log(this.state.nome)}
   <a className="btn btn-outline-info" onClick={()=>{
     if(this.state.nome=== '' || this.state.nome===undefined){
      this.setState({ ...this.state, nome: this.state.nome1, url: this.state.nome1.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')})
     }else{
      this.setState({ ...this.state, nome: this.state.nome})
     }
   }}> Nomear catálogo</a>
 </div>
</div>

  <form>
<div class="form-group">
  <label for="exampleFormControlFile1"><h5>Logo do estabelecimento</h5></label>
  <input type="file" class="form-control-file" id="exampleFormControlFile1" onChange={this.handleFileChange}/>
</div>
</form>
<div class="form-group col-md-12">
    <label for="inputState"><h5>Aceita Vale alimentação</h5></label>
    </div>
    <div className="justify-content-center" style={{width:"100%",display:"flex"}}>
    <input name="valeRefeicao" type="radio" value="true" onChange={this.handleChange} /><label>Sim</label> 
    <input name="valeRefeicao" type="radio" value="false" onChange={this.handleChange}/> <label>Não</label> 
    </div>
    </div>
<div class="form-group">
  <label for="inputAddress"><h5>Endereço</h5></label>
  <input name="endereco" onChange={this.handleChange} value={this.state.endereco} type="text" class="form-control" id="inputAddress" placeholder="Rua e Numero"/>
</div>
<div class="form-group">
  <label for="inputAddress2"><h5>Descrição do estabelecimento</h5></label>
  <input name="desc" type="text" onChange={this.handleChange} value={this.state.desc} class="form-control" id="inputAddress2" placeholder=""/>
</div>
<div class="form-group">
  <label for="inputAddress2"><h5>URL para acesso do Catálogo</h5></label>
  <input name="url" type="text" value={this.state.url} class="form-control" id="inputAddress2" placeholder=""/>
</div>
<div class="form-row">
<label for="categorias1"><h5>categorias</h5></label>
<ul>
        {this.state.categorias.length!==0? (this.state.categorias.map((eee)=>{
          return(<li className='justify-content-between' key={eee}>{eee} <a style={{color: 'black'}} onClick={()=>{ this.setState({...this.state, categorias: this.state.categorias.filter((categorias) => categorias !== eee)})}}>x</a></li>)}))
          
          :(<li>Ainda não existe nenhuma categoria</li>)}
</ul>
<div className="input-group">

   <br/>
      <input type="name" name="categorias1" value={this.state.categorias1} onChange={this.handleChange} placeholder="categorias" class="form-control" id="categorias"/>
   
      <div class="input-group-append" >
        {console.log(this.state.nome)}
      <a className="btn btn-outline-info" onClick={()=>{this.setState({ ...this.state, categorias: [...this.state.categorias,this.state.categorias1]})}}> Adicionar Categoria</a>
    </div>
  </div>




<div class="form-group col-md-6">
    <label for="inputCity"><h5>Abertura</h5></label>
    <input name="abertura" type="time" placeholder="Hora a qual abre seu comércio" max='24' class="form-control" onChange={this.handleChange} value={this.state.abertura} />
  </div>
  
  <div class="form-group col-md-6">
    <label for="inputCity"><h5>Fechamento</h5></label>
    <input name="fechamen" type="time" class="form-control" placeholder="Hora a qual fecha seu comércio" min='00' id="fechamen" onChange={this.handleChange} value={this.state.fechamen}/>
  </div>
<div class="form-group col-md-6">
    <label for="inputCity"><h5>Preço do Frete</h5></label>
    <input name="frete" type="number" class="form-control" onChange={this.handleChange} value={this.state.frete} id="inputToken"/>
  </div>
  <div class="form-group col-md-6">
    <label for="inputCity"><h5>Cidade</h5></label>
    <input name="cidade" type="text" class="form-control" id="inputCity" onChange={this.handleChange} value={this.state.cidade}/>
  </div>
  <div class="form-group col-md-6">
    <label for="inputCity"><h5>Número</h5></label>
    <input name="telefone" type="tel" class="form-control" min="12" id="inputCity" onChange={this.handleChange} value={this.state.telefone} mask="55(99)99999-9999" placeholder="55(__) ______ ____"/>
  </div>
  <div class="form-group col-md-4">
    <label for="inputState"><h5>Estado</h5></label>
    <select name="estado" onChange={this.handleChange} value={this.state.estado} id="inputState" class="form-control">
      <option selected>Escolher...</option>
      <option value="AC">Acre</option>
<option value="AL">Alagoas</option>
<option value="AP">Amapá</option>
<option value="AM">Amazonas</option>
<option value="BA">Bahia</option>
<option value="CE">Ceará</option>
<option value="DF">Distrito Federal</option>
<option value="ES">Espírito Santo</option>
<option value="GO">Goiás</option>
<option value="MA">Maranhão</option>
<option value="MT">Mato Grosso</option>
<option value="MS">Mato Grosso do Sul</option>
<option value="MG">Minas Gerais</option>
<option value="PA">Pará</option>
<option value="PB">Paraíba</option>
<option value="PR">Paraná</option>
<option value="PE">Pernambuco</option>
<option value="PI">Piauí</option>
<option value="RJ">Rio de Janeiro</option>
<option value="RN">Rio Grande do Norte</option>
<option value="RS">Rio Grande do Sul</option>
<option value="RO">Rondônia</option>
<option value="RR">Roraima</option>
<option value="SC">Santa Catarina</option>
<option value="SP">São Paulo</option>
<option value="SE">Sergipe</option>
<option value="TO">Tocantins</option>
    </select>
  </div>
  <div class="form-group col-md-2">
    <label for="inputZip"><h5>CEP</h5></label>
    <input onChange={this.handleChange} name="CEP"  value={this.state.CEP} type="text" class="form-control" id="inputZip"/>
  </div>
</div>
<div class="form-group">
  
</div>
<Button onClick={this.cadastrarProduto} class="btn btn-primary">Finalizar</Button>
<br/>
          </form>
          <br/><br/><br/>
      </div>
        )
        }
    }
export default cadastrarCardapio