import React from 'react';
const ListItem = (props) =>{

 return ( <div><li>
  <h3>
  <span>{props.singleMovie.title}</span>
  <span><button>Toggle Watched</button></span></h3>
  </li></div>)
}
export default ListItem