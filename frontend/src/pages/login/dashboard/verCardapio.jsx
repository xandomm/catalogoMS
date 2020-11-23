import React from "react";
import Header from "../../../components/header";


import QRCode from 'qrcode.react'
// clietid e appid

///https://auth.mercadopago.com.br/authorization?3110758028081820=AlexandreMKT&response_type=code&platform_id=mp&redirect_uri=https://www.lojasfacil.com
const backendURL = process.env.REACT_APP_API_URL
class dashboard extends React.Component {

  

    componentDidMount(){
        fetch(backendURL+'/api/restaurante/'+this.props.id).then(
          res=>{
            if (res.status===404) {
              this.setState({
                isUpdate: false
              })
            }
            else{
              res.json().then(
              dados => {
                console.log(dados)
                this.setState({
                _id:this.props.id,
                isLoading: false,
                nome:dados.nome,
                desc:dados.desc,
                endereco:dados.endereco,
                CEP:dados.CEP,
                abertura: dados.abertura,
                fechamen: dados.fechamen,
                telefone:dados.telefone,
                url: dados.url,
                cidade:dados.cidade,
                token:dados.token,
                frete: dados.frete,
                estado:dados.estado,
                valeRefeicao: dados.valeRefeicao,
                isUpdate: true
              })}
              )
            }
          }
        )
      }
    


      constructor(props){
        super(props)
        this.state={
          _id:"",
          isLoading: true,
          nome:"",
          desc:"",
          endereco:"",
          CEP:null,
          telefone:null,
          cidade:"",
          frete:"",
          estado:"",
          token: "",
          valeRefeicao: null,
          url:"",
          isUpdate: true
        }
  


    }




  render() {
    return (
      <div>
        <Header />
        <div className="card">
          <h2 style={{ color: "black" }}>Acesse seu site clickando aqui</h2>
          <a href={"/d/"+this.state.url} className="btn btn-info">Aperte aqui para o cardapio claro</a>
          
          <br/>
          <div className="center md-col-8"> 
          <QRCode value={backendURL+"/n/"+this.state.url} />
          </div>
          <a href={"/n/"+this.state.url} className="btn"style={{ color: "white", backgroundColor:"black" }}>Aperte aqui para o cardapio escuro</a>
       
          <br/>
          <div className="center md-col-8"> 
          <QRCode value={"https://www.lojasfacil.com/t/"+this.state.url} />
          </div>
        </div>
      </div>
    );
  }
}

export default dashboard;