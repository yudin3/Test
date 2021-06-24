import React from 'react'
import Card from './CardItem.js'

export default function CardList(props) {
    return(
    <div className="cards__container">
    {props.CardProperties.map(card => {
      return <Card card={card} key={card.id}></Card>
        })
    }
    </div>
    )
}