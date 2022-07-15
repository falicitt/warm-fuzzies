import React, { useEffect } from 'react'
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

  return (
    <>
      <CardTitle />
      <div className='container'>
        {messages.map((message) => (
          <li key={message.id}>
            <p>{message.name}</p>
            <p>{message.message}</p>
            <EditMessage cardId={id} id={message.id} name={message.name} image={message.image} message={message.message} />
          </li>
        ))}
      </div>
    </>
  )
}

export default DisplayCard
