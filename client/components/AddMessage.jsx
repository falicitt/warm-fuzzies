import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { createMessage } from '../actions/messages'
import { useNavigate } from 'react-router-dom'
import CardTitle from './CardTitle'
import { getTheCard } from '../apis/cards'
import { postImage } from '../apis/messages'

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

  const [image, setImage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', image)
    
    dispatch(createMessage(newMessage))
    postImage(formData)
      .then(() => navigate(`/card/${id}`))
      .catch(err => console.log('handle submit error', err))
    
  }
  
  const [cardStatus, setCardStatus] = useState(null)


  useEffect(() => {
    getTheCard(id)
    .then((cardObj) => {
      setCardStatus(cardObj.complete)
      // console.log('the cardObj', cardObj.complete)
    })
    .catch(err => console.log(err))

  }, [])
  

  return (
    <>
      <CardTitle />
      {cardStatus ? 'This card is complete, sorry you can not add more messages to it': <div>
      <h2>Add your message</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='image'>Image:</label>
          <input
            type='file'
            id='image'
            placeholder='your image'
            onChange={(e) => {
              setNewMessage({ ...newMessage, image: `/uploads/${e.target.files[0].name}` })
              setImage(e.target.files[0])
            }
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
      </div>}
    </>
  )
}

export default AddMessage
