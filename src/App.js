import React from 'react';
import './App.css';
import VideoList from './components/movie_list'
import NavBar from './components/navbar'

const APIKEY = '34bc13a6'
const APIURL = 'http://www.omdbapi.com/'

const fetchMovies = (search = 'back to the future') => {
  return fetch(APIURL + `?s=${search}&apikey=` + APIKEY).then(res => res.json())
}

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      totalCount: 0
    }
  }

  componentDidMount() {
    fetchMovies().then(res => {
      this.setState({
        movies: res.Search,
        totalCount: res.totalResults
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container">
          <h1>My Favorite Movies</h1>
          <VideoList movies={this.state.movies} />
        </div>
      </React.Fragment>
    );
  }

}

export default App;
