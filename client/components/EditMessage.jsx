import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { getMessages } from '../actions/messages'
import { editMessage } from '../apis/messages'

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

  const handleSubmit = (id) => {
    editMessage(id, message)
    .then(()=> {
      dispatch(getMessages(props.cardId))
    })
  }

  return (
    <>
    {
      <form onSubmit={handleSubmit(props.id)}>

        <div>
          <label htmlFor='name'>Name:</label>
          <input id='name' name='name' type='text' value={message.name} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor='message'>Message:</label>
          <input id='message' name='message' type='text' value={message.message} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor='image'>Image:</label>
          <input id='image' name='image' type='text' value={message.image} onChange={handleChange} />
        </div>

        <button>Done</button>
      </form>
    }
    </>
  )
}

export default EditMessage