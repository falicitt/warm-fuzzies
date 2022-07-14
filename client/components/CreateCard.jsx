import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCard } from '../actions/cards'
import { useNavigate } from 'react-router-dom'

function CreateCard() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cardsId = useSelector((state) => state.cards[0]?.id)

  const [newCard, setNewCard] = useState({
    name: '',
    person_name: '',
    created_at: new Date(),
  })

  const handleTyping = (e) => {
    setNewCard({
      ...newCard,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    const card = newCard
    e.preventDefault()
    dispatch(addCard(card))
  }

  useEffect(() => {
    if (cardsId) {
      navigate(`/card/${cardsId}/add`)
    }
  }, [cardsId])

  return (
    <>
      <h2>Make your friend happy with some nice messages</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='person_name'>Your friend's name</label>
        <input
          type='text'
          id='person_name'
          name='person_name'
          onChange={handleTyping}
        />
        <label htmlFor='name'>Title for your card</label>
        <input type='text' id='name' name='name' onChange={handleTyping} />
        <button>Create card</button>
      </form>
    </>
  )
}

export default CreateCard
