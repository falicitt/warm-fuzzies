import React from 'react'
import { useSelector } from 'react-redux'

function CardTitle() {
  const card = useSelector((globalState) => globalState.card)

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top mt-1"
        id="mainNav"
      >
        <div className="container">
          <h1 className="display-3">
            {card.name} {card.person_name}
          </h1>
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
              {/* <li className="nav-item">
                <a className="nav-link me-lg-3" href="/">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link me-lg-3" href="/">
                  Edit
                </a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link me-lg-3" href="/">
                  Create
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-lg-3" href="/">
                  Edit
                </a>
              </li> */}
              <li className="nav-item">
                <a className="navbar-brand" href="/">
                  <img
                    src="/leftsquare.png"
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
