import React from 'react'
import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <div>
<div className="reserved flex flex-col justify-center items-center">
  <div className="content">
    <h2 className='text-4xl font-bold p-3 py-12'>Login Your Account</h2>

  </div>
  <div className="body">
     <div className="card bg-[#222327] w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover text-secondary">Forgot password?</a></div>
          <button className="btn btn-primary mt-4">Login</button>
          <div>Dont have an Account ? <NavLink to={"/register"} className='text-secondary link link-hover'>Register</NavLink></div>
        </fieldset>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login;