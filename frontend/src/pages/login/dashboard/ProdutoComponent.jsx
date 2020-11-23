import React from 'react'

import Delete from './delete'
class ProdutoComponent extends React.Component {

            render(){
            return( 
                   <tr>
                        <th>{this.props.id}</th>
                        <td>{this.props.nome}</td>
                        <td>R$ {this.props.valor}</td>
                        <td ><Delete catalogo={this.props.catalogo} id = {this.props.id} /></td>
                    </tr>
                   )
                }
            }
                

export default ProdutoComponent