import React, { useState } from "react";
import AddNote from "./AddNote";
import Note from "./Note";
function Notelist({ notes, handleAddNote, handleDeleteNote, category }) {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <button
        onClick={() => setSelected(!selected)}
        className="w-fit mx-auto ml-40 p-2 border-blue-300 rounded-tr-lg border-2 rounded-bl-lg mt-5 hover:bg-blue-600 hover:text-white hover:font-bold"
      >
        {selected ? "close" : "Add Note"} 
      </button>
      <div className="md:flex md:flex-row md:space-x-10 md:justify-evenly">
        {selected ? <AddNote handleAddNote={handleAddNote} /> : " "}

        <div className={`grid ${selected ? "2xl:grid-cols-2 md:grid-cols-1 2xl:w-[40rem]" : "md:grid-cols-4 w-full"}    mx-auto mt-20   md:gap-1`}>
          {notes?.map((note) => {
            return (
              <div key={note.id}>
                <Note
                  id={note.id}
                  text={note.text}
                  date={note.date}
                  handleDeleteNote={handleDeleteNote}
                  category={note.category}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Notelist;
