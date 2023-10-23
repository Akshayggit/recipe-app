import React from 'react'

function Mealiteam(getMeal) {
  return (
    <>
    <div className='card'>
        <img src={getMeal.data.image}></img>
        <div className='info'>
            <h2>{getMeal.data.title}</h2>
        </div>
    </div>
    </>
  )
}

export default Mealiteam