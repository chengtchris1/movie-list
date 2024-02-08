import React from 'react';
const SearchView = (props) => (
    <div id="searchArea">
      <label>Search: </label>
      <input type="search" value={props.searchTerm} onChange={(e) => props.handleSearchTextChange(e)} id="movie-search" name="thesearch" />
      <button type="submit" id="searchButton" onClick={props.onSubmitPress}>Search List</button>
    </div>
)
export default SearchView