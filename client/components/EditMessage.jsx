import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { getMessages } from '../actions/messages'
import { editMessage } from '../apis/messages'
import CardTitle from "./CardTitle"

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
    // eslint-disable-next-line promise/catch-or-return
    editMessage(id, message)
    .then(()=> {
      dispatch(getMessages(props.cardId))
    })
  }

  return (
    <>
      <CardTitle />
    {
      <form onSubmit={handleSubmit(props.id)}>

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
          <input className="form-control" id='image' name='image' type='text' value={message.image} onChange={handleChange} />
        </div>

        <button className="btn btn-outline-secondary btn-sm">Done</button>
      </form>

      
    }
    </>
  )
}

export default EditMessage