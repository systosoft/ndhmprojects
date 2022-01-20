import React from "react";
import Sidemenu from './dashboardcomponent/Sidemenu';
import greeting from "../Images/dashboard-greeting-img.png"
 import 'bootstrap-icons/font/bootstrap-icons.css';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Card } from "react-bootstrap";
import blog from "../Images/blog.png"
import Moment from 'react-moment';
import moment from "moment";

function Dashboard() {

  const mydate = new Date();
var weekDayName =  moment(mydate).format('YYYY');
console.log(weekDayName);

    return (
     <>
     <div>
     

            </div>
     <div className="container">
     
     <div className="row div-ht">
       
            <div className="col-4">
              
      <Card className="card-style">
      
                  <Card.Body className="card-clr">
                  <Moment >
                    
                      <h1>{weekDayName}</h1>
                      </Moment>
                  </Card.Body>
                  <Card.Img className="card-clr" variant="bottom" src={greeting} />
                </Card>
      </div>
   <div className="col-8 img-greeting" style={{
                            backgroundImage: `url(${blog})`, backgroundRepeat: 'no-repeat', width: '100',
                            backgroundSize: 'cover',
                            background: 'linear-gradient(181deg , #0c040433, 0%, #25252533 100%) 0% 0% no-repeat) '}} >
     
     <h1>Good Morning</h1>
     <h2>Krishna Kumar</h2> 
     <h2>Admin</h2> 

   </div>
   </div>
   </div>
   
     </>
    );
  }

  
  

  export default  Dashboard;
  