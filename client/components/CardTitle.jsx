import React from 'react'
import { useSelector } from 'react-redux'

function CardTitle() {
  const card = useSelector((globalState) => globalState.card)

  return (
    <>
    {/* <div className='card_title'>
      <h2>
        {card.name} {card.person_name}
        Page title
      </h2>
    </div> */}
     <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
     <div className="container px-5">
         <a className="navbar-brand fw-bold" href="http://localhost:3000/"> {card.name} {card.person_name} </a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="http://localhost:3000/" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
             Menu
             <i className="bi-list"></i>
         </button>
         <div className="collapse navbar-collapse" id="navbarResponsive">
             <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                 <li className="nav-item"><a className="nav-link me-lg-3" href="#features">Home</a></li>
                 <li className="nav-item"><a className="nav-link me-lg-3" href="#download">Edit</a></li>
             </ul>
             <button className="btn btn-secondary rounded-pill px-3 mb-2 mb-lg-0" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                 <span className="d-flex align-items-center">

                     <span className="small">Create</span>
                 </span>
             </button>
         </div>
     </div>
 </nav>



 </>
  )
}

export default CardTitle
