import React from "react";
import { useSelector } from 'react-redux'

function Profile() {
  const userEmail = useSelector(state => state.loggedInUser.email)

  return (
    <>
    <h1>My Profile</h1>
    <p>Logged In Email: {userEmail}</p>
    </>
  )
}

export default Profile