import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import Masonry from 'react-smart-masonry'
 
import { getMessages, deleteMessage } from '../actions/messages'
import { updateTheCard, getTheCard } from '../apis/cards'

import CardTitle from './CardTitle'
import EditMessage from './EditMessage'


function DisplayCard() {
  const navigate = useNavigate()
 
  const messages = useSelector((state) => state.messages)
  const newMessage = useSelector((state) => state.newMessage)
  const token = useSelector((state) => state.loggedInUser.token)

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

  const breakpoints = {
    samll: 400, mobile: 700, tablet: 900, desktop: 1400
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
    setCopyButton('copy url')
  }

  const [ copyButton, setCopyButton ] = useState('copy url')
  const copyUrl = async () => {
    const text = `http://localhost:3000/card/${id}`
    await navigator.clipboard.writeText(text)
    setCopyButton('copied to clipboard')
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
            {/* <div className="tooltip"> */}
            <p>{`http://localhost:3000/card/${id}`}</p>
            
              <button className="btn btn-outline-secondary btn-sm" onClick={copyUrl}>
                {copyButton}
              </button>
          </div>
          <div className="modal-footer">
            <button className="btn btn-outline-secondary btn-sm" onClick={closeModal}>Close</button>
          </div>
        </div>

      </div>
        <div className="cards-container">
          <div>
            <Masonry breakpoints={breakpoints} columns={{ samall: 1, mobile: 2, tablet: 3, desktop: 4 }} gap={10} autoArrange={true} >     
            {messages.map((message) =>
              activeIndex === message.id ? (
                <EditMessage
                  key={message.id}
                  cardId={id}
                  id={message.id}
                  name={message.name}
                  image={message.image}
                  message={message.message}
                  stopUpdate={stopUpdate}
                />
              ) : (
              // WHERE TO PUT CARD CONTENTS
                <div key={message.id} className="card">
                  <div className="card__image mt-2">
                    <img className="card-img-top" src={message.image} alt="" />
                  </div>
                  <div className="card__body">
                    <div className="card_title">{message.message}</div><br></br>
                    <p className="from">{message.name}</p>
                    <div>
                    {token? 
                  <>
                  <button className="btn btn-outline-secondary btn-sm" onClick={() => handleUpdate(message.id)}>Edit</button>
                  <button className="btn btn-outline-secondary btn-sm" onClick={handleDelete} value={message.id}>Delete</button>
                  </>
                  :
                   message.id === newMessage?.id && 
                  <>
                    <button className="btn btn-outline-secondary btn-sm" onClick={() => handleUpdate(message.id)}>Edit</button>

                    <button className="btn btn-outline-secondary btn-sm" onClick={handleDelete} value={message.id}>Delete</button>
                    </>
                  }
                    </div>
                  </div>
                </div>
              )
            )}
            </Masonry>
          </div>
        </div>
      </div>
      <div>
      </div>
     
    </>
  )
}

export default DisplayCard

