import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

import Profile from '../profile/Profile'

function Login() {
  const navigate = useNavigate()
   const {id} = useParams()
    const [user,setuser] = useState({
        email : "",
        password : ""
    })



 const change = (e)=>{
const {name,value} = e.target
  setuser({...user,[name]:value})
 }



 const submit = (e)=>{
    e.preventDefault()
    axios.post(`http://localhost:8080/register/login/${id}`,user).then((response)=>{
     console.log("response======>",response);
     if(response.data.success==true){
      localStorage.setItem("user_id",response.data.data._id)
       navigate('/profile')
     }  
     
    }).catch((error)=>{
        console.log(error);
    })

     }



  return (
    <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid bg-primary text-white ">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link text-white "  href="add">ADD EMPLOYEE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link  text-white" href="viewuser">VIEW EMPLOYEE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link  text-white" href="login">LOGIN</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    <center>
      <h1>Login</h1>
      <div class="login">
      <form>
<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Email address</label>
  <input type="email" class="form-control" onChange={change} name='email'  aria-describedby="emailHelp"/>
</div>
<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label" name='password'>Password</label>
  <input type="password" class="form-control" name='password' onChange={change} />
</div>
<button type="submit" class="btn btn-primary" onClick={submit}>Submit</button>

</form>
      </div>
    </center>
  </>
  )
}

export default Login


