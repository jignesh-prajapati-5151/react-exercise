import BookList from "./BookList";
import AddNewBook from "./AddNewBook";
import { useState } from "react";

const Exercise2 = () => {
  const [books, updateBooks] = useState([]);

  const handleSubmitFun = (val) => {
    updateBooks([...books, val]);
  };

  return (
    <>
      <AddNewBook handleSubmit={handleSubmitFun} />
      <BookList books={books} />
    </>
  );
};

export default Exercise2;
