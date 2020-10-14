import React,{Children, useState, useEffect} from 'react';
import LogoFake from '../../image/restaurante.jpg'
import './cardapio.css';
import date from './data'
import axios from 'axios'
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


import Produto from './produtos'
import data from './data';




export default (props)=>{


    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

const [showProducts, setShowProducts] = useState([])


    const [dados, setDados]=useState([])


    // const []
    useEffect(() => {
        axios.get('http://localhost:5000/api/produto/find/'+ props.match.params.url)
            .then(res => {
                console.log(res.data);
                setShowProducts(res.data);
                setLoad(true);
            })
            .catch(err => {
                setError(err.message);
                setLoad(true)
            })
    }, []);
console.log(showProducts)
    useEffect(() => {
      axios.get('http://localhost:5000/api/restaurante/find/'+ props.match.params.url)
          .then(res => {
              console.log(res.data);
              setDados(res.data);
              setLoad(true);
          })
          .catch(err => {
              setError(err.message);
              setLoad(true)
          })
  }, []);


console.log(dados[0])





console.log(dados.map(it=>it.nome))


























    var d = new Date();
    var now = d.getHours() + "." + d.getMinutes();
//Ao conectar com o db essa funcao verificara se o restaurante esta aberto ou nao
    function abertoFechado(){
        if(now <= dados.fechamen  && now >= dados.abertura ){
            return(
            <a className="Aberto btn">Aberto</a>
            )
        
        }else {
            return(
                <a className="Fechado btn"><strong>Fechado</strong></a>
            )

        }}


        var {carrinho, setCarrinho} = useProdutos()
        var [carrinhotxt, useCarrinhotxt] = useState([])
        var preco1 =0;
        var pago = carrinho.map((aos)=>{
            preco1= preco1+ parseFloat(aos.preco)
          return(
              <li class="list-group-item d-flex justify-content-between align-items-center" key={`${aos.nome}_{aos.preco}`}>
              {aos.nome} {aos.opcionais.map((o)=>{
               
               preco1= preco1+ parseFloat(o.preco)
             return(<div  key={`${o.name}_{o.preco}`}>{o.name} R$ {o.preco} +</div>)
             })}
            <span class=" ">R$ {aos.preco}</span></li>
            )
          })

        

var zaponga = carrinho.map((zap)=>{
  return('https://api.whatsapp.com/send?phone=' +
  dados.map((i2)=>i2.telefone) +'&text='+carrinho)
})
console.log(carrinho)
var [markOpc, setMarkOpc] = useState([])
  const opc = showProducts.opcionais;
  const clic = props.click
console.log(markOpc)
        const lis = showProducts.map((date)=>{
          return(
            //Concertando codigos, tem de colocar a imagem no objeto
            <Produto title={date.nome} preco={date.preco} codigo={date._id} opcionais={date.opcionais} opc={opc} clic={clic} markOpc={markOpc} setMarkOpc={setMarkOpc} selOpcionais={Children.MarcOpcionais} click={(opcionais)=>{
              setCarrinho([...carrinho, {nome: date.nome,preco: date.preco,codigo: date._id,opcionais: markOpc}]); setMarkOpc([]);
             
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







      var [Check, setCheck] = useState({})
      var handleChange1=(event)=> {
      
        setCheck(event.target.value )
      }


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
    <ProdutosProvider>
        <div>
            <div className="Headercardapio">
            <img className="LogoCardapio" src={LogoFake}/>
            
            {abertoFechado()}
            
            </div>
            {valeAlimentacao()}
            <div class=" descricaorestaurante">
{/* descrição do lugar */}
    
    <div class="col-md-5 col-sm-6 col-xs-12">
    
   <div class="content-part-1-left-h3">{dados.map((i3)=>i3.nome)}</div>
        <div class="content-part-1-left-p">
        {dados.map((i4)=>i4.desc)}
        
        </div>
        
    </div>
    
    
</div>
            <br/>
{/* Produtos */}

{dados.map((i10)=>produtosCat(i10.categorias.map((i11)=>i11)))}
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
<h4 className="radioinput">total: R$ {preco1}</h4>
<a className="btn finalizar" href={"https://api.whatsapp.com/send?phone="+dados.map((i9)=>i9.telefone)+"&text=%20*PEDIDO%20FACILITA%20AI*%0a"+carrinho.map((elis)=>{
    return(
      //{nome: date.title,preco: date.preco,codigo: date.codigo, opcionais: markOpc}
     ` --${elis.nome} %20 ${elis.preco}%0a` +elis.opcionais.map((k)=>{return(`OPCIONAIS%20 ${k.name} %20 ${k.preco} %20`)})+`%0a${Check}`
    )})  
    }> Realizar Pedido</a>
</div></ProdutosProvider>
    )
}