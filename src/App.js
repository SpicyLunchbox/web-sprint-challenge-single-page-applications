import React, { useState } from "react";
import {Route} from 'react-router-dom'
import HomePage from './HomePage'
import Form from './Form'
import Pizza from './Pizza'




const initialFormValues = {
  name: '',
  pizzaSize: '',
  pepperoni: false,
  sausage: false,
  peppers: false,
  onions: false,
  special: '',
}

const initialPizza = {
  name: '',
  pizzaSize: '',
  pepperoni: false,
  sausage: false,
  peppers: false,
  onions: false,
  special: '',
}

const App = () => {

  const [formValues, setFormValues] = useState(initialFormValues)//state for monitoring form inputs
  const [newPizza, setNewPizza] = useState(initialPizza)//state for making new order upon submission of form

  const updateForm = (inputName, inputValue) => {//updates any key:value pair inside formValues as events occur on the page
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    })
  }

  

  const submitForm = () => {//upon form submission, a new object is generated, then stored in newPizza
    const pizza = {
      name: formValues.name.trim(),
      pizzaSize: formValues.pizzaSize,
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      peppers: formValues.peppers,
      onions: formValues.onions,
      special: formValues.special.trim(),
    }
    setNewPizza(pizza)
    
    
  }

  return (
    <div className="app container">
      <Route exact path="/">
        <HomePage/>
      </Route>
      <Route path={'/form'}>
        <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
        />
       </Route>
       <Route path={'/pizza'}>
          <Pizza
          newPizza={newPizza}
          />
        </Route>
    </div>
  );
};
export default App;
