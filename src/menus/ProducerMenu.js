import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faTable, faRedo, faUserFriends, faMountain, faSeedling, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './../css/Menu.css';
import {  Link } from "react-router-dom";


function ProducerMenu(){
    return(
        <div className="bs-glyphicons">
    <ul className="bs-glyphicons-list">

      <li>
        <Link to='terrains' className="">
            <FontAwesomeIcon icon={faMountain} size="6x" className="icon-brown" ></FontAwesomeIcon> 
            <h4><span className="glyphicon-className icon-brown">{"Terrenos"}
          </span></h4>
        </Link>
        
      </li>
      <li>
        <Link to='interviews' className="">
            <FontAwesomeIcon icon={faSeedling} size="6x" className="icon-green" ></FontAwesomeIcon> 
            <h4><span className="glyphicon-className icon-green">{"Cultivos"}
          </span></h4>
        </Link>
        
      </li>
      <li>
        <Link to='interviews' className="">
            <FontAwesomeIcon icon={faMoneyCheckAlt} size="6x" className="icon-blue" ></FontAwesomeIcon> 
            <h4><span className="glyphicon-className icon-blue">{"Ventas"}
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

export default ProducerMenu;