import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: []
}

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNotes: (state, action) => {
      state.notes.push(action.payload);
    },
    deleteNotes: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

export const { addNotes, deleteNotes } = noteSlice.actions;
export default noteSlice.reducer;
