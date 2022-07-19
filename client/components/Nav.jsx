import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'


// const NavGroup = styled.nav`
//   float: right;
// `

// const NavLink = styled(Link)`
//   margin-right: 30px;
// `

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
      {/* <NavGroup> */}
        {/* <NavLink to="/">Home</NavLink> */}
        <IfAuthenticated>
          <a href="/" onClick={handleLogoff}>
            Log off
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
    </>
  )
}

export default Nav