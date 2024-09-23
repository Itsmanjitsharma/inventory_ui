import React, { useState } from "react";
import './SignUp.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();  // Initialize navigate

  const handleSignInClick = () => {
    navigate('/signin');  // Navigate to /signup
  };

  const handleSignUpClick= async () =>{
    const newUser = {username, email, password};
    alert(username+" "+email+" "+password);
    try {
    const response = await axios.post('http://localhost:2222/api/auth/signup', newUser);
    if (response.status === 200) {
        navigate('/signin');
      } else {
        console.error('Error registering user:', response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
    return (
        <div class="container">
            <div class="left-panel">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button onClick={handleSignInClick}>SIGN IN</button>
            </div>
            <div class="right-panel">
                <h2>Create Account</h2>
                <div class="social-icons">
                    <FacebookIcon className="icons" />
                    <GoogleIcon className="icons" />
                    <InstagramIcon className="icons" />
                </div>
                <p>or use your email for registration:</p>
                <input placeholder="Name" type="text" value={username}
                  onChange={(e) => setUsername(e.target.value)}/>
                <input placeholder="Email" type="email" value={email}
                  onChange={(e) => setEmail(e.target.value)}/>
                <input placeholder="Password" type="password" value={password}
                  onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={handleSignUpClick}>SIGN UP</button>
            </div>
        </div>
    );
}

export default SignUp;
