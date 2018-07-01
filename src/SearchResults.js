import React from "react";

class SearchResults extends React.Component {
  render() {
    const { books, results, query, onChange } = this.props;
    let displayResults = [];

    if (results.length > 0 && query !== "") {
      results.forEach(result => {
        const matchBook = books.filter(book => book.id === result.id);
        if (matchBook.length > 0) {
          displayResults.push(...matchBook);
        } else {
          displayResults.push(result);
        }
      });
    }

    return (
      <ol className="books-grid">
        {displayResults.map(eachBook => (
          <li key={eachBook.id}>
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

export default SearchResults;
