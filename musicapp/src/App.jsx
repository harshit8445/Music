import React, { useState } from 'react'
import Home from './Pages/Home';

const App = () => {
  console.log("localstorage data is",localStorage);
  const [name,setName] = useState(localStorage.getItem("name"));
  const [email,setEmail] = useState(localStorage.getItem("email"));
  const [image,setImage] = useState(localStorage.getItem("photo"));
  return (
  <>
  <Home/>
  
  {/* <h1>
      <button onClick={signInWithGoogle}>Sign in with google</button>
      {name ? <h1>Hello {name}</h1> : <h1>Sign in plwase</h1>}
      {image ? <img src={image}></img> : "No image" }
      {email ? <h2>Your {email}</h2> : <h2>Sign in plwase</h2>}
      </h1> */}
  </>
    
  )
}

export default App