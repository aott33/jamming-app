import './SearchBar.css';
import React from 'react';

export class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);

        this.state = {searchTerm : ''}
    }

    search() {
        this.props.onSearch(this.state.searchTerm);
    }

    handleTermChange (event) {
        this.setState({searchTerm:event.target.value})
    }

    render () {
        return (
            <div className="SearchBar">
                <input  placeholder="Enter A Song, Album, or Artist"
                        onChange={this.handleTermChange}/>
                <button className="SearchButton">SEARCH</button>
            </div>
        )
    }
}