import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Food from '../../image/food.jpg'

import './cardapio.css';
import Produto from './produtos'
import date from './data'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    color: '#8C5954',
    overflow: "hidden"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));







export default function SimpleAccordion(props) {
  const classes = useStyles();

  
  return (
    <div className={classes.root}>
      <Accordion id="bg-marrom">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header bg-branco"
        >
          <Typography className={classes.heading}>{props.type}</Typography>
        </AccordionSummary>
        <AccordionDetails>
         
        
            <div class="">
                <div class="content-part-3">
                   
                    <hr/>
               
                    
                    
                    <hr/>
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="row content-part-3-inner">
                            <div class="col-md-12 col-sm-7 col-xs-12" >
                                <img src={Food} class="img-responsive img" alt="Menu Item"/>
                            </div>
                            <div class="col-md-7 col-sm-7 col-xs-12">
                                <div class="content-part-3-right-h4">Lorem Ipsum</div>
                                <div class="price">Preço : <i class="green"><span class="fa fa-inr"></span>220.00</i></div>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                <div class="margin_p3"><a href="#!" class="order-now">Order Now</a></div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="row content-part-3-inner">
                            <div class="col-md-5 col-sm-5 col-xs-12" align="center">
                                <img src={Food} class="img-responsive img" alt="Menu Item"/>
                            </div>
                            <div class="col-md-7 col-sm-7 col-xs-12">
                                <div class="content-part-3-right-h4">Lorem Ipsum</div>
                                <div class="price">Preço : <i class="green"><span class="fa fa-inr"></span>90.00</i></div>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                <div class="margin_p3"><a href="#!" class="order-now">Order Now</a></div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>



        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}