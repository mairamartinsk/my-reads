import React from "react";
import { Link } from "react-router-dom";
import RenderBooks from "./RenderBooks";

class Bookshelf extends React.Component {
  render() {
    const { state, update } = this.props;

    let booksReading = state.books.filter(
      book => book.shelf === "currentlyReading"
    );
    let booksWantToRead = state.books.filter(
      book => book.shelf === "wantToRead"
    );
    let booksRead = state.books.filter(book => book.shelf === "read");

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {booksReading.length > 0 && (
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <RenderBooks books={booksReading} update={update} />
                </div>
              </div>
            )}
          </div>
          <div>
            {booksWantToRead.length > 0 && (
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <RenderBooks books={booksWantToRead} update={update} />
                </div>
              </div>
            )}
          </div>
          <div>
            {booksRead.length > 0 && (
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <RenderBooks books={booksRead} update={update} />
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <Link to="/search" className="open-search search-link">
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
