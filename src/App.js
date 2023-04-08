
import './App.css'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'
import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'

const URL_BASE = `https://be-a-rym.up.railway.app/api/character`;
const API_KEY = '811d334a8722.483d2555e17dc79cecd5';

function App () {
  
  const [characters, setCharacters] = useState ([]); 

  const onSearch = (character)=>{
    fetch(`${URL_BASE}/${character}?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
    
  }

  const onClose= (id)=>{
  
      setCharacters(characters.filter(char=>char.id!==id))

  }

  return (

    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch = {onSearch}/>
      <Routes>
        <Route path='about' element= {<About/>}/>
        <Route path='home' element= {<Cards characters={characters} onClose = {onClose} />}/>
        <Route path='/detail/:detailId' element= {<Detail/>}/>
      </Routes>

     
      <hr />
      
    </div>
  )
}


export default App
