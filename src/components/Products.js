import React from 'react'
import Tshirts from './Tshirts'
import Shoes from './Shoes'
import Shirts  from './Shirts'

const Products = ({tshirts, shirts, shoes}) => {
    return (
 
        <div>
            <h1 className='heading'>
                T-Shirts
            </h1>
        <div className='products'>
           {
               tshirts.map(
                   tshirt=>{
                      return  <Tshirts key={tshirt.id}  tshirt={tshirt}    />
                   }
               )
           } 
           </div>
           <h1 className='heading'> Shirts</h1>
           <div className='products'>
              
            {
               shirts.map(
                   shirt=>{
                      return  <Shirts key={shirt.id}  shirt={shirt}    />
                   }
               )
           }  
           </div>
           <h1 className='heading'> Shoes</h1>
           <div className='products'>
            {
               shoes.map(
                   shoe=>{
                      return  <Shoes key={shoe.id}  shoe={shoe}    />
                   }
               )
           } 
           </div>
        </div>
    )
}

export default Products
