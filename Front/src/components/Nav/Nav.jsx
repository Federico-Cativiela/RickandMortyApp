import React from "react"; 
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css"
import { Link } from "react-router-dom";


const Nav = ({onSearch})=>{
    
    return(

        <nav className={style.nav}>
               <SearchBar onSearch={onSearch}/>
               <Link to="/" className={style.about} style={{ color:'white'}}>LOGOUT</Link>
              <Link to="/about" >About</Link>
              <Link to="/home" >Home</Link>
              <Link to="/favorites" >Favorites</Link>
        </nav>
    )
}

export default Nav;

