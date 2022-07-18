import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
 
import { getMessages, deleteMessage } from '../actions/messages'
import { updateTheCard, getTheCard } from '../apis/cards'

import CardTitle from './CardTitle'
import EditMessage from './EditMessage'

function DisplayCard() {
  const messages = useSelector((state) => state.messages)
  const navigate = useNavigate()

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

  
  const [cardStatus, setCardStatus] = useState(null)


  useEffect(() => {
    getTheCard(id)
    .then((cardObj) => {
      setCardStatus(cardObj.complete)
      console.log('the cardObj', cardObj.complete)
    })
    .catch(err => console.log(err))

  }, [])

   
  const handleClick = () => {
    let result = window.confirm('Once completed the this card can not be edited or added to')  
    if(result) {
      updateTheCard(id, {complete: true})
      setCardStatus(true)
    } else {
      updateTheCard(id, {complete: false})
      setCardStatus(false)
    }

  } 
  
  const redirectToAdd = () => {
    navigate(`/card/${id}/add`)
  }

  const [activeIndex, setActiveIndex] = useState(null)

  const handleUpdate = (i) => { setActiveIndex(i) }
  

  return (
    <>
      <CardTitle />
      <div className="page-component">
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
                // style={{ transform: 'rotate(0deg)' }}
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
      </div>
      <div>
      {!cardStatus && <button className="btn btn-outline-secondary btn-sm" onClick={redirectToAdd}>Add a message to this card</button>}  
      {!cardStatus && <button className="btn btn-outline-secondary btn-sm px-3" onClick={handleClick}><span><i className="bi bi-check2-square"></i></span> Mark this card as complete</button>}
      </div>
    </>
  )
}

export default DisplayCard
