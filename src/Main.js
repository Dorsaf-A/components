import React from "react";
import Profile from './profile/ProfilPhoto.js';
import FullName from './profile/FullName.js';
import Adress from './profile/Adress.js';
import './App.css';
 
function Main (){
    return (
        <div id='root'>
        <div id="details">
        <Profile /><br></br>
        <ul>
        <li><b>Name & Family Name: </b><FullName /><br></br></li>
        <li><b>Adress: </b><Adress /> </li>
        </ul>
        </div>
        </div>
    );
  }

 
export default Main;