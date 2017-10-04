// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';
import { setSearchTerm } from './actionCreators';

class Landing extends Component {
  // It uses class properties babel plugin to suport this kind of declarations,
  // we avoid the constructor boilerplate
  props: {
    searchTerm: string,
    handleSerchTermChange: Function,
    history: RouterHistory,
  };
  goToSearch = (event: SyntheticEvent) => {
    event.preventDefault();
    this.props.history.push('/search');
  };
  render() {
    return (
      <div className="landing">
        <h1>svideo</h1>
        <form onSubmit={this.goToSearch}>
          <input
            onChange={this.props.handleSerchTermChange}
            value={this.props.searchTerm}
            type="text"
            placeholder="Search"
          />
        </form>
        <Link to="/search">or Browse All</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
  handleSerchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  },
});

// Firs function pull the state and the second one the actual component
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
