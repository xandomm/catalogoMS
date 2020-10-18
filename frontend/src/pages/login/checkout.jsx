import React from 'react'
import Header from '../../components/header'


class Checkout extends React.Component {
    constructor() {
      super()
      this.state = {
        name: 'xxxxx xxx',
        number: '0000000000000000',
        month: 'xx',
        day: 'xx',
        ccv: 'CCV'
      }
    }
     
    //Name of Card Owner
    nameChange(n) {
      this.setState({
        name: n.target.value
      });
    }
    //Card Number
    numberChange(c) {
      this.setState({
        number: c.target.value
      });
    }
    //Expiration
    monthChange(m) {
      this.setState({
       month: m.target.value
      });
    }
    dayChange(d) {
      this.setState({
       day: d.target.value
      });
    }
    //CCV 
    ccvChange(v) {
      this.setState({
       ccv: v.target.value
      });
    }
    
    
    render() {
      return (
        <div>
        <Header/>

<div>
<div className="" style={{backgroundColor:"#f3f3f3", color: "black"}} >
  
 
    <h3 class="card-header info-color white-text text-center py-4" style={{color: "#f2f2f2", backgroundColor: "#0D2840", fontFamily: "'Anton', sans-serif", letterSpacing: "2pt"}}>Finalizar compra</h3>
   <br/>
   <h3 className="container">Preço: R$ 50 por mês</h3>
   <div className="radioinput1">
</div>
    <form className="container">
    <div class="form-row">
<div class="form-group col-md-6">

<label for="inputEmail4"><h5>Nome no Cartão</h5></label>
<input type="name" class="form-control" id="inputEmail4"/>
</div>
<div class="form-group col-md-6">

<label for="inputEmail4"><h5>Vencimento no cartão</h5></label>
<input type="date" class="form-control" id="inputEmail4"/>
</div>
<div class="form-group col-md-6">
<label for="inputEmail4"><h5>Número do cartão</h5></label>
<input  type="tel" class="form-control"  maxlength="19" placeholder="xxxx xxxx xxxx xxxx"/>
</div>
<div class="form-group col-md-6">
<label for="inputEmail4"><h5>CVV</h5></label>
<input type="number" class="form-control" id="inputEmail4"/>
</div>
<div class="form-group">
<input type="checkbox"  id="inputEmail4"/>
<label for="inputEmail4"><p>Realizar o pagamento automático</p></label>

</div>
<div className="radioinput1">



<div class="form-check form-check-inline">
<a href="/cadastroDeProdutos" class="btn btn-primary">Finalizar compra</a>
</div>
</div>
</div></form><br/>
</div>
</div>
</div>
    // <div className="container">
//   <div className="row card">
//     <div className="small-5 small-offset-1 columns ">
//       <div className="callout credit">
//         <div className="row">
//           <div className="small-6 columns">
//             <h1 className="credit__bank">My Bank</h1>
//           </div>
          
//         </div>
//         <div className="row">
//           <div className="column">
//             <p className="credit__card-number">{this.state.number}</p>
//             <span className="credit__ccv">{this.state.ccv}</span>
//           </div>
//           <div className="small-9 columns">
//             <label>Card Holder
//               <p className="credit__name">{this.state.name}</p>
//             </label>
//           </div>
//           <div className="small-3 columns">
//             <label> &nbsp;&nbsp;&nbsp;&nbsp;Expires
//               <p className="credit__date">{this.state.month} / {this.state.day}</p>
//             </label>
//           </div>
//         </div>
  
//       </div>
//     </div>
//     <div className="small-5 columns end">
//       <div className="callout margin-top50">
//         <label>NAME
//           <input type="text" onChange={this.nameChange.bind(this)}/>
//         </label>
//         <label>NUMBER
//           <input type="text" maxLength="16" onChange={this.numberChange.bind(this)}/>
//         </label>
//         <div className="row">
//           <label className="column">EXPIRATION DATE</label>
//           <div className="small-4 columns">
//             <input type="text" maxLength="2" onChange={this.monthChange.bind(this)} />
//           </div>
//           <div className="small-4 columns end">
//             <input type="text" maxLength="2" onChange={this.dayChange.bind(this)}/>
//           </div>
//         </div>
//         <div className="row">
//           <div className="small-4 column">
//             <label>CCV
//               <input type="text" maxLength="3" onChange={this.ccvChange.bind(this)} />
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//         </div>
)
    }
  }
  export default Checkout