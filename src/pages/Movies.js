import axios from "axios";
import { useEffect, useState } from "react";
import {  Row,Col, Form } from 'react-bootstrap';
import './Movies.css';
import {Link,} from "react-router-dom"
import like from './like.png';
import {useDispatch, useSelector } from "react-redux";
import{removeToFavorites,addToFavorites} from "../redux/action"

function Movies() {

const dispatch=useDispatch()
const state=useSelector(state=>state)
console.log(state,"state") 

const [users,setUsers]=useState([])
useEffect(()=>{
axios
.get('https://api.themoviedb.org/3/movie/popular?api_key=9e6e68da10912cb208a480beaf066249')
.then((res)=>{

  console.log(res.data.results  )
  setUsers(res.data.results)

})
.catch((err)=>{
  console.log(err)
})


},[])

const check=(e,user)=>{
const img=e.target
if(img.classList.contains("unlike")){
  img.classList.remove("unlike");
  img.classList.add("like");
  dispatch(addToFavorites(user))

}else{
  img.classList.remove("like");
  img.classList.add("unlike");
  dispatch(removeToFavorites(user))
}
  


 }






    return (
   <>
  <div className="car">
  <select className="car1" name="category" id="category">
    <option value="category">category</option>
    <option value="category">category</option>
    <option value="category">category</option>
    <option value="category">category</option>
  </select>
  </div>
  <Row xs={2}   md={3} lg={6} className="here">

{users.map((user)=>
{
return(

<Col key={user.id} >
<Link  to={`/Show/${user.id}`} >
  <img variant="top" className="im" alt="img" src={`https://image.tmdb.org/t/p/w500/${user.poster_path}`} />
  </Link>
    <Row >
      <Col>
      <h3>  {user.original_title}</h3>

    <p>Rate: {user.vote_average}</p>
    </Col>
    <Col>
    <img src={like}className="unlike" id="unq" alt="like!" width="30" height="30" onClick={(e)=>check(e,user)} />

    </Col>
    </Row>
    </Col>
   
   

)


}


)}

</Row>

   
   
   </>
    );
  }
  
  export default Movies;