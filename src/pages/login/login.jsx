import React from 'react';

import Header from '../../components/header'

class SignUp extends React.Component {



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

  <form class="text-center" style={{color: "#757575"}}>

    
    <div class="md-form">
    <label for="materialLoginFormEmail">E-mail</label>
      <input type="email" id="materialLoginFormEmail" class="form-control"/>
      
    </div>

    
    <div class="md-form">
    <label for="materialLoginFormPassword">Senha</label>
      <input type="password" id="materialLoginFormPassword" class="form-control"/>
      
    </div>

    <div class="d-flex justify-content-around">
      <div>

       
      </div>
      <div>
       
        <a href="">Esqueceu a senha?</a>
      </div>
    </div>

    
    <button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">entrar</button>


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