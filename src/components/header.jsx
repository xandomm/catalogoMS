import React from 'react';
import './header.css'
import ListIcon from '@material-ui/icons/List';
import AnccountBoxIco from '@material-ui/icons/AccountBox';
export default (props)=>{
    return(
        <nav class="headercolor navbar navbar-expand-lg navbar-light ">
  <a class="navbar-brand" href="#">LOGO</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="dark-blue-text" style={{border:"0px"}}><ListIcon/></span>
  </button>
  <div class="collapse navbar-collapse paginasheader" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Modelos<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contato</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link iconlogin" href="#"><AnccountBoxIco/></a>
      </li>
      
    </ul>
  </div>
</nav>
    )
}