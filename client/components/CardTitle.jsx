import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { getTheCard, updateTheCard } from '../apis/cards'

function CardTitle() {
  const { id } = useParams()
  const [cardDetails, setCardDetails] = useState(null)

  useEffect(() => {
    getTheCard(id)
      .then((cardObj) => {
        const card = { name: cardObj.name, person_name: cardObj.person_name }
        setCardDetails(card)
        // console.log('the cardObj', card)
      })
      .catch((err) => console.log(err))
  }, [])


  const [edit, setEdit] = useState(false)

  const handleClick = () => {
    setEdit(true)
  }

  const handleChange = (evt) => {
    setCardDetails({
      ...cardDetails,
      [evt.target.name]: evt.target.value,
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log(cardDetails)
    updateTheCard(id, {
      name: cardDetails.name,
      person_name: cardDetails.person_name,
    }).catch((err) => console.log(err))
    setEdit(false)
  }

  const [cardStatus, setCardStatus] = useState(null)

  useEffect(() => {
    getTheCard(id)
      .then((cardObj) => {
        setCardStatus(cardObj.complete)
        console.log('the cardObj', cardObj.complete)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      {/* <Nav /> */}
      {edit === true ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Card Name:</label>
          <input
            id='name'
            name='name'
            type='text'
            initialvalue={cardDetails.name}
            onChange={handleChange}
          />

          <label htmlFor='person_name'>Your Friend's Name:</label>
          <input
            id='person_name'
            name='person_name'
            type='text'
            initialvalue={cardDetails.person_name}
            onChange={handleChange}
          />

          <button>Done</button>
        </form>
      ) : (
        <div className='card_title'>
          <h2> {cardDetails?.name} {cardDetails?.person_name} </h2>
          {!cardStatus && <button onClick={handleClick}>editCard</button>}
        </div>
      )}
    </>
  )
}

export default CardTitle
