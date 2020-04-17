import React from 'react';
import './App.css';
import VideoList from './components/movie_list'
import NavBar from './components/navbar'

const APIKEY = '34bc13a6'
const APIURL = 'https://www.omdbapi.com/'

const fetchMovies = (search = '') => {
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

  searchMovies = (term = '') => {
    if (term.length < 3) return
    fetchMovies(term).then(res => {
      this.setState({
        movies: res.Search,
        totalCount: res.totalResults
      })
    })
  }

  componentDidMount() {
    this.searchMovies('back to the future')
  }

  render() {
    return (
      <React.Fragment>
        <NavBar onSearchTerm={this.searchMovies} />
        <div className="container">
          <h1>My Favorite Movies</h1>
          <VideoList movies={this.state.movies} />
        </div>
      </React.Fragment>
    );
  }

}

export default App;
