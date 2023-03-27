import React from "react"; 
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css"


const Nav = ({onSearch})=>{
    
    return(
        <nav className={style.nav}>
               <SearchBar onSearch={onSearch}/>
        </nav>
    )
}

export default Nav;

