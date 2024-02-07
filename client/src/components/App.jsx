import React from 'react';
import List from './List.jsx'
import ListItem from './ListItem.jsx'
import SearchView from './SearchView.jsx'

let {useState} = React;
//let [currentSearchTerm, setSearchTerm] = useState('Default Value Here'); would cause bugs if it was here;



//You cannot create a state (or more broadly, a hook) outside of an component
const App = (props) => {


  let [currentSearchTerm, setSearchTerm] = useState('Default Value Here');
  let [visibleMovies, setVisibleMovies] = useState(movies);

  var movies = [
    { title: 'Mean Girls' },
    { title: 'Hackers' },
    { title: 'The Grey' },
    { title: 'Sunshine' },
    { title: 'Ex Machina' },
  ];


  var handleTextChange = (event) => {
    setSearchTerm(event.target.value);
    //console.log(event.target.value);
    //console.log(currentSearchTerm);
  }

  var handleSubmitPress = (event) => {
    //Do something to search for the movie

    let filteredArray = currentSearchTerm === '' ? movies : movies.filter(
      (movieName)=>(movieName.title.toUpperCase().includes(currentSearchTerm))
      )
      setVisibleMovies(filteredArray);

    //console.log(filteredArray);
    //console.log(`Time to search for: ${currentSearchTerm}`);
  }



  return (
  //Give search the prop for currentSearch?
  <div>
    <SearchView value = {currentSearchTerm} onTextChange = {handleTextChange} onSubmitPress = {handleSubmitPress}/>
    <List movieList = {visibleMovies}/>
  </div>
)
};

export default App;