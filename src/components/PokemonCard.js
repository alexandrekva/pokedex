import React from 'react'
import './PokemonCard.css'

export default function PokemonCard(props) {

    const formatNumber = (n) => {
        let str = n.toString().padStart(3, "0")
        return str
    }

    const capitalize = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    return (
        <div className="card-container">
            <div className="card-background">
                <div className="pokemon-name">
                    <span>{capitalize(props.pokemon.name)}</span>
                    <span>#{formatNumber(props.pokemon.id)}</span>
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
        </div>
    )
}
