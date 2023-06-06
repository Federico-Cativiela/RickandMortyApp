import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import {useState , useEffect} from 'react';
import { addFavorite, deleteFavorite } from "../../redux/actions";
import React from "react";



export default function Card({id,name,species,gender,status,origin,image,onClose}) {
   const dispatch = useDispatch ();
   const myFavorites = useSelector(state => state.myFavorites)
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         dispatch(deleteFavorite(id));
      }
      else{
         setIsFav(true);
         dispatch(addFavorite({id,name,species,gender,status,origin,image,onClose}));

      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   });

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

         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}

      </div>
   );
}
