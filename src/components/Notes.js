import React from 'react'
import { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';


const Notes = () => {
    const context = useContext(noteContext);
    const { notes, setNotes } = context
  return (
    <div className="row my-2">
                <h3>Your Note</h3>
                {notes.map((note) => {
                    return <Noteitem note={note}/>
                })}

            </div>
  )
}

export default Notes