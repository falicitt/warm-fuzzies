import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getMessages } from '../actions/messages'

import CardTitle from './CardTitle'
import EditMessage from './EditMessage'

function DisplayCard() {
  const messages = useSelector((state) => state.messages)

  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getMessages(id))
  }, [])

  const [activeIndex, setActiveIndex] = useState(null)

  const handleUpdate = (i) => { setActiveIndex(i) }

  return (
    <>
      <CardTitle />
      <div className='container'>
        {messages.map((message) => (
          activeIndex === message.id ?
          <EditMessage cardId={id} id={message.id} name={message.name} image={message.image} message={message.message} />
          :
          <li key={message.id}>
            <p>{message.name}</p>
            <img src={message.image} />
            <p>{message.message}</p>
            <button onClick={() => handleUpdate(message.id)}>Edit</button>
          </li>
        ))}
      </div>
    </>
  )
}

export default DisplayCard
