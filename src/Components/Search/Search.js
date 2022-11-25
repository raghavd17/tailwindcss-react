import React from 'react'
import IconSearch from '../../Icons/IconSearch';
// import IconClose from '../../Icons/IconsClose';

// import './Search.scss';

const Search = () => {
  return (
    
<main className='p-4'>
    
    <h2 className='text-red-500 mb-4 text-5xl'>Search </h2>
    <div class="search u-min-width--200">
      <input class="search__input" placeholder="Name, category or role" type="text" value="" />
        <button type="button" class="btn" dat>
          <IconSearch />
        </button>
      </div>
  </main>
  )
}

export default Search;