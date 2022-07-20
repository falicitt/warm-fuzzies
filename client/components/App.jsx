import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { cacheUser } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'

import AddMessage from './AddMessage'
import CreateCard from './CreateCard'
import DisplayCard from './DisplayCard'
import Nav from './Nav'
import Profile from './Profile'

function App() {

  cacheUser(useAuth0)
 
  return (
    <>
      <section className='main'>
        <Nav />
        <Routes>
          <Route path='/card/:cardUrl/' element={<DisplayCard/>} ></Route>
          <Route path='/' element={<CreateCard />} />
          <Route path='/card/:cardUrl/add' element={<AddMessage />} />
          <Route path='/card/:cardUrl' element={<DisplayCard />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </section>

    </>
  )
}

export default App
