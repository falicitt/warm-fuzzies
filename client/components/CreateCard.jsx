import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCard } from '../actions/cards'
import { useNavigate } from 'react-router-dom'

function CreateCard() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Emma's tinkerings

  const cardString = Math.random().toString(36).slice(2, 7)
  console.log(cardString)

  // end of tinkerings

  const [newCard, setNewCard] = useState({
    name: '',
    person_name: '',
    created_at: new Date(),
    card_string: cardString
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
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="example-card-masonry.png"
              className="d-block mx-lg-auto img-fluid"
              alt="warm fuzzy message card"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <img src="/logoTallLHSnav.png" className="img-fluid" alt="logo" />
            {/* <h5 className="display-5 fw-bold lh-1 mb-3">Warm Fuzzies</h5> */}
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
        </div>
      </div>
    </>
  )
}

export default CreateCard
