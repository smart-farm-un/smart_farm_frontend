import React from 'react';

function SignUpBuyer(){
    return (
    <form className="container"> 
        <h1>Comprador</h1>
        <div className="row">
            <div className="form-group col">
                <label htmlFor="exampleFormControlInput1">Nombres:</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" 
                placeholder=""></input>
            </div>
            <div className="form-group col">
                <label htmlFor="exampleFormControlInput1">Apellidos:</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" 
                placeholder=""></input>
            </div>
            <div className="form-group col">
                    <label for="exampleFormControlSelect1">Tipo de documento:</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option></option>
                        <option>Cédula de ciudadanía</option>
                        <option>NIT</option>
                        <option>Cédula de extranjería</option>
                    </select>
            </div>
            <div className="form-group col">
                <label htmlFor="exampleFormControlInput1">Número de documento:</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" 
                placeholder=""></input>
            </div>
        </div>
        <div className="row">
            <div className="form-group col">
                <label htmlFor="exampleFormControlInput1">Seleccione su departamento:</label>
                <select class="form-control" id="exampleFormControlSelect1">
                        <option></option>
                        <option>Cédula de ciudadanía</option>
                        <option>NIT</option>
                        <option>Cédula de extranjería</option>
                </select>
            </div>
            
            <div className="form-group col">
                <label htmlFor="exampleFormControlInput1">Seleccione el municipio:</label>
                <select class="form-control" id="exampleFormControlSelect1">
                        <option></option>
                        <option>Cédula de ciudadanía</option>
                        <option>NIT</option>
                        <option>Cédula de extranjería</option>
                </select>
            </div>
            <div className="form-group col">
                <label htmlFor="exampleFormControlInput1">Ingrese dirección:</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" 
                placeholder=""></input>
            </div>
            
        </div>
        <button className="btn btn-lg btn-primary btn-block col-sm-3" type="submit">Terminar registro</button>
    </form>);
}

export default SignUpBuyer;