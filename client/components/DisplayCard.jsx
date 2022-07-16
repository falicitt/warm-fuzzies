import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import { getMessages } from '../actions/messages'
import { updateTheCard, getTheCard } from '../apis/cards'
 

import CardTitle from './CardTitle'

function DisplayCard() {
  const messages = useSelector((state) => state.messages)
  
  const navigate = useNavigate()
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
  

  return (
    <>
      <CardTitle />
      <div className='container'>
        {messages.map((message) => (
          <li key={message.id}>
            <p>{message.name}</p>
            <p>{message.message}</p>
          </li>
        ))}
      </div>
      {!cardStatus && <button onClick={redirectToAdd}>Add a message to this card</button>}  
      {!cardStatus && <button onClick={handleClick}>Mark this card as complete</button>}
    </>
  )
}

export default DisplayCard
