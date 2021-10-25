import React from 'react'

const Shirts = ({shirt}) => {
    return (
        <div className='product'>

            <img src={ shirt.url} alt={shirt.Product_title}   />
            <h2>  {shirt.Product_title} </h2>
            <h4> {shirt.description} </h4>
             <h4>Rs: {shirt.price}</h4>
             <h3>Rating: {shirt.rating} </h3>
        </div>
    )
}

export default Shirts
