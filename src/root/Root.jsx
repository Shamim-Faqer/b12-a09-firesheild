import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../layout/Header';
import Footer from '../layout/Footer';


function Root() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Root