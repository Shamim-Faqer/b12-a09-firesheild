import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

function Header() {
  const { user, logoutUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        alert("Log Out Successfully");
      })
      .catch((error) => console.log(error));
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div className="bg-[#222327] text-white">
      <div className="navbar shadow-sm reserved">

        <div className="navbar-start">
         <div className="relative lg:hidden">

  <button
    onClick={handleMenuToggle}
    className="btn btn-ghost btn-primary text-white btn-circle"
  >
    {menuOpen ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M1 3h14v2H1zm0 4h14v2H1zm0 4h14v2H1z"/>
      </svg>
    )}
  </button>

  {menuOpen && (
    <div className="absolute left-0 mt-3 w-52 bg-[#222327] rounded-lg shadow-lg p-2 z-50">
      <NavLink to="/" onClick={handleMenuClose} className="block p-2 hover:bg-gray-700 rounded">
        Home
      </NavLink>
      <NavLink to="/about" onClick={handleMenuClose} className="block p-2 hover:bg-gray-700 rounded">
        About
      </NavLink>
      <NavLink to="/games" onClick={handleMenuClose} className="block p-2 hover:bg-gray-700 rounded">
        Games
      </NavLink>
      <NavLink to="/contact" onClick={handleMenuClose} className="block p-2 hover:bg-gray-700 rounded">
        Contact Us
      </NavLink>
    </div>
  )}
</div>

          <NavLink
            to="/"
            className="btn btn-ghost btn-primary text-white text-xl"
          >
            FireSheild
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <li>
              <NavLink to="/" className="link link-hover p-3">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="link link-hover p-3">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/games" className="link link-hover p-3">
                Games
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="link link-hover p-3">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

    
        <div className="navbar-end">
          {user ? (
            <button
              onClick={handleLogout}
              className="btn btn-ghost btn-primary text-white"
            >
              Log Out
            </button>
          ) : (
            <NavLink
              to="/login"
              className="btn btn-ghost btn-primary text-white"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;