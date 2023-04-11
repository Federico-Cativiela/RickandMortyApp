import Card from '../Card/Card';
import Style from './Cards.module.css'

export default function Cards({characters, onClose}) {
   return( 
   <div className={Style.container}>
      
      {
      characters.map(({id,name,species, gender,status,origin,image})=>{
         return(

            <Card
            key = {id}
            id = {id}
            name = {name}
            species={species}
            gender={gender}
            status={status}
            origin={origin.name}
            image={image}
            onClose = {()=>onClose(id)}
            />
         )
      })}
   </div>
    )
}
