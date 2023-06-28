import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {

    const host = "http://localhost:5000"
    const notesIntial = []
    const [notes, setNotes] = useState(notesIntial);

    //Get all the Notes
    //Add a Note
    const getNotes =async (title, description, tag) => {
        //todo: api call
        
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5MWY2MGE0OGI0MGI3NTI3YjQ4MzhkIn0sImlhdCI6MTY4NzU0NTMyMn0.R4TAOEwckxr9AxAZ5bzAeRz6j-rRVLkIE6IGHhNV7uw"
            },
        });
        const json =  await response.json();
        console.log(json);
        setNotes(json);

    }

    //Add a Note
    const addNote =async (title, description, tag) => {
        //todo: api call
        
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5MWY2MGE0OGI0MGI3NTI3YjQ4MzhkIn0sImlhdCI6MTY4NzU0NTMyMn0.R4TAOEwckxr9AxAZ5bzAeRz6j-rRVLkIE6IGHhNV7uw"
            },
            body: JSON.stringify({title, description, tag}), // body data type must match "Content-Type" header
        });

        console.log("Adding a new note")
        const note = {
            "_id": "649add95be63b5ee09a3e533410",
            "user": "6491f60a48b40b7527b4838d",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-06-27T13:00:11.754Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }

    //Delete a Note
    const deleteNote = (id) => {
        //todo: api call

        //logic of delete note
        console.log("deleting the notes " + id)
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)

    }

    //Edit a Note
    const editNote = async (id, title, description, tag) => {
        //api call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5MWY2MGE0OGI0MGI3NTI3YjQ4MzhkIn0sImlhdCI6MTY4NzU0NTMyMn0.R4TAOEwckxr9AxAZ5bzAeRz6j-rRVLkIE6IGHhNV7uw"
            },
            body: JSON.stringify({title, description, tag}), // body data type must match "Content-Type" header
        });

        //Logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];

            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }

        }

    }


    return (
        <NoteContext.Provider value={{ notes,getNotes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;