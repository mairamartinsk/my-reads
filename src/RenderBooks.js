import React from "react";
import "./App.css";

class RenderBooks extends React.Component {
  render() {
    const { books, onChange } = this.props;
    return (
      <ol className="books-grid">
        {books.map(eachBook => (
          <li>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    backgroundImage: `${eachBook.imageLinks.thumbnail}`
                  }}
                />
                <div className="book-shelf-changer">
                  <select>
                    <option value="move" disabled>
                      Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{eachBook.title}</div>
              <div className="book-authors">{eachBook.authors}</div>
            </div>
          </li>
        ))}
      </ol>
    );
  }
}

export default RenderBooks;
