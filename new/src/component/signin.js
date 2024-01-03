import React from 'react';
import './signin.css';
import {Link} from 'react-router-dom';

function Signup() {
  return (
    <div className='signup1'>
      <form className='find'>
        <h3 className='b'>SIGN UP</h3>
        <label>UserName</label>
        <input type="text" className='te'/>

        <label>Email</label>
        <input type="email" className='te'/>

        <label>Phone Number</label>
        <input type="tel" className='te'/>

        <label>Enter Password</label>
        <input type="password" className='te'/>

        <label>ReEnter Password</label>
        <input type="password" className='te'/>
<Link to='/Login'>
        <button className='but'>SIGN UP</button></Link>
      </form>
    </div>
  );
}

export default Signup;