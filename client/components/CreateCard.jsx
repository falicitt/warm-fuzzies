import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCard } from '../actions/cards'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

function CreateCard() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const token = useSelector((state) => state.loggedInUser.token)

  const { loginWithRedirect } = useAuth0()

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()
  }

  const [newCard, setNewCard] = useState({
    name: '',
    person_name: '',
    created_at: new Date(),
    card_string: Math.random().toString(36).slice(2, 7)
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
    dispatch(addCard(card, token))
  }

  const cardId = useSelector((state) => state.card?.id)
  const cardString = useSelector((state) => state.card.card_string)

  useEffect(() => { 
    if (cardId) { 
      navigate(`/card/${cardId}${cardString}/add`)
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
          {token?
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
            <button type="submit" className="btn btn-warning mx-0">
              Create
            </button>
          </form>
          :
            <button className="btn btn-warning mx-0" onClick={handleSignIn}>
             Log In To Create A Card
          </button> 
        }
        </div>
        <div className="home-image">
          <img
            src="example-card-masonry.png"
            className="d-block mx-lg-auto img-fluid"
            alt="warm fuzzy message card"
            width="750"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </>
  )
}

export default CreateCard
