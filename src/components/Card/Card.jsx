import style from "./Card.module.css"

export default function Card({name,species,gender,image,onClose}) {
   return (
      <div className={style.container}>

         <button onClick={onClose}>X</button>
         <h2 className={style.titulo}>{name}</h2>
         <h2 className={style.titulo}>{species}</h2>
         <h2 className={style.titulo}>{gender}</h2>
         <img  src={image} alt="" />
      </div>
   );
}
