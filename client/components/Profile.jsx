import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import { getCardsByUser } from '../apis/cards'

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
  
  return (
    <>
    <h1>My Profile</h1>
      <p>Logged In Email: {email}</p>
      <h2>My Cards</h2>
      {cards?.map(card => <li key={card.id}>{card.name}</li>)}
    </>
  )
}

export default Profile