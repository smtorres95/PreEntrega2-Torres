import React from 'react'

const ItemList = (props) => {


  return (
    <div>
        {
            props.results.map((result) => (
                <div>
                    <img src={result.thumbnail}></img>
                    <div>
                        <h2>{result.title}</h2>
                        <p>Precio: ${result.price}</p>
                    </div>
                </div>

            ))
        }
    </div>
  )
}

export default ItemList