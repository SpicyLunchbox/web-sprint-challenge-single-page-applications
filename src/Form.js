import React from 'react'
import {useHistory} from 'react-router-dom'

export default function Form(props) {
    const { values, update, submit } = props

    //this code allows for you to navigate to the pizza checkout page upon submission
    let history = useHistory()
    function navigateToPizza() {
        history.push('/pizza')
    }

    //whenever an event occurs on page, that event's target is checked, and if the target's type is checkbox, the checked value is used
    //in plain english, this allows the checkbox values to update on formValues
    const onChange = evt => {
        const {name, value, type, checked } = evt. target
        const valueToUse = type === 'checkbox' ? checked : value
        update(name, valueToUse)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()//updates newPizza state from formValues
        navigateToPizza()//navigates you to the checkout page
    }

    
    //markup for the form
    return (
        <div className='form container'>
            <h1>Build your pizza</h1>
            <form onSubmit={onSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        placeholder="enter your name here"
                        maxLength="40"
                        minLength="2"//MVP called for a validation of 2 chars min, but this was much cleaner than writing a scheme to validate one thing.
                        onChange={onChange}
                    />
                </label>
                <label>
                    Pizza size:
                    <select
                        onChange={onChange}
                            value={values.pizzaSize}
                            name='pizzaSize'
                    >
                        <option value=''>- Select an option -</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                        <option value='extra'>Extra Large</option>
                    </select>
                </label>
                <label>
                    Pepperoni
                    <input
                        type="checkbox"
                        name="pepperoni"
                        checked={values.pepperoni}
                        onChange={onChange}
                    />
                </label>
                <label>
                    Sausage
                    <input
                        type="checkbox"
                        name="sausage"
                        checked={values.sausage}
                        onChange={onChange}
                    />
                </label>
                <label>
                    Peppers
                    <input
                        type="checkbox"
                        name="peppers"
                        checked={values.peppers}
                        onChange={onChange}
                    />
                </label>
                <label>
                    Onions
                    <input
                        type="checkbox"
                        name="onions"
                        checked={values.onions}
                        onChange={onChange}
                    />
                </label>
                <label>
                    Special Instructions:
                    <input
                        type="text"
                        name="special"
                        value={values.special}
                        placeholder="enter any special instructions here"
                        maxLength="250"
                        onChange={onChange}
                    />
                </label>
                <div className="order button">
                <button disabled={!values.name || !values.pizzaSize}>Add to Order</button>
            </div>
            </form>
        </div>
    )
}