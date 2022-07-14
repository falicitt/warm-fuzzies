import React from "react"
import { useSelector } from "react-redux"

function DisplayCard () {

  const allMessages = useSelector((reduxState) => reduxState.allMessages)
  console.log('This is from DisplayCard: ', allMessages)

  return (

  <>
  <div className='container'>
    {allMessages.message}
  </div>
  </>

  )
}


export default DisplayCard