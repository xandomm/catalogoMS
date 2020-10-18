import React from 'react';

import Header from '../../components/header'
import Cookies from 'js-cookie'
class SignUp extends React.Component {
  constructor(){
    super()
    this.state={
      email:"",
      senha:""
    }
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  login(event){
    var data = {
      email: this.state.email,
      senha: this.state.senha,
    }
    data = JSON.stringify(data)
    event.preventDefault();

    fetch("http://localhost:5000/api/login",{
      method:"POST",
      headers: {'Content-Type': 'application/json'},
      body:data
        }).then(
          async res =>{
            if(res.status===401){
              document.getElementById("incorrect").innerHTML = "E-mail ou senha incorretos"
            }
            else{
              const object = await res.json()
              Cookies.set('name', object.session, { expires: 7 })
              window.location.href='/dashboard'
            }
          }
        )
      
  }

  handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
        [name]:value
    });
}


    render(){
        return (
            <div>
                <Header/>
                <div class="card">

<h5 class="card-header info-color white-text text-center py-4" style={{color: "#f2f2f2", backgroundColor: "#0D2840", fontFamily: "'Anton', sans-serif", letterSpacing: "2pt"}}>
  <strong>cadastre-se</strong>
</h5>


<div class="card-body container px-lg-5 pt-0" style={{ backgroundColor: "#F2f2f2"}}>
<br/><br/><br/>
<span id="incorrect" style={{color:'red'}}></span>
  <form class="text-center" style={{color: "#757575"}} onSubmit={this.login}>

    
    <div class="md-form">
    <label for="materialLoginFormEmail">E-mail</label>
      <input type="email" id="materialLoginFormEmail" value={this.state.email}
            name="email"   onChange={this.handleChange} class="form-control"/>
      
    </div>

    
    <div class="md-form">
    <label for="materialLoginFormPassword">Senha</label>
      <input type="password" id="materialLoginFormPassword" onChange={this.handleChange}
              value={this.state.senha}
              name="senha" class="form-control"/>
      
    </div>

    <div class="d-flex justify-content-around">
      <div>

       
      </div>
      <div>
       
        <a href="">Esqueceu a senha?</a>
      </div>
    </div>

    
    <button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit" type="submit">entrar</button>


    <p>Não tem uma conta?
      <a href="/cadastro">cadastre-se</a>
    </p>

  

  </form>


</div>

</div>
            </div>
        )
    }





}
export default SignUp