import React from 'react';
const AddMovieView = (props) => (
    <div id="addMovieArea">
      <label>Add Movies to List</label>
      <input type="Name" value={props.addMovieTerm} onChange={(e) => props.handleListTextChange(e)} id="movie-add" name="theadd" />
      <button type="submit" id="addButton" onClick={props.handleInsertMoviePress}>Add to List</button>
    </div>
)
export default AddMovieView