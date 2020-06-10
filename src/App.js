import React, { Component, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from './layouts/Header';
import Login from  './users/Login';
import SignUp from './users/SignUp';
import SignUpProducer from './users/SignUpProducer';
import SignUpConveyor from './users/SignUpConveyor';
import Vehicle from './vehicles/index';
import ProducerMenu from './menus/ProducerMenu';
import ConveyorMenu from './menus/ConveyorMenu';
import Crops from './crops/Crops';
import Terrain from './terrains/Terrain';
import SignUpBuyer from './users/SignUpBuyer';
import AdminMenu from './menus/AdminMenu';

function App() {
  return (
    <Router>
    <Suspense fallback="loading">
    <div className="App">

      <Header></Header>
      <div className="mt-4 ml-3">
        <Switch>
          }{/**Signup related */}
          <Route path="/signup">
            <SignUp/>
          </Route>
          <Route path="/signupProducer">
            <SignUpProducer/>
          </Route>
          <Route path="/signupConveyor">
            <SignUpConveyor/>
          </Route>
          <Route path="/signupBuyer">
            <SignUpBuyer/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          {/**Crops related */}
          <Route path="/crops/new">
            <Crops/>
          </Route>
          {/**Terrains related */}
          <Route path="/terrains/new">
            <Terrain/>
          </Route>
          {/** Menus Related */}
          <Route path="/producerMenu">
            <ProducerMenu/>
          </Route>
          <Route path="/conveyorMenu">
            <ConveyorMenu/>
          </Route>
          <Route path="/adminMenu">
            <AdminMenu/>
          </Route>
          <Route path="/vehicle">
            <Vehicle/>
          </Route>
          
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/producer">
            <Producer/>
          </Route>
          <Route path="/conveyor">
            <Conveyor/>
          </Route>
          <Route path="/buyer">
            <Buyer/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
          {/*
            <PrivateRoute path="/about_us" component={AboutUs} />
          <PrivateRoute path="/contact_us" component={Contact} />
          <PrivateRoute path="/producer" component={Producer} />
          <PrivateRoute path="/conveyor" component={Conveyor} />
          <PrivateRoute path="/buyer" component={Buyer} />
          <PrivateRoute path="/" component={Menu} />
          */
          }
          
        </Switch>
      </div>
    </div>
    </Suspense>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}
function Producer() {
  return <h2>Producer</h2>;
}
function Conveyor() {
  return <h2>Conveyor</h2>;
}
function Buyer() {
  return <h2>Buyer</h2>;
}
function Home() {
  return (
  <div>
  <h2>Home</h2>
  <div className="button-group">
    <a href="/login" type="button" className="btn btn-primary">Iniciar Sesión</a>
    <a href="/signup" type="button" className="btn btn-secondary">Registrate</a>
  </div>
  
</div>
  );

}

export default App;
