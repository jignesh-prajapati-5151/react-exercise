import { useState } from "react";
const BookList = ({ books }) => {
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const handleSortOptionChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortingFun = (a, b) => {
    if (sortOption) {
      if (a > b) {
        return sortOption === "asc" ? 1 : -1;
      } else if (b > a) {
        return sortOption === "asc" ? -1 : 1;
      }
    }
    return 0;
  };

  const filteredBooks = books.filter((book) => {
    book.toLowerCase().includes(search.toLowerCase());
    if (search.length) return book.toLowerCase().includes(search.toLowerCase());
    else return book;
  });

  filteredBooks.sort(sortingFun);

  return (
    <div>
      <h2>Books List</h2>
      <input
        type="text"
        value={search}
        onChange={searchHandler}
        placeholder="Search"
      />
      &nbsp;
      <select value={sortOption} onChange={handleSortOptionChange}>
        <option value="">--</option>
        <option value="asc">ASC</option>
        <option value="desc">DSC</option>
      </select>
      <ul>
        {filteredBooks.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
