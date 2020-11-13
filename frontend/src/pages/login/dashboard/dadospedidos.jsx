import React,{useState, useEffect} from 'react';
import Header from '../../../components/header'
import axios from 'axios'

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
require('dotenv').config()
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  
  var REACT_API_URL= process.env;
export default (props)=>{
    const [load,setload]= useState(true)
    const classes = useStyles();
    const [ped, setped] = useState([]);
    const [catalogo,setCatalogo]=useState([])
    var url1;
    useEffect(() => {
        axios.get('http://localhost:5000/api/restaurante/'+ props.id)
            .then(res => {
                
                setCatalogo(res.data);
                 url1 = catalogo.url

            })
            .catch(err => {
               console.log(err)
            })
    }, []);
    console.log(catalogo.url)
    if (catalogo.url!==undefined && load !== false){
  
        axios.get('http://localhost:5000/api/pedido/find/'+ catalogo.url)
            .then(res => {
                
                setped(res.data);
                setload(false)

            })
            .catch(err => {
               console.log(err)
            })
    }
console.log(ped)
console.log(REACT_API_URL)
    
    return(<div>
        <Header/>
        
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>pedido</StyledTableCell>
            <StyledTableCell align="right">ID</StyledTableCell>
            <StyledTableCell align="right">Data&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Entrega&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Total&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {ped.map((row)=>(
            <StyledTableRow key={ped._id}>
              <StyledTableCell component="th" scope="row">
                {row.pedido.map((ttt)=>(`${ttt.nome} `))}
              </StyledTableCell>
              <StyledTableCell align="right">{row._id}</StyledTableCell>
              <StyledTableCell align="right">{row.createdAt}</StyledTableCell>
              <StyledTableCell align="right">{row.check}</StyledTableCell>
              <StyledTableCell align="right">R$ {row.Total}</StyledTableCell>
            </StyledTableRow>
         ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>)
}