import React from 'react'
import { useSelector } from 'react-redux'

function CardTitle() {
  const card = useSelector((globalState) => globalState.card)

  return (
    <div className='card_title'>
      <h2>
        {card.name} {card.person_name}
      </h2>
    </div>
  )
}

export default CardTitle
