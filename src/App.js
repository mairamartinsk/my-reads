import React from "react";
import { Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import Bookshelf from "./Bookshelf";
import "./App.css";

class BooksApp extends React.Component {
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
