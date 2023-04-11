import { Link } from "react-router-dom";
import style from "./Card.module.css"


export default function Card({id,name,species,gender,status,origin,image,onClose}) {
   return (
      <div className={style.container}>


         <button onClick={() =>onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
         <h2 className={style.titulo}>{name}</h2>
         </Link>
         <h2 className={style.titulo}>{species}</h2>
         <h2 className={style.titulo}>{gender}</h2>
         <h2 className={style.titulo}>{status}</h2>
         <h2 className={style.titulo}>{origin}</h2>
         <img  src={image} alt="" />
      </div>
   );
}
