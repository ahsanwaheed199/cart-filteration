import React from 'react'
const Header = ({sort,sorting}) => {
    return (
        <div className='header'>
          <div>  <h1 className='logo' >React Cart!</h1></div>
         
          <div className='select_filter'> 
             <select  value={sort}  onChange={sorting} >
                <option value='all'>All</option>
                <option value='low'>Low</option>
                <option value='high'>High</option>
            </select>
          </div>

        </div>
    )
}

export default Header
