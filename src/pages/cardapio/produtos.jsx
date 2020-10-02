import React from 'react';

import Food from '../../image/food.jpg'
import './cardapio.css';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

import { blue } from '@material-ui/core/colors';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));





export default function SimpleDialogDemo(props) {
    SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
    function SimpleDialog(props) {
        const classes = useStyles();
        const { onClose, selectedValue, open } = props;
      
        const handleClose = () => {
          onClose(selectedValue);
        };
      
        const handleListItemClick = (value) => {
          onClose(value);
        };
      
        return (
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Opcionais</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Escreva aqui a maneira qual deseja seu pedido!
          </DialogContentText>
              
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="danger">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Adicionar ao carrinho!
          </Button>
        </DialogActions>
      </Dialog>
      
        );
      }
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    
      const { gilad, jason, antoine } = state;
      
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
return (
        <div>
 <div class="col-md-12 col-sm-12 col-xs-12 productTest">
                        <div class="row content-part-3-inner">
                            <div class="col-md-5 col-sm-5 col-xs-12" align="center">
                                <img src={Food} class="img-responsive img" alt="Menu Item"/>
                            </div>
                                    <div class="col-md-7 col-sm-7 col-xs-12 productTest">
                                            <div class="content-part-3-right-h4 ">{props.title}</div>
                                            <div class="price">Preço : <i class="green"><span class="fa fa-inr"></span>{props.preco}</i></div>
                                            <p>{props.descricao}</p>
                                        <div class="margin_p3"><a href="#!" class="order-now" onClick={handleClickOpen}>Pedir agora</a>
                                        <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
                                        </div>
                                    </div>
                                                {/* <div class="col-md-5 col-sm-5 col-xs-12" align="center">
                                <img src={Food} class="img-responsive img" alt="Menu Item"/>
                            </div>
                            <div class="col-md-7 col-sm-7 col-xs-12">
                                <div class="content-part-3-right-h4">{props.title}</div>
                                <div class="price">Preço : <i class="green">R${props.preco}</i></div>
                                {props.descricao}
                                <div class="margin_p3"><a href="#!" class="order-now" onClick={props.click}>Pedir agora</a></div>
                            </div> */}
                        </div>
                    </div>
                    <hr/>
        </div>
    )
}