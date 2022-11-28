import React from 'react'
import IconSearch from '../../Icons/IconSearch';
// import IconClose from '../../Icons/IconsClose';

import './search.scss';

const Search = () => {
  return (
    
<main className='p-4'>
    
    <h2 className='text-red-500 mb-4 text-5xl'>Search </h2>
    <div className="search">
      <div className='search__bar'>
      <input class="search__input" placeholder="Name, category or role" type="text" />
        <button type="button" class="btn icon search__btn" dat>
          <IconSearch />
        </button>
      </div>
      {/* search__bar */}
      <div className='search__results'>
      <ul className="list">
      <li className="list-item group" data-state="" tabIndex={0}> 
        <div className="list-title">Title here
          </div>
        <div className="item-checkbox group" data-state="acctive">
          <div className="list-label">
          <span>A</span> -- <span>Z</span>
          </div>
        </div>
      </li>
      <li className='list-divider'></li>
      <li className="list-item group" data-state="" tabIndex={1}> 
        <div  className="list-title">Title here
          </div>
        <div className="item-checkbox" data-state="">
          <div className="list-label">
          <span>A</span> --<span>Z</span>
          </div>
        </div>
      </li>
      
      
    </ul>
      </div>
      </div>


      
  </main>
  )
}

export default Search;