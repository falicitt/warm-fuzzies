import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import Masonry from 'react-smart-masonry'
 
import { getMessages, deleteMessage } from '../actions/messages'
import { updateTheCard, getTheCard } from '../apis/cards'
import Music from './Music'
import CardTitle from './CardTitle'
import EditMessage from './EditMessage'
import Nav from './Nav'



function DisplayCard() {
  const navigate = useNavigate()
 
  const messages = useSelector((state) => state.messages)
  const newMessage = useSelector((state) => state.newMessage)
  const token = useSelector((state) => state.loggedInUser.token)

  const handleDelete =(e) => {
    const messageId = e.target.value
    dispatch(deleteMessage(messageId, cardId))
  }

  const dispatch = useDispatch()
  const { cardUrl } = useParams()
  const cardId = Number(cardUrl.slice(0, -5))

  useEffect(() => {
    dispatch(getMessages(cardId))
  }, [])

  
  const [cardStatus, setCardStatus] = useState(null)

  useEffect(() => {
    getTheCard(cardId)
    .then((cardObj) => {
      setCardStatus(cardObj.complete)
    })
    .catch(err => console.log(err))

  }, [])

   
  const handleComplete = () => {
    let result = window.confirm('Once completed the this card can not be edited or added to')  
    if(result) {
      updateTheCard(cardId, {complete: true}, token)
      setCardStatus(true)
    } else {
      updateTheCard(cardId, {complete: false}, token)
      setCardStatus(false)
    }
  } 
  const redirectToAdd = () => {
    navigate(`/card/${cardUrl}/add`)
  }
  
  //for toggle the update button for the selected message
  const [activeIndex, setActiveIndex] = useState(null)

  const handleUpdate = (i) => { setActiveIndex(i) }

  const breakpoints = {
    samll: 400, mobile: 700, tablet: 1100, desktop: 1200
  }
  
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
    const text = `https://warmfuzzies-nz.herokuapp.com/card/${cardUrl}`
    await navigator.clipboard.writeText(text)
    setCopyButton('copied to clipboard')
  }

  return (
    <>
      <Nav />
      <CardTitle />
        <div className="page-component">
          <div className='buttons'>
            {!cardStatus && <button className="btn btn-outline-secondary btn-sm" onClick={redirectToAdd}>Add a message</button>}  
            {!cardStatus && <button className="btn btn-outline-secondary btn-sm px-3" onClick={handleComplete}><span><i className="bi bi-check2-square"></i></span> Mark card as complete</button>}
            <button id="myBtn" className="btn btn-outline-secondary btn-sm px-3" onClick={openModal}>Share the card</button>
          </div>
          <div>{cardStatus? <div className='music-back'><div className='music-bar'><Music /></div></div> : <div className='music-bar'>{!<Music />}</div>}</div>

      {/* <!-- The Modal --> */}
      <div id="myModal" className="modal" style={{display: viewModal}}> 

        {/* <!-- Modal content --> */}
        <div className="modal-content">
          <div className="modal-header">
            <h3>Share the love!</h3>
          </div>
          <div className="modal-body">
            <p>Copy this link and share with your friends to add more messages on it!</p>
            <p>{`https://warmfuzzies-nz.herokuapp.com/card/${cardUrl}`}</p>
            
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
          <div className='cards-margin'>
            <Masonry breakpoints={breakpoints} columns={{ samall: 1, mobile: 2, tablet: 3, desktop: 4 }} gap={5} autoArrange={true} >     
            {messages.map((message) =>
              activeIndex === message.id ? (
                <EditMessage
                  key={message.id}
                  cardId={message.card_id}
                  id={message.id}
                  name={message.name}
                  image={message.image}
                  message={message.message}
                  stopUpdate={stopUpdate}
                />
              ) : (
              // WHERE TO PUT CARD CONTENTS
                <div key={message.id} className='cards-edge'>
                  <div className="card">
                    <div className="card__image mt-2">
                      <img className="card-img-top" src={message.image} alt="" />
                    </div>
                      <div className="card__body">
                      <div className="card_message">{message.message}</div><br></br>
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
                </div>
              )
            )}
            </Masonry>
          </div>
        </div>
      </div>    
    </>
  )
}
      
export default DisplayCard

