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

        <a href="/">Create New Card</a>
        <IfAuthenticated>
          <a href="/profile">
            My Profile
          </a>
        
          <a href="/" onClick={handleLogoff}>
            Log out
          </a>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <a href="/" onClick={handleRegister}>
            Register
          </a>
          <a href="/" onClick={handleSignIn}>
            Log in
          </a>
        </IfNotAuthenticated>
      {/* </NavGroup> */}
    </nav>
  )
}

export default Nav