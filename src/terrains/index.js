import React, {Component} from 'react';

import ReactPaginate from 'react-paginate';

const PATH_BASE = `${process.env.REACT_APP_BACKEND_URL}/terrains`;

class Terrains extends Component{
    constructor(props){
        super(props);
    }

    handlePageClick = data =>{

    };

    render(){
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
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/producerMenu">Menu</a></li>
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
                 {[].map(
                     item => 
                     <tr key={item.id}>
                         <th scope="row">{item.id}</th>
                         <td>{item.name}</td>
                         <td>{item.email}</td>
                         <td>{item.created_at}</td>
                     </tr>
                 )}   
                </tbody>
            </table>    

            {pageComponent}
        </div>);

    }
}

export default Terrains;