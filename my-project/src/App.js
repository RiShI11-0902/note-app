import "./App.css";
import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Notelist from "./components/Notelist";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from 'react-redux';
import {addNotes, deleteNotes} from "./noteSlice"
function App() {
  const [notes, setNotes] = useState();

  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch()
  const note = useSelector(state => state.notesData.notes)

  const addNote = (text) => {
    const date = new Date();
    dispatch(addNotes({
      id: nanoid(),
      date: date.toLocaleDateString(),
      text: text
    }))
  };

  const deleteNote = (id) => {
    dispatch(deleteNotes(id))
  };

  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem("noteData")));
    console.log(note);
    setNotes(note)
  }, [note]);

  // useEffect(() => {
  //   localStorage.setItem("noteData", JSON.stringify(note));
  //   // console.log(notes);
  //   setNotes(note)
  // }, [note]);

  return (
    <>
      <div className="container  ">
        <Navbar/>
        <div className="container    w-full p-5">
          <Search handleSearchNote={setSearchText} />
          <Notelist
            notes={notes?.filter((note) =>
              note.text.toLowerCase().includes(searchText)
            )}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
          />
        </div>
      </div>
    </>
  );
}
export default App;
