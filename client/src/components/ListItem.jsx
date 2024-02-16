import React from 'react';
import List from './List.jsx'
const ListItem = (props) =>{

 return ( <div><li><h3>
  <span>{props.singleMovie.title}</span>
  <span><button type="submit" id="searchButton" onClick={(e)=>props.handleWatchPress(props,e)}>
  {props.singleMovie.watched ? "Mark as not watched" : "Mark as watched"}</button></span></h3>
  </li></div>)
}
export default ListItem