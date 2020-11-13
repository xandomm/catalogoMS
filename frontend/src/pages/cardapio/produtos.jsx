import React, { Children, useState } from 'react';
import './cardapio.css';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import imageExists from 'image-exists';



import ProdutosProvider, {useProdutos} from '../../Context/productContext'

const emails = ['username@gmail.com', 'user02@gmail.com'];






export default function SimpleDialogDemo(props) {


  const [state, setState] = useState('')

  var [markOpc1, setMarkOpc1] = [props.markOpc, props.setMarkOpc]
  const opc = props.opcionais;
  const clic = props.click
  
    SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

    function SimpleDialog(props) {


        function Mark(props){
          return(<div><Button onClick={props.click}>{props.name} R${props.preco}</Button></div>)
        }
     
        
    
      
        return (
          <ProdutosProvider>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Opcionais {props.nome}</DialogTitle>
        <DialogContent>
        
        {opc.map((aos) => (
          <Mark name={aos.nomeopc} click={()=>{setMarkOpc1([...markOpc1, {name: aos.nomeopc, preco: aos.precoopc}])}} preco={aos.precoopc} />
        ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="danger">
            Cancelar
          </Button>
          <Button onClick={clic}  color="primary">
            <a onClick={handleClose}>Adicionar ao carrinho!</a>
          </Button>
        </DialogActions>
      </Dialog></ProdutosProvider>
      
        );
       
      }

  
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
 
  };



  const tryRequire = (path) => {
    try {
     return require(`${path}`);
    } catch (err) {
     return null;
    }
  };

  



return (
        <div>
 <div class="col-md-12 col-sm-12 col-xs-12 productTest">
                        <div class="row content-part-3-inner">
                            <div class="col-md-5 col-sm-5 col-xs-12" align="center">
                 {props.img == ""?  (<img src={require("./noimg.jpg")} class="img-responsive img" alt="Menu Item"/>):(<img src={require("../../../public/uploads/"+props.img+".png")}  class="img-responsive img" alt="Menu Item"/>)}
                              
                      
                            </div>
                                    <div class="col-md-7 col-sm-7 col-xs-12 productTest">
                                            <div class="content-part-3-right-h4 ">{props.title}</div>
                                            <div class="price">Preço : <i class="green"><span class="fa fa-inr"></span>{props.preco}</i></div>
                                            <p>{props.descricao}</p>
                                        <div class="margin_p3"><a class="order-now" onClick={handleClickOpen}>Pedir agora</a>
                                        <SimpleDialog  open={open} onClose={handleClose} opcionais={props.opcionais} nome={props.title} MarcOpcionais={Children.markOpc} click={props.click}/>
                           
                                        </div>
                                    </div>
                                    
                        </div>
                    </div>
                    <hr/>
        </div>
    )
}