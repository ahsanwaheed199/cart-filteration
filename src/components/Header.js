import React from 'react'
const Header = ({sorting, filter}) => {
    return (
        <div className='header'>
          <div>  <h1 className='logo' >React Cart!</h1></div>
            
          <div className='select_filter'> 
          <select onChange={filter} >
                 <option> Select the option </option>
                <option value='all'>All</option>
                <option value='tshirts'>T-Shirts</option>
                <option value='shirts'>Shirts</option>
                <option value='shoes'>Shoes</option>
            </select>

             <select   onChange={sorting} >
                 <option> Select the option </option>
                <option value='all'>All</option>
                <option value='low'>Low</option>
                <option value='high'>High</option>
            </select>
          </div>
          
        </div>
    )
}

export default Header
