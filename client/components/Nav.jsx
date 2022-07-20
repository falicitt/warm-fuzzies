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
    <>
    <nav className='nav'>
      <div className="container">
        <header>
          <div className='caca'>
            <div className='logo1'>
              <a href="/"></a>
              <a href="/"><img className='logoimg' src="/smallLogo.svg" alt="logo"  height="60"/></a>
            </div>
            <div className="botones col-md-3 text-end">
              <IfAuthenticated>
                <a href="/profile" className="btn btn-light btn-sm mx-2" role="button">My Profile</a>
        
                <a href="/" onClick={handleLogoff} className="btn btn-light btn-sm mx-2" role="button">Log out</a>
              </IfAuthenticated>
              <IfNotAuthenticated>
                <a href="/" className="btn btn-light btn-sm mx-2" onClick={handleRegister} role="button">Register</a>
                <a href="/" className="btn btn-light btn-sm mx-2" onClick={handleSignIn} role="button">Log in</a>
              </IfNotAuthenticated>
            </div>
          </div>
        </header>
      </div>
    </nav>
    </>
  )
}

export default Nav