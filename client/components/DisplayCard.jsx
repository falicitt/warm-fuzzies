import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getMessages, deleteMessage } from '../actions/messages'

import CardTitle from './CardTitle'
import EditMessage from './EditMessage'

function DisplayCard() {
 
  const messages = useSelector((state) => state.messages)
  
  const handleDelete =(e) => {
  
    const messageId = e.target.value
    console.log(messageId)
    dispatch(deleteMessage(messageId, id))
  }

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
      <div className='cards-container'>
        {messages.map((message) => (
          activeIndex === message.id ?
          <EditMessage cardId={id} id={message.id} name={message.name} image={message.image} message={message.message} />
          :
          // <li key={message.id}>
          //   <p>{message.name}</p>
          //   <img src={message.image} />
          //   <p>{message.message}</p>
          //   <button onClick={() => handleUpdate(message.id)}>Edit</button>
          // </li>
          // <li key={message.id}>
          //   <p>{message.name}</p>
          //   <p>{message.message}</p>

          // WHERE TO PUT CARD CONTENTS
          <div key={message.id} className="card" style={{ transform: 'rotate(0deg)' }}>
            <div className="card_title">{message.message}</div>
            <div className="card__body">
              
                <p>From {message.name}</p>
                <div className="card__image">
                  <img src={message.image} alt="cat"/>
                </div>

                <button onClick={() => handleUpdate(message.id)}>Edit</button>
                <button className="btn btn-outline-secondary" onClick={handleDelete} value={message.id}>Delete</button>
            </div>
          </div>

          // </li>
        ))}
      </div>
    </>
  )
}

export default DisplayCard

// IDEAS
{/* <div className="cards-container">
<div className="card" style={{ transform: 'rotate(1deg)' }}>
  <div className="card__title">A lovely message for Ben</div>
  <div className="card__body">
    <p>From me</p>
    <div className="card__image">
      <img
        src="https://www.voicesofyouth.org/sites/voy/files/images/2020-08/finding-sunshine.jpg"
        alt=""
      />
    </div>
  </div>
</div> */}