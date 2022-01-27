import { useState } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const LogIn =()=>{

const [info,setInfo]=useState({
    name:"ali",
    title:"tester"


})

const changeValue= (e) =>{

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  

  if(e.target.value.match(mailformat))
  {
    document.getElementById("something").style.color = "green";
  document.getElementById("something").innerHTML = "Valid email address!";
  }
  else
  {
    document.getElementById("something").style.color = "red";

  document.getElementById("something").innerHTML = "You have entered an invalid email address!";
  }

}

const checkpassword=(e) =>{

  console.log(e.target.value);
  var pass=e.target.value;

  console.log(pass.length);
  if (pass.length>=8){
    document.getElementById("some").innerHTML = "ok!";

  }
else{

  document.getElementById("some").innerHTML = "Enter full password!";

}
}

const myFunction=() => {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}


return(

    <form  name="form" action="/formsg.js" >  
  <div className="form-group">
  <label >Name</label>
    <input type="text" className="form-control" name="text"
    onChange={(e)=> changeValue(e) }
    required/>
    <h6 id="something"></h6>
  </div>
  <div className="form-group">
    <label >Password</label>
    <input type="password" className="form-control"  id="myInput"
    onChange={(e)=> checkpassword(e)}
    required  />
    <h6 id="some" ></h6>
  </div>
  <input type="checkbox" 
  onClick={(e)=>myFunction(e)}/>Show Password
  <br/>
  
  <button type="submit" className="btn btn-primary" >Submit</button>
 
  


</form>


)

}

export default LogIn;