import React from 'react';

import Header from '../../components/header'
import { withRouter, Link } from 'react-router-dom';
import withState from '../../utils/withState'



const Register = ({ store, actions }) => {

        return (
<div>
                <Header/>


                <div class="card">

    <h5 class="card-header info-color white-text text-center py-4"  style={{color: "#f2f2f2", backgroundColor: "#0D2840", fontFamily: "'Anton', sans-serif", letterSpacing: "2pt"}}>
        <strong>Cadastre-se</strong>
    </h5>



    <div class="card-body px-lg-5 pt-0  container"  style={{ backgroundColor: "#f2f2f2"}}>
    <br/>
    {store.error && <p className="register__error">{store.error}!</p>}
        <form class="text-center" style={{color: '#757575'}}  onSubmit={actions.onRegister}>

            <div class="form-row">
                <div class="col">
                    
                    <div class="md-form">
                        <input  id="materialRegisterFormFirstName" class="form-control"
                           type="text"
                           value={store.name}
                           name="name"
                           onChange={e => actions.handleChange(e)}
                           placeholder="Enter your name"/>
                        <label for="materialRegisterFormFirstName"><h5>Nome</h5></label>
                    </div>
                </div>
              
            </div>


            <div class="md-form mt-0">
                <input type="email" id="materialRegisterFormEmail"
                   type="text"
                   value={store.email}
                   name="email"
                   onChange={e => actions.handleChange(e)}
                   placeholder="Enter your email"
                class="form-control"/>
                <label for="materialRegisterFormEmail"><h5>Email</h5></label>
            </div>

            <div class="md-form">
                <input type="password" id="materialRegisterFormPassword"
                                         
                                               value={store.password}
                                               name="password"
                                               onChange={e => actions.handleChange(e)}
                                               placeholder="Enter your password"
                class="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock"/>
                <label for="materialRegisterFormPassword"><h5>Senha</h5></label>
                <small id="materialRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                    
                </small>
            </div>

            

            
          

          
            <button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"  type="submit"><a href="/login">Cadastre-se</a></button>

            
         
           
            <p>Clicando em Cadastrar eu concordo com os
               
                <a href="" target="_blank"> termos de serviços</a></p>

        </form>
   

    </div>

</div>
</div>
                )
          }
          
export default withRouter(withState(Register));