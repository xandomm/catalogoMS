import React,{useState} from 'react';

import Header from '../../components/header'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';





export default (props)=>  {
    const [value,setValue] = useState('cadastro');

    const handleChange = (event) => {
        setValue(event.target.value);
        
      };
      function CadastroOuAlteracao(value){
        if (value!='cadastro'){
            return(
                <div class="form-group">
                <label for="inputAddress"><strong>id do produto que deseja alterar</strong></label>
                <input type="text" class="form-control" id="inputAddress" placeholder="Código escrito no produto do cardápio"/>
                {console.log(value)}
                </div>
               
            )
        }
    }
        return (
        <div>
                <Header/>

<div>
<div className="" style={{backgroundColor:"#f3f3f3", color: "black"}} >
          
         
            <h3 class="card-header info-color white-text text-center py-4" style={{color: "#f2f2f2", backgroundColor: "#0D2840", fontFamily: "'Anton', sans-serif", letterSpacing: "2pt"}}>Cadastrar ou alterar produtos</h3>
           <br/>
           <div className="radioinput1">

           <FormControl component="fieldset" style={{color:"black"}}>
          
          <RadioGroup aria-label="gender" name="gender1"value={value} onChange={handleChange}>
          <div class="form-check form-check-inline"> <FormControlLabel value="cadastro" control={<Radio />} label="Cadastrar produto" /></div>
          <div class="form-check form-check-inline"><FormControlLabel value="alterar" control={<Radio />} label="Alterar produto" /></div>
         
          </RadioGroup>
          </FormControl></div>
            <form className="container">
            <div class="form-row">
    <div class="form-group col-md-6">
        {CadastroOuAlteracao(value)}
      <label for="inputEmail4"><h5>Nome do produto</h5></label>
      <input type="name" class="form-control" id="inputEmail4"/>
    </div>
    <form>
  <div class="form-group">
    <label for="exampleFormControlFile1"><h5>Foto do produto</h5></label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
  </div>
</form>
<div class="form-group col-md-6">
      <label for="inputEmail4"><h5>Preço</h5></label>
      <input type="name" class="form-control" id="inputEmail4"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4"><h5>Descrição</h5></label>
      <input type="name" class="form-control" id="inputEmail4"/>
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
  
