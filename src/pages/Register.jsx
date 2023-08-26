import styled from "styled-components";
// import React, { useState } from 'react'


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b3BhY2l0eSUyMGxlc3MlMjB2ZWdldGFibGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  `;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;



// const App = () => {
  
//   const [form,setForm]=useState({});

//   const handleForm =(e)=>{
//     //console.log(e.target.value,e.target.name);
    
//     setForm({
//       ...form,
//       [e.target.name]:e.target.value
//     })
//   }

//   const handleSubmit=async (e)=>{
//     e.preventDefault();
//     const response = await fetch("http://localhost:8090/demo", {
//       method: "POST",
//       body:JSON.stringify(form),
//       headers:{
//         'Content-Type' : 'application/json'
//       }
//     });
//     const data =await response.json();
//     console.log(data);
//   }

const Register = () => {
  return (
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <p>{JSON.stringify(form)}</p>
    //     <span>name</span>
    //     <input type="text" name="name" onChange={handleForm}></input>
    //     <span>last name</span>
    //     <input type="text" name="lastname" onChange={handleForm}></input>
    //     <span>username</span>
    //     <input type="text" name="username" onChange={handleForm}></input>
    //     <span>email</span>
    //     <input type="text" name="email" onChange={handleForm}></input>
    //     <span>password</span>
    //     <input type="text" name="password" onChange={handleForm}></input>
    //     <span>confirm password</span>
    //     <input type="text" name="confirmpassword" onChange={handleForm}></input>
    //     <input type="submit"></input>
    //   </form>
    // </div>
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
// export default App;