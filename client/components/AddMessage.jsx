import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { createMessage } from '../actions/messages'
import { useNavigate } from 'react-router-dom'
import CardTitle from './CardTitle'

function AddMessage() {
  const { id } = useParams()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [newMessage, setNewMessage] = useState({
    name: '',
    message: '',
    image: '',
    card_id: id,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createMessage(newMessage))
    navigate(`/card/${id}`)
  }

  return (
    <>
      <CardTitle />
      <div>Add your message</div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='image'>Image:</label>
          <input
            type='text'
            id='image'
            placeholder='your image'
            onChange={(e) =>
              setNewMessage({ ...newMessage, image: e.target.value })
            }
          />
        </div>

        <div>
          <label htmlFor='message'>Message:</label>
          <input
            type='text'
            id='message'
            placeholder='your message'
            onChange={(e) =>
              setNewMessage({ ...newMessage, message: e.target.value })
            }
          />
        </div>

        <div>
          <label htmlFor='name'>Your name:</label>
          <input
            type='text'
            id='name'
            placeholder='your name'
            onChange={(e) =>
              setNewMessage({ ...newMessage, name: e.target.value })
            }
          />
        </div>

        <button>Add</button>
      </form>
    </>
  )
}

export default AddMessage
