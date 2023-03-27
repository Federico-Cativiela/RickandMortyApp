import Card from '../Card/Card';
import Style from './Cards.module.css'

export default function Cards({characters, onClose}) {
   return( 
   <div className={Style.container}>
      
      {
      characters.map(({name,species, gender, image,id})=>{
         return(

            <Card
            name = {name}
            species={species}
            gender={gender}
            image={image}
            onClose = {()=>onClose(id)}
            id = {id}
            />
         )
      })}
   </div>
    )
}
