import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) =>{

    const notesIntial = [
        {
          "_id": "6497ef8792d25a11487ef5ad",
          "user": "6491f60a48b40b7527b4838d",
          "title": "React Js",
          "description": "Please access the playlist",
          "tag": "Youtube",
          "date": "2023-06-25T07:40:55.050Z",
          "__v": 0
        },
        {
            "_id": "649add5be63b5ee09a3e5334",
            "user": "6491f60a48b40b7527b4838d",
            "title": "JavaScript",
            "description": "Please access the playlist",
            "tag": "Youtube",
            "date": "2023-06-27T13:00:11.754Z",
            "__v": 0
          },
          {
            "_id": "6497ef8792d25a11487ef5ad",
            "user": "6491f60a48b40b7527b4838d",
            "title": "React Js",
            "description": "Please access the playlist",
            "tag": "Youtube",
            "date": "2023-06-25T07:40:55.050Z",
            "__v": 0
          },
          {
              "_id": "649add5be63b5ee09a3e5334",
              "user": "6491f60a48b40b7527b4838d",
              "title": "JavaScript",
              "description": "Please access the playlist",
              "tag": "Youtube",
              "date": "2023-06-27T13:00:11.754Z",
              "__v": 0
            },
            {
                "_id": "6497ef8792d25a11487ef5ad",
                "user": "6491f60a48b40b7527b4838d",
                "title": "React Js",
                "description": "Please access the playlist",
                "tag": "Youtube",
                "date": "2023-06-25T07:40:55.050Z",
                "__v": 0
              },
              {
                  "_id": "649add5be63b5ee09a3e5334",
                  "user": "6491f60a48b40b7527b4838d",
                  "title": "JavaScript",
                  "description": "Please access the playlist",
                  "tag": "Youtube",
                  "date": "2023-06-27T13:00:11.754Z",
                  "__v": 0
                },
                {
                    "_id": "6497ef8792d25a11487ef5ad",
                    "user": "6491f60a48b40b7527b4838d",
                    "title": "React Js",
                    "description": "Please access the playlist",
                    "tag": "Youtube",
                    "date": "2023-06-25T07:40:55.050Z",
                    "__v": 0
                  },
                  {
                      "_id": "649add5be63b5ee09a3e5334",
                      "user": "6491f60a48b40b7527b4838d",
                      "title": "JavaScript",
                      "description": "Please access the playlist",
                      "tag": "Youtube",
                      "date": "2023-06-27T13:00:11.754Z",
                      "__v": 0
                    },
                    {
                        "_id": "6497ef8792d25a11487ef5ad",
                        "user": "6491f60a48b40b7527b4838d",
                        "title": "React Js",
                        "description": "Please access the playlist",
                        "tag": "Youtube",
                        "date": "2023-06-25T07:40:55.050Z",
                        "__v": 0
                      },
                      {
                          "_id": "649add5be63b5ee09a3e5334",
                          "user": "6491f60a48b40b7527b4838d",
                          "title": "JavaScript",
                          "description": "Please access the playlist",
                          "tag": "Youtube",
                          "date": "2023-06-27T13:00:11.754Z",
                          "__v": 0
                        }
      ]

      const [notes, setNotes] = useState(notesIntial);

    return(
        <NoteContext.Provider value={{notes,setNotes}}>
        {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;