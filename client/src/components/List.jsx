import React from 'react';
import ListItem from './ListItem.jsx'
const List = (props) => {

  if(props.movieList.length === 0){
    return (<div>No movies added, respectfully</div>)
  }

  if(props.movieList.every((singleMovie)=>(!singleMovie.visible))){
    return (<div>No results, respectfully</div>)
  }

return (
  <div><ul>
    {
    props.movieList.filter(singleMovie => singleMovie.visible).map(
      (singleMovie, index) => (<ListItem singleMovie = {singleMovie}/>)
    )

    }
    </ul></div>
)


}

export default List;