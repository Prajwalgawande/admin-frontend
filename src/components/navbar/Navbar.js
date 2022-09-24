import React from 'react'
import './navbar.css'
import logo from '../images/logo.png'
const Navbar = () => {
  return (

    <nav>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="leftItems">
          <i className="fa fa-globe" aria-hidden="true"></i>
          <i className="fa fa-th-large" aria-hidden="true"></i>
          <div className="name_admin">Welcome</div>
          <i className="fa fa-angle-down" aria-hidden="true"></i>
          <div className="letter_admin">A</div>
        </div>

      </div>
      <div className="sidenav">
        <div className="navigation">
          <p className='heading_nav'>Navigation</p>
          <div className="line_nav"></div>

          <div className="elements_nav">
            <div className="nav1">
              <i className="fa fa-laptop" aria-hidden="true"></i>
              Dashboard
            </div>
            <div className="nav2">
              <i className="fa fa-sticky-note" aria-hidden="true"></i>
              Reseller Sign Up
            </div>
            <div className="nav3">
              <i className="fa fa-address-book-o" aria-hidden="true"></i>
              Reseller
            </div>
            <div className="nav4">
              <i className="fa fa-user-circle-o" aria-hidden="true"></i>
              Client
            </div>
            <div className="nav5">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
              Message
            </div>
            <div className="nav6">
              <i className="fa fa-cog" aria-hidden="true"></i>
              Setting
            </div>

          </div>


          <p className='heading_nav'>Modules</p>
          <div className="line_nav"></div>
          <div className="elements_nav">
            <div className="nav7">
              <i className="fa fa-database" aria-hidden="true"></i>
              Add Blocker
            </div>
            <div className="nav8">
              <i className="fa fa-database" aria-hidden="true"></i>
              Application Firewall
            </div>
            <div className="nav9">
              <i className="fa fa-database" aria-hidden="true"></i>
              Bad bots
            </div>
            <div className="nav10">
              <i className="fa fa-database" aria-hidden="true"></i>
              Bad Words
            </div>
            <div className="nav11">
              <i className="fa fa-database" aria-hidden="true"></i>
              Malware Protection
            </div>
            <div className="nav12">
              <i className="fa fa-database" aria-hidden="true"></i>
              Network Security
            </div>
            <div className="nav13">
              <i className="fa fa-database" aria-hidden="true"></i>
              Proxy Protection
            </div>
            <div className="nav14">
              <i className="fa fa-database" aria-hidden="true"></i>
              Spam Protection
            </div>

          </div>


        </div>
      </div>
    </nav>

  )
}

export default Navbar