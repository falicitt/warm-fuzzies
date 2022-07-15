import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getMessages } from '../actions/messages'
import { updateTheCard } from '../apis/cards' 

import CardTitle from './CardTitle'

function DisplayCard() {
  const messages = useSelector((state) => state.messages)

  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getMessages(id))
  }, [])
  

  const [completeCard, setCompleteCard] = useState({complete: false})

  const handleClick = () => {
    setCompleteCard({complete: true})
    updateTheCard(id, completeCard)
  }

  return (
    <>
      <CardTitle />
      <div className='container'>
        {messages.map((message) => (
          <li key={message.id}>
            <p>{message.name}</p>
            <p>{message.message}</p>
          </li>
        ))}
      </div>
      {!completeCard.complete && <button onClick={handleClick}>Mark this card as complete</button>}
    </>
  )
}

export default DisplayCard
