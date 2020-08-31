import React from 'react';

import Food from '../../image/food.jpg'


export default (props)=>{
    return(
        <div>
             <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="row content-part-3-inner">
                            <div class="col-md-5 col-sm-5 col-xs-12" align="center">
                                <img src={Food} class="img-responsive img" alt="Menu Item"/>
                            </div>
                            <div class="col-md-7 col-sm-7 col-xs-12">
                                <div class="content-part-3-right-h4">{props.title}</div>
                                <div class="price">Preço : <i class="green">R${props.preco}</i></div>
                                {props.descricao}
                                <div class="margin_p3"><a href="#!" class="order-now">Pedir agora</a></div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}