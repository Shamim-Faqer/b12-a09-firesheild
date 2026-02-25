import React, { useContext } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {AuthContext} from "../provider/AuthProvider"

function Login() {

const {loginUser} = useContext(AuthContext);
const navigate = useNavigate();
const location = useLocation();

const from = location.state?.from?.pathname || "/";

const handleLogin = (e) => {
e.preventDefault();

const email = e.target.email.value;
const password = e.target.password.value;

loginUser(email, password)
.then(()=>{
  navigate(from,{replace: true});
})
.catch(error=>console.log(error));


}


  return (
    <div>
<div className="reserved flex flex-col justify-center items-center">
  <div className="content">
    <h2 className='text-4xl font-bold p-3 py-12'>Login Your Account</h2>

  </div>
  <div className="body">
     <div className="card bg-[#222327] w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input text-black" placeholder="Email" required/>
          <label className="label">Password</label>
          <input name='password' type="password" className="input text-black" placeholder="Password" required/>
          <div><a className="link link-hover text-secondary">Forgot password?</a></div>
          <button className="btn btn-primary mt-4">Login</button>
          <div>Dont have an Account ? <NavLink to={"/register"} className='text-secondary link link-hover'>Register</NavLink></div>
        </fieldset>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login;