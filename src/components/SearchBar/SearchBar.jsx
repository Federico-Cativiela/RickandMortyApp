import { useState } from "react";


export default function SearchBar({onSearch}) {
   const [idEstado, setIdEstado] = useState (""); 
   const handleOnChange  = (event)=>{
      console.log(event.target.value);
      
             setIdEstado (event.target.value);


   }

console.log (idEstado);
   return (

      <div>
      <input onChange={handleOnChange} type='search' />
      <button onClick={()=>onSearch(idEstado)}>Agregar</button> 
      </div>
   );
}


