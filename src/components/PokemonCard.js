import React from 'react'
import './PokemonCard.css'

export default function PokemonCard(props) {
    return (
        <div className="card-container">
            <img src={props.pokemon.sprites.front_default} />
            <h1 className="pokemon-name">{props.pokemon.name}</h1>
            <div className="pokemon-types">
                {props.pokemon.types.map((item, index) => {
                    return (
                        <h1 className="pokemon-type" key={index}>{item.type.name}</h1>
                    )
                })}
            </div>
        </div>
    )
}
