import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Banner from '../img/Banner.png';
import Sparrow_Bird from '../img/Sparrow_Bird.png';
import Typography from '@material-ui/core/Typography';
import ChatBox from './ChatBox';


  

export default class Home extends Component {
  constructor() {
    super();
    this.state = {isOpen: false};
    this.handleOpen = this.handleOpen.bind(this)
  }

  handleOpen = e =>{
    this.setState({
      isOpen: !this.state.isOpen
    });
    console.log(this.state.isOpen)
  }

    render() {
        return (    
            
      <div className="font_all">
        <div className="bg-img" style={{  backgroundImage: `url(${Banner})`}}> 
        <Navbar  expand="lg" className="nav">
        <Navbar.Brand href="#home"  className="text-white font-weight-bolder maxeon_nav">Maxeon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Link href="#home"  className="text-white" md={{ span: 4, offset: 4 }}>Products </Nav.Link>
        <Nav.Link href="#link"  className="text-white" md={{ span: 4, offset: 4 }}>Features </Nav.Link>
        <Nav.Link href="#home"  className="text-white">Use Cases </Nav.Link>
        <Nav.Link href="#link"   className="text-white">Pricing </Nav.Link>
        <Nav.Link href="#link"   className="text-white">
          <Button  variant="light"
          style={{borderRadius:"50px", height:"25px", width:"60px", fontFamily:"headfont", backgroundColor:"white", padding:"0px"}}>
            Login
          </Button>
          </Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
<div className="container">
<div className="line mt-4">
  <Typography variant="h2" color="white" style={{fontWeight:"bold"}}> 
  Where <br />
  words <br />
  fail, <br />
  music <br />
  speaks. <br />
  </Typography>
</div>
</div>
<div className="container">
<div className="d-flex justify-content-end mr-4 ml-auto mt-5">
<Button variant="contained" className="button1 mt-5" onClick={this.handleOpen} >
  <img height={30} width={22} src={Sparrow_Bird} />
  </Button> 

<ChatBox isOpen={this.state.isOpen}/>
</div>
</div>
</div>
</div>
    
     

        );
}
}
