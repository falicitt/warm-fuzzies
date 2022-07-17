import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { getTheCard } from '../apis/cards'


function CardTitle() {
  const { id } = useParams()
  const [cardDetails, setCardDetails] = useState(null)

  useEffect(() => {
    getTheCard(id)
    .then((cardObj) => {
      const card = {name: cardObj.name, person_name: cardObj.person_name}
      setCardDetails(card)
      // console.log('the cardObj', card)
    })
    .catch(err => console.log(err))

  }, [])

  return (
    <div className='card_title'>
      <h2>
        {cardDetails?.name} {cardDetails?.person_name}
      </h2>
    </div>
  )
}

export default CardTitle
