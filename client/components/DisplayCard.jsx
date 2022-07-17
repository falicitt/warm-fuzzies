import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getMessages, deleteMessage } from '../actions/messages'

import CardTitle from './CardTitle'
import EditMessage from './EditMessage'

function DisplayCard() {
  const messages = useSelector((state) => state.messages)

  const handleDelete = (e) => {
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

  const handleUpdate = (i) => {
    setActiveIndex(i)
  }

  return (
    <>
      <CardTitle />

      <div className="cards-container">
        <div className="row">
          {messages.map((message) =>
            activeIndex === message.id ? (
              <EditMessage
                cardId={id}
                id={message.id}
                name={message.name}
                image={message.image}
                message={message.message}
              />
            ) : (
              // WHERE TO PUT CARD CONTENTS
              <div
                key={message.id}
                className="card"
                style={{ transform: 'rotate(0deg)' }}
              >
                <div className="card__image">
                  <img className="card-img-top" src={message.image} alt="" />
                </div>

                <div className="card__body">
                  <div className="card_title">{message.message}</div>
                  <p>From {message.name}</p>

                  <div>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => handleUpdate(message.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={handleDelete}
                      value={message.id}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  )
}

export default DisplayCard
