import HomePage from './pages/HomePage';
import MoviesPage  from './pages/MoviesPage';
import PopularsPage from './pages/PopularsPage';
import SingleMovie from './pages/SingleMovie';
import Sidebar from './containers/Sidebar';
import Header from './containers/Header';
import TopMovies from './pages/TopMovies';
import TvShows from './pages/TvShows';
import SoonMovies from './pages/SoonMovies';
import LastMovies from './pages/LastMovies';

import { useState } from 'react';
import './assests/styles/main.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  
  
  const [ sidebarState, setSidebarState ] = useState(false);
  
  
  return (
    

    

      <Router>

      <div className="app">

          <Header sidebarState={sidebarState}  setSidebarState={setSidebarState} blin="blin" />

          <Sidebar isOpened={sidebarState}/>
      </div>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route exact path="/populars" component={PopularsPage} />
        <Route exact path="/movie/:id" component={SingleMovie} />
        <Route exact path="/lastmovies" component={LastMovies} />
        <Route exact path="/soonmovies" component={SoonMovies} />
        <Route exact path="/tvshows" component={TvShows} />
        <Route exact path="/topmovies" component={TopMovies} />
      </Switch>
    </Router>


    
  );
}

export default App;
