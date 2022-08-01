import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import { getCardsByUser } from '../apis/cards'
import { Link } from 'react-router-dom'
import Nav from './Nav'

function Profile() {
  const email = useSelector(state => state.loggedInUser.email)
  const auth0Id = useSelector(state => state.loggedInUser?.auth0Id)
  
  const [ cards, setCards ] = useState([])

  useEffect(() => {
    console.log('auth0id', auth0Id)
    getCardsByUser(auth0Id)
      .then((cardsArry) => {
        setCards(cardsArry)
      })
  }, [auth0Id])

  const tf = new Intl.DateTimeFormat('en-NZ')
  
  return (
    <>
    <Nav />
    <div className="profile">
      <h1 className="profileTitle">My Cards</h1>
  
      <div className="email">You are logged in as: {email}</div>
      <ul className="mycards">
      {cards?.map(card => 
      
        <li key={card.id} className='card'>
          <Link to={`/card/${card.id}${card.card_string}`}>
          <p>{card.name} {card.person_name}</p>
          <p>{tf.format(new Date(card.created_at))}</p>
          </Link>
        </li>
       
        )}
      </ul>
    </div>
    </>
  )
}

export default Profile