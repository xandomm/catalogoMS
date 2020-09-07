import React from 'react';

import Header from '../../components/header'




function cadastrarCardapio(){
    return window.location.href="/cadastrocardapio"
}



class Cadastro extends React.Component {



    render(){
        return (
<div>
                <Header/>


                <div class="card">

    <h5 class="card-header info-color white-text text-center py-4"  style={{color: "#f2f2f2", backgroundColor: "#0D2840", fontFamily: "'Anton', sans-serif", letterSpacing: "2pt"}}>
        <strong>Cadastre-se</strong>
    </h5>



    <div class="card-body px-lg-5 pt-0  container"  style={{ backgroundColor: "#f2f2f2"}}>
    <br/>
        
        <form class="text-center" style={{color: '#757575'}} action="#!">

            <div class="form-row">
                <div class="col">
                    
                    <div class="md-form">
                        <input type="text" id="materialRegisterFormFirstName" class="form-control"/>
                        <label for="materialRegisterFormFirstName"><h5>Nome</h5></label>
                    </div>
                </div>
                <div class="col">
                  
                    <div class="md-form">
                        <input type="email" id="materialRegisterFormLastName" class="form-control"/>
                        <label for="materialRegisterFormLastName"><h5>Sobrenome</h5></label>
                    </div>
                </div>
            </div>


            <div class="md-form mt-0">
                <input type="email" id="materialRegisterFormEmail" class="form-control"/>
                <label for="materialRegisterFormEmail"><h5>Email</h5></label>
            </div>

            <div class="md-form">
                <input type="password" id="materialRegisterFormPassword" class="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock"/>
                <label for="materialRegisterFormPassword"><h5>Senha</h5></label>
                <small id="materialRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                    
                </small>
            </div>

            <div class="md-form">
                <input type="password" id="materialRegisterFormPhone" class="form-control" aria-describedby="materialRegisterFormPhoneHelpBlock"/>
                <label for="materialRegisterFormPhone"><h5>Número</h5></label>
                <small id="materialRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4">
                    
                </small>
            </div>

            
          

          
            <button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit" href="/cadastrocardapio">Cadastre-se</button>

            
         
           
            <p>Clicando em Cadastrar eu concordo com os
               
                <a href="" target="_blank"> termos de serviços</a></p>

        </form>
   

    </div>

</div>
</div>
                )
                }
                }
                export default Cadastro