import React from 'react'
import {useHistory} from 'react-router-dom'


export default function HomePage(props) {

    let history = useHistory()

    //this homepage was going to be styled more, but I ran out of time
    return (
        <div className='homepage container'>
           <h1>Enjoy Tasty Pizza!</h1>
           <button onClick={() => history.push('/form')}>click me!</button>{/*clicking the button will move you to the pizza form page */}
        </div>
    )
}