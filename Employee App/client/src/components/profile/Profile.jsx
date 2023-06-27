import React, { useEffect, useState } from 'react'
import './profile.css'
import axios from 'axios'
import Navbar from '../navbar/Navbar';

function Profile() {
  const user_id = localStorage.getItem("user_id")
    console.log(user_id);
   
const [user,setuser] = useState([])
console.log(user);

useEffect(()=>{
  axios.get(`http://localhost:8080/register/single-view/${user_id}`).then((response)=>{
      console.log(response);
       setuser(response.data.data)
       

           }).catch((error)=>{
            console.log(error);
            
           })
},[])



  return (
    <>
    <Navbar/>
   
        <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
        <div class="card ">
      
        <img src="https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?cs=srgb&dl=pexels-pixabay-36762.jpg&fm=jpg" class="card-img-top" alt="..."/>
        <div className="row">
          <h4 class="card-title">Name:{user.name}</h4>
          <h4 class="card-title">Email:{user.email}</h4>
          <h4 class="card-title">Number:{user.number}</h4>
          <h4 class="card-title">Qualification:{user.qualification}</h4> 
           
        </div>
      

      </div>
      </div>
  </div>
  

    </>
  )
}

export default Profile