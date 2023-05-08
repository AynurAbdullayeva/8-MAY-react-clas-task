import React from 'react'

export default function Header() {
  return (
    <>
    <nav>
        <form>
            <input type="search" className='searchInput'/>
            <button type='submit' className='searchBtn'>search</button>
        </form>
        <button className='wishlist'>Wishlist</button>
    </nav>
    
    </>
  )
}
