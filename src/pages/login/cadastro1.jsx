import React from 'react';

import Header from '../../components/header'






class Cadastro extends React.Component {




        constructor(){
          super()
          this.state={
            Nome: '',
            Sobrenome: '',
            Email:'',
            Senha:'',
     
          }
          this.handleChange = this.handleChange.bind(this);
          this.cadastrarCliente = this.cadastrarCliente.bind(this);
      
      
        }
      
        cadastrarCliente(){
          var now = new Date().getTime();
          var data = {
            _id: now,
            nome: this.state.Nome,
            sobrenome: this.state.Sobrenome,
            email: this.state.Email,
            senha: this.state.Senha,
            documento: this.state.documento
          }
          data = JSON.stringify(data)
              console.log(data)
              fetch('http://localhost:5000/api/cadastro',{
                  method:"POST",
                  headers: {'Content-Type': 'application/json'},
                  body:data
              }).then(alert('Cadastrado com sucesso'))
              .catch(err => alert(err))
              window.location.href = "/cadastrocardapio";
      
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

    <h5 class="card-header info-color white-text text-center py-4"  style={{color: "#f2f2f2", backgroundColor: "#0D2840", fontFamily: "'Anton', sans-serif", letterSpacing: "2pt"}}>
        <strong>Cadastre-se</strong>
    </h5>



    <div class="card-body px-lg-5 pt-0  container"  style={{ backgroundColor: "#f2f2f2"}}>
    <br/>
        
        <form class="text-center" style={{color: '#757575'}} action="#!">

            <div class="form-row">
                <div class="col">
                    
                    <div class="md-form">
                        <input type="text" name="Nome" id="materialRegisterFormFirstName" class="form-control" value={this.state.Nome} onChange={this.handleChange}/>
                        <label for="materialRegisterFormFirstName"><h5>Nome</h5></label>
                    </div>
                </div>
                <div class="col">
                  
                    <div class="md-form">
                        <input type="email" id="materialRegisterFormLastName"              name="Sobrenome"
                autoComplete="on"
                value={this.state.Sobrenome}
                onChange={this.handleChange} class="form-control"/>
                        <label for="materialRegisterFormLastName"><h5>Sobrenome</h5></label>
                    </div>
                </div>
            </div>


            <div class="md-form mt-0">
                <input type="email" id="materialRegisterFormEmail"                 name="Email"
                autoComplete="Email"
                value={this.state.Email}
                onChange={this.handleChange} class="form-control"/>
                <label for="materialRegisterFormEmail"><h5>Email</h5></label>
            </div>

            <div class="md-form">
                <input type="password" id="materialRegisterFormPassword"
                                value={this.state.Senha}
                                onChange={this.handleChange}
                                name="Senha"
                class="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock"/>
                <label for="materialRegisterFormPassword"><h5>Senha</h5></label>
                <small id="materialRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                    
                </small>
            </div>

            

            
          

          
            <button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"  onClick={this.cadastrarCliente} type="submit">Cadastre-se</button>

            
         
           
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