import React, { useState } from 'react'

const App = () => {
  
  const [form,setForm]=useState({});

  const handleForm =(e)=>{
    //console.log(e.target.value,e.target.name);
    
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit=async (e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:8080/demo", {
      method: "POST",
      body:JSON.stringify(form),
      headers:{
        'Content-Type' : 'application/json'
      }
    });
    const data =await response.json();
    console.log(data);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>{JSON.stringify(form)}</p>
        <span>name</span>
        <input type="text" name="name" onChange={handleForm}></input>
        <span>last name</span>
        <input type="text" name="lastname" onChange={handleForm}></input>
        <span>username</span>
        <input type="text" name="username" onChange={handleForm}></input>
        <span>email</span>
        <input type="text" name="email" onChange={handleForm}></input>
        <span>password</span>
        <input type="text" name="password" onChange={handleForm}></input>
        <span>confirm password</span>
        <input type="text" name="confirmpassword" onChange={handleForm}></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default App