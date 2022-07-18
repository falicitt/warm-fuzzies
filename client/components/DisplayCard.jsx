import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import Masonry from 'react-masonry-css'
// import Masonry from 'react-masonry-component'
 
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

  const breakpoints = {
    default: 3,
    1100: 3,
    700: 2,
    400: 1
  }
  

  return (
    <>
      <CardTitle />

      <div className='cards-container grid'>
      <Masonry
        // className="grid" data-masonry='{"percentPosition": true }'
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        
       
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
          <div key={message.id}  className="card grid-item" style={{ transform: 'rotate(0deg)' }}>
            <div className="card__image">
                  <img src={message.image} alt="cat"/>
            </div>
            <div className="card_title">{message.message}</div>
            <div className="card__body">
              <p>From {message.name}</p>
              {!cardStatus && <button onClick={() => handleUpdate(message.id)}>Edit</button>}
              {!cardStatus &&<button className="btn btn-outline-secondary" onClick={handleDelete} value={message.id}>Delete</button>}
            </div>
          </div>

          // </li>
        ))}
        </Masonry>
      </div>
      {!cardStatus && <button onClick={redirectToAdd}>Add a message to this card</button>}  
      {!cardStatus && <button onClick={handleClick}>Mark this card as complete</button>}
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