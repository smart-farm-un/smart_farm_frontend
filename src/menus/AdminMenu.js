import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faTable, faRedo, faUserFriends, faMountain, 
    faSeedling, faMoneyCheckAlt, faUsers, faLocationArrow, faCashRegister, faTruck, faBook } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './../css/Menu.css';
import {  Link } from "react-router-dom";


function AdminMenu(){
    return(
        <div className="bs-glyphicons">
    <ul className="bs-glyphicons-list">

      <li>
        <Link to='interviews' className="">
            <FontAwesomeIcon icon={faUsers} size="6x" className="icon-black" ></FontAwesomeIcon> 
            <h4><span className="glyphicon-className icon-black">{"Usuarios"}
          </span></h4>
        </Link>
        
      </li>
      <li>
        <Link to='interviews' className="">
            <FontAwesomeIcon icon={faLocationArrow} size="6x" className="icon-blue" ></FontAwesomeIcon> 
            <h4><span className="glyphicon-className icon-blue">{"Ubicaciones"}
          </span></h4>
        </Link>
        
      </li>
      <li>
        <Link to='interviews' className="">
            <FontAwesomeIcon icon={faSeedling} size="6x" className="icon-green" ></FontAwesomeIcon> 
            <h4><span className="glyphicon-className icon-green">{"Tipos de cultivo"}
          </span></h4>
        </Link>
        
      </li>
      <li>
        <Link to='interviews' className="">
            <FontAwesomeIcon icon={faCashRegister} size="6x" className="icon-gray" ></FontAwesomeIcon> 
            <h4><span className="glyphicon-className icon-gray">{"Precios de referencia"}
          </span></h4>
        </Link>
        
      </li>
      <li>
        <Link to='interviews' className="">
            <FontAwesomeIcon icon={faTruck} size="6x" className="icon-black" ></FontAwesomeIcon> 
            <h4><span className="glyphicon-className icon-black">{"Tipos de vehiculos"}
          </span></h4>
        </Link>
        
      </li>

      <li>
        <Link to='interviews' className="">
            <FontAwesomeIcon icon={faBook} size="6x" className="icon-brown" ></FontAwesomeIcon> 
            <h4><span className="glyphicon-className icon-brown">{"Tipos de documentos"}
          </span></h4>
        </Link>
        
      </li>
    </ul>
  </div>
    );
}

export default AdminMenu;