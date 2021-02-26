import React, { useState, useEffect } from "react";
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

  const [formValues, setFormValues] = useState(initialFormValues)
  const [newPizza, setNewPizza] = useState(initialPizza)

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    })
  }

  

  const submitForm = () => {
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
