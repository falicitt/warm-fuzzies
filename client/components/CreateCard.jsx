import React, { useState } from "react";
// import { postCard } from "../apis/cards";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../actions/cards";
import CardTitle from "./CardTitle";

function CreateCard() {
  const dispatch = useDispatch()
  const [newCard, setNewCard] = useState({
    name: '' , person_name: '', created_at: new Date()
  })


  const handleTyping = (e) => {
    setNewCard({
      ...newCard,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const card = newCard 
    dispatch (addCard(card))

  return (
    <>
      <CardTitle />
      <h2>Make your friend happy with some nice messages</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='person_name'>Your friend's name</label>
        <input type="text" id='person_name' name='person_name' onChange={handleTyping} />
        <label htmlFor="name">Title for your card</label>
        <input type="text" id='name' name='name' onChange={handleTyping} />
        <button></button>
      </form>
    </>
  );
}

export default CreateCard
