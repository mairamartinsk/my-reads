import React from "react";
import { Link } from "react-router-dom";
import SearchResults from "./SearchResults";

class SearchPage extends React.Component {
  // Simple method to clear input once user quits search page
  clearQueryInput() {
    this.setState({
      query: ""
    });
  }

  render() {
    // Destructure props object
    const { state, update, search } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" onClick={this.clearQueryInput}>
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/* Listen to input changes in order to set state. Afterwards state sets input value */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={state.query}
              onChange={event => search(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {/* Render SearchResults component, passing props */}
          <SearchResults
            results={state.results}
            query={state.query}
            update={update}
          />
        </div>
      </div>
    );
  }
}

export default SearchPage;
