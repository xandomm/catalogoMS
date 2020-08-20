import React from 'react';

import Item from './carrosselItem'

import Image from '../../image/images.jpg'
import Image1 from '../../image/images(1).jpg'
import Image2 from '../../image/restauranted.jpg'

export default (props)=>{
    return(
        <div>

    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
  <div class="carousel-item">
      <img class="d-block w-100 " src={Image} alt="Third slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={Image1} alt="Third slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={Image2} alt="Third slide"/>
    </div>
  
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        </div>
    )
}