import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <li>
            <h2>{props.title}</h2>
            {/* <h2>{props.urlToImage}</h2>
            <h2>{props.description}</h2>
            <h2>{props.url}</h2> */}
        </li>
    )


}

export default Card