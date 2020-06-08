import React from 'react';

function Vehicle(){
    return (
    <form className="container"> 
        <h1>Vehiculo</h1>
        <div className="row">
        <div className="form-group col">
            <label htmlFor="exampleFormControlInput1">Tipo de camión:</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" 
            placeholder=""></input>
        </div>
        <div className="form-group col">
            <label htmlFor="exampleFormControlInput1">Modelo:</label>
            <input type="number" className="form-control" id="exampleFormControlInput1" 
            placeholder=""></input>
        </div>
        </div>
        <div className="row">
            <div className="form-group col">
                <label htmlFor="exampleFormControlInput1">Propietario:</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" 
                placeholder=""></input>
            </div>
            <div className="form-group col">
                <label for="exampleFormControlSelect1">Tipo de documento propietario:</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option></option>
                    <option>Cédula de ciudadanía</option>
                    <option>NIT</option>
                    <option>Cédula de extranjería</option>
                </select>
            </div>
            <div className="form-group col">
                <label htmlFor="exampleFormControlInput1">Número documento propietario:</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" 
                placeholder=""></input>
            </div>
        </div>
        <div className="row">
            <div className="form-group col">
                <label htmlFor="exampleFormControlInput1">Placa de vehiculo:</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" 
                placeholder=""></input>
            </div>

            <div className="form-group col">
                <label htmlFor="exampleFormControlInput1">SOAT:</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" 
                placeholder=""></input>
            </div>
        </div>
        <button className="btn btn-lg btn-primary btn-block col-sm-3" type="submit">Añadir vehiculo</button>
    </form>);
}

export default Vehicle;