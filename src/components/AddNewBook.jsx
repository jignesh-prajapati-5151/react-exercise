import { useState } from "react";

const AddNewBook = ({ handleSubmit }) => {
  const [title, setTitle] = useState("");

  const submitHandler = () => {
    if (title.trim() !== "") {
      handleSubmit(title);
      setTitle("");
    }
  };
  return (
    <div>
      <input
        type={"text"}
        placeholder={"Add book"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" onClick={submitHandler}>
        Submit
      </button>
    </div>
  );
};

export default AddNewBook;
