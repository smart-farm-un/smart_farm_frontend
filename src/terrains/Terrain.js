import React, {Component} from 'react';

import axios from 'axios';
import {Redirect} from 'react-router-dom';


const TERRAINS_URL = `http://localhost:3000/terrains`;

class  Terrains extends Component{


    constructor(props){
        super(props);

        this.state = {
            //idUser: props.match.params.id? props.match.params.id:"",
            userData: {},
            fields: {
                name:'',
                area:'',
                sourceEnery:'no',
                sourceWater:'no',
                statePath:'bueno',
                closeTown: 'no',
                isDisabled: false,
                styleDisplayMatch: {
                    display: "none"
                },
                styleDisplayNotMatch: {
                    display: "none"
                },
                redirect: false
            },
            currentUserAdmin: false,
            errorAlert: false
        };
    }

    handleSubmit = (e) =>{
        e.preventDefault();
            this.createTerrain();

    }

    createTerrain = () =>{

        const {fields} = this.state;
        
        const headers = JSON.parse(localStorage.getItem('user'));
        //console.log("idInt:" + idInterview);
        let method = 'post';
        let self = this;
        
        axios({
            method: method,
            url: `${TERRAINS_URL}`,
            data: 
            { name: fields.name,
            area: fields.area,
            source_energy: fields.sourceEnergy,
            source_water: fields.sourceWater,
            state_path: fields.statePath,
            close_town: fields.closeTown
            
            },
            headers: headers
            })
        .then(function (response) {
            // handle success
            //console.log(response.data);
            self.setRedirect();
        })
        .catch(function (error) {
            // handle error
            self.setState({errorAlert: true});
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
    } //End createUser

    onInputChange = (e) => {
        const {fields} = this.state;
        fields[e.target.name] = e.target.value;
        console.log("target.value:" + e.target.value);
        console.log("onInputChange");
        this.setState({fields: fields});
    }

    setRedirect = () =>{
        this.setState(
            {redirect: true}
        );
    }

    renderRedirect = () => {
        if (this.state.redirect ) {
            return <Redirect to={'/terrains/'} />
        }
    } 

    render(){
        const {fields} = this.state;     

        return (
            <div>
                {this.renderRedirect()}
        <form className="container" onSubmit={this.handleSubmit}> 
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/producerMenu">Menu</a></li>
                    <li className="breadcrumb-item"><a href="/terrains">Terrenos</a></li>
                </ol>
            </nav>
            <h1>Nuevo Terreno</h1>

            <div className="row">
                <div className="form-group col">
                    <label htmlFor="exampleFormControlInput1">Nombre del terreno:</label>
                    <input type="text" 
                    name='name'
                    className="form-control" 
                    id="exampleFormControlInput1"
                    onChange={this.onInputChange} 
                    value={fields.name}
                    placeholder=""></input>
                </div>
                <div className="form-group col">
                    <label htmlFor="exampleFormControlInput1">Área en metros cuadrados:</label>
                    <input type="number" 
                    className="form-control" 
                    id="exampleFormControlInput1" 
                    name='area'
                    onChange={this.onInputChange} 
                    value={fields.area}
                    placeholder=""></input>
                </div>
                <div className="form-group col">
                    <label htmlFor="exampleFormControlInput1">Fuente de energía:</label>
                    <select className="form-control" 
                    id="exampleFormControlSelect1"
                    onChange={this.onInputChange} 
                    name="sourceEnergy">
                            <option value="no">No tiene</option>
                            <option value="publico">Servicio Público</option>
                            <option value="generador">Generador Electrico</option>
                            <option value="solar">Solar</option>
                    </select>
                </div>
                <div className="form-group col">
                    <label htmlFor="exampleFormControlInput1">Fuente de agua:</label>
                    <select className="form-control" 
                    id="exampleFormControlSelect1"
                    onChange={this.onInputChange} 
                    name="sourceWater">
                            <option value="no">No tiene</option>
                            <option value="acueducto">Acueducto</option>
                            <option value="subterraneo">Subterraneo</option>
                            <option value="rio">Rio</option>
                            <option value="nacedero;lluvias">Nacedero o lluvias</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="form-group col">
                    <label htmlFor="exampleFormControlInput1">Seleccione estado de las vias de acceso al predio:</label>
                    <select className="form-control" 
                    id="exampleFormControlSelect1"
                    onChange={this.onInputChange} 
                    name="statePath">
                            <option value="bueno">Buen Estado</option>
                            <option value="regular">Regular</option>
                            <option value="malo">Malo</option>
                    </select>
                </div>
                <div className="form-group col">
                <label htmlFor="exampleFormControlInput1">Predio se encuentra cerca a la cabecera municipal:</label>
                    <select className="form-control" 
                    id="exampleFormControlSelect1"
                    onChange={this.onInputChange} 
                    name="closeTown">
                            <option value="no">No</option>
                            <option value="si">Si</option>
                    </select>
                </div>
            </div>
            
            <button className="btn btn-lg btn-primary btn-block col-sm-3" type="submit">Añadir terreno</button>
        </form>
        </div>);
    }
}

export default Terrains;