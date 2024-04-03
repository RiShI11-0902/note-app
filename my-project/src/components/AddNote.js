import React, { useState } from "react";

export default function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = (event) => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <div className="">
      <div
        className="Noteadd  mt-5 border-2 sm:mt-5 md:mt-0   md:w-80 w-30  xl:mt-0 2xl:mt-0 lg:mt-0 rounded-3xl border-black p-4 bg-gradient-to-r from-cyan-500 to-blue-100 shadow-md shadow-black">
        <textarea
          className="resize-none border rounded-md w-full px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
          onChange={handleChange}
          rows={10}
          placeholder="Type to add Note"
          value={noteText}
        ></textarea>
        <div className="note-footer flex items-center justify-between mt-4">
          <p>
            {" "}
            <span className="font-bold">
              {characterLimit - noteText.length}
            </span>{" "}
            Remaining
          </p>
          <button className="font-extrabold" onClick={handleSaveClick}>
            ADD NOTE
          </button>
        </div>
      </div>
    </div>
  );
}



// placeholder:text-black placeholder:font-semibold h-44 focus:outline-none p-2  bg-gradient-to-r from-cyan-500 to-blue-100 text-xl