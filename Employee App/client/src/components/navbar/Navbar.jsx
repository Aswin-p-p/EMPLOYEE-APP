import React from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'


export default function Navbar() {
  const navigate = useNavigate()
  const logout = () =>{  
    localStorage.removeItem("user_id",)
    navigate('/login')
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
            <a class="nav-link text-white "  href="/add">ADD EMPLOYEE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link  text-white" href="/viewuser">VIEW EMPLOYEE</a>
          </li>

          <li class="nav-item">
            <a class="nav-link  text-white" href="/login">LOGIN</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link  text-white" onClick={logout}>LOG OUT</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </>
  )
}
