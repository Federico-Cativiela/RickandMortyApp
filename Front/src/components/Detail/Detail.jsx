import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

const URL_BASE = `https://be-a-rym.up.railway.app/api/character`;
const API_KEY = '811d334a8722.483d2555e17dc79cecd5';



export default function Detail (){
    const {detailId} = useParams()
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`${URL_BASE}/${character}?key=${API_KEY}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch(function (err) {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

return(
    <div>
        <h1 style={{color: 'white'}}>Nombre:{character?.name}</h1>
        <h3 style={{color: 'white'}}>Status:{character?.status}</h3>
        <h3 style={{color: 'white'}}>Specie:{character?.specie}</h3>
        <h3 style={{color: 'white'}}>Gender:{character?.gender}</h3>
        <h3 style={{color: 'white'}}>Origin:{character?.origin?.name}</h3>
        <img src={character?.image} alt={character?.name} />
 
    </div>
)
}