import React from 'react';
import ListItem from './ListItem.jsx'
const List = (props) => {
  if (props.movieList.length === 0) {
    return (<div>No movies added, respectfully</div>)
  }
  if (props.movieList.every((singleMovie) => (!singleMovie.visible))) {
    return (<div>No results, respectfully</div>)
  }

  return (
    <div>
      <ul>
        {

        props.movieList.map((singleMovie, index)=>{
          let temp = singleMovie
          temp.id = index
          return temp
          }).filter(
          (singleMovie) => singleMovie.visible
          ).filter(
            (singleMovie)=>{
          if(props.showOnlyWatched){
            return singleMovie.watched;
          } else {
            return !singleMovie.watched;
          }
        }).map(
          (singleMovie) => (<ListItem singleMovie={singleMovie} key={singleMovie.id} index={singleMovie.id} handleWatchPress={props.handleWatchPress} />)
        )
        }
      </ul>
    </div>
  )


}

export default List;