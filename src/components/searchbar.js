import React from 'react'

export default class searchBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            term: 'la dolce vita'
        }
    }

    searchChange = (event) => {
        this.setState({
            term: event.target.value
        })
    }

    searchClicked = (event) => {
        event.preventDefault()
        this.props.onSearchTerm(this.state.term)
    }

    render() {
        return (
            (
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2"
                        type="search" value={this.state.term}
                        placeholder="Search" aria-label="Search"
                        onChange={this.searchChange} />
                    <button onClick={this.searchClicked} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            )
        )
    }
}