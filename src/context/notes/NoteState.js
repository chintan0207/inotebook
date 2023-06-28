import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) =>{

    const notesIntial = [
        {
          "_id": "6497ef8792d25a11487eff5ad1",
          "user": "6491f60a48b40b7527b4838d",
          "title": "React Js",
          "description": "Please access the playlist",
          "tag": "Youtube",
          "date": "2023-06-25T07:40:55.050Z",
          "__v": 0
        },
        {
            "_id": "649add5bes63b5ee09a3e53342",
            "user": "6491f60a48b40b7527b4838d",
            "title": "JavaScript",
            "description": "Please access the playlist",
            "tag": "Youtube",
            "date": "2023-06-27T13:00:11.754Z",
            "__v": 0
          },
          {
            "_id": "6497ef8792d25as11487ef5ad3",
            "user": "6491f60a48b40b7527b4838d",
            "title": "React Js",
            "description": "Please access the playlist",
            "tag": "Youtube",
            "date": "2023-06-25T07:40:55.050Z",
            "__v": 0
          },
          {
              "_id": "649add5bev63b5ee09a3e53344",
              "user": "6491f60a48b40b7527b4838d",
              "title": "JavaScript",
              "description": "Please access the playlist",
              "tag": "Youtube",
              "date": "2023-06-27T13:00:11.754Z",
              "__v": 0
            },
            {
                "_id": "6497ef879r2d25a11487ef5ad5",
                "user": "6491f60a48b40b7527b4838d",
                "title": "React Js",
                "description": "Please access the playlist",
                "tag": "Youtube",
                "date": "2023-06-25T07:40:55.050Z",
                "__v": 0
              },
              {
                  "_id": "649add5dbe63b5ee09a3e53346",
                  "user": "6491f60a48b40b7527b4838d",
                  "title": "JavaScript",
                  "description": "Please access the playlist",
                  "tag": "Youtube",
                  "date": "2023-06-27T13:00:11.754Z",
                  "__v": 0
                },
                {
                    "_id": "6497e4f8792d25a11487ef5ad7",
                    "user": "6491f60a48b40b7527b4838d",
                    "title": "React Js",
                    "description": "Please access the playlist",
                    "tag": "Youtube",
                    "date": "2023-06-25T07:40:55.050Z",
                    "__v": 0
                  },
                  {
                      "_id": "649ad7d5be63b5ee09a3e53348",
                      "user": "6491f60a48b40b7527b4838d",
                      "title": "JavaScript",
                      "description": "Please access the playlist",
                      "tag": "Youtube",
                      "date": "2023-06-27T13:00:11.754Z",
                      "__v": 0
                    },
                    {
                        "_id": "6497ef88792d25a11487ef5ad9",
                        "user": "6491f60a48b40b7527b4838d",
                        "title": "React Js",
                        "description": "Please access the playlist",
                        "tag": "Youtube",
                        "date": "2023-06-25T07:40:55.050Z",
                        "__v": 0
                      },
                      {
                          "_id": "649add95be63b5ee09a3e533410",
                          "user": "6491f60a48b40b7527b4838d",
                          "title": "JavaScript",
                          "description": "Please access the playlist",
                          "tag": "Youtube",
                          "date": "2023-06-27T13:00:11.754Z",
                          "__v": 0
                        }
      ]

      const [notes, setNotes] = useState(notesIntial);

      //Add a Note
      const addNote = (title, description, tag) =>{
        //todo: api call

       console.log("Adding a new note")
       const note =  {
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
      const deleteNote = (id) =>{
        //todo: api call
        console.log("deleting the notes " + id )
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)

      }

      //Edit a Note
      const editNote = (id, title, description, tag) =>{

      }


    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
        {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;