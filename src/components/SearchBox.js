import React from 'react';

const SearchBox = ({ searchChange }) => {
  console.log("SearchBox");
  return (
    <div className='pa2'>
      <label>
        Search Robots
        <input
          className='pa3 ba b--green bg-lightest-blue'
          type='search'
          placeholder='search robots'
          onChange={searchChange}
        />
      </label>
    </div>
  );
}

export default SearchBox;