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

      <div className="page-component">

      <div>
        <h5 className="display-6 text-warning">Add your message</h5>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="form-label" htmlFor="image">
              Image
            </label>
            <input
              className="form-control"
              type="file"
              id="image"
              placeholder="your image"
              onChange={(e) => {
                setNewMessage({
                  ...newMessage,
                  image: `/uploads/${e.target.files[0].name}`,
                })
                setImage(e.target.files[0])
              }}
            />
          </div>

          <div>
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <input
              className="form-control"
              type="text"
              id="message"
              placeholder="e.g. Well done"
              onChange={(e) =>
                setNewMessage({ ...newMessage, message: e.target.value })
              }
            />
          </div>

          <div>
            <label className="form-label" htmlFor="name">
              Your name
            </label>
            <input
              className="form-control"
              type="text"
              id="name"
              placeholder=""
              onChange={(e) =>
                setNewMessage({ ...newMessage, name: e.target.value })
              }
            />
          </div>
          <div className="mt-2">
            <button className="btn btn-outline-secondary">Add</button>
          </div>
        </form>
      </div>
      </div>
    </>
  )
}

export default AddMessage
