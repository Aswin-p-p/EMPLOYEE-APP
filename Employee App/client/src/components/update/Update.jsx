import React, { useEffect, useState } from 'react'
import './update.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Navbar from '../navbar/Navbar'


function Update() {
const {id} = useParams()
const [user,setuser] =useState([]) // y using []
console.log(id);

 useEffect(()=>{
  axios.get(`http://localhost:8080/register/single-view/${id}`).then((response)=>{
   setuser(response.data.data)
}).catch((error)=>{
  console.log(error);
})
 },[])
 console.log(user);

 const change = (e)=>{
  const {name, value} = e.target
      
  setuser({...user,[name]:value})

}

const sub = (e)=>{
  e.preventDefault()
axios.post(`http://localhost:8080/register/updateuser/${id}`,user).then((response)=>{
 console.log("respose--------",response);
})

}
  
  return (
    <>
    <Navbar/>
    <form >
     <div className='form'>
 
         <h3 align="center">Update Form</h3>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Name</label>
     <input type="text" class="form-control" onChange={change} value={user.name||""} name='name' />
   </div>
   <div class="mb-3">
     <label for="exampleInputPassword1" class="form-label">Email</label>
     <input type="email" class="form-control" onChange={change} value={user.email||""}  name='email' />
   </div>
   <div class="mb-3">
     <label for="exampleInputPassword1" class="form-label">Phone</label>
     <input type="text" class="form-control" onChange={change} value={user.number||""}  name='number' />
   </div>
   <div class="mb-3">
     <label for="exampleInputPassword1" class="form-label">Qualification</label>
     <input type="text" class="form-control" onChange={change} value={user.qualification||""} name='qualification'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputPassword1" class="form-label">Experience</label>
     <input type="text" class="form-control" onChange={change} value={user.experience||""} name='experience'  />
   </div> 
   <div class="mb-3">
     <label for="exampleInputPassword1" class="form-label">Add Photo</label>
     <input type="file" class="form-control" name='image' />
   </div> 
   <button type="submit" class="btn btn-primary" onClick={sub}>Submit</button>
   </div>
 </form>
   </>
  )
}

export default Update
