import axios from 'axios'
import './viewuser.css'
import React, { useEffect, useState } from 'react'
function Viewuser() {
    const [user, setuser] = useState([])
          
    useEffect(() => {
     
       axios.get(`http://localhost:8080/register/view-user`).then((response)=>{
//    console.log('response----------->' ,response.data.data);
  console.log(response.data.details);
   setuser(response.data.details)

   
       }).catch((error)=>{
        console.log(error);
       })

    },[])
   console.log(user);


   const deleteuser=(id)=>{
        axios.get(`http://localhost:8080/register/delete/${id}`).then((response)=>{
            window.location.reload()
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



  {user.map((data)=>(
        <div id='main' class="row row-cols-1 row-cols-md-4 g-2">
        <div class="col">
        <div class="card ">
        <img src={`upload/${data.image}`} class="card-img-top" alt="card image"/>
        <div class="card-body">
          <h4 class="card-title">Name:{data.name}</h4>
          <h4 class="card-title">Email:{data.email}</h4>
          <h4 class="card-title">Number:{data.number}</h4>
          <h4 class="card-title">Qualification:{data.qualification}</h4>   
        </div>
        <button type="button" onClick={()=>{deleteuser(data._id)}} class="btn btn-danger">Delete</button>
        <a type="button" class="btn btn-primary" href={`/updateuser/${data._id}`}>Edit</a>
      </div>
      </div>
  </div>
  ))}



  

   

  </>
  )
}

export default Viewuser
