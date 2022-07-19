import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { getTheCard, updateTheCard } from '../apis/cards'

function CardTitle() {
  const { id } = useParams()
  const token = useSelector((state) => state.loggedInUser.token)

  const [cardDetails, setCardDetails] = useState(null)

  useEffect(() => {
    getTheCard(id)
      .then((cardObj) => {
        const card = { name: cardObj.name, person_name: cardObj.person_name }
        setCardDetails(card)
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
    updateTheCard(id, {
      name: cardDetails.name,
      person_name: cardDetails.person_name,
    }, token).catch((err) => console.log(err))
    setEdit(false)
  }

  return edit === true ? (

    <div className="page-component">
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
        value={cardDetails.name}
        onChange={handleChange}
      />

      <label className="form-label" htmlFor='person_name'>Friend Name</label>
      <input
        className="form-control"
        id='person_name'
        name='person_name'
        type='text'
        value={cardDetails.person_name}
        onChange={handleChange}
      />
      <button className="btn btn-light btn-sm">Done</button>
    </form>
    </div>
  ) : (

    // SHOW NORMAL CARD TITLE CODE
  <>
    <nav
      className="title navbar navbar-expand-lg navbar-light fixed-top mt-1"
      id="mainNav"
    >
      <div className="container">
            <h1 className="display-3
        card__title">
          {cardDetails?.name} {cardDetails?.person_name}
            </h1>
            <button className="btn btn-light btn-sm" onClick={handleClick}>Edit Card Title</button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
            <li className="px-2">
            <button className="btn btn-light btn-sm" onClick={handleClick}>Edit Card Title</button>
            </li>
            <li className="nav-item">
              <a className="navbar-brand" href="/">
                <img
                  src="/logoTallLHSnav.png"
                  alt="logo"
                  style={{width: "80px"}}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>










  )
}

export default CardTitle
