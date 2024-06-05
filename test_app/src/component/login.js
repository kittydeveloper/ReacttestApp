// src/Login.js

import React, { useState } from 'react';
import axios from 'axios'

function Login() {
    const apiUrl="http://localhost:8000"
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
  const [input, setInput] = useState({ username: "", userpassword: "" });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Email:', email);
//     console.log('Password:', password);
//     // Here you can add the logic to send the data to the server
//   };

const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const formSubmitter = async (e) => {
    e.preventDefault();
    try {
        console.log(input)
      const response = await axios.post(`${apiUrl}/login`, input);
      console.log(response)
      if (response.status === 200) {
        // setUserdashboard(true) // its for logo trigger
        // setLogoTrigger(prev => !prev)
        // loginUser(input.username);
        localStorage.setItem("username", input.username);
        // setSuccessMessage("Successfully Added");
        // navigate("/home/dashboard");
        // localStorage.setItem("auth", true);

      }
      else {
       console.log("not login")
      }
    } catch(err) {
    console.log(err)
    }
  };


  return (
    <div className="login-container">
      <h2></h2>
      <form >
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
                type="text"
                name="username"
                autoComplete="off"
                onChange={handleChange}
                required
              />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
                type='text'
                name="userpassword"
                autoComplete="off"
                onChange={handleChange}
                required
              />
        </div>
        <button type="submit" onClick={formSubmitter}>Login</button>
      </form>
    </div>
  );
}

export default Login;
