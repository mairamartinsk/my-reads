import React from "react";
import { Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import Bookshelf from "./Bookshelf";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    query: "",
    results: [],
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState({ books: data });
    });
  }

  searchBooks = query => {
    this.setState({ query: query });

    if (query.length > 0) {
      BooksAPI.search(query).then(data => {
        this.setState({
          results: data
        });
      });
    } else {
      while (this.state.results.length > 0) {
        this.state.results.pop();
      }
      this.setState(() => ({ query: "" }));
    }
  };
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={Bookshelf} />
        <Route path="/search" component={SearchPage} />
      </div>
    );
  }
}

export default BooksApp;
