import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getMessages } from '../actions/messages'

import CardTitle from './CardTitle'

function DisplayCard(props) {
 
  const messages = useSelector((state) => state.messages)
  
  const handleDelete =(e) => {
    
    const messageId = e.target.value
    // dispatch(removeMessage(message.id))
  }

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
            <button onClick={handleDelete} value={message.id}>Delete</button>
          </li>
          
          
           
            
        ))}
      </div>
    </>
  )
}

export default DisplayCard
