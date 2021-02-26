import React from 'react'

export default function Pizza(props) {
    const {newPizza}= props


    return(
        <div className='pizza container'>
            <h1>Your pizza is on its way, {newPizza.name}!</h1>
            <p>Pizza Size: {newPizza.pizzaSize}</p>
            <ul>
                <li>Pepperoni: {newPizza.pepperoni}</li>
                <li>Sausage: {newPizza.sausage}</li>
                <li>peppers: {newPizza.peppers}</li>
                <li>onions: {newPizza.onions}</li>
            </ul>
            <p>Special Instructions: {newPizza.special}</p>
        </div>
    )
}