import React from 'react'
import { Button } from 'reactstrap'
var backendURL= process.env.REACT_APP_API_URL
class Delete extends React.Component {

    constructor(props){
        super(props)
        this.deletar = this.deletar.bind(this)
    }
    deletar(){
        var res = window.confirm("Tem certeza que deseja deletar o produto de ID " +this.props.id)
        if (res === true) {
            fetch(backendURL+'/api/produto/'+this.props.id,{
                method: "DELETE"
            })
            fetch(backendURL+'/api/upload/del/'+this.props.id,{
                method:"DELETE"
            })
            alert('Produto deletado')
            window.location.href = 'delProdutos' 
        }

        else {

        }

    }
    render(){
        return(
            <Button onClick={this.deletar} style={{marginLeft:"15px"}} className="btn" color="danger" id="deleteProduct">X</Button>
        )
    }
}

export default Delete