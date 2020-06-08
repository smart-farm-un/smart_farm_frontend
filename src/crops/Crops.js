import React from 'react';


function Crops(){
    return (
        <form className="container"> 
            <h1>Cultivos</h1>
            <div className="row">
            <div className="form-group col">
                <label htmlFor="exampleFormControlInput1">Tipo de cultivo:</label>
                <select class="form-control" id="exampleFormControlSelect1">
                        <option></option>
                        <option>Cédula de ciudadanía</option>
                        <option>NIT</option>
                        <option>Cédula de extranjería</option>
                </select>
            </div>
            <div className="form-group col">
                <label htmlFor="exampleFormControlInput1">Fecha de siembra:</label>
                <input type="date" className="form-control" id="exampleFormControlInput1" 
                placeholder=""></input>
            </div>
            </div>
            <div className="row">
                <div className="form-group col">
                    <label htmlFor="exampleFormControlInput1">Fecha tentativa de cosecha:</label>
                    <input type="date" className="form-control" id="exampleFormControlInput1" 
                    placeholder=""></input>
                </div>
                
                <div className="form-group col">
                    <label htmlFor="exampleFormControlInput1">Área de siembra:</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" 
                    placeholder=""></input>
                </div>
            </div>
            
            <button className="btn btn-lg btn-primary btn-block col-sm-3" type="submit">Añadir cultivo</button>
        </form>);
}

export default Crops;