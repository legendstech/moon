import React, { useState } from "react";
import { Container,Form,Card,Stack,InputGroup,Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function Login(){

    const[username,setUsername] = useState();
    const[password,setPassword] = useState();
    const[validate,setValidate] = useState(false);
    const[error,setErrormessage] = useState('')

    const navigate = useNavigate();

    const gotoregister = () => {
        // navigate('/register',{replace:true})
    }


  

    function gotowelcome (e){
        e.preventDefault();
        
    }

    return(
        <>
        <div className="loginbackground">
        <Container>
            <Row>
                <Col style={{backgroundColor:''}} lg={4} className=" position-absolute top-50 start-50 translate-middle " >
                    <Card  className="m-2 border-0 " style={{backgroundColor:'whitesmoke'}} >
                        <Form    className='m-2 shadow d-flex justify-content-center'style={{backgroundColor:'#84c8ed',borderTopLeftRadius:'100px',borderBottomRightRadius:'100px' }} >
                            <Container fluid>
                                <Stack gap={4} className="m-4">
                                    <h3 className='text-center mt-3 fw-bold'>Sign In</h3>
                                    <Form.Group>
                                        <InputGroup  >
                                            <InputGroup.Text className='bg-light'><i className="fa fa-user"></i></InputGroup.Text>
                                            <Form.Control type="text" placeholder='Username' value={username} onChange={(update)=>setUsername(update.target.value)} required/>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group>
                                        <InputGroup  >
                                            <InputGroup.Text className='bg-light'><i className="fa fa-lock"></i></InputGroup.Text>
                                            <Form.Control type="password" placeholder='Password' value={password} onChange={(update)=>setPassword(update.target.value)} required/>
                                            
                                        </InputGroup>
                                    </Form.Group>            
                                    </Stack>
                                    {validate && <p className="text-center text-danger">{error}</p>}
                                    <div className="d-flex justify-content-center mt-3 mb-3 ">
                                    <Button type="submit"  variant="outline-primary" onClick={gotowelcome} className="bg-dark rounded-pill"><span className="fw-bold  fs-5 ms-2 me-2" style={{letterSpacing:'2px'}}>Login</span></Button>

                                    </div>

                                    <p className="text-center" style={{fontSize:'13px'}}>Don't you have an account?<span  onClick={gotoregister} className="fs-6 text-decoration-underline text-primary" style={{cursor:'pointer'}}>Register</span></p>
                            </Container>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
        </>
    )
}