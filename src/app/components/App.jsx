import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [item, setItem] = useState([
    {
      title: "Default Item 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque arcu et justo luctus egestas. Donec rutrum tincidunt lorem, at sagittis enim feugiat et.",
    },
    {
      title: "Default Item 2",
      content:
        "Donec eu ultricies tellus, et eleifend diam. Vivamus tincidunt, massa eget sollicitudin condimentum, lacus ante efficitur leo, et tincidunt libero ipsum ac mauris.",
    },
    {
      title: "Default Item 3",
      content:
        "Vivamus eros sapien, cursus ut euismod non, ultrices at metus. Ut ultrices sem libero. Aliquam auctor quam ut orci mollis, id sollicitudin mi tempor. Vestibulum nec ullamcorper tortor.",
    },
  ]);

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
      <div className="main-container">
        <div className="notes-container">
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
