import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
var backendURL = process.env.REACT_APP_API_URL
 function pagarButton(props) {
  var txt;
  
  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const Pedir=()=>{
    var pedido1={
      pedido: props.carrinho,
      cardapio: props.cardapio,
      check: props.Check,
      Total: props.preco
    }
    
    const pedido2 = JSON.stringify(pedido1)
    console.log(pedido1.cardapio)
        axios.post(backendURL+'/api/pedido', pedido1).then(window.alert("Sucesso")).catch(e=>window.alert(e));
  }
  const handleClose = () => {
    props.setOpen(false);
  };
  const onChange1 = (e)=>{
    props.setTxt(e.target.value)
  }
  const onChange2 = (e)=>{
    props.setEnd(e.target.value)
  }
  return (<div>
     <a className="btn finalizar md-col-12"  onClick={handleClickOpen}>
        Realizar pedido
      </a>
        <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Realizar pedido?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          {props.carrinho.map((aos)=>{
           
          return(
              <li class="list-group-item d-flex justify-content-between align-items-center" key={`${aos.nome}_{aos.preco}`}>
              {aos.nome} {aos.opcionais.map((o)=>{
               
           
             return(<div  key={`${o.name}_{o.preco}`}>{o.name} R$o {o.preco} +</div>)
             })}
            <span class=" ">R$ {aos.preco}</span></li>
            )
          })}
          <br/>
          <TextField
          id="filled-multiline-static"
          label="Observações"
          multiline
          rows={4}
          defaultValue="Sem Observações"
          variant="filled"
          value={props.txt}
          onChange={onChange1}
        />
         <TextField
          id="filled-multiline-static"
          label="Endereço"
          multiline
          rows={4}
          defaultValue="Sem Observações"
          variant="filled"
          value={props.end}
          onChange={onChange2}
        />
        {console.log(props.url_backend)}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          {console.log}
          <Button onClick={handleClose} color="primary" >
          <a onClick={Pedir} className="btn finalizar md-col-12" href={'https://api.whatsapp.com/send?phone='+props.numero+'&text=%20*PEDIDO%20FACILITA%20AI*%0a'+props.carrinho.map((el)=>{
                  return(
                    //{nome: date.title,preco: date.preco,codigo: date.codigo, opcionais: markOpc}
            ' --'+el.nome+' %20 '+el.preco+'%0a' +el.opcionais.map((k)=>'OPCIONAIS%20 '+k.name+' %20 R$'+k.preco+' %20')+'%0a'+props.Check+'%0a'+props.txt+'%0a'
                  )})+'%0a'+props.end +'%0a' }> Realizar Pedido</a>
          </Button>
        </DialogActions>
      </Dialog>
      {console.log(props.carrinho)} 
                      
    </div>)
}
export default pagarButton