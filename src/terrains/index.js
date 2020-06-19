import React, {Component} from 'react';

import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import { faTrash} from '@fortawesome/free-solid-svg-icons';

const PATH_BASE = `http://localhost:3000/terrains`;

class Terrains extends Component{
    constructor(props){
        super(props);

        this.state = {
            result: null
        };
    }

    handlePageClick = data =>{

    };

    componentDidMount(){
        this.loadTerrainsFromServer();
        //this.loadCurrentUserFromServer();
    }

    loadTerrainsFromServer(){
        let queryURL = `${PATH_BASE}`;
        console.log("Query URL:" + queryURL);
        fetch(queryURL)
        .then(response => response.json())
        .then(result => this.setTerrains(result))
        .catch(error => error);
    }

    setTerrains(result){
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
            <h1>Terrenos</h1>

            <a href="/terrains/new" type="button" className="btn btn-primary">Agregar Terreno</a>
            {pageComponent}
            <table className="table table-bordered table-hover table-sm">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col" >id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Area (m2)</th>
                        <th scope="col">Fuente de energía</th>
                        <th scope="col">Fuente de agua</th>
                        <th scope="col">Estado vias de acceso</th>
                        <th scope="col">Predio Cercano al municipio</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                 {result.map(
                     item => 
                     <tr key={item.id}>
                         <th scope="row">{item.id}</th>
                         <td>{item.name}</td>
                         <td>{item.area}</td>
                         <td>{item.source_energy}</td>
                         <td>{item.source_water}</td>
                         <td>{item.state_path}</td>
                         <td>{item.close_town}</td>
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

export default Terrains;