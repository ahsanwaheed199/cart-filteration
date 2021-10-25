import React from 'react'

const Product = ({tshirt,shirt,shoes}) => {

    return (
        <div>
        <div className='product'>
            <img src={ tshirt.url} alt={tshirt.Product_title}   />
            <h2>  {tshirt.Product_title} </h2>
            <h4> {tshirt.description} </h4>
             <h4>Rs: {tshirt.price}</h4>
             <h3>Rating: {tshirt.rating} </h3>
        </div>
        </div>
        
    )
}

export default Product
