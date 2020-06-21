import React, {Component} from 'react';

import axios from 'axios';
import {Redirect} from 'react-router-dom';


const CROPS_URL = `${process.env.REACT_APP_BACKEND_URL}/crops`;


class  Crop extends Component{

    constructor(props){
        super(props);

        this.state = {
            //idUser: props.match.params.id? props.match.params.id:"",
            userData: {},
            fields: {
                terrain_id: null,
                crop_type:'',
                sowing_date:'',
                harvesting_planned_date:'',
                actual_harvesting_date:'',
                sowing_area:'',
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
            this.createCrop();
    }

    createCrop = () =>{

        const {fields} = this.state;
        
        const headers = JSON.parse(localStorage.getItem('user'));
        //console.log("idInt:" + idInterview);
        let method = 'post';
        let self = this;
        
        axios({
            method: method,
            url: `${CROPS_URL}`,
            data: 
            {   terrain_id: fields.terrain_id,
                crop_type: fields.crop_type,
                sowing_date: fields.sowing_date,
                harvesting_planned_date: fields.harvesting_planned_date,
                actual_harvesting_date: fields.actual_harvesting_date,
                sowing_area: fields.sowing_area
            
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
    } //End create Crop

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
            return <Redirect to={'/crops/'} />
        }
    } 

    render(){
        const {fields} = this.state;  

    return (
        <div>
            {this.renderRedirect()}
        <form className="container" onSubmit={this.handleSubmit}> 
            <h1>Cultivos</h1>
            <div className="row">

            <div className="form-group col">
                <label htmlFor="exampleFormControlInput1">Seleccione el terreno:</label>
                <select className="form-control" id="exampleFormControlSelect1"
                name='terrain_id'
                onChange={this.onInputChange} 
                >
                        <option></option>
                        <option value="1">Cédula de ciudadanía</option>
                        <option value="2">NIT</option>
                        <option value="3">Cédula de extranjería</option>
                </select>
            </div>
            <div className="form-group col">
                <label htmlFor="exampleFormControlInput1">Tipo de cultivo:</label>
                <select className="form-control" id="exampleFormControlSelect1"
                name='crop_type'
                onChange={this.onInputChange} 
                >
                        <option></option>
                        <option>Cédula de ciudadanía</option>
                        <option>NIT</option>
                        <option>Cédula de extranjería</option>
                </select>
            </div>
            <div className="form-group col">
                <label htmlFor="exampleFormControlInput1">Fecha de siembra:</label>
                <input type="date" 
                className="form-control" 
                id="exampleFormControlInput1"
                name='sowing_date'
                onChange={this.onInputChange} 
                value={fields.sowing_date} 
                placeholder=""></input>
            </div>
            </div>
            <div className="row">
                <div className="form-group col">
                    <label htmlFor="exampleFormControlInput1">Fecha tentativa de cosecha:</label>
                    <input type="date" className="form-control" 
                    id="exampleFormControlInput1" 
                    name='harvesting_planned_date'
                    onChange={this.onInputChange} 
                    value={fields.harvesting_planned_date} 
                    placeholder=""></input>
                </div>

                <div className="form-group col">
                    <label htmlFor="exampleFormControlInput1">Fecha real de cosecha:</label>
                    <input type="date" className="form-control" 
                    id="exampleFormControlInput1" 
                    name='actual_harvesting_date'
                    onChange={this.onInputChange} 
                    value={fields.actual_harvesting_date} 
                    placeholder=""></input>
                </div>
                
                <div className="form-group col">
                    <label htmlFor="exampleFormControlInput1">Área de siembra:</label>
                    <input type="number" className="form-control" 
                    id="exampleFormControlInput1"
                    name='sowing_area'
                    onChange={this.onInputChange} 
                    value={fields.sowing_area}  
                    placeholder=""></input>
                </div>
            </div>
            
            <button className="btn btn-lg btn-primary btn-block col-sm-3" type="submit">Añadir cultivo</button>
        </form>
        </div>);
    }
}

export default Crop;