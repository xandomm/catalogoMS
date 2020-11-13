import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
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
        axios.post('http://35.198.27.37/api/pedido', pedido1).then(window.alert("Sucesso")).catch(e=>window.alert(e));
  }
  const handleClose = () => {
    props.setOpen(false);
  };
  const onChange1 = (e)=>{
    props.setTxt(e.target.value)
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
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          {props.carrinho.map((aos)=>{
           
          return(
              <li class="list-group-item d-flex justify-content-between align-items-center" key={`${aos.nome}_{aos.preco}`}>
              {aos.nome} {aos.opcionais.map((o)=>{
               
           
             return(<div  key={`${o.name}_{o.preco}`}>{o.name} R$ {o.preco} +</div>)
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
        {console.log(props.url_backend)}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary" >
          <a onClick={Pedir} className="btn finalizar md-col-12" href={"https://api.whatsapp.com/send?phone="+props.numero+"&text=%20*PEDIDO%20FACILITA%20AI*%0a"+props.carrinho.map((elis)=>{
                  return(
                    //{nome: date.title,preco: date.preco,codigo: date.codigo, opcionais: markOpc}
                   ` --${elis.nome} %20 ${elis.preco}%0a` +elis.opcionais.map((k)=>{return(`OPCIONAIS%20 ${k.name} %20 ${k.preco} %20`)})+`%0a${props.Check}%0a${props.txt}`
                  )})  
                  }> Realizar Pedido</a>
          </Button>
        </DialogActions>
      </Dialog>
      {console.log(props.url_backend)} 
                      
    </div>)
}
export default pagarButton