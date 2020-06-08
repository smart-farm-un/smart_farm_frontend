import React from 'react';

function Login() {
    return (
    <div className="container ">
        <div className="row justify-content-center">
        <div className="text-center">
            <form className="form-signin" >
            <br></br>
            <h1 className="h3 mb-3 font-weight-normal">Ingresar</h1>
            <label htmlFor="inputEmail" className="sr-only">Email</label>
            <input type="email" 
                   id="inputEmail" 
                   className="form-control" 
                   placeholder="Correo o número de telefono"
                   value={""} 
                   required autoFocus>

            </input>
            <label for="inputPassword" className="sr-only">Contraseña</label>
            <input type="contraseña"
                   id="inputPassword" 
                   className="form-control" 
                   placeholder="Password" 
                   value={""} 
                   required></input>
            <p>Nombre de usuario o contraseña no valido</p>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Iniciar Sesión</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2019</p>
            </form>
        </div>
        </div>
    </div>);
  }
  

export default Login;