import React from 'react'
import { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';


const Notes = () => { 

    const context = useContext(noteContext);
    const {notes, addNote} = context;
    
    return (

        <>
            <AddNote/>
            <div className="row my-2">

                <h3>Your Note</h3>
                {notes.map((note) => {
                    return <Noteitem key={note._id} note={note} />
                })}

            </div>
        </>
    )
}

export default Notes