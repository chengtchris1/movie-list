import React, { useState } from 'react';
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
  for (let movie of movies) {
    movie.watched = false;
    movie.visible = true;
  }

  let [movieList, setMovieList] = useState([]);
  let [searchTerm, setSearchTerm] = useState('');
  let [addMovieTerm, setAddMovieTerm] = useState('The ROOM');


  let [showOnlyWatched, setShowOnlyWatched] = useState(false);

  /*
  Adding the watched/toWatchToggle
  */

  var handleSearchTextChange = (event) => {
    setSearchTerm(event.target.value);
  }

  var handleListTextChange = (event) => {
    setAddMovieTerm(event.target.value)
  }

  var handleToggleWatchedPressed = (event) => {
    setAddMovieTerm(event.target.value)
  }

  var handleWatchPress = ({singleMovie,index}, event) => {
    console.log(event.target)
    const updatedListing = movieList.map((item, i) => {
      //Tell List.JX to change button text.
      if (index === i) {
        var updatedStatus = item;
        item.watched = !item.watched;
        return updatedStatus;
      } else {
        return item;
      }

    })
    console.log(updatedListing);
    setMovieList(updatedListing);
    console.log(`${singleMovie.title} stored on index ${index}, with watched set to ${singleMovie.watched}`);
    return;
  }

  var handleWatchViewSwitch = () => {
    setShowOnlyWatched(!showOnlyWatched)
  }

  var handleInsertMoviePress = (event) => {
    if (addMovieTerm === "") {
      alert("Movie name cannot be blank")
      return;
    }
    setShowOnlyWatched(false);

    if (movieList.length === 0) {
      setMovieList([{ title: addMovieTerm, watched: false, visible: true }])
    } else {
      let updatedVisability = [...movieList];
      for (let item of updatedVisability) {
        item.visible = true;
      }
      //Standard way of actually doing it
      setMovieList([...updatedVisability, { title: addMovieTerm, watched: false, visible: true }])
    }
    setSearchTerm("");
  }


  //Event not needed because child not passing any info
  var handleSubmitPress = () => {
    let updatedList = [...movieList];
    if (searchTerm === '') {
      for (let movie of updatedList) {
        movie.visible = true
      }
    } else {
      for (let movie of updatedList) {
        console.log(movie)
        if (movie.title.toUpperCase().includes(searchTerm.toUpperCase())) {
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
      <AddMovieView addMovieTerm={addMovieTerm} handleListTextChange={handleListTextChange} handleInsertMoviePress={handleInsertMoviePress} />
      <SearchView searchTerm={searchTerm} handleSearchTextChange={handleSearchTextChange} onSubmitPress={handleSubmitPress} />
      <ToggleWatchedView showOnlyWatched={showOnlyWatched} handleWatchViewSwitch={handleWatchViewSwitch} />
      <List movieList={movieList} handleWatchPress={handleWatchPress} showOnlyWatched={showOnlyWatched} />
    </div>
  )
};

export default App;