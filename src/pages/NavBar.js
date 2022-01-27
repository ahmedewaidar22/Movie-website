 import {Link} from "react-router-dom"
 import { Navbar,Container,Nav } from 'react-bootstrap';
 import './Navbar.css';
 import {  useSelector }from 'react-redux';

 function NavBar(){
  const favorite=useSelector(state=>state.fav)
  const len=favorite.length


return(

<Navbar className="navbar navbar-dark bg-dark"  expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link className="navbar-brand" to="/">home</Link>
        <Link className="navbar-brand" to="/Movies">Movies</Link>
        <Link className="navbar-brand" to="/SignUp">SignUp</Link>
        <Link className="navbar-brand" to="/LogIn">LogIn</Link>
        <Link className="navbar-brand" to="/Favorite">Favorite:<span>{len}</span></Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


);




 }

 export default NavBar;