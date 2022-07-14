import React from 'react'
<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom'
import DisplayCard from './DisplayCard'
=======
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import AddMessage from './AddMessage'
import CreateCard from "./CreateCard";

function App() {
const cards = useSelector((state) => state.cards)

const id = cards.id
>>>>>>> 875a9bc955cd11e9a90ba89ce4c56dca828cd68f

  return (
    <>
      <header className="header">
        <h1>Warm Fuzzies</h1>
      </header>
      <section className="main">
<<<<<<< HEAD
        <Routes>
          <Route path='/card/:id/' element={<DisplayCard/>} ></Route>
=======
        
        <Routes>
          <Route path='/' element={<CreateCard />} />
          <Route path={`/card/:id/add`} element={<AddMessage />} />
>>>>>>> 875a9bc955cd11e9a90ba89ce4c56dca828cd68f
        </Routes>
      </section>
    </>
  );
}

export default App;
