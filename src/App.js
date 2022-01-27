import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,Route,Switch} from "react-router-dom";
import NavBar from './pages/NavBar';
import Footer from './pages/Footer';
import Movies from './pages/Movies';
import Home from './pages/Home';
import Show from './pages/Show';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Favorite from './pages/favorite';
function App() {

  return (
 <>

 <Router>
 <NavBar/>
   <Switch>
 <Route path="/" component={Home} exact />
 <Route path="/Movies" component={Movies} exact />
 <Route path="/Show/:id" component={Show} exact />
 <Route path="/LogIn/" component={LogIn} exact />
 <Route path="/SignUp/" component={SignUp} exact />
 <Route path="/favorite" component={Favorite} exact />
 
 </Switch>
 </Router>
 <Footer/>
 
 </>
  );
}

export default App;
