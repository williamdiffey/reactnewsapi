import React from 'react'
import Card from '../Card/Card'
import './CardList.css' 

function CardList(props) {

    return (
    <ul>
          {props.title.map((title, i) => 
            <Card 
                key={i}
                title={title}
                // urlToImage={urlToImage}
                // description={description}
                // url={url}
                />
        
            )}
    </ul>
    )
}



export default CardList