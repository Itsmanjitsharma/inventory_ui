import React, { useState } from "react";
import './SignIn.css';
import { useNavigate } from "react-router-dom";  // Import useNavigate
import { useAuth } from "./AuthContext";

const SignIn = () => {
  const navigate = useNavigate();  // Initialize navigate
  const { login } = useAuth();  // Destructure login function from context
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    // Simulate authentication
    const response = await fetch('http://localhost:2222/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log(data);
      const token = data.accessToken;  
      sessionStorage.setItem('token', token);
      sessionStorage.setItem("Username",data.username);
      login();  // Set authenticated to true
      navigate('/products');  // Redirect to the products page
  };
  const handleSignUpClick = () => {
    navigate('/signup');  // Navigate to /signup
  };

  return (
    <div className="container">
      <div className="left-panel">
        <h1>Hello, Friend!</h1>
        <p>Enter your personal details and start your journey with us</p>
        <button onClick={handleSignUpClick}>SIGN UP</button>  {/* Attach onClick handler */}
      </div>
      <div className="right-panel">
        <h2>Sign In</h2>
        <p>or use your account:</p>
        <input 
          placeholder="Username" 
          type="username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          placeholder="Password" 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignIn}>SIGN IN</button> {/* Handle sign in */}
        </div>
    </div>
  );
}

export default SignIn;
