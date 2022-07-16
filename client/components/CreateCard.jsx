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
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="Warm Fuzzies Moodboards.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
          </div>
          <div className="col-lg-6">
          <img src="lhLogoSmaller.png" className="img-fluid" alt="logo"/>
            {/* <h5 className="display-5 fw-bold lh-1 mb-3">Warm Fuzzies</h5> */}
            <p className="lead">Make your friend happy with some nice messages</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              {/* <button type="button" className="btn btn-warning btn-sm px-4 me-md-2">Primary</button>
              <button type="button" className="btn btn-outline-warning btn-sm px-4">Default</button> */}
            </div>
            <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Your friend&apos;s name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We will share your email with everyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title for your card</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We will share your email with everyone else.</div>
  </div>
  <button type="submit" className="btn btn-outline-warning">Create</button>
</form>
          </div>
        </div>
      </div>
      <h2>Make your friend happy with some nice messages</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='person_name'>Your friend&apos;s name</label>
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
