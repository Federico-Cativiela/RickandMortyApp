import './App.css'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'
import { useState, useEffect } from 'react'
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'
import React from 'react'


const URL_BASE = `https://be-a-rym.up.railway.app/api/character`;
const API_KEY = '811d334a8722.483d2555e17dc79cecd5';


function App () {
  
  const [characters, setCharacters] = useState ([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [acces, setAcces] = useState(false); 

  const username = "federicocativiela@hotmail.com";
  const password = "123asd";

  const login = (userData) => {
   if(userData.username === username && userData.password === password){
   setAcces(true)
   navigate('/home');
   }
  }

  useEffect(() => {
    !acces && navigate('/');
  }, [acces])
  

  function onSearch(character) {
        fetch(`${URL_BASE}/${character}?key=${API_KEY}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.name) {
                    setCharacters((oldChars) => [...oldChars, data])
                } else {
                    window.alert('No hay personajes con ese ID')
                }
            })

    }

  const onClose= (id)=>{
  
      setCharacters(characters.filter(char=>char.id!==id))

  }

  return (

    <div className='App' style={{ padding: '25px' }}>
      {location.pathname === '/' ? <Form login={login}/> : <Nav onSearch = {onSearch}/>}
      
      <Routes>
        <Route path='about' element= {<About/>}/>
        <Route path='home' element= {<Cards characters={characters} onClose = {onClose} />}/>
        <Route path='/detail/:detailId' element= {<Detail/>}/>
        <Route path='favorites' element= {<Favorites/>}/>
      </Routes>

     
      <hr />
      
    </div>
  )
}


export default App;