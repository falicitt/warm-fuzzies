import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCard } from '../actions/cards'
import { useNavigate } from 'react-router-dom'

function CreateCard() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  
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

  const cardId = useSelector((state) => state.card?.id)

  useEffect(() => { 
    if (cardId) { 
      navigate(`/card/${cardId}/add`)
    }
  }, [cardId])

  return (
    <>
      <div className="home">
        <div className="home-form">
          <img src="/logoTallLHSnav.png" className="img-fluid" alt="logo" />
          <p className="lead px-2 mt-2">
            Make your friend happy with some nice messages
          </p>
          <form onSubmit={handleSubmit} className="px-2 mt-2">
            <div className="mb-3">
              <label htmlFor="inputFriendName" className="form-label">
                Your friend&apos;s name
              </label>
              <input
                // NEW
                type="text"
                className="form-control"
                id="person_name"
                name="person_name"
                onChange={handleTyping}
                aria-describedby="friendName"
                />
            </div>
            <div className="mb-3">
              <label htmlFor="inputCardTitle" className="form-label">
                 Title for your card
              </label>
              <input
                // NEW
                type="text" 
                id="name" 
                name="name" 
                onChange={handleTyping}
                className="form-control"
                aria-describedby="cardTitle"
                />
            </div>
            <button type="submit" className="btn btn-warning">
              Create
            </button>
          </form>
        </div>
        <div className="home-image">
          <img
            src="example-card-tilt.png"
            className="d-block mx-lg-auto img-fluid"
            alt="warm fuzzy message card"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </>
  )
}

export default CreateCard
