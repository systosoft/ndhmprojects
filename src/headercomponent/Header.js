import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Navbar,NavDropdown } from "react-bootstrap";
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Logo from "../Images/Logo.png"
import admin from "../Images/admin.png"
import './headercomponent/Header.css'
function Header(){
return(
<>

<div className="container-fluid" >
   
         <Navbar collapseOnSelect expand="lg" fixed="top" className="header ">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand href="#home" >
                      <img src={Logo} className="d-inline-block logo img-fluid" />
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav className="" activeKey="/home">
                            <Nav.Item >
                              <Nav.Link href="" className="admin-tag">Krishna Kumar<br/> Admin</Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                            <Nav.Link href="" ><img className="admin-img" src={admin} /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                              <Nav.Link href="" >
                                    <NavDropdown id="navbarScrollingDropdown" className="arrow-dn">
                                          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    </NavDropdown>
                              </Nav.Link>
                        </Nav.Item>
                  
                        <Nav.Item><Nav.Link href="" className="logut-tag">Logout</Nav.Link></Nav.Item>
                     
                  
               </Nav>
            </Navbar.Collapse>
         </Navbar>
      </div>
   
</>
);
}
export default Header;