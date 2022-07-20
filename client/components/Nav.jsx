import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
// import { Link } from 'react-router-dom'

function Nav() {

  const isAuthenticated =  useAuth0().isAuthenticated
  
  function IfAuthenticated({ children }) {
    return isAuthenticated ? <>{children}</> : null
  }
  
  function IfNotAuthenticated({ children }) {
    return !isAuthenticated ? <>{children}</> : null
  }

  const { logout, loginWithRedirect } = useAuth0()

  function handleLogoff(e) {
    e.preventDefault()
    logout()
  }

  function handleRegister(e) {
    e.preventDefault()
    loginWithRedirect({
      redirectUri:`${window.location.origin}/` 
    })
  }

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()
  }
  
  return (
    <>
    <div className="nav">
    <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
     <img src="/smallLogo.svg" alt="logo" className='logo-img my-2' height="60"/></a>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      </ul>

      <div className="col-md-3 text-end">
      <IfAuthenticated>
          <a href="/profile" className="btn btn-light btn-sm mx-2" role="button">
            My Profile
          </a>
        
          <a href="/" onClick={handleLogoff} className="btn btn-light btn-sm mx-2" role="button">
            Log out
          </a>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <a href="/" className="btn btn-light btn-sm mx-2" onClick={handleRegister} role="button">Register</a>
          <a href="/" className="btn btn-light btn-sm mx-2" onClick={handleSignIn} role="button">
            Log in
          </a>
       </IfNotAuthenticated>
      </div>
    </header>
  </div>
  </div>

    </>
  )
}

export default Nav