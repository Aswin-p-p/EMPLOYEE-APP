import React, { useState } from 'react'
import './addemploye.css'
import axios from "axios"



export default function Addemploye() {

 
  const [file,setfile] = useState("")
  




    const [employe,setemploye] = useState({
        name:"",
        email:"",
        number:"",
        qualification:"",
        password:"",
        image : ""
       

      })     
      
      const change = (e)=>{
        
      const {name, value} = e.target
      
        setemploye({...employe,[name]:value})  //?????????????
      
      }
      
      
      const sub = (e)=>{
        e.preventDefault()

   if(file){
    const data= new FormData();
    const filename=file.name
    data.append("name",filename)
    data.append("file",file)
    console.log("fileData",data);
    axios.post(`http://localhost:8080/register/upload`,data).then((response)=>{
      console.log(response);
    })
   }




        console.log("state",employe);
        axios.post(`http://localhost:8080/register/check-register`,employe).then((response)=>{
          console.log('response...............>',response);
          const data = response.employe
          console.log('data----------->',data);
          window.location.reload()
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
   <form >
    <div className='form'>

        <h3 align="center">Registeration Form</h3>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" name='name' onChange={change} />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input type="email" class="form-control" name='email'onChange={change} />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Phone</label>
    <input type="text" class="form-control" name='number'onChange={change} />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Qualification</label>
    <input type="text" class="form-control" name='qualification' onChange={change}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">password</label>
    <input type="password" class="form-control" name='password' onChange={change} />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Experience</label>
    <input type="text" class="form-control" name='experience' onChange={change} />
  </div> 
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Add Photo</label>
    <input type="file"  name='image' onChange={(e)=>{setfile(e.target.files[0]);console.log(e.target.files[0].name); setemploye({...employe,image:e.target.files[0].name})}}  />

  </div> 
  <button type="submit" class="btn btn-primary" onClick={sub}>Submit</button>
  </div>
</form>
  </>
  )
}
