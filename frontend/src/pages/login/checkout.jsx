import React, { Component } from 'react';

import Header from '../../components/header'


import Mercadopago from 'mercadopago'

class Mensalidade extends Component {

  

   
    
  

  



  constructor(props){
    super(props);

    this.setPaymentMethodInfo = this.setPaymentMethodInfo.bind(this);
    this.guessingPaymentMethod = this.guessingPaymentMethod.bind(this);
    this.sdkResponseHandler = this.sdkResponseHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
      submit: false,
      id: this.props.id,
      plano: 0
    };
  }

  /**
   * Set credentials and call initial methods
   */


  componentDidMount() {

    window.Mercadopago.setPublishableKey('APP_USR-97d40b6d-ed21-4473-a888-266870cd79af');
    window.Mercadopago.getIdentificationTypes();
    

  }

  /**
   * This method is executed when credit card input has more than 6 characters
   * Then calls getPaymentMethod function of the MercadoPago SDK
   *
   * @param {Object} event HTML event
   */
  guessingPaymentMethod(event) {
    const bin = event.currentTarget.value;

    if (bin.length >= 6) {
      window.Mercadopago.getPaymentMethod({
        "bin": bin.substring(0, 6),
      }, this.setPaymentMethodInfo);
    }
  }

  /**
   * This method is going to be the callback one from getPaymentMethod of the MercadoPago Javascript SDK
   * Is going to be creating a hidden input with the paymentMethodId obtain from the SDK
   *
   * @param {Number} status HTTP status code
   * @param {Object} response API Call response
   */
  setPaymentMethodInfo(status, response) {
    if (status === 200) {
      const paymentMethodElement = document.querySelector('input[name=paymentMethodId]');

      if (paymentMethodElement) {
        paymentMethodElement.value = response[0].id;
      } else {
        const form = document.querySelector('#pay');
        const input = document.createElement('input');

        input.setattribute('name', 'paymentMethodId');
        input.setAttribute('type', 'hidden');
        input.setAttribute('value', response[0].id);

        form.appendChild(input);
      }
    } else {
      alert(`Payment Method not Found`);
    }
  };

  /**
   * This method is going to be called when the form is submited
   * Is going to create the card token using the MercadoPago SDK
   *
   * @param {object} event React event
   */
  onSubmit(event) {
    event.preventDefault();

    if (!this.state.submit) {
      const form = document.getElementsByTagName('form')[0];
      window.Mercadopago.createToken(form, this.sdkResponseHandler);
    }
  }

  /**
   * This method is going to handle the createToken call made by the SDK
   * If it is successful is going to add a hidden input with the card token value
   *
   * @param {Number} status HTTP status code
   * @param {Object} response The response from SDK
   */
  sdkResponseHandler(status, response) {
    if (status !== 200 && status !== 201) {
      alert("verify filled data" +status);
      console.log(response)
      this.setState({
        submit: false,
      });
    } else {
      this.setState({
        submit: true,
      });

      const form = document.querySelector('#pay');
      const card = document.createElement('input');

      card.setAttribute('name', 'token');
      card.setAttribute('type', 'hidden');
      card.setAttribute('value', response.id);

      form.appendChild(card);
      form.submit();
    }
  };

  render() {
    return (
      <div className="App">
        <Header/>
        <h1 style={{color: 'black'}}>Checkout</h1>
        <form action="http://localhost:5000/pay" method="post" id="pay" name="pay" onSubmit={this.onSubmit}>
          <ul>
          <select    id="plano"
                  name="plano" class="form-control form-control-lg" value={this.state.plano} onChange={(e) => this.setState({plano: e.target.value})}>
                  <option value={'plano1'}>Plano Trimestral</option>
                  <option value={'plano2'}>Plano Semestral</option>
                  <option value={'plano3'}>Plano Anual</option>
                  </select>
          </ul>
          {console.log(this.state.plano)}
          <fieldset>
            
            <ul>
            <li>
                <label >
                  ID Restaurante
                </label>
                <input
                  
                  name="id"
                  
                  value={this.state.id}
                  type="number"
                  placeholder="sua ID"
                />
              </li>
              <li>
                <label htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                
                  type="email"
                  placeholder="your email"
                />
              </li>
              <li>
                <label htmlFor="cardNumber">
                  Número do Cartão:
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  data-checkout="cardNumber"
                 
                  onChange={this.guessingPaymentMethod}
                  maxLength={16}
                />
              </li>
              <li>
                <label htmlFor="securityCode">
                  Código de segurança:
                </label>
                <input
                  type="text"
                  id="securityCode"
                  data-checkout="securityCode"
              
                  autoComplete="off"
                />
              </li>
              <li>
                <label htmlFor="cardExpirationMonth">
                  Mês de expiração:
                </label>
                <input
                  type="text"
                  id="cardExpirationMonth"
                  data-checkout="cardExpirationMonth"
          
                  autoComplete="off" />
              </li>
              <li>
                <label htmlFor="cardExpirationYear">
                  Ano Expiração:
                </label>
                <input
                  type="text"
                  id="cardExpirationYear"
                  data-checkout="cardExpirationYear"
                  placeholder="29"
                  autoComplete="off"
                />
              </li>
              <li>
                <label
                  htmlFor="cardholderName">
                  Nome do Titúlar do Cartão:
                </label>
                <input
                  type="text"
                  id="cardholderName"
                  data-checkout="cardholderName"
                  placeholder="APRO"
                />
              </li>
              <li>
                <label htmlFor="docType">
                  Tipo de documento:
                </label>
                <select id="docType" data-checkout="docType"></select>
              </li>
              <li>
                <label htmlFor="docNumber">Número do documento:</label>
                <input
                  type="text"
                  id="docNumber"
                  data-checkout="docNumber"
                
                />
              </li>
            </ul>
            <input
              type="hidden"
              name="paymentMethodId"
            />
           <a href="/dashboard"> <input type="submit" value="Realizar o pagamento" /></a>
          </fieldset>
        </form>
      </div>
    )

  };
 
}

export default Mensalidade;