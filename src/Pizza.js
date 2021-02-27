import React from 'react'

export default function Pizza(props) {
    const {newPizza}= props


    //this is ugly, but I was crunched for time and this was the easiest way I could think to render conditional toppings on the checkout page
    //with more time, I would have probably moved all the toppings into an array that would be mapped over and would have rendered toppings conditionally if their values were true
const pepperonies = () => {
    if (newPizza.pepperoni === true) {
        return <p>with pepperoni</p>
    }}
const sausage = () => {
        if (newPizza.sausage === true) {
            return <p>with sausage</p>
        }}
const peppers = () => {
        if (newPizza.peppers === true) {
            return <p>with peppers</p>
        }}
const onions = () => {
        if (newPizza.onions === true) {
            return <p>with onions</p>
        }}
    return(
        <div className='pizza container'>
            <h1>Your pizza is on its way, {newPizza.name}!</h1>
            <p>Pizza Size: {newPizza.pizzaSize}</p>
            {pepperonies()} 
            {sausage()}
            {peppers()}
            {onions()}
            <p>Special Instructions: {newPizza.special}</p>
        </div>
    )
}