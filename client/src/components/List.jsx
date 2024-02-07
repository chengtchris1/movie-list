import React from 'react';
import ListItem from './ListItem.jsx'
const List = (props) => {
  return (
  <div><ul>
    {
    props.movieList.map(
      (singleMovie) => (<ListItem singleMovie = {singleMovie}/>)
    )
    }
    </ul></div>

  )


}

export default List;