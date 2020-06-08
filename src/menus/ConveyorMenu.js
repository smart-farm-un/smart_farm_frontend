import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faTable, faRedo, faUserFriends, faRoute, faTruck, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './../css/Menu.css';
import {  Link } from "react-router-dom";


function ConveyorMenu(){
    return(
        <div className="bs-glyphicons">
    <ul className="bs-glyphicons-list">

      <li>
        <Link to='interviews' className="">
            <FontAwesomeIcon icon={faTruck} size="6x" className="icon-black" ></FontAwesomeIcon> 
            <h4><span className="glyphicon-className icon-black">{"Vehiculos"}
          </span></h4>
        </Link>
        
      </li>
      <li>
        <Link to='interviews' className="">
            <FontAwesomeIcon icon={faRoute} size="6x" className="icon-gray" ></FontAwesomeIcon> 
            <h4><span className="glyphicon-className icon-gray">{"Rutas"}
          </span></h4>
        </Link>
        
      </li>
      <li>
        <Link to='interviews' className="">
            <FontAwesomeIcon icon={faMoneyCheckAlt} size="6x" className="icon-blue" ></FontAwesomeIcon> 
            <h4><span className="glyphicon-className icon-blue">{"Ingresos"}
          </span></h4>
        </Link>
        
      </li>
      <li>
        <Link to='interviews' className="">
            <FontAwesomeIcon icon={faCogs} size="6x" className="icon-gray" ></FontAwesomeIcon> 
            <h4><span className="glyphicon-className icon-gray">{"Configuraciones"}
          </span></h4>
        </Link>
        
      </li>
    </ul>
  </div>
    );
}

export default ConveyorMenu;