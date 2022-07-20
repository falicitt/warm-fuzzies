import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'


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
    <nav>

        <a href="/" className="btn btn-light rounded-pill" role="button">Create New Card</a>
        <IfAuthenticated>
          <a href="/profile" className="btn btn-light rounded-pill" role="button">
            My Profile
          </a>
        
          <a href="/" onClick={handleLogoff} className="btn btn-light rounded-pill" role="button">
            Log out
          </a>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <a href="/" className="btn btn-light rounded-pill" onClick={handleRegister} role="button">Register</a>
          {/* <a class="btn btn-primary" href="#" role="button">Link</a> */}
          <a href="/" className="btn btn-light rounded-pill" onClick={handleSignIn} role="button">
            Log in
          </a>
        </IfNotAuthenticated>
      {/* </NavGroup> */}
    </nav>
  )
}

export default Nav