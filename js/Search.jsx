// @flow

import React, { Component } from 'react';
import ShowCard from './ShowCard';
import Header from './Header';

class Search extends Component {
  // It uses class properties babel plugin to suport this kind of declarations,
  // we avoid the constructor boilerplate
  state = {
    searchTerm: '',
  };

  props: {
    shows: Array<Show>,
  };

  // Arrow functions doesn't create new context, they use their upper context, otherwise we need to bind it
  handleSearchTerChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
    this.setState({ searchTerm: event.target.value }); // We do it like this to able React to notice changes
  };

  render() {
    return (
      <div className="search">
        <Header searchTerm={this.state.searchTerm} showSearch handleSearchTerChange={this.handleSearchTerChange} />
        <div>
          {this.props.shows
            .filter(
              show =>
                `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0,
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
