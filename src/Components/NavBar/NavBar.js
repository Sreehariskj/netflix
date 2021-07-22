import React from 'react'
import './NavBar.css'
 
 
 function NavBar() {
   
  return (
    <div className="navbar">
      <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo"/>
   
      <div className="left-side">
      
        <h7>Home</h7>
        <h7>Tv Show</h7>
        <h7>Movies</h7>
        <h7>Recentely Added</h7>
        <h7>My List</h7>
      </div>
      <div className="right-side">
      
       <i class="fa fa-search" aria-hidden="true"></i>
       <h7> </h7>
        <h7>KIDS</h7>
        <h7>DVD</h7>
       <i class="fa fa-bell" aria-hidden="true"></i>
       <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar"/>
        
      <i class="fa fa-caret-down" aria-hidden="true"></i>
      </div>
   </div>
  );
}

export default NavBar;