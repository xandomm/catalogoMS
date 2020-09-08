import React,{useState} from 'react';
import LogoFake from '../../image/restaurante.jpg'
import './cardapio.css';
import date from './data'

import Categorias from './Categorias';

import Food from '../../image/food.jpg'
import Image from '../../image/images.jpg'
import Image1 from '../../image/images(1).jpg'
import Image2 from '../../image/restauranted.jpg'

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';




import Produto from './produtos'




export default (props)=>{
    const abertura = 12.00;
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


        var [carrinho, useCarrinho] = useState([])
        var [carrinhotxt, useCarrinhotxt] = useState([])

        var pago = carrinho.map((elistop)=>{
     
          return(
              <li class="list-group-item d-flex justify-content-between align-items-center" key={elistop}>
              {elistop[0]}
            <span class=" ">R$ {elistop[1]}</span></li>
            )
          })

        

var zaponga = carrinho.map((zap)=>{
  return('https://api.whatsapp.com/send?phone=5534998269655&text='+carrinho)
})
console.log(zaponga)


        const lis = date.map((date)=>{
          return(
            //Concertando codigos, tem de colocar a imagem no objeto
            <Produto title={date.title} preco={date.preco} codigo={date.codigo}  click={()=>{
              useCarrinho([...carrinho, [date.title, date.preco, date.codigo]]);
             
            }}/>
          );
        })


        ///aqui estao os produtos!
    function produtosCat(props){
        return(  <div className={classes.root}>
            <Accordion id="bg-marrom">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header bg-branco"
              >
                <Typography className={classes.heading}>{props}</Typography>
              </AccordionSummary>
              <AccordionDetails>
               
              
                  <div class="">
                      <div class="content-part-3 ">
                         
                          <hr/>
                     
{lis}
                          </div>
                  </div>
      
      
      
              </AccordionDetails>
            </Accordion>
            
          </div>)
    }
     
    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
          color: '#8C5954'
        },
        heading: {
          fontSize: theme.typography.pxToRem(15),
          fontWeight: theme.typography.fontWeightRegular,
        },
      }));
      const classes = useStyles();      










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

{produtosCat('pizzas')}
{produtosCat('hotdog')}
<div className="radioinput1">
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label" for="inlineCheckbox1">Retirar no local</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">Entregar</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">Comer no local</label>
</div>


</div>
<br/>
<br/>
{/* <a href={'https://api.whatsapp.com/send?phone=5534998269655&text='+pago}> FACA O PEDIDO</a> */}

{pago}
<br/>
<a className="btn finalizar"> Realizar Pedido</a>
</div>
    )
}