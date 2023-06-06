import {useSelector} from "react-redux";
import React from "react";

const Favorites = () => {
    const {myFavorites} = useSelector(state => state)
    return (
        <div>
            {
                myFavorites.map((character) => {
                    return (
                        <div>


                        </div>
                    )
                })
            }

        </div>
    )

}
export default Favorites;