import React from "react";
import "./Card.css"
export const Card=({pokemon})=>{
    return  (

    <div className="card">
        <h3 className="cardName">{pokemon.name}</h3>
        <div className="cardImag">
            <img src={pokemon.sprites.front_default} alt=""/>
        </div>
        <div className="cardType">
            <div>タイプ</div>
            {pokemon.types.map((type)=>{
                return(
                    <div key={type.type.name}>
                        <span className="typeName">{type.type.name}</span>
                    </div>
                )
            })}
        </div>

         <div className="cardInfo">
            <div className="cardDate">
                <p className="title">重さ：{pokemon.weight}</p>
            </div>
        
            <div className="cardDate">
                <p className="title">高さ：{pokemon.height}</p>
            </div>
        
            <div className="cardDate">
                <p className="title">アビリティ：{pokemon.abilities[0].ability.name}</p>
            </div>
        </div>

    </div>
    );
};