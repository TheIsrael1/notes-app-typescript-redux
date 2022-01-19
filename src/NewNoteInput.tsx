import React, { ChangeEvent } from 'react'

interface NewNoteInputProps {
    addNote(note: string): void;
}
const NewNoteInput:React.FC<NewNoteInputProps> = ({addNote}) => {

    const [note, setNote] = React.useState("")
    
    const updateNote = (event:ChangeEvent<HTMLInputElement>) =>{
        setNote(event.target.value)
    }
    
    const onAddNoteClick = () =>{
        addNote(note)
        setNote("")
    }
    return (
        <div>
        <input 
        value={note}
        type="text" 
        name='note' 
        placeholder='notes' 
        onChange={updateNote}
        />
        <button onClick={onAddNoteClick} >
         Add note
        </button>
        </div>
    )
}

export default NewNoteInput
