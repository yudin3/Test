import React, {useContext} from 'react'
import Context from '../context'

export default function Card({ card }) {

    const {removeCard} = useContext(Context)

    return (
      <div className="card">
        <div className="card__header">
          <h3 className="title">{card.name}</h3>
          <button onClick={() => removeCard(card.id)}>&times;</button>
        </div>
        <div className="card__content">
          <div className="card__row card__id">
            <span>id: {card.id}</span>
          </div>
          <div className="card__row card__number">
            <span>number: {card.number}</span>
          </div>
          <div className="card__row card__date">
            <span>date: {card.date}</span>
          </div>
          <div className="card__row card__type">
            <span>type: {card.type}</span>
          </div>
        </div>
      </div>
    )
  }