import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import { getCardsByUser } from '../apis/cards'
import { Link } from 'react-router-dom'

function Profile() {
  const email = useSelector(state => state.loggedInUser.email)
  const auth0Id = useSelector(state => state.loggedInUser?.auth0Id)
  
  const [ cards, setCards ] = useState([])

  useEffect(() => {
    getCardsByUser(auth0Id)
      .then((cardsArry) => {
        setCards(cardsArry)
      })
  }, [auth0Id])

  const tf = new Intl.DateTimeFormat('en-NZ')
  
  return (
    <div className="profile">
      <h1 className="profileTitle">My Cards</h1>
  
      <div className="email">You are logged in as: {email}</div>
      {cards?.map(card => 
      
        <li key={card.id} className='card'>
          <Link to={`/card/${card.id}`}>
          <p>{card.name} {card.person_name}</p>
          <p>{tf.format(new Date(card.created_at))}</p>
          </Link>
        </li>
       
        )}
    </div>
  )
}

export default Profile