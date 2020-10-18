import React,{useState} from 'react';
import LogoFake from '../../image/capitol.jpg'
import './caradapioNoturno.css';
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

import ProdutosProvider, {useProdutos} from '../../Context/productContext'


import Produto2 from './produtos2'




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


        var {carrinho, setCarrinho} = useProdutos()
        
        var preco1= 0;
        var pago = carrinho.map((aos)=>{
          preco1= preco1+ parseFloat(aos.preco)
          return(
              <li class="list-group-item d-flex justify-content-between align-items-center" key={`${aos.nome}_{aos.preco}_{aos.opcionais[]}`}>
              {aos.nome} + {aos.opcionais.map((o)=>{
               
                preco1= preco1+ parseFloat(o.preco)
              return(<div  key={`${o.name}_{o.preco}`}>{o.name} R$ {o.preco} +</div>)
              })}
            <span class=" ">R$ {aos.preco}</span></li>
            ); 
          })

        
          console.log(carrinho)
          var [markOpc, setMarkOpc] = useState([])
            const opc = props.opcionais;
            const clic = props.click
          
                  const lis = date.map((date)=>{
                    return(
                      //Concertando codigos, tem de colocar a imagem no objeto
                      <Produto2 className="noturno" title={date.title} preco={date.preco} codigo={date.codigo} opcionais={date.opcionais} opc={opc} clic={clic} markOpc={markOpc} setMarkOpc={setMarkOpc}  click={(opcionais)=>{
                        setCarrinho([...carrinho, {nome: date.title,preco: date.preco,codigo: date.codigo, opcionais: markOpc}]); setMarkOpc([]);
                       
                      }}/>
                    );
                  })
        ///aqui estao os produtos!
    function produtosCat(props){
        return(  <div className={classes.root1}>
            <Accordion id="bg-marrom2">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header bg-branco"
              >
                <Typography className={classes.heading}>{props}</Typography>
              </AccordionSummary>
              <AccordionDetails>
               
              
                  <div class="">
                      <div class="content-part-3">
                         
                          <hr/>
                     
{lis}
                          </div>
                  </div>
      
      
      
              </AccordionDetails>
            </Accordion>
            <br/> <br/>
          </div>)
    }
     
    const useStyles2 = makeStyles((theme) => ({
        root1: {
          width: '100%',
          color: '#F2E6B3',
          background: '#383B40'
        },
        heading: {
          fontSize: theme.typography.pxToRem(15),
          fontWeight: theme.typography.fontWeightRegular,
        },
      }));
      const classes = useStyles2();      










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
                <div class="alert alerta alert-success" role="alert">
  Seja bem vindo!
</div>
            )
        }
    }

//link zap
// var WhatsApp = dateStore.map((zap)=>{
//   return(
//    <a className="btn finalizar"   href={"https://api.whatsapp.com/send?phone=55998269655&text=%20*PEDIDO%20FACILITA%20AI*%0a"+carrinho.map((elis)=>{
//     return(
//       //{nome: date.title,preco: date.preco,codigo: date.codigo, opcionais: markOpc}
//      ` ${elis.nome} %20 ${elis.preco}%0a` +elis.opcionais.map((k)=>{return(`OPCIONAIS%20 ${k.name} %20 ${k.preco}`)})+``
//     )})  
//     }>Realizar Pedido</a>
   
//   )
// });
var [Check, setCheck] = useState({})
var handleChange1=(event)=> {

  setCheck(event.target.value )
}

console.log(Check)
   return(
        <div className="cardapio2">
            <div className="Headercardapio">
            <img className="LogoCardapio" src={LogoFake}/>
            
            {abertoFechado()}
            
            </div>
            {valeAlimentacao()}
            <div class=" descricaorestaurante2">
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
{produtosCat('hotdogs')}




<form>
<div className="radioinput">
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="Retirar no local" checked={Check==="Retirar no local"} onClick={handleChange1} name="local"/>
  <label class="form-check-label" for="inlineCheckbox1">Retirar no local</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Entregar" checked={Check=== "Entregar"} onClick={handleChange1} name="local1"/>
  <label class="form-check-label" for="inlineCheckbox2">Entregar</label>
</div>
<div class="form-check form-check-inline">
 
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Comer no local" checked={Check=="Comer no local"} onClick={handleChange1} name="local2"/>
  <label class="form-check-label" for="inlineCheckbox2">Comer no local</label>
</div>


</div>
</form>
<br/>
<br/>


{pago}
   <h4 className="radioinput">total: R$ {preco1}</h4>



   <a className="btn finalizar"   href={"https://api.whatsapp.com/send?phone=55998269655&text=%20*PEDIDO%20FACILITA%20AI*%0a"+carrinho.map((elis)=>{
    return(
      //{nome: date.title,preco: date.preco,codigo: date.codigo, opcionais: markOpc}
     ` --${elis.nome} %20 ${elis.preco}%0a` +elis.opcionais.map((k)=>{return(`OPCIONAIS%20 ${k.name} %20 ${k.preco} %20`)})+`%0a${Check}`
    )})  
    }>Realizar Pedido</a>
</div>
    )
}