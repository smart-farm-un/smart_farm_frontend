import React from 'react';


function Terrains(){
    return (
        <form className="container"> 
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/producerMenu">Menu</a></li>
                    <li class="breadcrumb-item"><a href="/terrains">Terrenos</a></li>
                </ol>
            </nav>
            <h1>Nuevo Terreno</h1>
            <div className="row">
                <div className="form-group col">
                    <label htmlFor="exampleFormControlInput1">Nombre del terreno:</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" 
                    placeholder=""></input>
                </div>
                <div className="form-group col">
                    <label htmlFor="exampleFormControlInput1">Área en metros cuadrados:</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" 
                    placeholder=""></input>
                </div>
                <div className="form-group col">
                    <label htmlFor="exampleFormControlInput1">Fuente de energía:</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                            <option>No tiene</option>
                            <option>Cédula de ciudadanía</option>
                            <option>NIT</option>
                            <option>Cédula de extranjería</option>
                    </select>
                </div>
                <div className="form-group col">
                    <label htmlFor="exampleFormControlInput1">Fuente de agua:</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                            <option>No tiene</option>
                            <option>Cédula de ciudadanía</option>
                            <option>NIT</option>
                            <option>Cédula de extranjería</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="form-group col">
                    <label htmlFor="exampleFormControlInput1">Seleccione estado de las vias de acceso al predio:</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                            <option>No tiene</option>
                            <option>Cédula de ciudadanía</option>
                            <option>NIT</option>
                            <option>Cédula de extranjería</option>
                    </select>
                </div>
                <div className="form-group col">
                <label htmlFor="exampleFormControlInput1">Predio se encuentra cerca a la cabecera municipal:</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                            <option>No</option>
                            <option>Si</option>
                    </select>
                </div>
            </div>
            
            <button className="btn btn-lg btn-primary btn-block col-sm-3" type="submit">Añadir terreno</button>
        </form>);
}

export default Terrains;