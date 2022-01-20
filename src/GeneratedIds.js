import React, { useState } from "react"
import './Sidemenu.css'
import Sidemenu from "./Sidemenu";
 import 'bootstrap-icons/font/bootstrap-icons.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import idinfo from './Images/info-card.png'
import {Button ,Col,Row} from 'react-bootstrap';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import arrow from './Images/arrow-point-gen-via-aadhaar.png'

function GeneratedIds() {
  const [border, setBorder] = useState("#fafafa");

      const appStyles = {
            border: `2px solid ${border}`,
            
              position: 'fixed',
              overflow: 'hidden',
              // top: '15%'
          
          };

          const Vicon = {
            justifyContent: 'end',
            position: 'relative',
            marginLeft: '70%',
            
            fontSize: '30px', 
            justifyContent: 'end', 
            float: 'right'
          }
function goto()
{
  window.location.replace("https://healthid.ndhm.gov.in/register")
}

    return (
           <>
    <div className="container" style={appStyles}>
     
     <div className="row">
            <div className="col-12 ">
            
             <h1 className="top-100">View / Generate Health ID</h1>
             </div>
             </div>
             <div className="row">
               <div col={12}> 
               <div className="buttonregister">
               <Button variant="primary" onClick={()=>goto()}>Generate Via Aadhar </Button>
               </div>
                    
               </div>

             </div>
             <div className="arrow-img row">
                 <div col={12}>
                      <div>< img src={arrow}/></div>
                        <div><p className="pr-10">Click to generate health Id</p>
                  </div>
                    </div>
              

             </div>
             <div className="row ">
             <div className="col-12">
                  Health IDs generated by you will be <br></br> visible here
              </div>
             </div>
             <div className="row ">
             <div className="col-12">
              <img src={idinfo}/>
              </div>
             </div>
             <div className="row ">
             <div className="col-12">
             Currently there are no health ids’ to show
              </div>
             </div>
             <div style={{width: '50%'}}>
        
             <i class="bi bi-back Vicon" style={Vicon}  onMouseEnter={() => setBorder("#31b347")} onMouseLeave={() => setBorder("#fafafa")}></i>
            </div>
     </div>
     </>
    );
  }
  
  export default  GeneratedIds;
  