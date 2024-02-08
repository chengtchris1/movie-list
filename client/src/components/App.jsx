import React, {useState} from 'react';
import List from './List.jsx'
import ListItem from './ListItem.jsx'
import SearchView from './SearchView.jsx'
import AddMovieView from './AddMovieView.jsx'
import ToggleWatchedView from './ToggleWatchedView.jsx'


//remove "current",
//prop name should be the same.

//let [currentSearchTerm, setSearchTerm] = useState('Default Value Here'); would cause bugs if it was here;
//You cannot create a state (or more broadly, a hook) outside of an component
const App = (props) => {
  let movies = [
    { title: 'Mean Girls' },
    { title: 'Hackers' },
    { title: 'The Grey' },
    { title: 'Sunshine' },
    { title: 'Ex Machina' },
  ];
  for(let movie of movies){
    movie.watched = false;
    movie.visible = true;
  }

  let [movieList, setMovieList] = useState([]);
  let [searchTerm, setSearchTerm] = useState('');
  let [addMovieTerm, setAddMovieTerm] = useState('The ROOM');

  var handleSearchTextChange = (event) => {
    setSearchTerm(event.target.value);
  }

  var handleListTextChange = (event) => {
    setAddMovieTerm(event.target.value)
  }

  var handleInsertMoviePress = (event) => {
    if(addMovieTerm === ""){
      alert("Movie name cannot be blank")
      return;
   }

  if(movieList.length === 0){
    setMovieList([{title: addMovieTerm, watched: false, visible: true}])
    } else {
    let updatedVisability = [...movieList];
      for(let item of updatedVisability){
        item.visible = true;
      }
      setMovieList([...updatedVisability, {title: addMovieTerm, watched: false, visible: true}]) //Standard way of actually doing it
    }


    setSearchTerm("");
  }


  //Event not needed because child not passing any info
  var handleSubmitPress = () => {

    let updatedList = [...movieList];
    if(searchTerm === ''){
      for(let movie of updatedList){
        movie.visible = true
      }
    } else {
      for(let movie of updatedList){
        console.log(movie)
        if(movie.title.toUpperCase().includes(searchTerm.toUpperCase())){
          movie.visible = true
        } else {
          movie.visible = false;
        }
      }
    }
    console.log(movieList);
    console.log(updatedList);
    setMovieList([...updatedList]);


  }

  return (
  //Give search the prop for currentSearch?
  //Full movie list passed for init render.
  <div>
    <AddMovieView addMovieTerm = {addMovieTerm} handleListTextChange = {handleListTextChange} handleInsertMoviePress = {handleInsertMoviePress}/>
    <SearchView searchTerm = {searchTerm} handleSearchTextChange = {handleSearchTextChange} onSubmitPress = {handleSubmitPress}/>
    <ToggleWatchedView/>
    <List movieList = {movieList}/>

  </div>
)
};

export default App;