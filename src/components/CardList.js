import React from 'react';
import Card from './Card';
import { isObjectTypeIndexer } from '@babel/types';
const CardList = ({people}) => {
    console.log(people);
    const cardComponent = people.map((user,index) => {

        const regex = /[0-9]/g;//regex of 0-9
        const found = user.name.match(regex);//user name has numbers

        if(found != null && found.length > 0){//not null and length > 0
            user.type = "1";
        }else{
            user.type = "2";
        }

        return (
        <Card 
            key={index}
            name={user.name}
            height={user.height}
            mass={user.mass}
            hair_color={user.hair_color}
            skin_color={user.skin_color}
            eye_color={user.eye_color}
            birth_year={user.birth_year}
            gender={user.gender}
            type={user.type}
        />
        );
    })
    return (
        <div>
            {cardComponent}
        </div>
    )
}

export default CardList;