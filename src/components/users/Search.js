import React, { useState, useContext } from "react";
import { Context } from "../../context";

function Search(props) {
  const [text, setText] = useState("");

  const context = useContext(Context);

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      context.setAlert("Please enter something", "light");
    } else {
      context.searchUsers(text);
      setText("");
    }
  };

  const onClick = () => {
    context.clearSearch();
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Please type to search..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {context.users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={onClick}>
          Clear
        </button>
      )}
    </div>
  );
}

export default Search;
