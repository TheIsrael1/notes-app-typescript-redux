import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from './actions';
import NewNoteInput from './NewNoteInput';
import { NotesState } from './notesReducer';

function App() {

  const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes)
  //second type parameter is the return type
  
  const dispatch = useDispatch()

  const onAddNote = (note: string) => {
    dispatch(addNote(note))
  }
  
  return (
   <>
  <NewNoteInput addNote={onAddNote}/>
   <hr />
    <ul>
    {notes.map((n, idx) => (
      <li key={idx}>{n}</li>
    ))}
    </ul>     
   </>
  );
}

export default App;
