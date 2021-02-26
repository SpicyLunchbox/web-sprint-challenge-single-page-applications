import React from 'react'

export default function Pizza(props) {
    const {newPizza}= props


    return(
        <div className='pizza container'>
            <h1>Your pizza is on its way!</h1>
            <p>{newPizza.name}</p>
        </div>
    )
}