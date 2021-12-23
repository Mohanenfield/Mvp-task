import React from 'react'
import "./topNavBar.css";
import { Navbar, Container } from 'react-bootstrap';

const TopNavbar = (props) => {
    return (
     
      <div className='top-navbar'>
       <div class="container">
  <div class="row">
    <div class="col-10">
      <p ><span class="top">Golden State </span><br /> {props.name}</p>
      <p class="top1"></p>
    </div>
    <div class="col-1">
      <p class="settings">Settings</p>
    </div>
    <div class="col-1">
      <p class="logout">Logout</p>
    </div>
  </div>
  </div>
      </div>
 
    )
}

export default TopNavbar;
