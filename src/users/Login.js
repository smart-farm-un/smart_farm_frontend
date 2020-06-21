import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'; 

const PATH_BASE = `${process.env.REACT_APP_BACKEND_URL}/auth/sign_in`;

export default class Login extends Component {


    constructor(props){
        super(props);
        this.state = {email: '',
                      password: '',
                      divErrorStyle: {display: 'none'},
                      redirectToMenu: false,
                      role: ''
                     };

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.setRedirectToMenu = this.setRedirectToMenu.bind(this);
    }

    setRedirectToMenu(){
        console.log("Set:");
        this.setState({redirectToMenu: true});
    }

    onEmailChange(e){
        this.setState({email: e.target.value});
    }

    onPasswordChange(e){
        this.setState({password: e.target.value});
    }

    handleLogin = (event) => {
        event.preventDefault();
        console.log(PATH_BASE);
        axios({
            method: 'post', 
            url: PATH_BASE,
            headers: { "Content-Type": "application/json"
            },
            data: {
            email: this.state.email,
            password: this.state.password
            
        }
        }).then( response => {
            //sessionStorage
            localStorage.setItem('user',
            JSON.stringify({
                'access-token': response.headers['access-token'],
                'client': response.headers['client'],
                'uid': response.headers['uid'],
                'expiry': response.headers['expiry'],
                'token-type': response.headers['token-type'],
                'id': response.data.data.id,
                'role': response.data.data.role
            }));
            this.setState({role: response.data.data.role});
            this.setRedirectToMenu();
            //this.props.history.push('/');
            //return <Redirect
            // to={{
            //    pathname: "/results"
            //  }} />
            //console.log("Headers:");
            //console.log(response.headers);

            //console.log(response.data);
            //console.log(response.status);
            //console.log(response.statusText);
            //console.log(response.config);
        }).catch((error) => {
            this.setState({divErrorStyle: {display: 'block'}});

            console.log('error');
            console.log(error);
        })
    }//End handle login


    render(){

    if (this.state.redirectToMenu){

        return (
            <Redirect
            to='/producerMenu' />
        );
    }


    return (
    <div className="container ">
        <div className="row justify-content-center">
        <div className="text-center">
            <form className="form-signin" onSubmit={this.handleLogin}>
            <br></br>
            <h1 className="h3 mb-3 font-weight-normal">Ingresar</h1>
            <label htmlFor="inputEmail" className="sr-only">Email</label>
            <input type="email" 
                   id="inputEmail" 
                   className="form-control" 
                   placeholder="Correo o número de telefono"
                   value={this.state.email} 
                   onChange={this.onEmailChange}
                   required autoFocus>

            </input>
            <label for="inputPassword" className="sr-only">Contraseña</label>
            <input type="password"
                   id="inputPassword" 
                   className="form-control" 
                   placeholder="Password" 
                   value={this.state.password} 
                   onChange={this.onPasswordChange}
                   required></input>
                   <p style={this.state.divErrorStyle}>Nombre de usuario o contraseña no valido</p>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Iniciar Sesión</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2020</p>
            </form>
        </div>
        </div>
    </div>);
    }
}
  