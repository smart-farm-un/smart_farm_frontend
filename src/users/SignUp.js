import React from 'react';


function SignUp() {
    return (
    <div className="container ">
        <div className="row justify-content-center">
        <div className="text-center">
            <form className="form-signin" >
            <br></br>
            <h1 className="h3 mb-3 font-weight-normal">Registro</h1>
            <label htmlFor="inputEmail" className="sr-only">Email o Telefono</label>
            <input type="email" 
                   id="inputEmail" 
                   className="form-control" 
                   placeholder="Correo o número de telefono"
                   value={""} 
                   required autoFocus>

            </input>
            <br></br>
            <div className="">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Contraseña *" value=""></input>
                </div>
                <div clasNames="form-group">
                    <input type="text" className="form-control" placeholder="Confirmar contraseña *" value=""></input>
                </div>
            </div>
            <br></br>
            <p>Selecciona un rol de usuario:</p>
            <select class="form-control" id="exampleFormControlSelect1">
                <option></option>
                <option>Productor</option>
                <option>Transportador</option>
                <option>Comprador</option>
            </select>
            <br></br>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Registrarse</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2019</p>
            </form>
        </div>
        </div>
    </div>);
  }
  

export default SignUp;