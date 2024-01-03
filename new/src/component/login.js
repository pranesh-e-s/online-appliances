import React from 'react';
import './login.css';
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-background">
      <div className="App">
        <form className="centered-form">
          <h3>LOGIN</h3>
          <input type="text" placeholder='ENTER USERNAME' required className='in1' />
          <br /><br />
          <input type="password" placeholder='ENTER PASSWORD' required className='in1' />
          <br /><br />
          <Link to='/Home'>
          <button>Login</button></Link>
          <br /><br />
          <hr />
            <p><b>Don't have an account? </b><Link to='/signup'>  <b className="b">Sign up</b></Link></p>
          <br />
        </form>
      </div>
    </div>
  );
}

export default Login;
