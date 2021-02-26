import React from 'react'
import {useHistory} from 'react-router-dom'


export default function HomePage(props) {

    let history = useHistory()

    return (
        <div className='homepage container'>
           <h1>Enjoy Tasty Pizza!</h1>
           <button onClick={() => history.push('/form')}>click me!</button>
        </div>
    )
}