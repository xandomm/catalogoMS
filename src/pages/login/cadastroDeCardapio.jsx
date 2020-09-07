import React from 'react';

import Header from '../../components/header'






class cadastrarCardapio extends React.Component {



    render(){
        return (
        <div>
                <Header/>

<div>
<div className="" style={{backgroundColor:"#f3f3f3", color: "black"}} >
          
         
            <h3 class="card-header info-color white-text text-center py-4" style={{color: "#f2f2f2", backgroundColor: "#0D2840", fontFamily: "'Anton', sans-serif", letterSpacing: "2pt"}}>Cadastrar ou alterar cardapio</h3>
           <br/>
            <form className="container">
            <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4"><h5>Nome do estabelecimento</h5></label>
      <input type="name" class="form-control" id="inputEmail4"/>
    </div>
    <form>
  <div class="form-group">
    <label for="exampleFormControlFile1"><h5>Logo do restaurante</h5></label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
  </div>
</form>
<div class="form-group col-md-12">
      <label for="inputState"><h5>Aceita Vale alimentação</h5></label>
      <select id="inputState" class="form-control">
        <option selected></option>
        <option value="Nao">Não</option>
	<option value="sim">Sim</option></select></div>
  </div>
  <div class="form-group">
    <label for="inputAddress"><h5>Endereço</h5></label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Rua e Numero"/>
  </div>
  <div class="form-group">
    <label for="inputAddress2"><h5>Descrição do restaurante</h5></label>
    <input type="text" class="form-control" id="inputAddress2" placeholder=""/>
  </div>
  <div class="form-row">
  
    <div class="form-group col-md-6">
      <label for="inputCity"><h5>Cidade</h5></label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputCity"><h5>Número</h5></label>
      <input type="tel" class="form-control" id="inputCity" placeholder="55(__) ______ ____"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState"><h5>Estado</h5></label>
      <select id="inputState" class="form-control">
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
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
  <div class="form-group">
    
  </div>
  <a href="/cadastroDeProdutos" class="btn btn-primary">Finalizar</a>
  <br/>
            </form>
            <br/><br/><br/>
        </div>
</div>

        </div>
        )
        }
    }
export default cadastrarCardapio