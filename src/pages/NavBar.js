 import {Link} from "react-router-dom"
 import { Navbar,Container,Nav } from 'react-bootstrap';
 import './Navbar.css';
 import {  useSelector }from 'react-redux';
 import {Langcontext} from '../App'
 import {useContext}from "react";

 function NavBar(){
  const Arabic={
  YALAMovies:"يلا افلام",
  home:"الرئيسيه",
  Movies:"افلام",
  SignUp:"تسجيل",
  LogIn:"تسجيل الدخول",
  Favorite:"الافلام المفضله"
  }
  const English={
    YALAMovies:"YALAMovies",
    home:"home",
    Movies:"Movies",
    SignUp:"Sign Up",
    LogIn:" Log In",
    Favorite:"Favorite "
    }
    
  const favorite=useSelector(state=>state.fav.fav)
  const len=favorite.length

  const{langcont,Setlangcontext} = useContext(Langcontext);
  console.log(langcont,"langContext")
  const translation=langcont==="ENGLISH"?English:Arabic;


return(

<Navbar className="navbar navbar-dark bg-dark"  expand="lg">
  <Container>
    <Navbar.Brand href="#home">{translation.YALAMovies}</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link className="navbar-brand" to="/">{translation.home}</Link>
        <Link className="navbar-brand" to="/Movies">{translation.Movies}</Link>
        <Link className="navbar-brand" to="/SignUp">{translation.SignUp}</Link>
        <Link className="navbar-brand" to="/LogIn">{translation.LogIn}</Link>
        <Link className="navbar-brand" to="/Favorite">{translation.Favorite}:<span>{len}</span></Link>
        <button className="btn btn-danger" onClick={()=>{Setlangcontext(langcont==="ENGLISH"?"ARABIC":"ENGLISH")}} >
        {langcont==="ENGLISH"?"ARABIC":"ENGLISH"}
        </button>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


);




 }

 export default NavBar;