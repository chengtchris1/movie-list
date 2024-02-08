import React, {useState} from 'react';
import List from './List.jsx'
import ListItem from './ListItem.jsx'
import SearchView from './SearchView.jsx'
import AddMovieView from './AddMovieView.jsx'


//remove "current",
//prop name should be the same.

//let [currentSearchTerm, setSearchTerm] = useState('Default Value Here'); would cause bugs if it was here;
//You cannot create a state (or more broadly, a hook) outside of an component
const App = (props) => {

  var movies = [
    { title: 'Mean Girls' },
    { title: 'Hackers' },
    { title: 'The Grey' },
    { title: 'Sunshine' },
    { title: 'Ex Machina' },
  ];


  let [fullMovieList, setFullMovieList] = useState(movies);
  let [searchTerm, setSearchTerm] = useState('');
  let [addMovieTerm, setAddMovieTerm] = useState('The ROOM');
  let [visibleMovies, setVisibleMovies] = useState(fullMovieList);

  var handleSearchTextChange = (event) => {
    setSearchTerm(event.target.value);
    //console.log(event.target.value);
    //console.log(searchTerm);
  }

  var handleListTextChange = (event) => {
    setAddMovieTerm(event.target.value)
  }

  var handleInsertMoviePress = (event) => {
    if(addMovieTerm === ""){
      alert("Movie name cannot be blank")
      return;
   }
    console.log("Time to add! " + addMovieTerm);
    //wrong way which may cause unexpected results
    //let newMovieList = [...fullMovieList]; //copy the state of full movie list
    //newMovieList.push({title: addMovieTerm});
    //console.log(newMovieList);

    //setAddMovieTerm(""); // needed for it to update properly.
    //setFullMovieList(newMovieList);
    setSearchTerm("");
    setFullMovieList([...fullMovieList, {title: addMovieTerm}]) //Standard way of actually doing it

    //works
    setVisibleMovies([...fullMovieList, {title: addMovieTerm}]);
    //doesn't work;
    //setVisibleMovies([...fullMovieList]);
  }


  //Event not needed because child not passing any info
  var handleSubmitPress = () => {
    //Do something to search for the movie
    let filteredArray = searchTerm === '' ? [...fullMovieList] : [...fullMovieList].filter(
      (movieName)=>(movieName.title.toUpperCase().includes(searchTerm.toUpperCase()))
      )
    //filteredArray = filteredArray.length === 0 ? [[{Title: "No results, respectfully"}]] : filteredArray
    console.log(filteredArray);
    setVisibleMovies(filteredArray);
    //console.log(`Time to search for: ${currentSearchTerm}`);
  }

  return (
  //Give search the prop for currentSearch?
  //Full movie list passed for init render.
  <div>
    <AddMovieView addMovieTerm = {addMovieTerm} handleListTextChange = {handleListTextChange} handleInsertMoviePress = {handleInsertMoviePress}/>
    <SearchView searchTerm = {searchTerm} handleSearchTextChange = {handleSearchTextChange} onSubmitPress = {handleSubmitPress}/>
    <List visibleMovies = {visibleMovies} fullMovieList = {fullMovieList}/>
  </div>
)
};

export default App;