import React from 'react'

const Shoes = ({shoe}) => {
    return (
        
            <div className='product'>
           <img src={ shoe.url} alt={shoe.Product_title}   />
           <h2>  {shoe.Product_title} </h2>
           <h4> {shoe.description} </h4>
            <h4>Rs: {shoe.price}</h4>
            <h3>Rating: {shoe.rating} </h3>
       </div>
    )
}

export default Shoes
