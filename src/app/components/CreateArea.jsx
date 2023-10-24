import React, { useState } from "react";

function CreateArea(props) {
  const [inputNote, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="form-container">
      <form
        onSubmit={(event) => {
          props.onAdd(inputNote);
          event.preventDefault();
          setNote({
            title: "",
            content: "",
          });
        }}
      >
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={inputNote.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputNote.content}
          required
        />
        <button>ADD</button>
      </form>
    </div>
  );
}

export default CreateArea;
