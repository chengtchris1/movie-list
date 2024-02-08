import React from 'react';
const ListItem = (props) =>{

 return ( <div><li>
  <h3>
  <span>{props.singleMovie.title}</span>
  <span>Toggle Watched</span></h3>
  </li></div>)
}
export default ListItem