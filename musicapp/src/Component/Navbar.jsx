import React, { useState } from 'react'
import logo from "/images.png";
import "./Navbar.css"
import { SignIn } from '../Services/firebase';


const Navbar = () => {
  const [name,setName] = useState(localStorage.getItem("name"));
  const [email,setEmail] = useState(localStorage.getItem("email"));
  const [image,setImage] = useState(localStorage.getItem("photo"));
  const LogIn = ()=>{
    SignIn();
  }
  const logout = () =>{
    localStorage.removeItem("name");
  localStorage.removeItem("email");
  localStorage.removeItem("photo");
  window.location.reload();  }
  return (
    <div className='navbar'>
        <nav>
          <div className='logo'>
        <img src={logo} alt="Please Wait" />  
        <div className='search'>
       <input type="text" placeholder='search your favourite music'/>
        <i class="fa-solid fa-magnifying-glass"></i>
      </div> 
      </div>
      {!name ? <button onClick={LogIn}>Log in</button>:<div className='Image'>
        <button onClick={logout}>Log out</button><img src={image} alt="" /></div>}
        </nav>
    </div>
  )
}

export default Navbar