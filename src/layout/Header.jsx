import React from 'react'
// #0D0D0D
// #212226
function Header() {
  return (
    <div>
      <div className="reserved bg-[#222327] text-white ">
        <div className="navbar  shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-primary text-white lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>About</li>
        <li>Games</li>
        <li>Contact us</li>
        
      </ul>
    </div>
    <a className="btn btn-ghost btn-primary text-white text-xl">FireSheild</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>About</a></li>
      <li><a>Games</a></li>
      <li><a>Contact us</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-ghost btn-primary text-white ">Login</a>
  </div>
</div>
      </div>
    </div>
  )
}

export default Header;