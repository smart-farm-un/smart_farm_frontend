import React, {Suspense} from 'react';

function SignUpProducer(){
    return(
       <Suspense fallback="loading">
       <nav aria-label="breadcrumb">
       <ol className="breadcrumb">
           <li className="breadcrumb-item"><a href="/producerMenu">Menu</a></li>
       </ol>
   </nav>
        <div className="container ">
        <div className="">
               
            <h1 className="h3 mb-3 font-weight-normal">Productor</h1>
            <form className="">
            <div className="row">
                     
              <div className="form-group col">
              <label htmlFor="inputEmail" className="">Nombres:</label>
              <input type="text" 
                     id="inputEmail" 
                     className="form-control" 
                     placeholder="Nombres"
                     value={""} 
                     required autoFocus>

              </input>
              </div>
              <div className="form-group col">
              <label htmlFor="inputEmail" className="">Apellidos:</label>
              <input type="text" 
                     id="inputEmail" 
                     className="form-control" 
                     placeholder="Apellidos"
                     value={""} 
                     required autoFocus>

              </input>
              </div>
              <div className="form-group col">
              <label htmlFor="inputEmail" className="">Correo:</label>
              <input type="email" 
                     id="inputEmail" 
                     className="form-control" 
                     placeholder="Ingrese su correo"
                     value={""} 
                     required autoFocus>

              </input>
              </div>
              <div className="form-group col">
              <label htmlFor="inputEmail" className="">Número celular:</label>
              <input type="tel" 
                     id="inputEmail" 
                     className="form-control" 
                     placeholder="Ingrese su numero de celular"
                     value={""} 
                     required autoFocus>

              </input>
              </div>
            </div>

              <div className="row">
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
            <label htmlFor="inputNumber" className="">Número de documento:</label>
            <input type="number" 
                   id="inputNumber" 
                   className="form-control" 
                   placeholder="Ingrese su número de documento"
                   required autoFocus>

            </input>
            </div>

            <div className="form-group col">
            <label htmlFor="inputNumber" className="">Fecha de nacimiento:</label>
            <input type="date" 
                   id="inputNumber" 
                   className="form-control" 
                   placeholder="Ingrese su número de documento"
                   required autoFocus>

            </input>
            </div>
            </div>
            <br></br>
            <button className="btn btn-lg btn-primary btn-block col-sm-2" type="submit">Guardar cambios</button>
            </form>
        </div>
    </div>
    </Suspense>
    );
}

export default SignUpProducer;