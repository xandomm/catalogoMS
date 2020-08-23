import React from 'react';
import LogoFake from '../../image/restaurante.jpg'
import './cardapio.css';


import Categorias from './Categorias';

import Food from '../../image/food.jpg'
import Image from '../../image/images.jpg'
import Image1 from '../../image/images(1).jpg'
import Image2 from '../../image/restauranted.jpg'

export default (props)=>{
    const abertura = 18.00;
    const fechamento = 24.00;
    var d = new Date();
    var now = d.getHours() + "." + d.getMinutes();
//Ao conectar com o db essa funcao verificara se o restaurante esta aberto ou nao
    function abertoFechado(){
        if(now <= fechamento  && now >= abertura ){
            return(
            <a className="Aberto btn">Aberto</a>
            )
        
        }else {
            return(
                <a className="Fechado btn"><strong>Fechado</strong></a>
            )

        }}
     


    var VA = false;
    function valeAlimentacao(){
        if(VA === true){
            return(
                <div class="alert alert-primary" role="alert">
  Aceitamos vale alimentação
</div>
            )
        }else{
            return(
                <div class="alert alert-success" role="alert">
  Seja bem vindo!
</div>
            )
        }
    }
 
   return(
        <div>
            <div className="Headercardapio">
            <img className="LogoCardapio" src={LogoFake}/>
            
            {abertoFechado()}
            
            </div>
            {valeAlimentacao()}
            <div class=" descricaorestaurante">
{/* descrição do lugar */}
    
    <div class="col-md-5 col-sm-6 col-xs-12">
    
        <div class="content-part-1-left-h3">Nosso restaurante conta com diversas instalações</div>
        <div class="content-part-1-left-p">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
        leap into electronic typesetting, remaining essentially unchanged.
        
        </div>
        
    </div>
    <div class="col-md-10 col-sm-6 col-xs-12" align="center">
    	<div class="content-part-1-right">
        	<img src={Image} class="img-responsive" alt="Restaurant"/>
        </div>
    </div>
    
</div>
            <br/>
{/* Produtos */}

<Categorias type="Pizzas"/>
<Categorias type="Hotdogs"/>



        
</div>
    )
}