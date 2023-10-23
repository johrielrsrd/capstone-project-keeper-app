import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [item, setItem] = useState([]);

  function addNote(inputNote) {
    setItem((prevValue) => {
      return [...prevValue, inputNote];
    });
  }

  function deleteNote(id) {
    setItem((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {item.map((noteItem, noteKey) => {
        return (
          <Note
            key={noteKey}
            id={noteKey}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
