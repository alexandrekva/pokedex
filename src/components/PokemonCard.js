import React from 'react'
import './PokemonCard.css'

export default function PokemonCard(props) {
    return (
        <div className="card-container">
            <div className="card-background">
                <div className="pokemon-name">
                    <span>{props.pokemon.name}</span>
                    <span>#001</span>
                </div>
                <div className="pokemon-info">
                    <div className="pokemon-types">
                        {props.pokemon.types.map((item, index) => {
                            return (
                                <span>{item.type.name}</span>
                            )
                        })}
                    </div>
                    <img src={props.pokemon.sprites.front_default}/>
                </div>
            </div>

            {/* <img src={props.pokemon.sprites.front_default} />
            <h1 className="pokemon-name">{props.pokemon.name}</h1>
            <div className="pokemon-types">
                {props.pokemon.types.map((item, index) => {
                    return (
                        <h1 className="pokemon-type" key={index}>{item.type.name}</h1>
                    )
                })}
            </div> */}
        </div>
    )
}
