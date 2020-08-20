import React from 'react';
import LogoFake from '../../image/restaurante.jpg'
import './cardapio.css';

import Food from '../../image/food.jpg'
import Image from '../../image/images.jpg'
import Image1 from '../../image/images(1).jpg'
import Image2 from '../../image/restauranted.jpg'

export default (props)=>{
    return(
        <div>
            <img className="LogoCardapio" src={LogoFake}/>
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
            <div class="">
	<div class="content-part-3">
        <div class="col-md-12 col-sm-12 col-xs-12">
        	<div class="row content-part-3-inner">
                <div class="col-md-5 col-sm-5 col-xs-12" align="center">
                    <img src={Food} class="img-responsive img" alt="Menu Item"/>
                </div>
                <div class="col-md-7 col-sm-7 col-xs-12">
                    <div class="content-part-3-right-h4">Lorem Ipsum</div>
                    <div class="price">Preço : <i class="green">55.00</i></div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    <div class="margin_p3"><a href="#!" class="order-now">Order Now</a></div>
                </div>
            </div>
        </div>
        <hr/>
        <div class="col-md-12 col-sm-12 col-xs-12">
        	<div class="row content-part-3-inner">
                <div class="col-md-5 col-sm-5 col-xs-12" align="center">
                    <img src={Food} class="img-responsive img" alt="Menu Item"/>
                </div>
                <div class="col-md-7 col-sm-7 col-xs-12">
                    <div class="content-part-3-right-h4">Lorem Ipsum</div>
                    <div class="price">Preço : <i class="green"><span class="fa fa-inr"></span>150.00</i></div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    <div class="margin_p3"><a href="#!" class="order-now">Order Now</a></div>
                </div>
            </div>
        </div>
        <hr/>
        <div class="col-md-12 col-sm-12 col-xs-12">
        	<div class="row content-part-3-inner">
                <div class="col-md-5 col-sm-5 col-xs-12" align="center">
                    <img src={Food} class="img-responsive img" alt="Menu Item"/>
                </div>
                <div class="col-md-7 col-sm-7 col-xs-12">
                    <div class="content-part-3-right-h4">Lorem Ipsum</div>
                    <div class="price">Preço : <i class="green"><span class="fa fa-inr"></span>220.00</i></div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    <div class="margin_p3"><a href="#!" class="order-now">Order Now</a></div>
                </div>
            </div>
        </div>
        <hr/>
        <div class="col-md-12 col-sm-12 col-xs-12">
        	<div class="row content-part-3-inner">
                <div class="col-md-5 col-sm-5 col-xs-12" align="center">
                    <img src={Food} class="img-responsive img" alt="Menu Item"/>
                </div>
                <div class="col-md-7 col-sm-7 col-xs-12">
                    <div class="content-part-3-right-h4">Lorem Ipsum</div>
                    <div class="price">Preço : <i class="green"><span class="fa fa-inr"></span>90.00</i></div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    <div class="margin_p3"><a href="#!" class="order-now">Order Now</a></div>
                </div>
            </div>
        </div> 
    </div>
</div>
</div>
    )
}