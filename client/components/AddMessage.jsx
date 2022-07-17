import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { createMessage } from '../actions/messages'
import { useNavigate } from 'react-router-dom'
import CardTitle from './CardTitle'
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

  return (
    <>
      <CardTitle />
    <>
      
      <div className="py-5 text-center text-warning">
      <h4 className="display-5">Add your message</h4>
      </div>

      <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label" htmlFor='image'>Image</label>
          <input
            className="form-control" 
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
          <label className="form-label" htmlFor='message'>Message</label>
          <input
            className="form-control"
            type='text'
            id='message'
            placeholder='your message'
            onChange={(e) =>
              setNewMessage({ ...newMessage, message: e.target.value })
            }
          />
        </div>

        <div>
          <label className="form-label" htmlFor='name'>Your name</label>
          <input
            className="form-control" 
            type='text'
            id='name'
            placeholder='your name'
            onChange={(e) =>
              setNewMessage({ ...newMessage, name: e.target.value })
            }
          />
        </div>
        <div>
        <button className="btn btn-outline-secondary">Add</button>
        </div>
      </form>

</div>
    </>
    </>

  )
}

export default AddMessage
