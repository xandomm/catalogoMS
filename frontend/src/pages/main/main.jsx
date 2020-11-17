import React from 'react';
import Header from '../../components/header'
import './main.css'
import Lottie from './lottie'
import ImgPng from '../../image/imagepng.png'
// paleta de cores:
//azul
// #010326
// #0D2840
//laranja
// #D96704
// #F28322
// #F2F2F2
const  REACT_APP_API_URL  = process.env.REACT_APP_API_URL
export default (props)=>{
    return(
        <div className="main">
            <Header/>
            <br/>
            
            
            
            
            
            <div className="Primeiraparte">
                <br/>
                <div className="escritas">
                    <h4>Facilite sua vida, impulsione seu negócio</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla eget nisl sit amet interdum. Quisque ipsum nulla, rutrum non maximus sit amet, suscipit a eros. Vestibulum pretium neque vel velit congue aliquet. Donec convallis pulvinar mi commodo consequat. Fusce imperdiet facilisis imperdiet. Curabitur commodo eleifend tempor. Fusce fringilla turpis mauris, sed fermentum dui tristique pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
                </div>
        <div className="imagem">
            <img src={ImgPng} />
        </div>
            </div>



<br/>
<div className="terceiraparte">
                <h2>INOVE</h2>
                <p>Assim como você seus clientes procuram {console.log(process.env.REACT_APP_API_URL)} conforto e tecnologia, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla eget nisl sit amet interdum. Quisque ipsum nulla, rutrum non maximus sit amet, suscipit a eros. </p>
    <p>{process.env.API_URL} trrrr</p>
            </div>
            
<div className="quartaparte">
            <Lottie/>
            <p>
                Venha participar do avanço tecnológico, a facilita está trabalhando também com sistemas de delivery e planejando um futuro melhor para seu negócio!  
            </p>
</div>

            <div className="segundaparte">
            <ul class="list-unstyled "  data-aos="fade-left" >
            
            <a ><li class="media"  >
              
              <div class="card-body card container sobreprecos"  data-aos="fade-zoom-in">
              <strong><p>Por apenas</p></strong>
                <h2 class="mt-0 mb-1">R$9,90</h2>
                <strong><p>Mensal</p></strong><p>Você constrói seu cardápio virtual por R$9,90 mensal, e depois só paga pelos pedidos que foram feitos <strong>UTILIZANDO A PLATAFORMA!</strong></p>
                <a href="/login" class="btn btn-primary" >Quero começar agora!</a>
              </div>
                
            </li></a>
          
            <br/>  <br/>
          </ul>
            </div>

        </div>
    )
}