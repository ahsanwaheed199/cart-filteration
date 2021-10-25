import React from 'react'

const Product = ({item}) => {

    return (
        <div>
        <div className='product'>
            <img src={ item.url} alt={item.Product_title}   />
            <h2>  {item.Product_title} </h2>
            <h4> {item.description} </h4>
             <h4>Rs: {item.price}</h4>
             <h3>Rating: {item.rating} </h3>
        </div>
        </div>
        
    )
}

export default Product
