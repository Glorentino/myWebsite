import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css' 
import logo from '../images/logo.png'
const NavBar = () =>{
    return(
        <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Christopher Florentino
          </Navbar.Brand>
          <Navbar.Brand  href="#contact">
            Contact
          </Navbar.Brand>
        </Container>
        
      </Navbar>
      <hr />
      </>
    )
}
export default NavBar;