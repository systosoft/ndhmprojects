import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import GeneratedIds from './GeneratedIds';
import Header from './Header';
import Sidemenu from './Sidemenu';
import {Button ,Col,Row} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Footer from './component/Footer';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
   
    <div className="App">
   
   <Header/>
     <Container fluid>
      
     <Row>
     <Col md={2}> 
     <Sidemenu />
   </Col>
   <Col md={10}>
   <Routes>
     
      <Route path="/dashboard" exact={true} element={<Dashboard />} ></Route>
      <Route path="/generatedids" exact={true} element={<GeneratedIds />} ></Route>
      </Routes>
    
   </Col>
   
   </Row>
   
   <Row>
     <Footer /></Row>
   </Container>
   
     
     
    
      
       
   </div>
  
  );
}

export default App;
