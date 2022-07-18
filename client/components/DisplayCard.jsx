import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
 
import { getMessages, deleteMessage } from '../actions/messages'
import { updateTheCard, getTheCard } from '../apis/cards'

import CardTitle from './CardTitle'
import EditMessage from './EditMessage'

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
      <div className='cards-container'>
        {messages.map((message) => (
          activeIndex === message.id ?
          <EditMessage cardId={id} id={message.id} name={message.name} image={message.image} message={message.message} />
          :
          // WHERE TO PUT CARD CONTENTS
          <div key={message.id} className="card" style={{ transform: 'rotate(0deg)' }}>
            
            <div className="card__body">
              
              <div className="card_title">{message.message}</div>
              <div className="card__image">
                <img src={message.image} alt="cat"/>
              </div>
              <p>From {message.name}</p>

              {message.id === newMessage?.id && <button className="btn btn-outline-secondary" onClick={() => handleUpdate(message.id)}>Edit</button>}
              {message.id === newMessage?.id && <button className="btn btn-outline-secondary" onClick={handleDelete} value={message.id}>Delete</button>}
            </div>
          </div>

        ))}
      </div>
      {!cardStatus && <button onClick={redirectToAdd}>Add a message to this card</button>}  
      {!cardStatus && <button onClick={handleComplete}>Mark this card as complete</button>}
      {/* {!cardStatus && <button onClick={handleClick}>Share the link with your friends to add messages!</button>} */}

      {/* <!-- Trigger/Open The Modal --> */}
      <button id="myBtn" onClick={openModal}>Share the card</button>

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
            <button onClick={closeModal}>Close</button>
          </div>
        </div>

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