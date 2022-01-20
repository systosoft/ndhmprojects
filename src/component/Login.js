import React, {useState} from "react";
import { Container, Col, Row, Navbar, Button } from "react-bootstrap";
import Footer from "./Footer";


export default function Login(){
    const [passwordType, setpasswordType] = useState("password");
    const [passwordText, setpasswordText] = useState("Show");
    const [border, setBorder] = useState("#fafafa");
   

    const handleToggle = () => {
        if(passwordType === 'password'){
            setpasswordType('text');
            setpasswordText('Hide');
        }else{
            setpasswordType('password');
            setpasswordText('Show');
        }
    }

    const appStyles = {
        border: `2px solid ${border}`,
    };
    const styles = {
        width: "100px",
        fontSize: "20px",
        borderRadius: "40px",
        border: "1px solid black",
        color: "white",
        margin: "0.5em 1em",
        padding: "0.25em 1em",
        background: "#c83f49",
    };

   
    return(
        <React.Fragment>
            <Navbar aria-controls="responsive-navbar-nav">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img src="./img/karuna-trust-logo.png" className="logo" alt="karuna-trust-logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        
                        English | <a className="link" href="">ಕನ್ನಡ</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className="login" style={appStyles}>
                <Row>
                    <Col xs="8" className="left">
                        <div className="imagedivision">
                            <img src="./img/gwalk-01-01-01.png" className="img-fluid" alt="gwalk" />
                        </div>
                    </Col>
                    <Col xs="4" className="loginscreen">
                        <h4>
                            Registered User Login
                        </h4>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Username"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <div className="input-cont">
                                    <input type={passwordType} className="form-control" id="exampleInputPassword1" placeholder="Enter Your Password"/>
                                    <a className="button" onClick={handleToggle}>
                                        {passwordText}
                                    </a>
                                </div>
                            </div>
                            <div className="mb-3 btn">
                                <Button type="submit" className="btn btn-primary">Login</Button>
                            </div>
                        </form>
                        <i className="bi bi-back" id="icon2" onMouseEnter={() => setBorder("#c83f49")}
                            onMouseLeave={() => setBorder("#fafafa")}>{" "}</i>
                    </Col>
                </Row>
              
                     
                    
            </Container>
            <Footer/>
        </React.Fragment>
    );
}