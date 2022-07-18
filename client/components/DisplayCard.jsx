import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
 
import { getMessages, deleteMessage } from '../actions/messages'
import { updateTheCard, getTheCard } from '../apis/cards'

import CardTitle from './CardTitle'
import EditMessage from './EditMessage'

import StackGrid from "react-stack-grid";

function DisplayCard() {
  const navigate = useNavigate()
 
  const messages = useSelector((state) => state.messages)
  const newMessage = useSelector((state) => state.newMessage)

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

   
  const handleComplete = () => {
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
  
  //for toggle the update button for the selected message
  const [activeIndex, setActiveIndex] = useState(null)

  const handleUpdate = (i) => { setActiveIndex(i) }
  const stopUpdate = () => { setActiveIndex(null)}

 //for sending link modal

  const [viewModal, setViewModal] = useState("none")

  const openModal = () => {
    setViewModal("block")
  }

  const closeModal = () => {
    setViewModal("none")
  }

  return (
    <>
      <CardTitle />
      <div className="page-component">

      <div className='buttons'>
        {!cardStatus && <button
          className="btn btn-outline-secondary btn-sm"
          onClick={redirectToAdd}>Add a message to this card</button>}  
        {!cardStatus && <button
          className="btn btn-outline-secondary btn-sm px-3"
          onClick={handleComplete}><span><i className="bi bi-check2-square"></i></span> Mark this card as complete</button>}
        <button id="myBtn"
          className="btn btn-outline-secondary btn-sm px-3"
          onClick={openModal}>Share the card</button>
      </div>
      {/* <!-- The Modal --> */}
      <div id="myModal" className="modal" style={{display: viewModal}}> 

        {/* <!-- Modal content --> */}
        <div className="modal-content">
          <div className="modal-header">
            {/* <span className="close" onClick={closeModal}>&times;</span> */}
            <h3>Share the love!</h3>
          </div>
          <div className="modal-body">
            <p>Copy this link and share with your friends to add more messages on it!</p>
            <p>{`http://localhost:3000/card/${id}`}</p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-outline-secondary btn-sm" onClick={closeModal}>Close</button>
          </div>
        </div>

      </div>
       
        
        <StackGrid columnWidth={250}>
          {messages.map((message) =>
            activeIndex === message.id ? (
              <EditMessage
                cardId={id}
                id={message.id}
                name={message.name}
                image={message.image}
                message={message.message}
                stopUpdate={stopUpdate}
              />
            ) : (
              // WHERE TO PUT CARD CONTENTS
              <div
                key={message.id}
                className="card"
            >
                 
                <div className="card__image">
                  <img className="card-img-top" src={message.image} alt={message.image} />
                </div>

                <div className="card__body">
                  <div className="card_title">{message.message}</div>
                  <p>From {message.name}</p>

                  <div>

                  {message.id === newMessage?.id && <button className="btn btn-outline-secondary btn-sm" onClick={() => handleUpdate(message.id)}>Edit</button>}

                  {message.id === newMessage?.id && <button className="btn btn-outline-secondary btn-sm" onClick={handleDelete} value={message.id}>Delete</button>}
                    
                  </div>
                  {/* <!-- Trigger/Open The Modal --> */}
                  </div>
               
              </div>
            )
          )}
       
          </StackGrid>
     
      </div>
     
    </>
  )
}

export default DisplayCard
