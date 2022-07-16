import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { editCard } from '../apis/cards'

function CardTitle(props) {
  const card = useSelector((globalState) => globalState.card)
  const [newCard, setNewCard] =useState(card)
    

  

 const [edit, setEdit] = useState(false) 
 const handleClick = () => {
  setEdit(true)
 }
 const handleChange = (evt) => {
  setNewCard({
   ...newCard,
  [evt.target.name]: evt.target.value

  })
}
  const handleSubmit = (evt) => {
    evt.preventDefault() 
    editCard(props.id, newCard)
  }
  return (
    edit === true? 
    <form onSubmit={handleSubmit}>


<div>
          <label htmlFor='name'>Card Name:</label>
          <input id='name' name='name' type='text' initialvalue={card.name} 
          onChange={handleChange} 
          />
        </div>

        <div>
          <label htmlFor='person_name'>Your Friend's Name:</label>
          <input id='person_name' name='person_name' type='text' initialvalue={card.person_name} 
          onChange={handleChange} 
          />
        </div>

       

        <button>Done</button>

    </form> :
    <div className='card_title'>
      <h2>
        {card.name} {card.person_name}
      </h2>
      <button onClick = {handleClick}>editCard</button>
    </div>
  )
}

export default CardTitle
