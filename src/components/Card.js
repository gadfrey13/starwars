import React from 'react';


const Card = ({name,height,mass,hair_color,skin_color,eye_color,birth_year,gender,type}) => {
    return(
        <div className="bg-dark-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${name}?set=set${type}&50x50`} alt="Profile"/>
            <div className="f4">
            <p>Name: {name}  </p>
            <p>height: {height}</p>
            <p>mass: {mass}</p>
            </div>
        </div>
    )
}

export default Card;