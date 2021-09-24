import React from 'react';
import './App.css';
import {MovieList} from "./components/movies/MovieList";
import {MovieProvider} from "./contexts/MovieContext";
import {AddMovie} from "./components/movies/AddMovie";


function App() {
  return (
    <div>
      <MovieProvider>
          <AddMovie />
          <MovieList />
      </MovieProvider>
    </div>
  );
}

export default App;
