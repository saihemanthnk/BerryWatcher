import React from 'react'

function Search() {
  return (


    <>

    <div className="nav-search">
    <select className="search-select">
      <option>All</option>
    </select>
    <input
      className="search-input"
      type="text"
      placeholder="Search Berry Watcher"
    />
    <div className="search-icon">
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  </div>
  </>
    
  )
}

export default Search
