import React, {Component} from 'react';

import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import { faTrash} from '@fortawesome/free-solid-svg-icons';

const PATH_BASE = `${process.env.REACT_APP_BACKEND_URL}/crops`;

class Crops extends Component{
    constructor(props){
        super(props);

        this.state = {
            result: null
        };
    }

    handlePageClick = data =>{

    };

    componentDidMount(){
        this.loadCropsFromServer();
        //this.loadCurrentUserFromServer();
    }

    loadCropsFromServer(){
        let queryURL = `${PATH_BASE}`;
        console.log("Query URL:" + queryURL);
        fetch(queryURL)
        .then(response => response.json())
        .then(result => this.setCrops(result))
        .catch(error => error);
    }

    setCrops(result){
        this.setState({result});
    }

    render(){
        const { result } = this.state;
        if(!result){
            return null;
        }

        let pageComponent = <ReactPaginate
        previousLabel={'Anterior'}
        nextLabel={'Siguiente'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={10}
        marginPagesDisplayed={2}
        pageRangeDisplayed={4}
        onPageChange={this.handlePageClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        activeClassName={'active'}
        />;

        return(<div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/producerMenu">Menu</a></li>
                </ol>
            </nav>
            <h1>Cultivos</h1>

            <a href="/crops/new" type="button" className="btn btn-primary">Agregar Cultivo</a>
            {pageComponent}
            <table className="table table-bordered table-hover table-sm">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col" >id</th>
                        <th scope="col">Tipo de Cultivo</th>
                        <th scope="col">Fecha de siembra</th>
                        <th scope="col">Fecha esperada de cosecha</th>
                        <th scope="col">Fecha real de cosecha</th>
                        <th scope="col">Area de cultivo</th>
                        <th scope="col">Terreno</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                 {result.map(
                     item => 
                     <tr key={item.id}>
                         <th scope="row">{item.id}</th>
                         <td>{item.crop_type}</td>
                         <td>{item.sowing_date}</td>
                         <td>{item.harvesting_planned_date}</td>
                         <td>{item.actual_harvesting_date}</td>
                         <td>{item.sowing_area}</td>
                         <td>{item.terrain_id}</td>
                         <td>
                            <a href={"/users/"+item.id+ '/edit'}> 
                            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                            </a>
                        </td>
                        <td>
                            <a href=""><FontAwesomeIcon icon={faTrash}/></a>
                        </td>
                     </tr>
                 )}   
                </tbody>
            </table>    

            {pageComponent}
        </div>);

    }
}

export default Crops;