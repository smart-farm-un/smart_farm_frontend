import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
//import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
//import Logout from '../../helpers/Auth';
import { withTranslation } from 'react-i18next';



function Header(){

    return (<div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Logo</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" 
  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Inicio <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Acerca de Nosotros</a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link " href="/producerMenu">Productores</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="/conveyorMenu">Transportadores</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#">Compradores</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Contacto</button>
    </form>
  </div>
</nav>
</div>
);
}


export default withTranslation()(Header);