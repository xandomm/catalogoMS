import React, { useState, useEffect } from 'react';
import ProdutoComponent from "./ProdutoComponent"
import { Button } from '@material-ui/core';
import {Table} from 'reactstrap'
import Header from '../../../components/header'
var cat={};
var backendURL= process.env.REACT_APP_API_URL
class cadastroDeProdutos extends React.Component {
    // const [value, setValue] = React.useState('cadastro');

    

  

  constructor(props){
    super(props)

    this.state={
        id: '',
        cardapio: '',
        ProdutoData: []
    }
  }


componentDidMount(){
  fetch(backendURL+'/api/restaurante/'+this.props.id).then(
    res=>{
      if (res.status===404) {
        this.catalogo({
          isUpdate: false
        })
      }
      else{
        res.json().then(
        dados => {
          console.log(dados)
          this.setState({
          
          cardapio: dados.url,

          isUpdate: true
        })}
        )
      }
    }
  )

  fetch(backendURL+'/api/restaurante/'+this.props.id).then(
    res=>{
      if (res.status===404) {
        this.catalogo({
          isUpdate: false
        })
      }
      else{
        res.json().then(
        dados => {
          this.setState({
          _id: dados._id,
          cardapio: dados.url,
            
        })
        fetch(backendURL+"/api/produto/find/"+dados.url).then(
        produtos => produtos.json()
        )
    .then(data => {
        this.setState({
            ProdutoData: data,
            isLoading: false
        })
    })
    .catch(err => console.log(err))  
        }
        )
      }
    }
  )

}

render(){

  
  const produtoComponents = (this.state.ProdutoData && this.state.ProdutoData.length) ? this.state.ProdutoData.map(produto => <ProdutoComponent  key = {produto._id} nome={produto.nome} id = {produto._id} valor= {produto.preco} />) : <h2 style={{textAlign:"center"}}>A lista de produtos está vazia</h2>;
  const loading = this.state.isLoading ? <h5>Carregando...</h5> : produtoComponents 
      return(
          <div>
            <Header/>
          <div className="container">
          <h1 style={{color:"black"}}>Produtos</h1>
          <Table>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Nome</th>
                      <th>Valor</th>
                      <th>Deletar?</th>
                  </tr>
              </thead>
              <tbody>
                  {loading}
              </tbody>
          </Table>
      
      </div></div>
    )
 
}

}
export default cadastroDeProdutos