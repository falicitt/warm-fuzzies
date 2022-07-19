import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { getTheCard, updateTheCard } from '../apis/cards'

function CardTitle() {
  const { id } = useParams()
  const [cardDetails, setCardDetails] = useState(null)

  useEffect(() => {
    getTheCard(id)
      .then((cardObj) => {
        const card = { name: cardObj.name, person_name: cardObj.person_name }
        setCardDetails(card)
        // console.log('the cardObj', card)
      })
      .catch((err) => console.log(err))
  }, [])


  const [edit, setEdit] = useState(false)

  const handleClick = () => {
    setEdit(true)
  }

  const handleChange = (evt) => {
    setCardDetails({
      ...cardDetails,
      [evt.target.name]: evt.target.value,
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log(cardDetails)
    updateTheCard(id, {
      name: cardDetails.name,
      person_name: cardDetails.person_name,
    }).catch((err) => console.log(err))
    setEdit(false)
  }

  
  const [cardStatus, setCardStatus] = useState(null)

  useEffect(() => {
    getTheCard(id)
      .then((cardObj) => {
        setCardStatus(cardObj.complete)
        console.log('the cardObj', cardObj.complete)
      })
      .catch((err) => console.log(err))
  }, [])

  return edit === true ? (
    <>
    <nav className="navbar">
      <a id='logo' href="/">
        <img src="/logoTallLHSnav.png" alt="logo" className='logo-img'/>
      </a>
      <h1 className="title">
        {cardDetails?.name} {cardDetails?.person_name}
      </h1>
      <div className='links'>
        <a href="">Register</a>
        <a href="">Login</a>
      </div>
    </nav>
    
    <div className="edit-title">
      <div>
        <h5 className="display-6 text-warning">Edit Card Title</h5>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor='name'>Card Name</label>
        <input
          className="form-control"
          id='name'
          name='name'
          type='text'
          initialvalue={cardDetails.name}
          onChange={handleChange}
        />
        <label className="form-label" htmlFor='person_name'>Friend Name</label>
        <input
          className="form-control"
          id='person_name'
          name='person_name'
          type='text'
          initialvalue={cardDetails.person_name}
          onChange={handleChange}
        />
        <button className="btn btn-light-outline">Done</button>
      </form>
    </div>
    </>
  ) : (

    // SHOW NORMAL CARD TITLE CODE

  <div>
    <nav className="navbar">
      <a id='logo' href="/">
        <img src="/logoTallLHSnav.png" alt="logo" className='logo-img'/>
      </a>
      <h1 className="title">
        {cardDetails?.name} {cardDetails?.person_name}
      </h1>
      <div className='links'>
        <a href="">Register</a>
        <a href="">Login</a>
      </div>
      
    </nav>
    {!cardStatus && <button className='bottuns-holder btn btn-outline-secondary btn-sm px-3' onClick={handleClick}>Edit Card</button>}
  </div>
  )
}

export default CardTitle
