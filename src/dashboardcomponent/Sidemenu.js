import React from "react";
import Header from "./headercomponent/Header"
import './dashboardcomponent/Sidemenu.css'

import Dashboard from './dashboardcomponent/Dashboard';
 import 'bootstrap-icons/font/bootstrap-icons.css';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { Navbar,NavDropdown } from "react-bootstrap";
import { Nav } from 'react-bootstrap';
import { NavLink } from "react-bootstrap";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";


function Sidemenu() {
    
    return (
     <>
    <div className="container-fliud">
       <Navbar >
           
           <Nav className="left-menu flex-column">
           <Nav.Item className="pd-l navbar-right">
             <Link to="/Dashboard" className="group-list" style={{align:'left'}}>
               <i className="bi bi-columns-gap"></i>
                Dashboard</Link></Nav.Item>
            <Nav.Item className="pd-l">
              <Link to="/GeneratedIds">
                <i className="bi bi-card-checklist"></i>
                View / Generate ID</Link></Nav.Item>
            
       </Nav>
     </Navbar>
    
     
     </div>
     </>
    );
  }
  
  export default Sidemenu;