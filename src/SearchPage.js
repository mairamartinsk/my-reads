import React from "react";
import { Link } from "react-router-dom";
import SearchResults from "./SearchResults";

class SearchPage extends React.Component {
  clearQueryInput() {
    this.setState({
      query: ""
    });
  }

  render() {
    const { state, update, search } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" onClick={this.clearQueryInput}>
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={state.query}
              onChange={event => search(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <SearchResults
            books={state.books}
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
