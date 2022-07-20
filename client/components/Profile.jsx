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
    <>
      <h1>My Profile</h1>
      <p>You are logged in as: {email}</p>
      <h2>My Cards</h2>
      {cards?.map(card => 
      
        <li key={card.id}>
          <Link to={`/card/${card.id}`}>
          <p>{card.name} {card.person_name}</p>
          <p>{tf.format(new Date(card.created_at))}</p>
          </Link>
        </li>
       
        )}
    </>
  )
}

export default Profile