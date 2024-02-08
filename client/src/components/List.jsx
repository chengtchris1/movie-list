import React from 'react';
import ListItem from './ListItem.jsx'
const List = (props) => {

  if(props.fullMovieList.length === 0){
    return (<div>No movies added, respectfully</div>)
  }

  if(props.visibleMovies.length === 0 && props.fullMovieList.length !== 0){
    return (<div>No results, respectfully</div>)
  }

return (
  <div><ul>
    {props.visibleMovies.map(
      (singleMovie) => (<ListItem singleMovie = {singleMovie}/>)
    )}
    </ul></div>
)


}

export default List;