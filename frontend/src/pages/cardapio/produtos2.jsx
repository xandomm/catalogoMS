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




var backendURL =process.env.REACT_APP_API_URL

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

  
//   let loadImage = function(variable){
//     var image = new Image();
//     var url_image = "../../../public/uploads/"+props.img+".png";
//     image.src = url_image;
//     if (image.width == 0) {
//        return <img src={require("../../../public/uploads/"+props.img+".png")} class="img-responsive img" alt="Menu Item"/>;
//     } else {
//        return <img src={require("./noimg.jpg")} class="img-responsive img" alt="Menu Item"/>;
//     }
//  }

//  const src1 = "../../../public/uploads/"+props.img+".png"

// function imageexists(){
//   try{
//     const src1 = "../../../public/uploads/"+props.img+".png"
//     return  <img src={require("../../../public/uploads/"+props.img+".png")} onError={(e)=>(this.src={require('')})} class="img-responsive img" alt="Menu Item"/>
// }
// catch(err){
//     //Do whatever you want when the image failed to load here
//     const src1 = "./noimg.jpg"
//     return   ()=> <img src={require("./noimg.jpg")} class="img-responsive img" alt="Menu Item"/>
// }

// };




return (
        <div>
 <div class="col-md-12 col-sm-12 col-xs-12 noturno">
                        <div class="row content-part-3-inner  productTest noturno">
                            <div class="col-md-5 col-sm-5 col-xs-12" align="center">
                 {props.img == ""?  (<img src={require("./noimg.jpg")} class="img-responsive img" alt="Menu Item"/>):(<img src={`${backendURL}/static/${props.img}.png`}  class="img-responsive img"/>)}
                              
                      
                            </div>
                                    <div class="col-md-7 col-sm-7 col-xs-12  productTest noturno">
                                            <div class="content-part-3-right-h4 noturno">{props.title}</div>
                                            <div class="price noturno">Preço : <i class="preconum"><span class="fa fa-inr"></span>{props.preco}</i></div>
                                                  <p>{props.descricao} <br/>Codigo: {props.codigo}</p>
                                        <div class="margin_p3"><a class="order-now" onClick={handleClickOpen}>Pedir agora</a>
                                        <SimpleDialog  open={open} onClose={handleClose} opcionais={props.opcionais} nome={props.title} MarcOpcionais={Children.markOpc} click={props.click}/>
                           
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


































// import React, { Children } from 'react';

// import Food from '../../image/food.jpg'
// import './cardapio.css';

// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

// import DialogTitle from '@material-ui/core/DialogTitle';
// import Dialog from '@material-ui/core/Dialog';

// import { blue } from '@material-ui/core/colors';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import TextField from '@material-ui/core/TextField';
// import { useState } from 'react';



// import ProdutosProvider, {useProdutos} from '../../Context/productContext'

// const emails = ['username@gmail.com', 'user02@gmail.com'];






// export default function SimpleDialogDemo(props) {




//   var [markOpc1, setMarkOpc1] = [props.markOpc, props.setMarkOpc]
//   const opc = props.opcionais;
//   const clic = props.click
  
//     SimpleDialog.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   selectedValue: PropTypes.string.isRequired,
// };

//     function SimpleDialog(props) {


//         function Mark(props){
//           return(<div><Button onClick={props.click}>{props.name} R${props.preco}</Button></div>)
//         }
     
        
    
      
//         return (
//           <ProdutosProvider>
//             <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
//         <DialogTitle id="form-dialog-title">Opcionais {props.nome}</DialogTitle>
//         <DialogContent>
        
//         {opc.map((aos) => (
//           <Mark name={aos.name} click={()=>{setMarkOpc1([...markOpc1, {name: aos.name, preco: aos.preco}])}} preco={aos.preco} />
//         ))}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="danger">
//             Cancelar
//           </Button>
//           <Button onClick={clic}  color="primary">
//             <a onClick={handleClose}>Adicionar ao carrinho!</a>
//           </Button>
//         </DialogActions>
//       </Dialog></ProdutosProvider>
      
//         );
       
//       }

  
//   const [open, setOpen] = React.useState(false);
//   const [selectedValue, setSelectedValue] = React.useState(emails[1]);

//   const handleClickOpen = () => {
    
//     setOpen(true);
//   };

//   const handleClose = (value) => {
//     setOpen(false);
//     setSelectedValue(value);
//   };
// return (
//         <div>
//  <div class="col-md-12 col-sm-12 col-xs-12 productTest noturno">
//                         <div class="row content-part-3-inner noturno">
//                             <div class="col-md-5 col-sm-5 col-xs-12" align="center">
//                                 <img src={Food} class="img-responsive img" alt="Menu Item"/>
//                             </div>
//                                     <div class="col-md-7 col-sm-7 col-xs-12 productTest">
//                                             <div class="content-part-3-right-h4 noturno ">{props.title}</div>
//                                             <div class="price noturno">Preço : <i class="preconum"><span class="fa fa-inr"></span>{props.preco}</i></div>
//                                             <p>{props.descricao}</p>
//                                         <div class="margin_p3"><a href="#!" class="order-now pedir" onClick={handleClickOpen}>Pedir agora</a>
//                                         <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} opcionais={props.opcionais} nome={props.title} MarcOpcionais={Children.markOpc} click={props.click}/>
                         
//                                         </div>
//                                     </div>
                                    
//                         </div>
//                     </div>
//                     <hr/>
//         </div>
//     )
// }

