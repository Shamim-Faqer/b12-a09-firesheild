import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {AuthContext} from "../provider/AuthProvider";

function Register() {
const {registerUser} = useContext(AuthContext);
const navigate = useNavigate();

const handleRegister = (e) => {
e.preventDefault();

const name = e.target.name.value;
const pnno = e.target.pnno.value;
const email = e.target.email.value;
const password = e.target.password.value;

registerUser(email, password)
.then(()=> {
  navigate("/login");
})
.catch(error=>console.log(error));



}

  return (
    
        <div>
<div className="reserved flex flex-col justify-center items-center">
  <div className="content">
    <h2 className='text-4xl font-bold p-3 py-12'>Create Your Account</h2>

  </div>
  <div className="body">
     <div className="card bg-[#222327] w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input name='name' type="text" className="input text-black" placeholder="Your name here" />
          <label className="label">Mobile No</label>
          <input name='pnno' type="text" className="input text-black" placeholder="Mobile no" />
          <label className="label">Email</label>
          <input name='email' type="email" className="input text-black" placeholder="Email" required />
          <label className="label">Password</label>
          <input name='password' type="password" className="input text-black" placeholder="Password" required />
          
          <button className="btn btn-primary mt-4">Login</button>
          <div>Dont have an Account ? <NavLink to={"/login"} className='text-secondary link link-hover'>Register</NavLink></div>
        </fieldset>
      </form>
    </div>
  </div>
</div>
    </div>
     
  )
}

export default Register;