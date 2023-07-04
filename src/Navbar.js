import React from 'react'

import SearchIcon from '@mui/icons-material/Search';

export default function Navbar() {
  return (
    <div className='NavBar'>
      <div className='homeHeading'> <img src="../public/LOGO2.png" alt='logo'/> <span>Lorem</span></div>
          <div className='leftNav'>
          <span>Home</span>
          <span>About</span>
          <span>Explain</span>
          <span>Suggestion</span>
          <span>Activity</span>
          <span>Community</span>
          </div>
          <div className='rightNav'>
            <div className='search'>
              <SearchIcon/>
              <input type='text' placeholder='Search'/>
            </div>
          </div>
      </div>
  )
}
