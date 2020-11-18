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
                    <h4>Uma solução Completa para seu negocio</h4>
                    <p>Se você está procurando um sistema fácil e totalmente inovador
para o seu negócio. A Facilita é a escolha certa para bares,
restaurantes, lanchonetes, pizzarias, Pet Shop, Lojas em geral.
Você poderá usar nosso sistema em qualquer seguimento que
trabalhe com produtos físicos.
No ramo alimentício você poderá criar comandas das mesas com
QrCode, e seus clientes poderão fazer os pedidos sozinhos, dessa
forma reduzindo a quantidade de funcionários.
</p>
                </div>
        <div className="imagem">
            <img src={ImgPng} />
        </div>
            </div>



<br/>
<div className="terceiraparte">
                <h2>INOVE</h2>
                <p>Tenha total controles dos pedidos que estão sendo recebidos
no painel de controle no celular ou desktop, e o fluxo de caixa.<br/> Atenda vários clientes ao mesmo tempo, não precisa ficar
enviado cardápio, promoções disponíveis ou perguntar todas
as informações para finalizar o pedido, seu cliente enviará tudo
de uma só vez preenchido e diretamente em seu WhatsApp.</p>
    
            </div>
            
<div className="quartaparte">
            <Lottie id="lottieF"/>
            <p>
            Atenda vários clientes ao mesmo tempo, não precisa ficar
enviado cardápio, promoções disponíveis ou perguntar todas
as informações para finalizar o pedido, seu cliente enviará tudo
de uma só vez preenchido e diretamente em seu WhatsApp.
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