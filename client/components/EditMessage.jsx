import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { getMessages } from '../actions/messages'
import { editMessage, postImage } from '../apis/messages'

function EditMessage(props) {

  const [message, setMessage] = useState({
    id: props.id,
    name: props.name,
    message: props.message,
    image: props.image
  })

  const handleChange = (evt) => {
    setMessage({
      ...message,
      [evt.target.name]: evt.target.value
    })
  }

  const dispatch = useDispatch()

  const [image, setImage] = useState('')

  const handleSubmit = (e) => {
    // eslint-disable-next-line promise/catch-or-return
    e.preventDefault()
    if(image) {
      const formData = new FormData()
      formData.append('image', image)
      postImage(formData)
      .catch((err) => console.log('handle submit error', err))
      }
  
    editMessage(props.id, message)
    .then(()=> {
      dispatch(getMessages(props.cardId))
      props.stopUpdate()
    })
    .catch((err) => console.log(err.message))
  }

  return (
    <>
      {<div className="edit-message">
        <h5 className="message-edit display-6">Edit Your Message</h5>
        <form  onSubmit={handleSubmit}>
          <div>
            <label className="form-label" htmlFor='name'>Name</label>
            <input className="form-control" id='name' name='name' type='text' value={message.name} onChange={handleChange} />
          </div>

          <div>
            <label className="form-label" htmlFor='message'>Message</label>
            <input className="form-control" id='message' name='message' type='text' value={message.message} onChange={handleChange} />
          </div>

          <div>
            <label className="form-label" htmlFor='image'>Image</label>
            <input className="form-control" id='image' name='image' type='file' onChange={(e) => {
                setMessage({
                  ...message,
                  image: `/uploads/${e.target.files[0].name}`,
                })
                setImage(e.target.files[0])
              }} />          </div>

          <button className="btn btn-outline-secondary btn-sm mt-2">Done</button>
        </form>
      </div> }
    </>
  )
}

export default EditMessage