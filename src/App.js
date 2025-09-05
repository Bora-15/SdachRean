import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Includes Popper
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BTLogo from './images/BTLogo.png';
import banner from './images/BANNER.jpg';
import slideshow1  from './images/SlideShow1.png';
import slideshow2 from './images/SlideShow2.jpg';
import slideshow3 from './images/SlideShow3.jpg';
import slidebarleft1 from './images/Ads2.jpg';
import slidebarleft2 from './images/Ads1.jpg';
import slidebarright1 from './images/Ads3.jpg';
import slidebarright2 from './images/Ads4.jpg';
import footer from './images/Footer.jpg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';


function App() {
  return (
    <Container>
      <div className='Row'>
        <div className="Col-lg-12 border">
        <img src={banner} width="100%" />
        </div>
      </div>
      <div className='Row'>
        <div className="Col-lg-12 border">
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={BTLogo} width="32" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">About us</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              sign in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </div>
      </div>
      <div className='Row'>
        <div className="Col-lg-12 border">
        <div> 
  
  <Carousel> 
    <Carousel.Item interval={3500}> 
    <img 
      className="d-block w-100"
      src={slideshow1}
      alt="Image One"
    /> 
    <Carousel.Caption> 
      <h3>Label for first slide</h3> 
      <p>Sample Text for Image One</p> 
    </Carousel.Caption> 
    </Carousel.Item> 
    <Carousel.Item interval={3500}> 
    <img 
      className="d-block w-100"
      src={slideshow2} 
      alt="Image Two"
    /> 
    <Carousel.Caption> 
      <h3>Label for second slide</h3> 
      <p>Sample Text for Image Two</p> 
    </Carousel.Caption> 
    </Carousel.Item>
     <Carousel.Item interval={3500}> 
    <img 
      className="d-block w-100"
      src={slideshow3}
      alt="Image One"
    /> 
    <Carousel.Caption> 
      <h3>Label for Third slide</h3> 
      <p>Sample Text for Image One</p> 
    </Carousel.Caption> 
    </Carousel.Item> 
  </Carousel> 
  </div>
  </div>
      </div>
      <div className='Row'>
        <div className="Col-lg-2 border">
         <img src={slidebarleft1} width="100%" />
         <br/><br/>
         <img src={slidebarleft2} width="100%" />
        </div>
        <div className="Col-lg-8 border">
        content
        </div>
        <div className="Col-lg-2 border">
          <img src={slidebarright1} width="100%" />
          <br/><br/>
          <img src={slidebarright2} width="100%" />
        </div>
      </div>
      <div className='Row'>
        <div className="col-lg-12 border">
        <img src={footer} width="100%" />
        </div>
      </div>
    </Container>
  );
}

export default App;